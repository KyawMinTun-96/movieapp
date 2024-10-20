import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../Context/Context'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Explore.css'
import axios from 'axios';

const Explore = () => {

  const params = useParams();
  const { imageURL} = useContext(Context);
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async() => {
    try{

      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      })

      setData((prev) => {
        return(
          [
            ...prev,
            response.data.results
          ]
        )
      })

      setTotalPageNo(response.data.total_pages);

    }catch(error) {
      console.log('Error:', error);
    }
  }

  const handleScroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);


  return (
    
    <div className='explore'>
      <div className='container'>
        <h2>Popular {params.explore} Show</h2>

        <div className='explore-card'>
          {
            data.map((result, index) => (
              <MovieCard key={index + 'exploreSection'} data={result} cardType="" imageURL={imageURL} mediaType={params.explore}/>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Explore
