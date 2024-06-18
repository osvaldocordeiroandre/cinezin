import React, { useEffect, useState } from 'react'

import Movies from '../src/assets/db/capas'
import Header from './Components/header/Header';
import Popup from './Components/popup/Popup';
import Search from './Components/search/Search';
import MovieArea from './Components/moviearea/MovieArea';
import IframeLoaded from './Components/iframeLoad/IframeLoaded';
import ScrollTop from './Components/scrolltotop/ScrollTop';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FilterShow()

    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [search])

  return (
    <div className='w-full h-full bg-[#1E2122] flex flex-col'>
      {loading && (
        <span className='text-white flex justify-center items-center bg-[#1E2122] w-full h-screen font-bold text-2xl drop-shadow-xl animate-pulse'>Cinezin</span>
      )}

      <ScrollTop />
      <Header openPopup={openPopup} />

      <div className='flex justify-center items-center'>
        <IframeLoaded iframeLoad={iframeLoad} />
        <Popup closePopup={closePopup} iframeLink={iframeLink} popupOpen={popupOpen} />
      </div>

      <main className='mx-20 pt-10'>
        <Search openPopup={openPopup} filterMoviesContainer={filterMoviesContainer} filteredMovies={filteredMovies} handlechange={handlechange} search={search} />
        <MovieArea openPopup={openPopup} Movies={Movies} />
      </main>
    </div>
  )
}
