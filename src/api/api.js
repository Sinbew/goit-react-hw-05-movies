import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const fetchTrends = async () => {
//   const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
//   return response.data.results;
// };

// export const fetchSearch = async () => {
//   const response = await axios.get(
//     `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
//   );

//   return response.data.results;
// };
const API_KEY = '78a8eb0d5a179699f4c03c65891d2438';
const BASE_URL = 'https://api.themoviedb.org/3';
const defaultParams = {
  api_key: API_KEY,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const fetchTrends = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/week');
  return data.results;
};
export const getSerchMovies = async query => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params: { query },
  });
  return data.results;
};
export const getDetailsMovies = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};
export const getCastMovies = async id => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};
export const getRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data.results;
};
