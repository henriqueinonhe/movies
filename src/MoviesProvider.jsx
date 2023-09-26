import { createContext, useMemo, useState } from "react";

export const MoviesContext = createContext(undefined);

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(undefined);

  const value = useMemo(
    () => ({
      movies,
      setMovies,
    }),
    [movies, setMovies]
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
