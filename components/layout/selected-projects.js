import Link from 'next/link'
import BlurImage from './blur-image'
import imgData from '../../lib/base64/public/thumbs-projects/base64.json'

const SelectedProjects = ({projects, isPreview, title}) => {

  const renderImgItem = (c, i) => {
    const base64 = imgData.data[`public${c.src}`]

    return (
      <BlurImage
        src={c.src}
        base64={base64}
        classOverrides={"w-full bg-tmdark"}
        alt={c.alt}
        layout="cover"
        width="1280"
        height="720"
      />
    )
  }

  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <h2 className="font-roman">{title}</h2>
        {isPreview ?
          <Link href="/projects" legacyBehavior><a className="underline">See all</a></Link> :
          null
        }
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p, index) =>
          <Link href={`/projects/${p.slug}`} passHref>
            <div className="col-span-1 w-full">
              <div className="rounded-xl overflow-hidden shadow transition hover:opacity-75">
                {renderImgItem({src: p.cover_image, alt: p.title})}
              </div>
              <div className="my-4 text-tmlight">
                <h3 className="font-roman leading-6">{p.title}</h3>
                <span className="font-roman font-small opacity-50">{p.excerpt}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SelectedProjects;
