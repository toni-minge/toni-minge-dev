import Link from 'next/link'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full">
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-8 mx-auto py-8 px-4 footer-content">
        <div className="">
          <span className="">Latest Work</span>
          <ul>
            <li><Link href="/projects/loulu">Loulu</Link></li>
            <li><Link href="/projects/aimy-rocks">Aimy Rocks</Link></li>
            <li><Link href="/projects/hyphe">Hyphe</Link></li>
            <li><Link href="/projects/yoona-ai">Yoona.ai</Link></li>
          </ul>
        </div>

        <div className="">
          <span className="">Links</span>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/imprint">Imprint</Link></li>
          </ul>
        </div>

        <div className="">
          <span className="">Socials</span>
          <ul>
            <li><a href="https://github.com/toni-minge" rel="noopener">Github</a></li>
            <li><a href="https://www.instagram.com/toni_minge/" rel="noopener">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/toni-minge-329022b4/" rel="noopener">LinkedIn</a></li>
            <li><a href="https://toniminge.com/" rel="noopener">Painting Website</a></li>
          </ul>
        </div>


        <div className="flex flex-col justify-end text-right">
          <p className="">© {year} Toni Minge</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
