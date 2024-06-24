import Movies from "../../assets/db/capas";

export default function Popup({
  closePopup,
  iframeLink,
  popupOpen,
  setIframeLink,
  setOpenEpisode,
  openEpisode,
  setEpisodiosOpen,
  episodiosOpen,
  selectMedia,
}) {
  return (
    <>
      <div
        className={`fixed top-[20%] z-[2000] ${
          popupOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black ${
            popupOpen ? "opacity-[.9]" : "opacity-0"
          } z-0 duration-500 transition-all`}
        ></div>
        <iframe
          className="w-[90vw] h-[60vh] rounded-xl border-none relative"
          src={iframeLink}
          frameborder="0"
          allowFullScreen
        />
        <button
          className="absolute top-0 right-0 text-3xl z-[1000] border-none mt-[10px] mr-3 cursor-pointer bg-black p-[14px] text-white hover:bg-red-600 rounded-md transition-all"
          onClick={closePopup}
        >
          X
        </button>
        <div className="text-white absolute w-full text-right mt-4">
          {selectMedia === "Tv" && (
            <>
              <button
                className={`bg-zinc-700 p-1 mr-1 hover:bg-zinc-600 ${
                  episodiosOpen ? "visible" : "invisible"
                }`}
                onClick={() => setEpisodiosOpen(false)}
              >
                X
              </button>

              <button
                onClick={() => setOpenEpisode(!openEpisode)}
                className={`bg-zinc-800 p-1 rounded-md hover:bg-zinc-700 text-lg ${
                  episodiosOpen ? "visible" : "invisible"
                }`}
              >
                Episódios
              </button>
            </>
          )}

          <div
            className={`bg-zinc-800 w-[150px] h-[170px] overflow-auto  p-2 rounded-md absolute right-0 top-[120px] space-y-2 ${
              openEpisode ? "-translate-y-[300px]" : "translate-y-[40%]"
            } ${openEpisode ? "visible" : "invisible"} ${
              openEpisode ? "opacity-1" : "opacity-0"
            } ${episodiosOpen ? "-translate-y-[300px]" : "translate-y-[40%]"} ${
              episodiosOpen ? "visible" : "invisible"
            } ${
              episodiosOpen ? "opacity-1" : "opacity-0"
            } duration-700 transition-all`}
          >
            {Movies[0].episodes.map((episode) => (
              <div key={episode.id}>
                <button
                  onClick={() => setIframeLink(episode.link)}
                  className="hover:bg-zinc-700 p-1 rounded-md w-full"
                >
                  Episódio: {episode.Ep}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
