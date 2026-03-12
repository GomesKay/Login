import "./config/env"

import { fastifyCors } from "@fastify/cors"
import fastifyJwt from "@fastify/jwt"
import Ajv from "ajv"
import { fastify } from "fastify"

import swagger from "./lib/swagger"
import { loginRoutes } from "./routes/login"

export const app = fastify({
  ajv: {
    plugins: [
      (ajv: Ajv) => {
        ajv.addKeyword("example")
        ajv.addKeyword("x-examples")
      },
    ],
  },
})

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
})
app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET,
})

app.register(swagger)
app.register(loginRoutes)
