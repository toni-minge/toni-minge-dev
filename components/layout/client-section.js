import BlurImage from './blur-image'
import imgData from '../../lib/base64/public/clients/base64.json'

const clients = [
  {
    src: '/clients/client-logo-potluck.png',
    alt: 'Potluck'
  },
  {
    src: '/clients/client-logo-hdc.png',
    alt: 'Hamburg Distilling Company'
  },
  {
    src: '/clients/client-logo-agenda.png',
    alt: 'Livis'
  },
  {
    src: '/clients/client-logo-05-knoweaux.png',
    alt: 'Knoweaux'
  },
  {
    src: '/clients/client-logo-06-hau.png',
    alt: 'HAU'
  },
  {
    src: '/clients/client-logo-07-yoona.png',
    alt: 'Yoona'
  },
  {
    src: '/clients/client-logo-08-otl.png',
    alt: 'onlinetheater.live'
  }
]

const ClientSection = () => {

  const renderImgItem = (c, i) => {
    const base64 = imgData.data[`public${c.src}`]

    return (
      <BlurImage
        src={c.src}
        base64={base64}
        classOverrides={"w-full bg-tmdark"}
        alt={c.alt}
        layout="cover"
        width="600"
        height="335"
      />
    )
  }
  return (
    <div className="w-full">

      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {clients.map((client, index) => (
          <div className="h-full w-full" key={index}>
            <img src={client.src} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientSection;
