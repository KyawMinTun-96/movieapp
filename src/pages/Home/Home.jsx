import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import MovieCard from '../../components/MovieCard/MovieCard'
import Banner from '../../components/Banner/Banner'
import './Home.css'
const Home = () => {

  const { imageURL, trendingMovies, nowPlayingMovies, topRatedMovies, popularTVShowMovies, upcomingMovies, onTheAir} = useContext(Context);
  const nowPlaying = nowPlayingMovies.results || [];
  const trending = trendingMovies.results || [];
  const topRated = topRatedMovies.results || [];
  const popular = popularTVShowMovies.results || [];
  const upcoming = upcomingMovies.results || [];
  const onAir = onTheAir.results || [];


  return (
    <>
      <Banner />
      
      <div className='container'>
        <div className='home'>
          <MovieCard data={trending} cardType="Trending" imageURL={imageURL} mediaType='movie' />
          <MovieCard data={nowPlaying} cardType="Now Playing" imageURL={imageURL} mediaType='movie' />
          <MovieCard data={topRated} cardType="Top Rated Movies" imageURL={imageURL} mediaType='movie' />
          <MovieCard data={popular} cardType="Popular TV Show" imageURL={imageURL} mediaType='tv' />
          <MovieCard data={upcoming} cardType="Upcoming" imageURL={imageURL} mediaType='movie' />
          <MovieCard data={onAir} cardType="On The Air" imageURL={imageURL} mediaType='tv' />
        </div>
      </div>
    </>

  )
}

export default Home
