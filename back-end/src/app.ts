import "./config/env"

import { fastifyCors } from "@fastify/cors"
import fastifyJwt from "@fastify/jwt"
import { fastify } from "fastify"

import { loginRoutes } from "./routes/login"

export const app = fastify()

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
})
app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET,
})

app.register(loginRoutes)
