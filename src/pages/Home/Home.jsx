import React from 'react'
// import { useContext } from 'react'
// import { Context } from '../../Context/Context'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Home.css'
const Home = () => {

  // const { assets, trendingMovies } = useContext(Context);
  // const result = trendingMovies.results || [];

  // console.log(assets);
  // console.log(result);


  return (
    <div className='home'>
        <MovieCard />
    </div>
  )
}

export default Home
