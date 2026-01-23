import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

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

const submitFormRegisterSchema = z.object({
  name: z.string().nonempty("Nome de usuário é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type SubmitForm = z.infer<typeof submitFormRegisterSchema>

export function Register() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    resolver: zodResolver(submitFormRegisterSchema),
  })

  const registerMutation = useMutation({
    mutationFn: async (data: SubmitForm) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      return api.post("/register", data)
    },
    onSuccess: () => {
      reset()
      toast.success("Usuário criado com sucesso!")
    },
    onError: () => {
      toast.error("Erro ao criar usuário")
    },
  })

  async function handleSubmitForm(data: SubmitForm) {
    registerMutation.mutate(data)
  }

  return (
    <Card className="gap-20 border-zinc-700 bg-zinc-900 p-6 text-white">
      <CardContent className="flex w-full flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="" className="h-14 w-14" />

          <CardTitle className="text-2xl">Registrar</CardTitle>
          <CardDescription className="text-base">
            <Link
              to="/"
              className="flex cursor-pointer items-center gap-2 font-bold"
            >
              <ArrowLeft size={20} />
              Voltar
            </Link>
          </CardDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex w-80 flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Nome</Label>
            <Input
              type="text"
              className="border-zinc-700"
              placeholder="Ex: John Doe"
              {...register("name")}
            />

            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="text-sm text-red-500">{message}</p>
              )}
            />
          </div>

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
            disabled={registerMutation.isPending}
            className="flex cursor-pointer items-center justify-center gap-2 bg-[#5c34fb] hover:bg-[#846ff0] disabled:opacity-70"
          >
            {registerMutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Criando conta...
              </>
            ) : (
              "Registrar"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
