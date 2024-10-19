import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import './Banner.css'

const Banner = () => {
    const { imageURL, trendingMovies } = useContext(Context);
    const result = trendingMovies.results || [];
    const [currentImage, setCurrentImage] = useState(0);

    const nextHandler  = useCallback(() => {
      if(currentImage < result.length -1) {
        setCurrentImage((prev) => prev + 1)
      }
    }, [currentImage, result.length] );

    const prevHandler  = () => {
      if(currentImage > 0) {
        setCurrentImage((prev) => prev - 1)
      }
    }

    useEffect(() => {
      const interval = setInterval(() => {
        if(currentImage < result.length -1) {
          nextHandler();
        }else {
          setCurrentImage(0);
        }
      }, 5000);

      return() => clearInterval(interval);
    },[result.length, currentImage, nextHandler]);

  return (
    <div className='banner'>
        <div className='banner-container'>
        {
            result.map((trend) => (
                <div key={trend.id}  className='banner-group' style={{transform: `translateX(-${currentImage * 100}%)`}}>
                    <div className='banner-image'>
                        <img src={imageURL + trend.poster_path} alt='...' />
                    </div>

                    <div className='banner-slider'>
                      <button onClick={() => prevHandler()} className='btn-left'>
                        <MdArrowBackIosNew className='btn-left-icon' />
                      </button>
                      <button onClick={() => nextHandler()} className='btn-next'>
                        <MdArrowForwardIos className='btn-next-icon' />
                      </button>
                    </div>


                    <div className='banner-layout'></div>

                    <div className='banner-info'>
                      <h2>{trend?.title || trend?.name}</h2>
                      <p>{trend.overview.substring(0, 230)}...</p>

                      <div className='banner-ranking'>
                        <p>Rating : { Number(trend.vote_average).toFixed(1) }+</p>
                        <span>|</span>
                        <p>View : { Number(trend.popularity).toFixed(0)} </p>
                      </div>

                      <button className='banner-btn'>
                        Play Now
                      </button>

                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Banner;



