import React, { useEffect, useState } from 'react'

import { Blurhash } from 'react-blurhash'

export default function ImageSkelet({src, hash, alt, width, height}) {
    const [imageLoad, setImageLoad] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoad(true)
        }
        img.src = src
    }, [src])
    
  return (
    <>
        {!imageLoad ? <div className='rounded-md'>
          <Blurhash className='animate-iframe-Fade' hash={hash} width={width} height={height} resolutionX={31} resolutionY={31} punch={1}/>
        </div> :
        <img className='rounded-md cursor-pointer hover:scale-[1.1] transition-transform' width={width} height={height} src={src} alt={alt} />
        }
    </>
  )
}
