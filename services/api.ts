export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/w500',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
};

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query ?
        `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false` :
        `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=false`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
    console.log(endpoint)
    if (!response.ok) {
        const text = await response.text();
        console.error('Status:', response.status);
        console.error('Body:', text);
        throw new Error(`TMDB error ${response.status}`);
    }

    const data = await response.json();
    return data.results;

};