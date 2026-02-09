import { FastifyInstance } from "fastify"

import { adminController } from "../controllers/admin-controller"
import { loginController } from "../controllers/login-controller"
import { profileController } from "../controllers/profile-controller"
import { registerController } from "../controllers/register-controller"
import { authMiddleware } from "../middlewares/auth"

export async function loginRoutes(app: FastifyInstance) {
  app.post("/login", loginController)
  app.post("/register", registerController)
  app.get("/profile", { preHandler: authMiddleware }, profileController)
  app.get("/admin", { preHandler: authMiddleware }, adminController)
}
