import { renderBase } from "./base.js";

export const renderMovie = ({ movie }) => {
  const stylesheets = ["/css/movie.css"];
  const scripts = [];
  const content = `
     <main class="main_container">
      <div class="main_content">
        <h2 class="main_title">${movie.title}</h2>

        <section class="movie_container">
          <img class="movie_image" src="${movie.imageUrl}" />

          <dl class="movie_info">
            <dt class="movie_infoFieldTitle">Duração:</dt>
            <dd class="movie_infoFieldDescription">${movie.duration}</dd>

            <dt class="movie_infoFieldTitle">Nome Original:</dt>
            <dd class="movie_infoFieldDescription">${movie.originalTitle}</dd>

            <dt class="movie_infoFieldTitle">Sinopse:</dt>
            <dd class="movie_infoFieldDescription">${movie.sinopsis}</dd>

            <dt class="movie_infoFieldTitle">Direção</dt>
            <dd class="movie_infoFieldDescription">${movie.director}</dd>

            <dt class="movie_infoFieldTitle">Distribuição:</dt>
            <dd class="movie_infoFieldDescription">${movie.distribution}</dd>
          </dl>
        </section>

        <a href="/" class="movie_buyTicketButton">Comprar Ingresso</a>
      </div>
    </main>
  `;

  return renderBase({
    content,
    scripts,
    stylesheets,
    title: movie.title,
  });
};
