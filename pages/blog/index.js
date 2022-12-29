import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import Layout from '../../components/layout/layout'
import ArticlesGrid from '../../components/layout/articles-grid'
import ClientSection from '../../components/layout/client-section'
import ContactSection from '../../components/layout/contact-section'
import dayjs from 'dayjs'
import { getAllPosts } from '../../services/utils/mdx'

export default function BlogPage({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        <Layout>
          <div className="">
            <h1 className="mb-4 text-gradient block leading-loose">My Thoughts on Things</h1>
          </div>
          <ArticlesGrid articles={posts} />
          <div className="mt-24">
            <ClientSection />
          </div>
          <ContactSection />
        </Layout>
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const articles = await getAllPosts()

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
