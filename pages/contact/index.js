import Layout from '../../components/layout/layout'
import SelectedProjects from '../../components/layout/selected-projects'
import ClientSection from '../../components/layout/client-section'
import BlurImage from '../../components/layout/blur-image'
import ContactSection from '../../components/layout/contact-section'
import { InlineWidget } from "react-calendly";

import base64 from '../../lib/base64/public/img/base64.json'

const image = {
  src: "/img/tm-contact-toni.jpg",
  base64: base64.data["public/img/tm-contact-toni.jpg"],
  classOverrides: "w-full",
  alt: "That's me",
  layout: "cover",
  width: "500",
  height: "500",
  style: {
    width: '100%',
    height: 'auto',
  },
}

const pageSettings={
  backgroundColor: '1A1B1A',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: 'D9D9D9',
}

const Contact = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-gradient mb-8 text-center sm:text-left">Book a Free <br/>Consultation</h1>
        <div className="grid grid-cols-12 w-full gap-8">
          <div className="sm:col-span-6 xl:col-start-9 xl:col-span-6 col-span-12 order-2 flex justify-center md:justify-end">
            <div className="max-w-sm w-full">
              <BlurImage {...image}/>

              <span className="block mt-4">Toni Minge</span>
              <a className="block underline" href="mailto:dev@toniminge.com">dev@toniminge.com</a>
            </div>

          </div>
          <div className="sm:col-span-6 xl:col-span-4 col-span-12 order-1">
            <div className="overflow-hidden bg-tmdark">
              <InlineWidget
                pageSettings={pageSettings}
                url="https://calendly.com/dev-toniminge/30min" />
            </div>
          </div>
        </div>
        <div className="my-16">
          <ClientSection />
        </div>
      </Layout>
    </div>
  )
}

export default Contact
