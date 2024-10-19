import { createContext, useEffect, useState } from "react";
import { assets } from "../assets/images/others/assets";
import axios from "axios";


export const Context = createContext(null);
const ContextProvider = (props) => {

    // TMDB API
    const [trendingMovies, setTrendingMovies] = useState([]);
    const imageURL = 'https://image.tmdb.org/t/p/w500/';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`

    const fetchTrendingData = async ()  => {

        try {
            const response = await axios.get('/trending/all/week?language=en-US');
            setTrendingMovies(response.data);

        }catch(error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        fetchTrendingData();
    }, [])


    const contextValue = {
        assets,
        trendingMovies,
        imageURL,
        setTrendingMovies
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;