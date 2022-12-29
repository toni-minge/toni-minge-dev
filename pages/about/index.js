import { getAllProjects, getAllPosts } from '../../services/utils/mdx'

import Layout from '../../components/layout/layout'
import SelectedProjects from '../../components/layout/selected-projects'

const data = {
  cover_image: "/img/header-about-me.jpg"
}

const About = ({projects}) => {
  return (
    <div>
      <Layout optionalHeader={true} meta={data}>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full py-8">
            <div className="w-full">
              <span className="block opacity-50">About me</span>
              <h1>How I Became <br/>a Developer.</h1>
            </div>
            <div className="w-full leading-relaxed flex flex-col gap-8">
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-roman">I can help with </h2>
          </div>

          <div className="w-full">
            <SelectedProjects isPreview={true} projects={projects}/>
          </div>
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
