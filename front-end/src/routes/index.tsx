import { createRouter } from "@tanstack/react-router"

import { rootRoute } from "./__root"
import { loginRoute } from "./login"
import { registerRoute } from "./register"

const routeTree = rootRoute.addChildren([loginRoute, registerRoute])

export const router = createRouter({
  routeTree,
})

// Tipagem de Rotas
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
