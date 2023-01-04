import dayjs from 'dayjs'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getBlogFromSlug, getBlogSlug } from '../../services/utils/mdx'

import Layout from '../../components/layout/layout'
import BlurImage from '../../components/layout/blur-image'

const H1 = ({children}) => {
  return (<h1 className="mb-2" id={children[1]}>{children}</h1>)
}

const H2 = ({children}) => {
  return (<h2 className="mb-2" id={children[1]}>{children}</h2>)
}

const H3 = ({children}) => {
  return (<h3 className="mb-2" id={children[1]}>{children}</h3>)
}

const P = ({children}) => {
  return (<p className="mb-8 font-roman text-tmlight">{children}</p>)
}

const Ol = ({children}) => {
  return (<ol className="ml-8 block list-disc">{children}</ol>)
}

const Pre = ({children}) => {
  return (<pre className="overflow-y-scroll mb-8">{children}</pre>)
}

const A = ({children, href}) => {
  return (<a href={href} className="underline">{children}</a>)
}



export default function Blog({ post: { source, frontmatter, headings } }) {

  const { title, cover_image } = frontmatter

  const regXHeader = /# {1,6}.+/g
  const cleaned_headings = headings.map((heading) => {
    if (heading.match(regXHeader) !== null) {
      return {
        level: heading.split("#").length - 3,
        content: heading.replace(/# /g, "").replace(/#/g, "")
      }
    }
  }).filter(h => h !== undefined)


  const image = {
    src: cover_image,
    base64: false,
    classOverrides: "w-full",
    alt: title,
    layout: "cover",
    width: "1280",
    height: "720",
    style: {
      width: '100%',
      height: 'auto',
    },
  }

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    ol: Ol,
    pre: Pre,
    a: A
  }

  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>

      <Head>
        <title>{frontmatter.title} | Toni Minge Development</title>
        <meta name="description" content={frontmatter.excerpt} />
        <meta property="og:image" content={`https://toni-minge-dev.vercel.app${frontmatter.cover_image}`} />
        <meta property="og:image:width" content={frontmatter.cover_image_width} />
        <meta property="og:image:height" content={frontmatter.cover_image_height} />
      </Head>

      <Layout>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <div className="sticky top-4 leading-loose">
              <h3 className="font-roman">Table of Contents </h3>
              {cleaned_headings.map((heading, i) =>
                <a href={`#${heading.content}`}>
                  <p
                    className="text-tmlight hover:white cursour-pointer hover:bg-tmlight/20 rounded px-2 "
                    style={{marginLeft: `${heading.level * 10}px`}}>
                      • &nbsp;{heading.content}
                  </p>
                </a>
              )}
            </div>

          </div>
          <div className="col-span-7 flex w-full flex-col gap-8">
            <div className="w-full">
              <BlurImage {...image} />
            </div>
            <div>
              <h1 className="article-title text-gradient">{frontmatter.title}</h1>
              <p className="publish-date">
                {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} • {' '}
                {frontmatter.readingTime}
              </p>
            </div>
            <div className="content  leading-loose">
              <MDXRemote {...source} components={components} />
            </div>
          </div>
        </div>

      </Layout>

    </React.Fragment>
  )
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getBlogSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}


export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getBlogFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  const regXHeader = /#{1,6}.+/g
  const headings = content.match(regXHeader)

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
        headings
      },
    },
  }
}
