import { getAllProjects, getAllPosts } from '../services/utils/mdx'

import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout';
import BlurImage from '../components/layout/blur-image'
import Fire from '../components/layout/fire'
import GameOver from '../components/overlays/game-over'
import ClientSection from '../components/layout/client-section'
import SelectedProjects from '../components/layout/selected-projects'
import ArticlesGrid from '../components/layout/articles-grid'
import ContactSection from '../components/layout/contact-section'

import { FireContext } from '../services/state/FireProvider'
import SceneManager from '../components/scene-manager'
import Folder from '../components/project-folder/folder'

import base64 from '../lib/base64/public/img/base64.json'

const headerImage = {
  src: "/img/tm_landing_crt.jpg",
  base64: base64.data["public/img/tm_landing_crt.jpg"],
  classOverrides: "w-full",
  alt: "My old computer",
  layout: "cover",
  width: "1000",
  height: "1062",
  style: {
    width: '100%',
    height: 'auto',
  },
}

export default function Home({articles, projects}) {

  const { activeFire, addFire, playbook, gameOver } = useContext(FireContext)


  return (
    <div >
      <Head>
        <title>Toni Minge Development</title>
        <meta name="description" content="Toni Minge Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {gameOver && <GameOver /> }

      <Layout optionalHeader={false}>
        <div className="flex flex-wrap gap-16">
          <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-x-8">
            <div className="">
              <h1 className="text-gradient">Fullstack Web Development</h1>
              <h3 className="font-roman mb-8">
                Traditional and Creative Coding
              </h3>

              <div className="hidden md:block">
                <Folder/>
              </div>
            </div>
            <div className="flex flex-col md:justify-start">
              <div className="relative max-w-md w-full mx-auto">
                <Fire zIndex={"40"} classOverrides="top-8 " type={1} index={1}/>
                <Fire zIndex={"40"} classOverrides="top-6 left-24" type={2} index={2}/>
                <Fire zIndex={"40"} classOverrides="top-52 left-48" scale={"1.2"} type={2} index={3}/>
                <BlurImage {...headerImage}/>
                <div
                  style={{
                    top: "11%",
                    left: "9%",
                    width: "81%",
                    height: "56%",
                    mixBlendMode: "lighten",
                  }}
                  className="absolute z-20 overflow-hidden sm:p-4 p-2">
                    <SceneManager />
                </div>
              </div>
              <div className="md:hidden block w-full">
                <Folder/>
              </div>
            </div>
          </div>
          <div className="w-full">
            <SelectedProjects title="Selected Projects" isPreview={true} projects={projects}/>
          </div>

          <div className="max-w-xl mx-auto my-16">
            <h2 className=" font-roman text-center text-gradient">
              Unlock the full potential of your project with my expert programming skills and passion for creative coding. Let's soar to new heights together.
            </h2>
          </div>

          <div className="w-full">
            <ArticlesGrid articles={articles} />
          </div>

          <div className="mt-24">
            <ClientSection />
          </div>
          <ContactSection />
        </div>
      </Layout>

    </div>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()
  const articles = await getAllPosts()

  const _proj = projects.filter(p => p.selected)

  return {
    props: {
      projects: _proj,
      articles: articles.reverse()
    },
  }
}
