import { Outlet } from "@tanstack/react-router"

export function Layout() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <Outlet />
    </main>
  )
}
