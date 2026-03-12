import { FastifyInstance } from "fastify"

import { adminController } from "../controllers/admin-controller"
import { loginController } from "../controllers/login-controller"
import { profileController } from "../controllers/profile-controller"
import { registerController } from "../controllers/register-controller"
import { authDocs } from "../docs/auth-docs"
import { protectedDocs } from "../docs/protected-docs"
import { adminMiddleware } from "../middlewares/admin"
import { authMiddleware } from "../middlewares/auth"

export async function loginRoutes(app: FastifyInstance) {
  app.post("/login", { schema: authDocs.loginUser }, loginController)
  app.post("/register", { schema: authDocs.registerUser }, registerController)
  app.get(
    "/profile",
    { schema: protectedDocs.profileUser, preHandler: authMiddleware },
    profileController,
  )
  app.get(
    "/admin",
    {
      schema: protectedDocs.adminUser,
      preHandler: [authMiddleware, adminMiddleware],
    },
    adminController,
  )
}
