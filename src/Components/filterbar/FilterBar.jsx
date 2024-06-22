import React from "react";
import ImageSkelet from "../imageSkelet/ImageSkelet";

export default function FilterBar({filterBarOpen, setFilterBarOpen, selectGenero, filterMovies, openPopup}) {
  return (
    <div className={`bg-[#1E2122] w-full h-full fixed top-0 left-0  z-50 ${filterBarOpen ? 'translate-y-0' : 'translate-y-full'} duration-700 transition-all overflow-y-auto pb-10 ${filterBarOpen ? "visible" : "invisible"}`}>
      <div className="flex justify-between text-white p-4">
        <span className="text-4xl font-light">{selectGenero}</span>
        <div
          className=" p-1 rounded-md cursor-pointer"
        >
          <button className="hover:bg-red-600 rounded-md transition-all text-3xl z-[1000] border-none p-2" onClick={() => setFilterBarOpen(false)}>X</button>
        </div>
      </div>
      <div className="bg-white h-1 w-20 mt-2"></div>

      <div className="flex flex-wrap gap-2 justify-center items-center pt-10">
        {filterMovies.map((movieGenre) => (
            <div key={movieGenre.id} onClick={() => openPopup(movieGenre.link)}>
                <ImageSkelet src={movieGenre.imagem} alt={movieGenre.nome} hash={movieGenre.hash} width={200} height={265} />
            </div>
        ))}
      </div>
    </div>
  );
}
