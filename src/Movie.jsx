import "./Movie.css";

export const Movie = ({ movie }) => {
  return (
    <main className="main_container">
      <div className="main_content">
        <h2 className="main_title">{movie.title}</h2>

        <section className="movie_container">
          <img className="movie_image" src={movie.imageUrl} />

          <dl className="movie_info">
            <dt className="movie_infoFieldTitle">Duração:</dt>
            <dd className="movie_infoFieldDescription">{movie.duration}</dd>

            <dt className="movie_infoFieldTitle">Nome Original:</dt>
            <dd className="movie_infoFieldDescription">
              {movie.originalTitle}
            </dd>

            <dt className="movie_infoFieldTitle">Sinopse:</dt>
            <dd className="movie_infoFieldDescription">{movie.sinopsis}</dd>

            <dt className="movie_infoFieldTitle">Direção</dt>
            <dd className="movie_infoFieldDescription">${movie.director}</dd>

            <dt className="movie_infoFieldTitle">Distribuição:</dt>
            <dd className="movie_infoFieldDescription">{movie.distribution}</dd>
          </dl>
        </section>
      </div>
    </main>
  );
};
