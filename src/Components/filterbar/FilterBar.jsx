import React from "react";
import ImageSkelet from "../imageSkelet/ImageSkelet";

export default function FilterBar({
  filterBarOpen,
  setFilterBarOpen,
  selectGenero,
  filterMovies,
  openPopup,
  setSelectAnime
}) {
  return (
    <div
      className={`bg-[#1E2122] w-full h-[80%] fixed bottom-0 left-0  z-50 ${
        filterBarOpen ? "translate-y-[10%]" : "translate-y-full"
      } duration-700 transition-all overflow-y-auto ${
        filterBarOpen ? "visible" : "invisible"
      }`}
    >
      <div className="flex justify-between text-white p-4">
        <span className="text-4xl font-light">{selectGenero}</span>
        <div className=" p-1 rounded-md cursor-pointer">
          <button
            className="hover:bg-red-600 rounded-md transition-all text-3xl z-[1000] border-none p-2"
            onClick={() => setFilterBarOpen(false)}
          >
            X
          </button>
        </div>
      </div>
      <div className="bg-white h-1 w-20 mt-2"></div>

      <div className="grid grid-cols-4 mx-auto gap-2 w-[800px] pt-10 pb-20 cd:grid-cols-3 cd:w-[80%]">
        {filterMovies.map((movieGenre) => (
          <div
            key={movieGenre.id}
            onClick={() => {
              openPopup(movieGenre.video_url);
              setSelectAnime(movieGenre);
              set
            }}
          >
            <ImageSkelet
              src={movieGenre.image_url}
              alt={movieGenre.title}
              hash={movieGenre.hash}
              width={200}
              height={265}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
