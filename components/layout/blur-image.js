import Image from 'next/image';
import { useState } from 'react';

function BlurImage({ src, base64, ...props }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative overflow-hidden w-screen h-full">
      <Image
        {...props}
        src={src}
        layout="fill"
        objectFit="cover"
        className={`z-10 duration-300 ease-in-out ${isLoading
          ? 'blur scale-100'
          : 'blur-0 scale-100'}`
        }
        onLoadingComplete={() => setLoading(false)}
      />
      <div className="absolute w-screen h-screen">
        <img className="blur h-screen object-cover" src={`data:image/jpeg;base64,${base64}`} />
      </div>
    </div>
  );
}

export default BlurImage;
