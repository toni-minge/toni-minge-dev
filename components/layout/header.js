import { useContext } from 'react'
import Link from 'next/link'
import { AppContext } from '../../services/state/AppProvider'


function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-row justify-between">
        <Link href="/">Toni Minge</Link>
        <button onClick={() => setMenuIsOpen(true)} className="cursor-pointer text-2xl">Menu</button>
      </div>
    </div>
  );
}

export default Header;
