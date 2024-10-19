import { createContext, useEffect, useState } from "react";
import { assets } from "../assets/images/others/assets";
import axios from "axios";


export const Context = createContext(null);
const ContextProvider = (props) => {

    // TMDB API
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);


    const imageURL = 'https://image.tmdb.org/t/p/w500/';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`

    const fetchData = async (url, setter)  => {

        try {
            const { data } = await axios.get(url);
            setter(data);

        }catch(error) {
            console.log('Error:', error);
        }
    }


    useEffect(() => {
        fetchData('/movie/top_rated?language=en-US&page=1', setTopRatedMovies);
        fetchData('/trending/all/week?language=en-US', setTrendingMovies);
        fetchData('/movie/now_playing', setNowPlayingMovies);
        fetchData('/movie/popular', setPopularMovies);
        fetchData('/movie/upcoming', setUpcomingMovies);

    }, [])


    const contextValue = {
        assets,
        imageURL,
        trendingMovies,
        setTrendingMovies,
        nowPlayingMovies,
        setNowPlayingMovies,
        topRatedMovies,
        setTopRatedMovies,
        popularMovies,
        setPopularMovies,
        upcomingMovies,
        setUpcomingMovies
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;