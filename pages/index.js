import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout';
import BlurImage from '../components/layout/blur-image'
import Fire from '../components/layout/fire'
import GameOver from '../components/overlays/game-over'

import Folder from '../components/project-folder/folder'

import base64 from '../lib/base64/public/img/base64.json'

const headerImage = {
  src: "/img/tm_dev_crt.jpg",
  base64: base64.data["public/img/tm_dev_crt.jpg"],
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

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<GameOver />*/}


      <Layout optionalHeader={false}>
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <h1>Creative Web <br/> Development</h1>
              <Fire zIndex={"30"} classOverrides="-top-16 left-10 rotate-90" type={3} active={true}/>
              <Fire zIndex={"30"} classOverrides="top-14 rotate-1" type={1} active={true}/>

              <Folder/>
            </div>
            <div className="lg:w-1/2">
              <div className="relative max-w-md mx-auto">
                <Fire zIndex={"40"} classOverrides="top-8 " type={1} active={true}/>
                <Fire zIndex={"40"} classOverrides="top-6 left-24" type={2} active={true}/>
                <Fire zIndex={"40"} classOverrides="-top-64 left-48" scale={"1.5"} type={2} active={true}/>
                <BlurImage {...headerImage}/>
                <div
                  style={{
                    top: "11%",
                    left: "9%",
                    width: "81%",
                    height: "56%",
                    padding: "16px",
                    mixBlendMode: "lighten",
                  }}
                  className="absolute z-20 overflow-hidden">
                    <img className="w-52 mx-auto" src="./img/test_kopf.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

    </div>
  )
}
