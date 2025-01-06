const API_KEY = "ea9a2e1ff16f544958efef46671c4b60";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key ${API_KEY}` );
    const data = await response.json()
    return data.results  
};

// Search popular movies
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key ${API_KEY}${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results;
};