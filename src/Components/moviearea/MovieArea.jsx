import React from "react";

import ImageSkelet from "../imageSkelet/ImageSkelet";

import { VscSettings } from "react-icons/vsc";

export default function MovieArea({
  openPopup,
  Movies,
  handlePopup,
  setSelectAnime,
  setSearch,
  setSelectEp,
}) {
  return (
    <div>
      <div className="text-white mt-10">
        <div className="flex justify-between">
          <span className="text-4xl font-light">Recentes</span>
          <div
            className="bg-zinc-900 p-1 rounded-md cursor-pointer hover:bg-zinc-800 flex items-center"
            onClick={handlePopup}
          >
            <span className="text-xl font-light ">Filtrar </span>
            <VscSettings className="ml-2" />
          </div>
        </div>
        <div className="bg-white h-1 w-20 mt-2"></div>

        <div className="flex flex-wrap gap-2 justify-center items-center py-10 w-full overflow-hidden pb-40">
          {Movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => {
                setSelectAnime(movie);
                setSearch(movie.title);

                if (movie.type === "TV") {
                  movie.episodes.find((ep, index) => {
                    if (ep.id === 1) {
                      openPopup(ep.video_url);
                      setSelectEp({
                        anime: ep.title,
                        Episode: ep.episode_number,
                        index: index,
                        Video: ep.video_url,
                      });
                    }
                  });
                } else {
                  openPopup(movie.video_url);
                }
              }}
              className="relative group"
            >
              <ImageSkelet
                src={movie.image_url}
                alt={movie.title}
                hash={movie.hash}
                width={200}
                height={265}
              />
              <div className="bg-zinc-700 w-[200px] rounded-lg p-4 absolute top-[270px] -left-[0px] z-50 invisible group-hover:visible flex-wrap shadow-lg group-hover:animate-Tranform-Y sm:hidden">
                <span>
                  <strong>Nome</strong>: {movie.title}
                </span>
                <div>
                  <span>
                    <strong>Genero</strong>:{movie.genre}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
