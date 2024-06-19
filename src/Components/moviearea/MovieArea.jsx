import React from 'react'

import ImageSkelet from '../imageSkelet/ImageSkelet';

export default function MovieArea({openPopup, Movies}) {
  return (
    <div>
      <div className='text-white mt-10'>
        <span className='text-4xl font-light'>Recentes</span>
        <div className='bg-white h-1 w-20 mt-2'></div>

        <div className='flex flex-wrap gap-2 justify-center items-center py-10 w-full overflow-hidden'>
          {Movies.map((movie) => (
            <div key={movie.id} onClick={() => openPopup(movie.link)}>
              <ImageSkelet src={movie.imagem} alt={movie.nome} hash={movie.hash} width={200} height={265} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
