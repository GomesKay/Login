import "./config/env"

import { app } from "./app"

app.listen({ port: process.env.PORT }).then(() => {
  console.log(`🚀 HTTP Server Running on http://localhost:${process.env.PORT}`)
})
