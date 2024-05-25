import { useEffect, useState } from 'react';

export default function ScrollTop() {
    const [backTop, setBackTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBackTop(true);
            } else {
                setBackTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div
                className='fixed bottom-10 right-10 z-[2px] cursor-pointer w-10 h-10 border-none shadow-lg bg-orange-500 rounded-lg hover:bg-orange-600 transition-all flex justify-center items-center'
                style={{ transform: `scale(${backTop ? 1 : 0})`, transition: 'transform .1s ' }}
                onClick={scrollUp}
            >
                <svg width="28" height="28" fill="white" viewBox="0 0 256 256"><path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z"></path></svg>
            </div>
        </>
    );
}
