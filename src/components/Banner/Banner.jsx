import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './Banner.css'

const Banner = () => {
    const { trendingMovies } = useContext(Context);
    const result = trendingMovies.results || [];

  return (
    <div className='banner'>
        {
            result.map((trend, index) => (
                <div className='banner-image'  key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`} alt='...'/>
                </div>
            )) 
        }
    </div>
  )
}

export default Banner
