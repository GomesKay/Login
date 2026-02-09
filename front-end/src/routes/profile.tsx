import { createRoute, redirect } from "@tanstack/react-router"

import { isAuthenticated } from "@/lib/auth"
import { Profile } from "@/pages/profile"

import { rootRoute } from "./__root"

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/",
      })
    }
  },
  component: Profile,
})
