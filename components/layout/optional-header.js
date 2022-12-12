import {useState, useEffect} from 'react'
import Header from './header.js'
import BlurImage from './blur-image.js'

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
          src={meta.headerImage}
          base64={meta.base64}
          alt=""
            />
      </div>
      <div className="absolute w-full top-0 z-20">
        <Header />
      </div>
    </div>
  );
}

export default OptionalHeader;
