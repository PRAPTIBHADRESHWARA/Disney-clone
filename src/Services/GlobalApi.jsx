import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d30d96cb651bd42db2e97529a9e43405"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d30d96cb651bd42db2e97529a9e43405';

//2ec0d66f5bdf1dd12eefa0723f1479cf
//https://api.themoviedb.org/3/movie/550?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}

