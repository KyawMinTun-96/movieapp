import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import './MovieCard.css'

const MovieCard = ({data = [], cardType, imageURL}) => {

    // Reference to the movie-card-body
    const scrollRef = useRef(null);

    // Scroll left function
    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // Adjust this value as needed (pixels to scroll left)
            behavior: 'smooth'
        });
    };


    // Scroll right function
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300, // Adjust this value as needed (pixels to scroll right)
            behavior: 'smooth'
        });
    };

  return (
    <div className='movie-card'>
        <h2>{cardType}</h2>
        <div className='movie-card-body' ref={scrollRef}>
            {
                data.map((result, index) => (
                    <Link to={'/' + result?.media_type + '/' + result.id} key={index} className='card-body'>
                        <img src={imageURL + result?.poster_path || result?.backdrop_path} alt='...' />

                        <div className='card-trending'>
                            # {index + 1} {cardType}
                        </div>

                        <div className='card-info'>
                            <h4>{(result?.title || result?.name).length > 27 ? (result?.title || result?.name).substring(0, 20) + '...' : result?.title || result?.name }</h4>
                            <div className='card-date'>
                                <p>{moment(result?.release_date || result?.first_air_date).format('MMM Do YYYY')}</p>
                                <p>Rating : <span className='card-rating'>{Number(result.vote_average).toFixed(1)}</span></p>
                            </div>
                        </div>
                    </Link>   
                ))
            }
        </div>

        <div className='card-slider'>
            <button className='card-btn-left' onClick={scrollLeft}>
                <MdArrowBackIosNew className='card-left-icon' />
            </button>
            <button className='card-btn-right' onClick={scrollRight}>
                <MdArrowForwardIos className='card-right-icon' />
            </button>
        </div>
    </div>
  )
}

export default MovieCard;
