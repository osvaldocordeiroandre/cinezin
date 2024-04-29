import React from 'react'

export default function IframeLoaded({iframeLoad}) {
    return (
        <>
            {iframeLoad && (
                <div className='fixed top-[20%] z-[2000] bg-zinc-800 w-[90vw] h-[60vh] rounded-xl border-none animate-iframe-Fade'></div>
            )}
        </>
    )
}
