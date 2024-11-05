import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = "7f803f6abb22fd06057fed554c09cf75"
// https://api.themoviedb.org/3/movie/550?api_key=7f803f6abb22fd06057fed554c09cf75
const getTrendingVideos= axios.get(movieBaseUrl+"/movie/now_playing?api_key"+api_key);

export default {
    getTrendingVideos
}