import axios from "axios";
import { Movie } from "../types/movie";

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

const URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

export const fetchMovies = async(query: string, page: number): Promise<MovieResponse> => {
    const config = {
        params: {
            query,
            page,
        },

        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
    };

    const response = await axios.get<MovieResponse>(URL, config);
    return response.data;
}