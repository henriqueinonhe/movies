import Fastify from "fastify";
import staticMiddleware from "@fastify/static";
import { resolve } from "node:path";
import { readFile } from "node:fs/promises";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (req, res) => {
  const index = await readFile("./public/index.html", "utf-8");
  res.headers({
    "Content-Type": "text/html",
  });
  res.send(index);
});

fastify.register(staticMiddleware, {
  root: resolve(new URL(import.meta.url).pathname, "../public"),
});

await fastify.listen({ port: 3000 });
