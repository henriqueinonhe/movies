import { renderBase } from "./base.js";

export const renderHome = ({ movies }) => {
  const stylesheets = ["/pages/index/index.css"];

  const scripts = [];

  const content = `
    <main class="main_container">
      <div class="main_content">
        <h2 class="main_title">Filmes em Cartaz</h2>

        <section class="movies_container">
          <ul class="movies_list">
          ${movies.map(
            ({ title, imageUrl, slug }) => `
            <li class="movies_listItem">
              <a href="${slug}">
                <div class="movies_listItemImageContainer">
                  <img
                    class="movies_listItemImage"
                    src="${imageUrl}"
                  />
                </div>

                <h3 class="movies_listItemTitle">${title}</h3>
              </a>
            </li>
          `
          )}
          </ul>
        </section>
      </div>
    </main>
  `;

  return renderBase({
    stylesheets,
    scripts,
    content,
  });
};
