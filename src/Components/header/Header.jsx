import React from 'react'

import { FaPlay } from "react-icons/fa";

import RandomMovie from '../random/RandomMovie';

export default function Header({openPopup}) {
    return (
        <header className="bg-[linear-gradient(to_bottom,rgba(00,00,00,0.4),rgba(0,0,0,0.9)),url('https://pbs.twimg.com/media/ESRW1H0XUAEZU2l?format=jpg&name=large')] w-full h-[450px] bg-cover bg-center from-black sm:h-[570px]">
            <div className='flex items-center justify-between mx-8 pt-8'>
                <div>
                    <h1 className='text-white font-bold text-2xl drop-shadow-xl cursor-pointer'>Cinezin</h1>
                </div>
                <div className='group'>
                    <RandomMovie className='relative' openPopup={openPopup} />
                    <span className='text-white absolute text-xs hidden group-hover:flex'>filme aleatório</span>
                </div>
            </div>

            <div className='flex items-center justify-around w-full sm:flex-col'>
                <div >
                    <h1 className='text-white text-5xl font-bold mx-8 mt-20 '>Um brilho Eterno</h1>
                    <div className='max-w-[600px] mx-14 mt-6'>
                        <span className='text-white sm:hidden '> Joel se surpreende ao saber que seu amor verdadeiro, Clementine, o apagou completamente de sua memória. Ele decide fazer o mesmo, mas muda de ideia. Preso dentro da própria mente enquanto os especialistas se mantêm ocupados em seu apartamento, Joel precisa avisá-los para parar.
                        </span>
                    </div>
                    <div className='mx-14 mt-4'>
                        <span className='text-white'><strong>Data de lançamento:</strong> 23 de julho de 2004 (Brasil)</span>
                    </div>
                    <div className='mx-14 mt-1'>
                        <span className='text-white'><strong>Duração:</strong> 1h 48m</span>
                    </div>
                </div>

                <div className='relative cursor-pointer hover:scale-[.9] transition-all flex justify-center items-center w-80 mt-20 group' onClick={() => openPopup('https://drive.google.com/file/d/1dySm7ybfGNdcXeUWRjR-EAOyPGt3rIdI/preview')}>
                    <img className=' rounded-xl' src="https://newronio.espm.br/wp-content/uploads/2020/11/NewronioEternoBrilho.jpg" alt="" />
                    <FaPlay className='absolute shadow-xl invisible group-hover:visible' color='orange' size={30} />
                </div>
            </div>
        </header>
    )
}
