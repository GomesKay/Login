import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { useNavigate } from "@tanstack/react-router"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import logo from "/icon.png"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/lib/api"
import { isAuthenticated } from "@/lib/auth"

const submitFormLoginSchema = z.object({
  email: z.email("Email é obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type SubmitForm = z.infer<typeof submitFormLoginSchema>

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    resolver: zodResolver(submitFormLoginSchema),
  })

  const loginMutation = useMutation({
    mutationFn: async (data: SubmitForm) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      return api.post("/login", data)
    },
    onSuccess: (response) => {
      const token = response.data.token

      localStorage.setItem("token", token)

      toast.success("Login efetuado com sucesso!")
      navigate({ to: "/profile", replace: true })
    },
    onError: () => {
      toast.error("Email ou senha inválidos")
    },
  })

  async function handleSubmitForm(data: SubmitForm) {
    loginMutation.mutate(data)
  }

  useEffect(() => {
    if (isAuthenticated()) {
      navigate({ to: "/profile", replace: true })
    }
  }, [navigate])

  return (
    <Card className="gap-20 border-zinc-700 bg-zinc-900 p-6 text-white">
      <CardContent className="flex w-full flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="" className="h-14 w-14" />

          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-base">
            Não tem uma conta ainda?{" "}
            <Link to="/register" className="cursor-pointer font-bold">
              Criar um conta
            </Link>
          </CardDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex w-80 flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              className="border-zinc-700"
              placeholder="Ex: johndoe@example.com"
              {...register("email")}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-sm text-red-500">{message}</p>
              )}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              className="border-zinc-700"
              {...register("password")}
            />

            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="text-sm text-red-500">{message}</p>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={loginMutation.isPending}
            className="cursor-pointer bg-[#5c34fb] hover:bg-[#846ff0]"
          >
            {loginMutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Entrando...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
