import React from 'react'

import ImageSkelet from '../imageSkelet/ImageSkelet';

export default function MovieArea({openPopup, Movies, handlePopup}) {
  return (
    <div>
      <div className='text-white mt-10'>
        <div className='flex justify-between'>
          <span className='text-4xl font-light'>Recentes</span>
          <div className='bg-zinc-900 p-1 rounded-md cursor-pointer' onClick={handlePopup}>
            <span className='text-xl font-light '>Filtrar</span>
          </div>
        </div>
        <div className='bg-white h-1 w-20 mt-2'></div>

        <div className='flex flex-wrap gap-2 justify-center items-center py-10 w-full overflow-hidden'>
          {Movies.map((movie) => (
            <div key={movie.id} onClick={() => openPopup(movie.link)} className='relative group'>
              <ImageSkelet src={movie.imagem} alt={movie.nome} hash={movie.hash} width={200} height={265} />
              <div className='bg-zinc-700 w-[200px] rounded-lg p-4 absolute top-[270px] -left-[0px] z-50 invisible group-hover:visible flex-wrap shadow-lg group-hover:animate-Tranform-Y sm:hidden'>
              <span><strong>Nome</strong>: {movie.nome}</span>
              <div>
                <span><strong>Genero</strong>: {movie.Genero}</span>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
