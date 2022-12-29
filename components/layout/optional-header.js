import {useState, useEffect} from 'react'
import Header from './header.js'
import BlurImage from './blur-image.js'

import projects_base64 from '../../lib/base64/public/thumbs-projects/base64.json'

function OptionalHeader({meta}) {
  const [matches, setMatches] = useState(false);

  if (typeof window !== 'undefined') {
    const mediaMatch = window.matchMedia('(max-width: 640px)')

    useEffect(() => {
      setMatches(window.innerWidth <= 640 ? true : false)
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
  }

  return (
    <div className="realative">
      <div className="w-screen" style={{width: '100vw', height: matches ? '40vh' : '80vh', overflow: 'hidden'}}>
        <BlurImage
          src={meta.cover_image}
          base64={projects_base64.data[`public${meta.cover_image}`]}
          classOverrides={"w-full bg-tmdark h-full"}
          alt={meta.title}
            />
      </div>
      <div className="w-full h-16 bg-gradient-to-b from-tmdark to-transparent top-0 absolute z-20">
      </div>
      <div className="absolute w-full top-0 z-20">
        <Header />
      </div>
    </div>
  );
}

export default OptionalHeader;
