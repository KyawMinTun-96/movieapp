import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { useParams } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import './MovieCard.css'

const MovieCard = ({data = [], cardType, imageURL, mediaType}) => {

    //Get URL parameters
    const params = useParams();

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
                    <Link 
                    to={`/${mediaType? (mediaType || params.explore) : params.explore}/${result.id}`} 
                    key={index} 
                    className='card-body'
                    >
                        <img src={imageURL + result?.poster_path || result?.backdrop_path} alt='...' />

                        <div className='card-trending'>
                            # {index + 1} {cardType}
                        </div>

                        <div className='card-info'>
                            <h4>
                                {   
                                    result?.title?.length > 25 
                                    ? result.title.substring(0, 25) + '...'
                                    :result?.original_title?.length > 25
                                    ? result.original_title.substring(0, 25) + '...'
                                    :result?.original_name?.length > 25
                                    ? result.original_name.substring(0, 25) + '...'
                                    :result?.title || result?.original_title || result?.original_name
                                }
                            </h4>


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
