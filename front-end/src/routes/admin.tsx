import { createRoute, redirect } from "@tanstack/react-router"

import { getUserRole, isAuthenticated } from "@/lib/auth"
import { Admin } from "@/pages/admin"

import { rootRoute } from "./__root"

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({ to: "/" })
    }

    const role = getUserRole()

    if (role !== "admin") {
      throw redirect({ to: "/profile" })
    }
  },
  component: Admin,
})
