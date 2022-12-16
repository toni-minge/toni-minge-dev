import Image from 'next/image';
import { useState } from 'react';

function BlurImage({ src, base64, classOverrides, style, ...props }) {
  const [isLoading, setLoading] = useState(true);

  const { height, width} = props

  return (
    <div
      style={{paddingBottom: width && height ? `${height / width * 100}%` : "" }}
      className={`relative overflow-hidden h-full ${classOverrides}`}>
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className={`z-20 absolute top-0 duration-300 ease-in-out ${isLoading
          ? 'blur-sm scale-100 opacity-0'
          : 'blur-0 scale-100 opacity-100'}`
        }
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
      <img
        style={style}
        className={`h-full w-full object-fill absolute ${width && height ? "scale-95 blur-sm" : "scale-105 blur-xl"}`}
        src={`data:image/jpeg;base64,${base64}`} />
    </div>
  );
}

export default BlurImage;
