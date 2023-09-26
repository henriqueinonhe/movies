import { useContext } from "react";
import { MoviesContext } from "./MoviesProvider";
import { fetchMovies as dbFetchMovies } from "./db";

export const useMovies = () => {
  const value = useContext(MoviesContext);

  if (!value) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }

  const { movies, setMovies } = value;

  const fetchMovies = async () => {
    const movies = await dbFetchMovies();

    setMovies(movies);
  };

  return {
    movies,
    fetchMovies,
  };
};
