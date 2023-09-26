import { useMovies } from "./useMovies";
import { useNavigation } from "./useNavigation";
import "./Home.css";

export const Home = () => {
  const { movies } = useMovies();
  const { push } = useNavigation();

  return (
    <main className="main_container">
      <div className="main_content">
        <h2 className="main_title">Filmes em Cartaz</h2>

        <section className="movies_container">
          <ul className="movies_list">
            {movies
              ? movies.map((movie) => (
                  <li key={movie.id} className="movies_listItem">
                    <a onClick={() => push(`/${movie.slug}`)}>
                      <div className="movies_listItemImageContainer">
                        <img
                          className="movies_listItemImage"
                          src={movie.imageUrl}
                        />
                      </div>

                      <h3 className="movies_listItemTitle">{movie.title}</h3>
                    </a>
                  </li>
                ))
              : "Loading..."}
          </ul>
        </section>
      </div>
    </main>
  );
};
