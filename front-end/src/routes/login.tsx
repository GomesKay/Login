import { createRoute } from "@tanstack/react-router"

import { Login } from "@/pages/login"

import { rootRoute } from "./__root"

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login,
})
