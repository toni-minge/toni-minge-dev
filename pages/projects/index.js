import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dayjs from 'dayjs'
import { getAllProjects } from '../../services/utils/mdx'

import Layout from '../../components/layout/layout'
import ProjectsGrid from '../../components/layout/selected-projects'

import ClientSection from '../../components/layout/client-section'
import ContactSection from '../../components/layout/contact-section'

export default function ProjectPage({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Projects</title>
      </Head>
      <div>
        <Layout>
          <ProjectsGrid title="All Projects" isPreview={false} projects={posts} />

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
