import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-8 mx-auto py-8 px-4 footer-content">
        <div className="">
          <span className="">Socials</span>
          <ul>
            <li><a className="cursor-pointer" href="">github</a></li>
            <li><a href="">instagram</a></li>
            <li><a href="">linkedin</a></li>
            <li><a href="">painting website</a></li>
          </ul>

        </div>
        <div className="">
          <span className="">Latest Work</span>
          <ul>
            <li><Link c href="/projects/ethernal-faces">Ethernal Faces</Link></li>
            <li><Link href="/projects/loulu">Loulu</Link></li>
            <li><Link href="/projects/hyphe">Hyphe</Link></li>
            <li><Link href="/projects/yoona-ai">Yoona.ai</Link></li>
          </ul>
        </div>
        <div className="">
          <span className="">Socials</span>
          <ul>
            <li><a href="">github</a></li>
            <li><a href="">instagram</a></li>
            <li><a href="">linkedin</a></li>
            <li><a href="">painting website</a></li>
          </ul>
        </div>
        <div className="">
          <span className="">Socials</span>
          <ul>
            <li><a href="">github</a></li>
            <li><a href="">instagram</a></li>
            <li><a href="">linkedin</a></li>
            <li><a href="">painting website</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
