import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "adc28e655211e1133ca04aead6e3af29";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=adc28e655211e1133ca04aead6e3af29";

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
