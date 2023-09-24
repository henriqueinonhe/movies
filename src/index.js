import Fastify from "fastify";
import staticMiddleware from "@fastify/static";
import { resolve } from "node:path";
import { renderHome } from "./templates/home.js";
import { fetchMovies } from "./db.js";

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

fastify.register(staticMiddleware, {
  root: resolve(new URL(import.meta.url).pathname, "../../public"),
});

await fastify.listen({ port: 3000 });
