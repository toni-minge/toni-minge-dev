import dayjs from 'dayjs'
import React from 'react'
import Head from 'next/head'
import BlurImage from '../../components/layout/blur-image'
import ClientSection from '../../components/layout/client-section'
import ContactSection from '../../components/layout/contact-section'
import ProjectsGrid from '../../components/layout/selected-projects'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getProjectFromSlug, getProjectSlug } from '../../services/utils/mdx'


const H1 = ({children}) => {
  return (<h1 className="mb-1 mt-16" id={children[1]}>{children}</h1>)
}

const H2 = ({children}) => {
  return (<h2 className="mb-1 mt-16" id={children[1]}>{children}</h2>)
}

const H3 = ({children}) => {
  return (<h3 className="mb-1 mt-16" id={children[1]}>{children}</h3>)
}

const Ol = ({children}) => {
  return (<ol className="ml-8 mb-4 block list-disc">{children}</ol>)
}

const Ul = ({children}) => {
  return (<ol className="ml-4 mb-8 block list-disc">{children}</ol>)
}

const Pre = ({children}) => {
  return (<pre className="overflow-y-scroll mb-8 mt-8 p-4 bg-tmlight/10 rounded">{children}</pre>)
}

const A = ({children, href}) => {
  return (<a href={href} traget="_blank" rel="noopener" className="underline">{children}</a>)
}

const image_data = {
  classOverrides: "w-full mb-1",
  layout: "cover",
  width: "1920",
  height: "1080",
  style: {
    width: '100%',
    height: 'auto',
  },
}

const Video = ({...props}) => {
  const { className, src } = props
  return (
    <div className={`max-w-mx mx-auto mb-8 ${className}`}>
      <video playsInline={true} autoPlay={true} loop={true} muted={true} src={src}/>
    </div>
  )
}


const Image = ({children, title, src, alt, height, width, data, ...rest}) => {

  const obj = {
    ...image_data,
    src: src,
    alt: alt,
    base64: data[`public${src}`],
  }

  height ? obj.height = height : null
  width ? obj.width = width : null

  return (
    <div className="w-full">
      <BlurImage
        {...obj}
      />
      <div className="text-center mb-8">
        <span className="text-tmligth opacity-50 text-sm">{title}</span>
      </div>
    </div>
  )
}

// somehow there's some kind of weird error
// or: I configured the mdx parser wrong
// but it puts images in p tags which confuses
// the next.js hydration system
// ---------------------
// this is a workaround
const P = ({children, props, data, ...rest}) => {
  if (typeof children === "string"){
    return (<p className="mb-2 font-roman text-tmlight">{children}</p>)
  }

  if (children?.props?.src) {
    const filepath = children.props.src.split('.')
    const filetype = filepath[filepath.length - 1]
    const { src, alt, title } = children.props

    const segments = title?.split("/")
    const height = segments ? segments[2] : undefined
    const width = segments ? segments[1] : undefined
    const _title = segments ? segments[0] : undefined

    switch (filetype) {
      case "jpg":
      case "png":
        return <Image height={height} width={width} title={_title} src={src} alt={alt} data={data} />
        break;
      case "mp4":
        return <Video src={src} alt={alt} data={data} />
        break;
      default:
        return <div></div>

    }
  }


}



import Layout from '../../components/layout/layout'

export default function Blog({ post: { source, frontmatter }, related_projects }) {

  const {title, techstack, links, excerpt, description, base64_path, created} = frontmatter
  const { data } = require(`../../lib/base64/public/${base64_path}/base64.json`)

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    ol: Ol,
    ul: Ul,
    pre: Pre,
    a: A,
    video: Video,
    p: ({...rest}) => <P {...rest} data={data}/> ,
    img: ({...rest}) => <Image {...rest} data={data}/>
  }


  return (
    <React.Fragment>

      <Head>
        <title>{frontmatter.title} | Toni Minge Development</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={frontmatter.cover_image} />
        <meta property="og:image:width" content={frontmatter.cover_image_width} />
        <meta property="og:image:height" content={frontmatter.cover_image_height} />
      </Head>

      <Layout optionalHeader={true} meta={frontmatter}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 w-full py-8">
          <div className="w-full col-span-1 md:col-span-3">
            <span className="block opacity-50">{title}</span>
            <h1 className="">{excerpt}</h1>
          </div>
          <div className="w-full md:col-start-5 col-span-1 md:col-span-2 leading-relaxed flex flex-col gap-8 font-roman opacity-80">
            <div className="">
              {description}
            </div>
            <div>
              <span className="opacity-50 text-sm block mb-2">
                Links
              </span>
              <ul className="leading-relaxed">
              {links.map((l, i) =>
                <li><a className="underline" href={l.link} target="_blank" rel="noreferrer">{l.type}</a></li>
              )}
              </ul>
            </div>

            <div>
              <span className="opacity-50 text-sm block mb-2">
                Techstack
              </span>
              <ul className="leading-relaxed">
              {techstack.map((t, i) =>
                <li>{t}</li>
              )}
              </ul>
            </div>

            <div>
              <span className="opacity-50 text-sm block mb-2">
                Created
              </span>
              <ul className="leading-relaxed">
                <li>{created}</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="mt-8 mb-32">
          <MDXRemote {...source} components={components} />
        </div>

        <ProjectsGrid isPreview={true} projects={related_projects} title="Related Projects"/>

        <ContactSection />
      </Layout>
    </React.Fragment>
  )
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getProjectSlug()).map((slug) => ({ params: { slug } }))

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
  const { content, frontmatter } = await getProjectFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeHighlight,
        rehypeCodeTitles,
      ]
    },
  })

  const promises = []

  frontmatter.related_projects?.forEach((item, i) => {
    promises.push(getProjectFromSlug(item))
  });

  const resolved_promises = await Promise.all(promises)
  const final_data = resolved_promises.map((d) => ({...d.frontmatter}))


  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
      related_projects: final_data
    },
  }
}
