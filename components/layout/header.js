import Link from 'next/link'

function Header() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-row justify-between">
        <Link href="/">Toni Minge</Link>
        <button className="cursor-pointer text-2xl">Menu</button>
      </div>
    </div>
  );
}

export default Header;
