import InfoButtons from "../../assets/buttonsinfo/ButtonsInfo";

export default function FilterPopup({ filter, selected }) {
  return (
    <div
      className={`bg-zinc-800 w-52 rounded-md z-10 flex flex-col justify-center items-center ${
        filter ? "translate-y-[470px]" : "translate-y-[140%]"
      } ${filter ? "visible" : "invisible"} ${
        filter ? "opacity-100" : "opacity-0"
      } duration-700 transition-all text-white absolute top-[330px] right-2 p-4 gap-2 sm:top-[450px] mp:top-[480px]`}
    >
      {InfoButtons.map((buttontext) => (
        <button
          className="p-1 hover:bg-zinc-700 w-full rounded-md cursor-pointer"
          onClick={() => selected(`${buttontext.text}`)}
          key={buttontext.id}
        >
          {buttontext.text}
        </button>
      ))}
    </div>
  );
}
