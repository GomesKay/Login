import { createRootRoute } from "@tanstack/react-router"

import { Layout } from "@/components/layouts"

const RootLayout = () => <Layout />

export const rootRoute = createRootRoute({ component: RootLayout })
