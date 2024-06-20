import { useState } from "react";

export default function FilterPopup({
  filter,
  filterMovies,
  setFiltter,
  openPopup,
  setSelectGenero,
}) {
  return (
    <>
      {filter && (
        <div className="bg-[#1E2122] w-full h-full fixed top-0 left-0 z-10 flex flex-col justify-center items-center">
          <div className="fixed top-[16%] bg-zinc-800 w-[96vw] h-[70vh] p-4 rounded-md  overflow-y-auto">
            <div className="flex justify-between items-center">
              <div className="pb-3 cd:w-[500px]  space-y-2 space-x-1">
                <button
                  onClick={() => setSelectGenero("")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Todos
                </button>
                <button
                  onClick={() => setSelectGenero("Comédia")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Comédia
                </button>
                <button
                  onClick={() => setSelectGenero("Infantil")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Infantil
                </button>
                <button
                  onClick={() => setSelectGenero("Ação")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Ação
                </button>
                <button
                  onClick={() => setSelectGenero("Drama")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Drama
                </button>
                <button
                  onClick={() => setSelectGenero("Fantasia")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Fantasia
                </button>
                <button
                  onClick={() => setSelectGenero("Musical")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Musical
                </button>
                <button
                  onClick={() => setSelectGenero("Aventura")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Aventura
                </button>
                <button
                  onClick={() => setSelectGenero("Thriller")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Thriller
                </button>
                <button
                  onClick={() => setSelectGenero("Crime")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Crime
                </button>
                <button
                  onClick={() => setSelectGenero("Ficção científica")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Ficção científica
                </button>
                <button
                  onClick={() => setSelectGenero("Terror")}
                  className="text-white bg-zinc-700 p-1 rounded-md cursor-pointer hover:bg-zinc-600 transition-all"
                >
                  Terror
                </button>
              </div>
              <button
                className="text-base z-[1000] border-none cursor-pointer bg-black p-[14px] text-white hover:bg-red-600 rounded-md transition-all"
                onClick={() => setFiltter(false)}
              >
                X
              </button>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-2">
              {filterMovies.map((filtred) => (
                <div key={filtred.id} onClick={() => openPopup(filtred.link)}>
                  <img
                    className="w-[150px] rounded-md z-50 cursor-pointer hover:scale-[1.1] transition-transform"
                    src={filtred.imagem}
                    alt={filtred.nome}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
