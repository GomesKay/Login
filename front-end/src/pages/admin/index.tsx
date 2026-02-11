import { Link } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"

export function Admin() {
  return (
    <main className="flex flex-col items-center gap-6">
      <p className="text-4xl font-semibold text-white">
        Bem-vindo ao Painel Administrativo!
      </p>

      <Button asChild>
        <Link to="/profile">Voltar</Link>
      </Button>
    </main>
  )
}
