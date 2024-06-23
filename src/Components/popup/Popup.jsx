import React from 'react'

export default function Popup({closePopup, iframeLink, popupOpen}) {
    return (
        <>
            {popupOpen && (
                <div className='fixed top-[20%] z-[2000] '>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-[.9] z-0'></div>
                    <iframe className='w-[90vw] h-[60vh] rounded-xl border-none relative' src={iframeLink} frameborder="0" allowFullScreen />
                    <button className='absolute top-0 right-0 text-3xl z-[1000] border-none mt-[10px] mr-3 cursor-pointer bg-black p-[14px] text-white hover:bg-red-600 rounded-md transition-all' onClick={closePopup}>X</button>
                </div>
            )}
        </>
    )
}
