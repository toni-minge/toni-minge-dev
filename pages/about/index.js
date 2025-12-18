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
    title: "Frontend Engineering",
    content: [
      "React & React Native",
      "Next.js & Remix",
      "Shopify Hydrogen",
      "Tailwind CSS & SCSS",
      "Performance-focused UI development"
    ]
  },
  {
    title: "Backend & Architecture",
    content: [
      "Node.js & Express",
      "API design & integrations",
      "Headless CMS (Builder.io, Directus, Strapi)",
      "Authentication & data flows",
      "Scalable application architecture"
    ]
  },
  {
    title: "E-Commerce & Headless Systems",
    content: [
      "Shopify headless setups",
      "WooCommerce optimization & migrations",
      "Conversion-focused shop architecture",
      "Checkout & cart optimization",
      "SEO-friendly content structures"
    ]
  },
  {
    title: "Product & UX Thinking",
    content: [
      "Technical discovery & consulting",
      "Data-driven UX decisions",
      "User journeys & conversion funnels",
      "Iterative optimization",
      "Quality assurance & long-term maintainability"
    ]
  }
]


const About = ({ projects }) => {
  return (
    <div>
      <Layout optionalHeader={true} meta={data}>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-8">
            <div className="w-full">
              <span className="block opacity-50">About me</span>
              <h1 className="text-gradient">How I Became <br />a Developer.</h1>
            </div>
            <div className="w-full leading-relaxed flex flex-col gap-8">
              <p>
                My path into software development was anything but linear. While studying fine arts in Leipzig, I began building simple WordPress websites to pay my rent. At the same time, I enrolled in every course at <a className="underline" target="_blank" rel="noopener" href="https://www.hgb-leipzig.de/">HGB Leipzig</a> that touched on web technologies — without realizing that this would eventually become my profession.
              </p>

              <p>
                Together with my friend <a className="underline" target="_blank" rel="noopener" href="https://schmidtjohannes.com/">Johannes</a>, I later started developing an app for <Link href="/projects/aimy-rocks" legacyBehavior><a className="underline">house parties</a></Link>. Due to a constant shortage of developers, I quickly moved beyond visual design and into more abstract technical concepts, eventually working with Django as a Python backend. That project became my gateway into software architecture and product thinking.
              </p>

              <p>
                Over the years, we kept iterating on the app, which naturally led me to technologies like React, React Native, and Firebase. At some point, it became clear that I was deeply drawn to building systems rather than just interfaces. I didn’t plan to “switch careers” — I simply followed my curiosity until the internet became my primary medium.
              </p>

              <p>
                In 2019, Johannes and I founded our agency <a className="underline" target="_blank" rel="noopener" href="https://www.minge-schmidt.com/">Minge+Schmidt</a>. Since then, I’ve been working full-time as a freelance full-stack developer, gradually specializing in modern web architectures with React, Next.js, Remix, headless CMS solutions, and Shopify Hydrogen. Today, my focus lies on performance-driven, scalable products that balance strong UX with technical clarity.
              </p>

              <p>
                Over the years, I’ve worked with a wide range of clients — from cultural institutions and startups to investment firms and e-commerce brands — including HAU Hebel am Ufer, Yoona.ai, Descript, Mataono, Female Business Angels, Auxxo Investment, Onlinetheater.live, Knoweaux, Hamburg Distilling Company, and Potluck.
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
            <SelectedProjects title="Selected Projects" isPreview={true} projects={projects} />
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
