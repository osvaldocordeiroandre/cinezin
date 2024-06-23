import React from 'react'

export default function Popup({closePopup, iframeLink, popupOpen}) {
    return (
        <>
                <div className={`fixed top-[20%] z-[2000] ${popupOpen ? 'visible' : 'invisible'}`}>
                    <div className={`fixed top-0 left-0 w-full h-full bg-black ${popupOpen ? 'opacity-[.9]' : 'opacity-0'} z-0 duration-500 transition-all`}></div>
                    <iframe className='w-[90vw] h-[60vh] rounded-xl border-none relative' src={iframeLink} frameborder="0" allowFullScreen />
                    <button className='absolute top-0 right-0 text-3xl z-[1000] border-none mt-[10px] mr-3 cursor-pointer bg-black p-[14px] text-white hover:bg-red-600 rounded-md transition-all' onClick={closePopup}>X</button>
                </div>
        </>
    )
}
