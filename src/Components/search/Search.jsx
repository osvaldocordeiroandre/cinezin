import React from "react";

export default function Search({
  openPopup,
  filterMoviesContainer,
  filteredMovies,
  search,
  handlechange,
}) {
  return (
    <div className="text-white">
      <div>
        <div>
          <span className="text-2xl font-bold">Pesquisar</span>
        </div>
      </div>

      <div>
        <span>Pesquise seus filmes favoritos</span>
      </div>

      <div className="mt-4 relative">
        <input
          className="w-full bg-zinc-700 p-3 rounded outline-none"
          type="text"
          name=""
          placeholder="Nome do filme..."
          id=""
          value={search}
          onChange={handlechange}
        />

        {filterMoviesContainer && (
          <div className="bg-zinc-700 flex flex-wrap justify-center items-center gap-2 py-10 absolute w-full rounded-md z-30">
            {filteredMovies.map((itemsMovie) => (
              <div
                key={itemsMovie.id}
                onClick={() => openPopup(itemsMovie.link)}
              >
                <img
                  className="rounded-md cursor-pointer hover:scale-[1.1] transition-transform"
                  src={itemsMovie.imagem}
                  alt={itemsMovie.nome}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
