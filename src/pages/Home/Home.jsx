import React, { useContext } from 'react'
import './Home.css'
import { Context } from '../../Context/Context'

const Home = () => {

  const { assets, trendingMovies } = useContext(Context);
  const result = trendingMovies.results || [];

  console.log(assets);
  console.log(result);


  return (
    <div className='home'>
        <h1>Home Page</h1>
    </div>
  )
}

export default Home
