import React, { useEffect, useState } from 'react'

import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

import Movies from '../src/assets/db/capas'
import ImageSkelet from './Components/imageSkelet/ImageSkelet';

export default function App() {
  const [search, setSearch] = useState('')
  const [filterMoviesContainer, setFilterMoviesContainer] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [iframeLink, setIframeLink] = useState('')
  const [iframeLoad, setIframeLoad] = useState(false)

  const handlechange = (e) => {
    setSearch(e.target.value)
    setFilterMoviesContainer(true)
  }

  const openPopup = (src) => {
    setPopupOpen(true)
    setIframeLink(src)
    setIframeLoad(true)
    setSearch('')
  }

  const closePopup = () => {
    setPopupOpen(false)
    setIframeLink('')
    setIframeLoad(false)
  }

  const filteredMovies = Movies.filter((film) => film.nome.toLowerCase().includes(search.toLowerCase()));

  const FilterShow = () => {
    if (search !== '' && filteredMovies.length > 0) {
      setFilterMoviesContainer(true)
    } else {
      setFilterMoviesContainer(false)
    }
  }

  useEffect(() => {
    FilterShow()
  }, [search])

  return (
    <div className='w-full h-full bg-zinc-800'>
      <header className="bg-[linear-gradient(to_bottom,rgba(00,00,00,0.4),rgba(0,0,0,0.9)),url('https://pbs.twimg.com/media/ESRW1H0XUAEZU2l?format=jpg&name=large')] w-full h-[450px] bg-cover bg-center from-black sm:h-[570px]">
        <div className='flex items-center justify-between mx-8 pt-8'>
          <div>
            <h1 className='text-white font-bold text-2xl drop-shadow-xl cursor-pointer'>Cinezin</h1>
          </div>
          <div>
            <GiPerspectiveDiceSixFacesRandom className='cursor-pointer' size={30} color='white' />
          </div>
        </div>

        <div className='flex items-center justify-around w-full sm:flex-col'>
          <div >
            <h1 className='text-white text-5xl font-bold mx-8 mt-20 '>Um brilho Eterno</h1>
            <div className='max-w-[600px] mx-14 mt-6'>
              <span className='text-white sm:hidden '> Joel se surpreende ao saber que seu amor verdadeiro, Clementine, o apagou completamente de sua memória. Ele decide fazer o mesmo, mas muda de ideia. Preso dentro da própria mente enquanto os especialistas se mantêm ocupados em seu apartamento, Joel precisa avisá-los para parar.
              </span>
            </div>
            <div className='mx-14 mt-4'>
              <span className='text-white'><strong>Data de lançamento:</strong> 23 de julho de 2004 (Brasil)</span>
            </div>
            <div className='mx-14 mt-1'>
              <span className='text-white'><strong>Duração:</strong> 1h 48m</span>
            </div>
          </div>

          <div className='relative cursor-pointer hover:scale-[.9] transition-all flex justify-center items-center w-80 mt-20 group' onClick={() => openPopup('https://drive.google.com/file/d/1dySm7ybfGNdcXeUWRjR-EAOyPGt3rIdI/preview')}>
            <img className=' rounded-xl' src="https://newronio.espm.br/wp-content/uploads/2020/11/NewronioEternoBrilho.jpg" alt="" />
            <FaPlay className='absolute shadow-xl invisible group-hover:visible' color='orange' size={30} />
          </div>
        </div>
      </header>

      {iframeLoad && (
            <div className='fixed top-[20%] left-[6%] z-[2000] bg-zinc-800 w-[90vw] h-[60vh] rounded-xl border-none animate-iframe-Fade'></div>
          )}

          {popupOpen && (
            <div className='fixed top-[20%] left-[6%] z-[2000] '>
              <iframe className='w-[90vw] h-[60vh] rounded-xl border-none relative' src={iframeLink} frameborder="0" allowFullScreen />
              <button className='absolute top-0 right-0 text-3xl z-[1000] border-none mt-[10px] mr-3 cursor-pointer bg-black p-[14px] text-white hover:bg-red-600 rounded-md transition-all' onClick={closePopup}>X</button>
            </div>
          )}

      <main className='mx-20 pt-10'>
        <div className='text-white'>
          <div>
            <div>
              <span className='text-2xl font-bold'>Pesquisar</span>
            </div>
          </div>

          <div>
            <span>Pesquise seus filmes favoritos</span>
          </div>

          <div className='mt-4 relative'>
            <input className='w-full bg-zinc-700 p-3 rounded outline-none' type="text" name="" placeholder='Nome do filme...' id="" value={search} onChange={handlechange} />

            {filterMoviesContainer && (
              <div className='bg-zinc-700 flex flex-wrap justify-center items-center gap-4 py-10 absolute w-full rounded-md'>
                {filteredMovies.map((itemsMovie) => (
                  <div key={itemsMovie.id} onClick={() => openPopup(itemsMovie.link)}>
                    <img className='rounded-md cursor-pointer' src={itemsMovie.imagem} alt={itemsMovie.nome} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className='text-white mt-10'>
            <span className='text-4xl font-light'>Recentes</span>
            <div className='bg-white h-1 w-20 mt-2'></div>

            <div className='flex flex-wrap gap-4 justify-center items-center py-10 w-full overflow-hidden'>
              {Movies.map((movie) => (
                <div key={movie.id} onClick={() => openPopup(movie.link)}>
                  <ImageSkelet src={movie.imagem} alt={movie.nome} hash={movie.hash} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
