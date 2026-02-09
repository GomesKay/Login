import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import type { ProfileResponse } from "@/types/profile-user"

export function Profile() {
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await api.get<ProfileResponse>("/profile")

      return response.data
    },
  })

  if (isLoading) {
    return <p className="text-white">Carregando...</p>
  }

  function handleLogout() {
    localStorage.removeItem("token")

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

      <Button onClick={handleLogout} className="cursor-pointer">
        Sair
      </Button>
    </main>
  )
}
