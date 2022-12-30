import Link from 'next/link'
import BlurImage from './blur-image'
import RotatingModelViewer from '../3d/rotatingModelViewer'
import imgData from '../../lib/base64/public/thumbs-articles/base64.json'
import dayjs from 'dayjs'

const ArticlesGrid = ({articles}) => {

  const renderImgItem = (c, i) => {
    const base64 = imgData.data[`public${c.cover_image}`]

    return (
      <BlurImage
        src={c.cover_image}
        base64={base64}
        classOverrides={"w-full bg-tmdark"}
        alt={c.title}
        layout="cover"
        width="1280"
        height="720"
      />
    )
  }

  const renderCategories = (categories) => {
    return (
      categories && categories.map((c, i) =>
        <div className="bg-tmlight/20 px-2 rounded-full">
          {c}
        </div>
      )
    )
  }

  return (
    <div className="flex gap-8">
      <div className="grid grid-cols-1 gap-4 gap-y-8 md:w-8/12 w-full">
        {articles.map((a, i) =>
          <div className="">
            <Link href={`/blog/${a.slug}`}>
              <div className="flex gap-4 items-center">
                <div className="w-8/12">
                  <h3 className="font-roman text-tmlight text-2xl hover:text-white line-clamp-2">{a.title}</h3>
                  <p className="opacity-70 line-clamp-2">{a.excerpt}</p>
                  <div className="flex gap-2 mt-2 text-sm opacity-50 flex-wrap">
                    <div>{dayjs(a.publishedAt).format("MMM D, \xa0 YYYY")}</div>
                    <div>•</div>
                    <div>{a.readingTime}</div>
                    <div>•</div>
                    {renderCategories(a.categories)}
                  </div>
                </div>
                <div className="w-4/12">
                  {renderImgItem(a)}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="hidden md:block md:w-4/12 relative">
        <div className="h-full">
          <div className="sticky top-4">
            <div>
              <RotatingModelViewer path={"/3d/ginger.fbx"} />
            </div>
            <div className="absolute top-0 left-3/4">
              Ginger
            </div>
            <div style={{rotate: "-25deg", left: '55%', top: '9%'}} className="absolute border-b border-white w-12 lg:w-16">
            </div>


          </div>
        </div>


      </div>
    </div>
  )
}

export default ArticlesGrid;
