import React, { useEffect, useState } from "react";

import Movies from "../src/assets/db/capas";
import Header from "./Components/header/Header";
import Popup from "./Components/popup/Popup";
import Search from "./Components/search/Search";
import MovieArea from "./Components/moviearea/MovieArea";
import IframeLoaded from "./Components/iframeLoad/IframeLoaded";
import ScrollTop from "./Components/scrolltotop/ScrollTop";
import Preloader from "./Components/preloader/Preloader";
import FilterPopup from "./Components/filterpopup/FilterPopup";
import FilterBar from "./Components/filterbar/FilterBar";

export default function App() {
  const [search, setSearch] = useState("");
  const [filterMoviesContainer, setFilterMoviesContainer] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [iframeLink, setIframeLink] = useState("");
  const [iframeLoad, setIframeLoad] = useState(false);

  const handlechange = (e) => {
    setSearch(e.target.value);
    setFilterMoviesContainer(true);
  };

  const openPopup = (src) => {
    setPopupOpen(true);
    setIframeLink(src);
    setIframeLoad(true);
    setSearch("");
    setFiltter(false);
    setSelectGenero("");
    setFilterBarOpen(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setIframeLink("");
    setIframeLoad(false);
  };

  const filteredMovies = Movies.filter((film) =>
    film.nome.toLowerCase().includes(search.toLowerCase())
  );

  const [selectGenero, setSelectGenero] = useState("");
  const [filterBarOpen, setFilterBarOpen] = useState(false);

  const selected = (Genero) => {
    setSelectGenero(Genero);
    setFilterBarOpen(true);
  };

  console.log(selectGenero);

  const filterMovies = Movies.filter((film) =>
    film.Genero.includes(selectGenero)
  );

  const FilterShow = () => {
    if (search !== "" && filteredMovies.length > 0) {
      setFilterMoviesContainer(true);
    } else {
      setFilterMoviesContainer(false);
    }
  };

  useEffect(() => {
    FilterShow();
  }, [search]);

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (isLoad || filterBarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoad, filterBarOpen]);

  const [filter, setFiltter] = useState(false);

  const handlePopup = () => {
    setFiltter(!filter);
  };

  return (
    <div className={`w-full h-full bg-[#1E2122] flex flex-col`}>
      <ScrollTop />
      <Header openPopup={openPopup} filterBarOpen={filterBarOpen} />

      <div className="flex justify-center items-center">
        <IframeLoaded iframeLoad={iframeLoad} />
        <Popup
          closePopup={closePopup}
          iframeLink={iframeLink}
          popupOpen={popupOpen}
        />
      </div>

      <main className="mx-20 pt-10">
        <Search
          openPopup={openPopup}
          filterMoviesContainer={filterMoviesContainer}
          filteredMovies={filteredMovies}
          handlechange={handlechange}
          search={search}
          filterBarOpen={filterBarOpen}
        />
        <FilterBar
          setFilterBarOpen={setFilterBarOpen}
          filterBarOpen={filterBarOpen}
          selectGenero={selectGenero}
          filterMovies={filterMovies}
          openPopup={openPopup}
        />
        <div className="flex flex-col justify-center items-center">
          <FilterPopup
            filter={filter}
            filterMovies={filterMovies}
            setFiltter={setFiltter}
            openPopup={openPopup}
            selected={selected}
          />
        </div>
        <MovieArea
          openPopup={openPopup}
          Movies={Movies}
          handlePopup={handlePopup}
          filterBarOpen={filterBarOpen}
        />
      </main>

      {isLoad && <Preloader />}
    </div>
  );
}
