import { Home } from "./Home";
import { Movie } from "./Movie";
import { MoviesProvider } from "./MoviesProvider";
import { NavigationProvider } from "./NavigationProvider";
import { Route } from "./Route";
import { useMovies } from "./useMovies";
import { useNavigation } from "./useNavigation";
import { useRef, useEffect } from "react";

function App() {
  const { push } = useNavigation();
  const { movies, fetchMovies } = useMovies();

  const fetchMoviesRef = useRef(fetchMovies);
  fetchMoviesRef.current = fetchMovies;

  useEffect(() => {
    fetchMoviesRef.current();
  }, []);

  return (
    <>
      <header className="header_container">
        <h1 className="header_brand">
          <a className="header_brandLink" onClick={() => push("/")}>
            Cineminer
          </a>
        </h1>
        <div className="header_strip"></div>
      </header>

      <Route path="/">
        <Home />
      </Route>
      {movies &&
        movies.map((movie) => (
          <Route key={movie.id} path={`/${movie.slug}`}>
            <Movie movie={movie} />
          </Route>
        ))}
    </>
  );
}

const AppWithProviders = () => (
  <NavigationProvider>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </NavigationProvider>
);

export default AppWithProviders;
