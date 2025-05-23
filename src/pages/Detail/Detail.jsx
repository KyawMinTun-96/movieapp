import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import MovieCard from '../../components/MovieCard/MovieCard'
import axios from 'axios';
import { Context } from '../../Context/Context'
import './Detail.css'


const Detail = () => {

  const params = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [recommands, setRecommands] = useState([]);
  const { imageURL} = useContext(Context);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get(`/${params.explore}/${params.id}`);
        setMovieDetails(response.data);

        const response2 = await axios.get(`/${params.explore}/${params.id}/recommendations`);
        setRecommands(response2.data);
      }catch(error) {
        console.log('Error:', error);
      }
    }

    fetchData();
  }, [params.explore, params.id]);



console.log(movieDetails);


  return (
    <div className='detail'>

      <div className='detail-poster'>
        <div className='detail-image'>
          <img src={imageURL + movieDetails?.poster_path || movieDetails?.backdrop_path} alt='...'/>
          <div className='detail-layout'></div>
        </div>
      </div>

      <div className='container poster-gp'>
        <div className='poster-img'>
            <img src={imageURL + movieDetails?.poster_path || movieDetails?.backdrop_path} alt='...'/>
        </div>

        <div className='poster-info'>
          <h2>{movieDetails?.original_title || movieDetails?.title || movieDetails?.original_name}</h2>
          <p className='poster-detail'>{movieDetails?.tagline}</p>
          <hr></hr>
          <div className='poster-ranking'>
            <p>Rating : {Number(movieDetails?.vote_average || 0).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(movieDetails?.popularity || 0).toFixed(0)} </p>
            <span>|</span>
            <p>Duration: {movieDetails?.runtime || movieDetails?.episode_run_time}</p>
          </div>
          <hr></hr>
          <div className='poster-overview'>
            <h3>Overview</h3>
            <p>{movieDetails?.overview}</p>
          </div>
          <hr></hr>
          <div className='poster-status'>
            <p>Status: {movieDetails?.status}</p>
            <span> | </span>
            <p>Release Date: {moment(movieDetails?.release_date).format('MMM Do YYYY')}</p>
            <span> | </span>
            <p>Revenue: {movieDetails?.revenue || 0}</p>
          </div>
          <hr></hr>
          <div>
              <p className='poster-director'>Director: None</p>
          </div>
          <hr></hr>
          <div className='poster-writer'>
              <p>Writer: None</p>
          </div>
          <hr></hr>
          <div className='poster-cast'>
              <p>Cast: None</p>
          </div>
        </div>
      </div>

      <div className='container recommend'>
        <MovieCard data={recommands.results || []} cardType="Recommends" imageURL={imageURL} mediaType={''}/>
      </div>
    </div>
  )
}

export default Detail
