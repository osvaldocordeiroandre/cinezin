import React from 'react'

import { FaPlay } from "react-icons/fa";

import RandomMovie from '../random/RandomMovie';
import SlideInfos from '../../assets/Slidedb/dbSlide'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Header({ openPopup }) {
    return (
        <div>
            <div className='flex items-center justify-between mx-8 pt-8 bg-transparent'>
                <div>
                    <h1 className='text-white font-bold text-2xl drop-shadow-xl cursor-pointer'>Cinezin</h1>
                </div>
                <div className='group'>
                    <RandomMovie className='relative' openPopup={openPopup} />
                    <span className='text-white absolute text-xs hidden group-hover:flex'>filme aleatório</span>
                </div>
            </div>
            
            <Slide arrows={false}>
                {SlideInfos.map((slide, index) => (
                    <header key={slide.id} style={{ 'backgroundImage': `url(${slide.imagem})` }} className='w-full h-[450px] bg-cover bg-center from-black sm:h-[570px] mt-8 relative'>

                        <div className='flex items-center justify-around w-full sm:flex-col'>
                            <div >
                                <h1 className='text-white text-5xl font-bold mx-8 mt-20 '>{slide.nome}</h1>
                                <div className='max-w-[600px] mx-14 mt-6'>
                                    <span className='text-white sm:hidden '> {slide.sinopse}
                                    </span>
                                </div>
                                <div className='mx-14 mt-4'>
                                    <span className='text-white'><strong>Data de lançamento:</strong> {slide.date}</span>
                                </div>
                                <div className='mx-14 mt-1'>
                                    <span className='text-white'><strong>Duração:</strong> {slide.Duration}</span>
                                </div>
                            </div>

                            <div className='relative cursor-pointer hover:scale-[.9] transition-all flex justify-center items-center w-80 mt-20' onClick={() => openPopup(`${slide.link}`)}>
                                <img className=' rounded-xl' src={slide.preview} alt={slide.nome} />
                                <FaPlay className='absolute shadow-xl animate-pulse' color='orange' size={30} />
                            </div>
                        </div>
                    </header>
                ))}
            </Slide>
        </div>
    )
}
