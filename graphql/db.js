import axios from 'axios';
const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export const getMovies = async (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    console.log(REQUEST_URL);
    const response = await axios.get(REQUEST_URL);
    return response.data.data.movies;
};
