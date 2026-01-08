import "./config/env"

import { fastifyCors } from "@fastify/cors"
import fastifyJwt from "@fastify/jwt"
import { fastify } from "fastify"

export const app = fastify()

app.register(fastifyCors, {
  origin: true,
})
app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET,
})
