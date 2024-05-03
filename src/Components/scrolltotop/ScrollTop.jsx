import { useEffect, useState } from 'react'

import { IoIosArrowRoundUp } from "react-icons/io";

export default function ScrollTop() {
    const [backTop, setBackTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setBackTop(true)
            } else {
                setBackTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {backTop && (
                <div className='text-white fixed bottom-10 right-10 z-[2px] cursor-pointer w-10 h-10 border-none shadow-lg bg-orange-500 rounded-lg hover:bg-orange-300 hover:text-black transition-all' onClick={scrollUp}>
                    <IoIosArrowRoundUp size={40} />
                </div>
            )}
        </>
    )
}
