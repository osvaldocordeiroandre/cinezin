import React, { useEffect, useState } from 'react'

import { Blurhash } from 'react-blurhash'

export default function ImageSkelet({src, hash, alt}) {
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
        {!imageLoad ? <Blurhash className='animate-iframe-Fade' hash={hash} width={200} height={265} resolutionX={31} resolutionY={31} punch={1}/> :
        <img className='rounded-md cursor-pointer hover:scale-[1.1] transition-transform' src={src} alt={alt} />
        }
    </>
  )
}
