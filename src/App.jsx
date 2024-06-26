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
    setOpenEpisode(false);
    setSelectEp(1);
  };

  const filteredMovies = Movies.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  const [selectGenero, setSelectGenero] = useState("");
  const [filterBarOpen, setFilterBarOpen] = useState(false);

  const selected = (Genero) => {
    setSelectGenero(Genero);
    setFilterBarOpen(true);
  };

  console.log(selectGenero);

  const filterMovies = Movies.filter((film) =>
    film.genre.includes(selectGenero)
  );

  const FilterShow = () => {
    if (search !== "" && filteredMovies.length > 0) {
      setFilterMoviesContainer(true);
      setFiltter(false);
      setFilterBarOpen(false);
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
    if (isLoad || filterBarOpen || popupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoad, filterBarOpen, popupOpen]);

  const [filter, setFiltter] = useState(false);

  const handlePopup = () => {
    setFiltter(!filter);
  };

  const [openEpisode, setOpenEpisode] = useState(false);

  const [selectAnime, setSelectAnime] = useState([]);
  const [selectEp, setSelectEp] = useState(1);

  const handleWindowClick = () => {
    setFilterMoviesContainer(false);
    setSearch("")
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    }
  }, []);

  return (
    <div className={`w-full h-full bg-[#181A1B] flex flex-col p-1`}>
      <ScrollTop />
      <Header openPopup={openPopup} filterBarOpen={filterBarOpen} />

      <div className="flex justify-center items-center">
        <IframeLoaded iframeLoad={iframeLoad} />
        <Popup
          closePopup={closePopup}
          iframeLink={iframeLink}
          popupOpen={popupOpen}
          setIframeLink={setIframeLink}
          setOpenEpisode={setOpenEpisode}
          openEpisode={openEpisode}
          selectAnime={selectAnime}
          setSelectEp={setSelectEp}
          selectEp={selectEp}
        />
      </div>

      <FilterBar
        setFilterBarOpen={setFilterBarOpen}
        filterBarOpen={filterBarOpen}
        selectGenero={selectGenero}
        filterMovies={filterMovies}
        openPopup={openPopup}
        setSelectAnime={setSelectAnime}
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

      <main
        className={`mx-20 pt-10 ${
          filterBarOpen ? "blur-sm" : "blur-0"
        } duration-500 transition-all`}
      >
        <Search
          openPopup={openPopup}
          filterMoviesContainer={filterMoviesContainer}
          filteredMovies={filteredMovies}
          handlechange={handlechange}
          search={search}
          setSelectAnime={setSelectAnime}
        />

        <MovieArea
          openPopup={openPopup}
          Movies={Movies}
          handlePopup={handlePopup}
          setSelectAnime={setSelectAnime}
          setSelectEp={setSelectEp}
        />
      </main>

      {isLoad && <Preloader />}
    </div>
  );
}
