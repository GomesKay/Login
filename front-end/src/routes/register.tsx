import { createRoute } from "@tanstack/react-router"

import { Register } from "@/pages/register"

import { rootRoute } from "./__root"

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
})
