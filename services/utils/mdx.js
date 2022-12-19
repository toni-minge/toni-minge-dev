import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

const projectsPath = path.join(process.cwd(), 'data/_projects')
const articlesPath = path.join(process.cwd(), 'data/_blog')

export async function getBlogSlug() {
  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getProjectSlug() {
  const paths = sync(`${projectsPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}


export async function getBlogFromSlug(slug) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  }
}

export async function getProjectFromSlug(slug) {
  const articleDir = path.join(projectsPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  }
}

export async function getAllPosts() {
  const articles = fs.readdirSync(articlesPath)

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data/_blog', articleSlug),
      'utf-8'
    )

    const { data } = matter(source)

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ]
  }, [])
}

export async function getAllProjects() {
  const articles = fs.readdirSync(projectsPath)

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data/_projects', articleSlug),
      'utf-8'
    )

    const { data } = matter(source)

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ]
  }, [])
}
