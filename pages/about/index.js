import { getAllProjects, getAllPosts } from '../../services/utils/mdx'
import base64 from '../../lib/base64/public/img/base64.json'

import Link from 'next/link'
import Layout from '../../components/layout/layout'
import SelectedProjects from '../../components/layout/selected-projects'
import ClientSection from '../../components/layout/client-section'
import ContactSection from '../../components/layout/contact-section'

const data = {
  cover_image: "/img/header-about-me.jpg",
  base64: base64.data[`public${"/img/header-about-me.jpg"}`],
  cover_image_height: 720,
  cover_image_width: 1280
}

const offers = [
  {
    title: "Frontend",
    content: ["react.js", "react native", "next.js", "p5.js", "UI/UX"]
  },
  {
    title: "Backend",
    content: ["express.js", "API Endpoints", "strapi", "Websockets", "NoSQL Databases"]
  },
  {
    title: "Design Thinking",
    content: ["Customer Journey", "Persona Creation", "Design Sprint"]
  },
  {
    title: "Development",
    content: ["Technical Discovery", "CMS Implementation", "Technical Architecture", "Quality Assurance"]
  }
]

const About = ({projects}) => {
  return (
    <div>
      <Layout optionalHeader={true} meta={data}>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-8">
            <div className="w-full">
              <span className="block opacity-50">About me</span>
              <h1 className="text-gradient">How I Became <br/>a Developer.</h1>
            </div>
            <div className="w-full leading-relaxed flex flex-col gap-8">
              <p>
                My career as a developer started rather unconventionally. When I was still studying art in Leipzig, I started developing simple WordPress websites to pay my rent. Additionally, I enrolled in all courses at the <a className="underline" target="_blank" rel="noopener" href="https://www.hgb-leipzig.de/">HGB Leipzig</a> that revolved around website development (without suspecting that I would do this professionally one day). After some time, <a className="underline" target="_blank" rel="noopener" href="https://schmidtjohannes.com/">Johannes</a> (a good friend of mine) and I decided to make an app for <Link href="/projects/aimy-rocks" legacyBehavior><a className="underline">house parties.</a></Link> Since we had constant shortage of developers, I started looking into more abstract concepts and got in touch with Django as a Python backend system.
              </p>
              <p>
                We kept iterating on our app over the years, which is how I came across systems like React, React Native, and Firebase. And when I realized that I was incredibly interested in this world, it was all too late. Since then, I fell in love with the internet.
              </p>
              <p>
                Then in 2019, Johannes and I founded our agency <a className="underline" target="_blank" rel="noopener" href="https://www.minge-schmidt.com/">Minge+Schmidt</a>. From then on, I professionalized all my essential basic skills and since then I've been working full time as a fullstack developer.
              </p>
              <p>
                During this time I was able to work for clients like HAU Hebel am Ufer, Yoona.ai, Descript, Mataono, Noahworks, Livism, Female Business Angels, Auxxo Investment, Onlinetheater.live, and Knoweaux.

              </p>
            </div>
          </div>

          <div className="mb-16 mt-8">
            <h2 className="font-roman mb-8 text-gradient">I can help with </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {offers.map((o, i) =>
                <div>
                  <span className="opacity-50 text-sm block mb-2">
                    {o.title}
                  </span>
                  <ul className="leading-relaxed">
                    {o.content.map((c, i) =>
                      <li>{c}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="w-full">
            <SelectedProjects title="Selected Projects" isPreview={true} projects={projects}/>
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

export default About;

export async function getStaticProps() {
  const projects = await getAllProjects()

  const _proj = projects.filter(p => p.selected)

  return {
    props: {
      projects: _proj,
    },
  }
}
