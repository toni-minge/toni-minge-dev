import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dayjs from 'dayjs'
import { getAllProjects } from '../../services/utils/mdx'

export default function ProjectPage({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        {posts.map((frontMatter) => {
          return (
            <Link href={`/projects/${frontMatter.slug}`} passHref>
              <div>
                <h1 className="title">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  {frontMatter.readingTime}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const articles = await getAllProjects()

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}
