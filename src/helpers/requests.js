import { API_KEY } from "../apiUrl";
import { mediaType } from "../type";

export default {
  fetchTrending: `/trending/${mediaType.tv}/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/${mediaType.movie}/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/${mediaType.movie}?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/${mediaType.movie}?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/${mediaType.movie}?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/${mediaType.movie}?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOriginals: `/discover/${mediaType.tv}?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/${mediaType.movie}?api_key=${API_KEY}&with_genres=99`,
};
