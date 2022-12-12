import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-6xl flex flex-col lg:flex-row justify-between gap-8 mx-auto py-8 px-4 footer-content">
        <div className="w-full lg:w-1/4">
          <span className="">Socials</span>
          <ul>
            <li><a href="">github</a></li>
            <li><a href="">instagram</a></li>
            <li><a href="">linkedin</a></li>
            <li><a href="">painting website</a></li>
          </ul>

        </div>
        <div className="w-full lg:w-1/4">
          <span className="">Latest Work</span>
          <ul>
            <li><Link href="/projects/ethernal-faces">Ethernal Faces</Link></li>
            <li><Link href="/projects/loulu">Loulu</Link></li>
            <li><Link href="/projects/hyphe">Hyphe</Link></li>
            <li><Link href="/projects/yoona-ai">Yoona.ai</Link></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4">
          <span className="">Socials</span>
          <ul>
            <li><a href="">github</a></li>
            <li><a href="">instagram</a></li>
            <li><a href="">linkedin</a></li>
            <li><a href="">painting website</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4">
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
