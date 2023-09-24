import Fastify from "fastify";

const fastify = Fastify({});

fastify.get("/", async (req, res) => {
  res.send("Ok");
});

await fastify.listen({ port: 3000 });
