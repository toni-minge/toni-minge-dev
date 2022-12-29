import { useContext } from 'react'
import Link from 'next/link'
import { AppContext } from '../../services/state/AppProvider'


function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-row justify-between">
        <Link href="/">Toni Minge</Link>
        <div className="flex gap-8">
          <Link href="/about" legacyBehavior><a className="link link-underline link-underline-black">About</a></Link>
          <Link href="/contact" legacyBehavior><a className="link link-underline link-underline-black">Contact</a></Link>
          <Link href="/projects" legacyBehavior><a className="link link-underline link-underline-black">Projects</a></Link>
          <Link href="/blog" legacyBehavior><a className="link link-underline link-underline-black">Blog</a></Link>
          <button onClick={() => setMenuIsOpen(true)}>Menu</button>
        </div>

      </div>
    </div>
  );
}

export default Header;
