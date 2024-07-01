import React from "react";

export default function PopupAn({setMessageAn}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-40 flex justify-center items-center">
      <div className="bg-zinc-800 max-w-[600px] max-h-[300px] w-full h-full z-50 rounded-md flex-wrap overflow-auto p-6 text-white relative">
        <p>
          I saw the message and responded directly through the app, the only way
          to see it is to open League of Legends to see the full message, I miss
          you, I'll be waiting for you, I just want you, be well, I'll always be
          here, I won't block you anywhere, you can send as many messages as you
          want, I'll be there to respond, but I replied saying that I was online
          at that time, but I was just looking at whats, tiktok, insta and
          looking at your history on cell phone, I hadn't notified your message,
          sorry, I really miss you, I miss you, I love you so much, send a
          message as soon as I can, I'll always leave the game open so I can see
        </p>

        <div className="flex justify-center mt-5">
          <button className="bg-red-600 p-2 rounded-md absolute top-3 right-3 outline-none" onClick={() => setMessageAn(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
