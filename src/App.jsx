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

  const [filter, setFiltter] = useState(false);

  const handlePopup = () => {
    setFiltter(true);
  };

  useEffect(() => {
    if (filter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [filter]);

  useEffect(() => {
    if (isLoad) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoad]);

  return (
    <div className="w-full h-full bg-[#1E2122] flex flex-col">
      <ScrollTop />
      <Header openPopup={openPopup} />

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
        />
        <div className="flex flex-col justify-center items-center">
          <FilterPopup
            filter={filter}
            filterMovies={filterMovies}
            setFiltter={setFiltter}
            openPopup={openPopup}
            setSelectGenero={setSelectGenero}
          />
        </div>
        <MovieArea
          openPopup={openPopup}
          Movies={Movies}
          handlePopup={handlePopup}
        />
      </main>

      {isLoad && <Preloader />}
    </div>
  );
}
