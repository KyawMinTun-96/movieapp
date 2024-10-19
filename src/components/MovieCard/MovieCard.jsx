import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import moment from 'moment';
import './MovieCard.css'

const MovieCard = () => {

    const { imageURL, trendingMovies } = useContext(Context);
    const results = trendingMovies.results || [];
    console.log(results);


  return (
    <div className='movie-card'>
        <h2>Trending Show</h2>
        <div className='movie-card-body'>
            {
                results.map((result, index) => (
                    <Link to='/' key={index} className='card-body'>
                        <img src={imageURL + result?.poster_path} alt='...' />

                        <div className='card-trending'>
                            # {index + 1} Trending
                        </div>

                        <div className='card-info'>
                            <h4>{(result?.title || result?.name).length > 27 ? (result?.title || result?.name).substring(0, 27) + '...' : result?.title || result?.name }</h4>
                            <div className='card-date'>
                                <p>{moment(result?.release_date || result?.first_air_date).format('MMM Do YYYY')}</p>
                                <p>Rating : <span className='card-rating'>{Number(result.vote_average).toFixed(1)}</span></p>
                            </div>
                        </div>
                    </Link>   
                ))
            }
        </div>
    </div>
  )
}

export default MovieCard;
