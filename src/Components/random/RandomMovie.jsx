import React from 'react'

import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import Movie from '../../assets/db/capas'

export default function RandomMovie({openPopup}) {
    const handleMovie = () => {
        const randomIndex = Math.floor(Math.random() * Movie.length);
        const randomMovieSrc = Movie[randomIndex].video_url;
        openPopup(randomMovieSrc);
    }
    return (
        <>
            <GiPerspectiveDiceSixFacesRandom onClick={handleMovie} className='cursor-pointer hover:fill-orange-400 duration-300 transition-all' size={30} color='white' />
        </>
    )
}