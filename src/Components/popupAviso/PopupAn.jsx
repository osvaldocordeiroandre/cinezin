import React from "react";

export default function PopupAn({ setMessageAn }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-40 flex justify-center items-center">
      <div className="bg-zinc-800 max-w-[600px] max-h-[300px] w-full h-full z-50 rounded-md flex-wrap overflow-auto p-6 text-white relative">
        <p>
          Save this new site, I will remove the messages from here and put
          everything on this one
          <a className="text-orange-500 mx-2" href="https://anmessages.netlify.app/">
            Clike here
          </a>
          I'm still fixing it.
        </p>

        <div className="flex justify-center mt-5">
          <button
            className="bg-red-600 p-2 rounded-md absolute top-3 right-3 outline-none"
            onClick={() => setMessageAn(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
