import { getAllProjects, getAllPosts } from '../../services/utils/mdx'
import base64 from '../../lib/base64/public/img/base64.json'

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
    title: "Libraries",
    content: ["React.js", "Next.js", "Express.js", "Websockets.js"]
  },
  {
    title: "Concepts",
    content: ["Websockets", "API Endpoints", "CRUD", "Design Sprint"]
  },
  {
    title: "Digital Experience",
    content: ["React.js", "Next.js", "Express.js", "Websockets.js"]
  },
  {
    title: "Engeneering",
    content: ["React.js", "Next.js", "Express.js", "Websockets.js"]
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
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
