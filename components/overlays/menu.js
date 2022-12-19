import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from "next/router";
import { AppContext } from '../../services/state/AppProvider'

const Menu = ({isOpen}) => {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext)
  const [ isShowing, setIsShowing] = useState(menuIsOpen)

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {close()}

    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])


  const close = () => {
    setIsShowing(false)


    setTimeout(function () {
      setMenuIsOpen(false)
    }, 300);
  }

  useEffect(() => {
    setIsShowing(true)
  }, [])



  return (
    <div className={`fixed h-full top-0 duration-300 opacity-0 z-50 transition-all ${isShowing && "blur-none opacity-100"}`}>
      <div className="w-screen h-screen">
        <div className="absolute top-0 left-0 flex sm:flex-row flex-col w-screen h-screen">
          <div className="sm:w-1/2 w-full bg-tmdark"></div>
          <div className="sm:w-1/2 w-full bg-tmlight"></div>
        </div>
        <div className="absolute w-full left-1/2 -translate-x-1/2 flex h-full max-w-6xl mx-auto sm:flex-row flex-col-reverse">
          <div className="text-tmlight bg-tmdark sm:w-7/12 w-full sm:h-full h-1/2 p-4 flex flex-col justify-between">
            <div className="hidden sm:block"><Link href="/" legacyBehavior><a className="block">Toni Minge</a></Link></div>
            <div className="text-left flex flex-col text-white text-4xl sm:block hidden font-medium">
              <Link href="/projects" legacyBehavior><a className="block">Latest Work</a></Link>
              <Link href="/about-me" legacyBehavior><a className="block">About Me</a></Link>
              <Link href="/blog" legacyBehavior><a className="block">Blog</a></Link>
              <Link href="/contact" legacyBehavior><a className="block">Contact</a></Link>
            </div>
            <div className="text-left">
              <span>Latest Work</span>
              <div classname="">
                <Link href="/projects/ethernal-faces" legacyBehavior>
                  <a className="block text-xl font-medium">Ethernal Faces</a>
                </Link>
                <Link href="/projects/loulu" legacyBehavior>
                  <a className="block text-xl font-medium">Loulu</a>
                </Link>
                <Link href="/projects/hyphe" legacyBehavior>
                  <a className="block text-xl font-medium">Hyphe</a>
                </Link>
                <Link href="/projects/yoona-ai" legacyBehavior>
                  <a className="block text-xl font-medium">Yoona.ai</a>
                </Link>
              </div>
            </div>

            <div className="text-left sm:hidden block">
              <span>Links</span>
              <div classname="">
                <a target="blank" href="https://toniminge.de" className="block text-xl font-medium">paintings</a>
                <a target="blank" href="https://github.com/toni-minge" className="block text-xl font-medium">github</a>
                <a target="blank" href="https://www.instagram.com/toni_minge/" className="block text-xl font-medium">instagram</a>
                <a target="blank" href="https://www.linkedin.com/in/toni-minge-329022b4/" className="block text-xl font-medium">linkedin</a>
              </div>
            </div>

          </div>
          <div className="text-tmdark bg-tmlight sm:w-5/12 w-full sm:h-full h-1/2 p-4 text-right flex flex-col justify-between">
            <div className="">
              <div className="flex justify-between gap-4">
                <div className="leading-3 pt-1 text-left">
                  <b>🦾 <a href="mailto:dev@toniminge.de" className="">dev@toniminge.com</a></b> <br/>
                  <span className="text-xs font-roman">Availiable for freelance work</span>
                </div>
                <button onClick={close} className="cursor-pointer text-2xl">Close</button>
              </div>
            </div>
            <div className="text-left flex flex-col sm:hidden text-2xl font-medium">
              <Link href="/projects" legacyBehavior><a className="block">Latest Work</a></Link>
              <Link href="/about-me" legacyBehavior><a className="block">About Me</a></Link>
              <Link href="/blog" legacyBehavior><a className="block">Blog</a></Link>
              <Link href="/contact" legacyBehavior><a className="block">Contact</a></Link>
            </div>

            <div className="text-left hidden sm:block">
              <span>Links</span>
              <div classname="">
                <a target="blank" href="https://toniminge.de" className="block text-xl font-medium">paintings</a>
                <a target="blank" href="https://github.com/toni-minge" className="block text-xl font-medium">github</a>
                <a target="blank" href="https://www.instagram.com/toni_minge/" className="block text-xl font-medium">instagram</a>
                <a target="blank" href="https://www.linkedin.com/in/toni-minge-329022b4/" className="block text-xl font-medium">linkedin</a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-screen max-w-6xl">


        </div>
      </div>
    </div>
  )
}

export default Menu;
