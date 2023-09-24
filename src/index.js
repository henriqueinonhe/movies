import Fastify from "fastify";
import staticMiddleware from "@fastify/static";
import { resolve } from "node:path";
import { renderHome } from "./templates/home.js";
import { fetchMovies, fetchMovieBySlug } from "./db.js";
import { renderMovie } from "./templates/movie.js";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (req, res) => {
  const movies = await fetchMovies();

  const html = renderHome({
    movies,
  });

  res.headers({
    "Content-Type": "text/html",
  });
  res.send(html);
});

fastify.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  const movie = await fetchMovieBySlug(slug);

  const html = renderMovie({
    movie,
  });

  res.headers({
    "Content-Type": "text/html",
  });
  res.send(html);
});

fastify.register(staticMiddleware, {
  root: resolve(new URL(import.meta.url).pathname, "../../public"),
});

await fastify.listen({ port: 3000 });
