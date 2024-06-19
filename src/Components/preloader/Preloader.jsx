import React from 'react'

export default function Preloader() {
  return (
    <div className='w-full h-screen fixed top-0 z-50 bg-[#1E2122] flex justify-center items-center'>
      <span className='text-white font-bold text-4xl drop-shadow-xl animate-pulse'>Cinezin</span>
    </div>
  )
}
