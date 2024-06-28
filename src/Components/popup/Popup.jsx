export default function Popup({
  closePopup,
  iframeLink,
  popupOpen,
  setIframeLink,
  setOpenEpisode,
  openEpisode,
  selectAnime,
  setSelectEp,
  selectEp,
}) {
  return (
    <>
      <div
        className={`fixed top-[20%] z-[2000] ${
          popupOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`ixed top-0 left-0 w-full h-full bg-black ${
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
          {selectAnime.type === "TV" && (
            <>
              <button
                onClick={() => setOpenEpisode(!openEpisode)}
                className={`bg-zinc-800 p-1 rounded-md hover:bg-zinc-700 text-lg border-none`}
              >
                Episódios
              </button>
            </>
          )}

          <div
            className={`bg-zinc-800 w-[150px] h-[249px] overflow-auto  p-2 rounded-md absolute right-0 top-[120px] space-y-2 ${
              openEpisode ? "-translate-y-[376px]" : "-translate-y-[300px]"
            } ${openEpisode ? "visible" : "invisible"} ${
              openEpisode ? "opacity-1" : "opacity-0"
            } duration-700 transition-all`}
          >
            {selectAnime.episodes &&
              selectAnime.episodes.map((episode) => (
                <div key={episode.id}>
                  <button
                    onClick={() => {
                      setIframeLink(episode.video_url);
                      setSelectEp(episode.episode_number);
                    }}
                    className={`over:bg-zinc-700 p-1 rounded-md w-full duration-100 transition-all ${
                      episode.episode_number === selectEp
                        ? "bg-orange-600"
                        : null
                    } ${
                      episode.episode_number === selectEp
                        ? "text-orange-950"
                        : null
                    }`}
                  >
                    Episódio: {episode.episode_number}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
