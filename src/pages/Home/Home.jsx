import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Home.css'
const Home = () => {

  const { imageURL, trendingMovies, nowPlayingMovies, topRatedMovies, popularMovies, upcomingMovies} = useContext(Context);
  const nowPlaying = nowPlayingMovies.results || [];
  const trending = trendingMovies.results || [];
  const topRated = topRatedMovies.results || [];
  const popular = popularMovies.results || [];
  const upcoming = upcomingMovies.results || [];



  return (
    <div className='home'>
        <MovieCard data={trending} cardType="Trending" imageURL={imageURL}/>
        <MovieCard data={nowPlaying} cardType="Now Playing" imageURL={imageURL}/>
        <MovieCard data={topRated} cardType="Top Rated" imageURL={imageURL}/>
        <MovieCard data={popular} cardType="Popular" imageURL={imageURL}/>
        <MovieCard data={upcoming} cardType="Upcoming" imageURL={imageURL}/>
    </div>
  )
}

export default Home
