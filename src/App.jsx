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

  useEffect(() => {
    FilterShow()
  }, [search])

  return (
    <div className='w-full h-full bg-[#1E2122] flex flex-col justify-center items-center '>

      <Header openPopup={openPopup} />
      <ScrollTop />
      <IframeLoaded iframeLoad={iframeLoad} />
      <Popup closePopup={closePopup} iframeLink={iframeLink} popupOpen={popupOpen} />

      <main className='mx-20 pt-10'>
        <Search openPopup={openPopup} filterMoviesContainer={filterMoviesContainer} filteredMovies={filteredMovies} handlechange={handlechange} search={search} />
        <MovieArea openPopup={openPopup} Movies={Movies} />
      </main>
    </div>
  )
}
