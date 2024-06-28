import React from "react";

import ImageSkelet from "../imageSkelet/ImageSkelet";

export default function MovieArea({
  openPopup,
  Movies,
  handlePopup,
  setSelectAnime,
  setSearch,
<<<<<<< HEAD
  setSelectEp,
=======
>>>>>>> 65c52c968b68143c7510a5e1b63aa59947b227dd
}) {
  return (
    <div>
      <div className="text-white mt-10">
        <div className="flex justify-between">
          <span className="text-4xl font-light">Recentes</span>
          <div
            className="bg-zinc-900 p-1 rounded-md cursor-pointer hover:bg-zinc-800"
            onClick={handlePopup}
          >
            <span className="text-xl font-light ">Filtrar</span>
          </div>
        </div>
        <div className="bg-white h-1 w-20 mt-2"></div>

        <div className="flex flex-wrap gap-2 justify-center items-center py-10 w-full overflow-hidden pb-40">
          {Movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => {
<<<<<<< HEAD
                setSelectAnime(movie);
                setSearch(movie.title);

                if (movie.type === "TV") {
                  movie.episodes.forEach((ep) => {
                    if (ep.id === 1) {
                      openPopup(ep.video_url);
                      setSelectEp(ep.episode_number);
                    }
                  });
                } else {
                  openPopup(movie.video_url);
                }
=======
                openPopup(movie.video_url);
                setSelectAnime(movie);
                setSearch(movie.title);
>>>>>>> 65c52c968b68143c7510a5e1b63aa59947b227dd
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
