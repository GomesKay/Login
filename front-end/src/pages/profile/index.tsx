import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Link, useNavigate } from "@tanstack/react-router"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import { getUserRole } from "@/lib/auth"
import type { ProfileResponse } from "@/types/profile-user"

export function Profile() {
  const navigate = useNavigate()
  const role = getUserRole()
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await api.get<ProfileResponse>("/profile")

      return response.data
    },
  })

  if (isLoading) {
    return (
      <p className="flex items-center gap-2 text-white">
        <Loader2 className="h-4 w-4 animate-spin" />
        Carregando...
      </p>
    )
  }

  function handleLogout() {
    localStorage.removeItem("token")
    queryClient.clear()

    navigate({
      to: "/",
      replace: true,
    })
  }

  return (
    <main className="flex flex-col items-center gap-6">
      <p className="text-4xl font-semibold text-white">
        Bem-vindo {data?.profile.name}!
      </p>

      {role === "admin" && (
        <Button asChild variant="secondary">
          <Link to="/admin">Ir para área administrativa</Link>
        </Button>
      )}

      <Button onClick={handleLogout} className="cursor-pointer">
        Sair
      </Button>
    </main>
  )
}
