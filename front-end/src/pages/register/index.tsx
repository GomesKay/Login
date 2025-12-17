import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"
import { useForm } from "react-hook-form"
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

const submitFormRegisterSchema = z.object({
  username: z.string().nonempty("Nome de usuário é obrigatório"),
  email: z.email("Email é obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type SubmitForm = z.infer<typeof submitFormRegisterSchema>

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    resolver: zodResolver(submitFormRegisterSchema),
  })

  async function handleSubmitForm(data: SubmitForm) {
    console.log(data)
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
              {...register("username")}
            />

            <ErrorMessage
              errors={errors}
              name="username"
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
            className="cursor-pointer bg-[#5c34fb] hover:bg-[#846ff0]"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
