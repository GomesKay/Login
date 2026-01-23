import z from "zod"

export const bodyLoginSchema = z.object({
  email: z.email("Email é obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export const bodyRegisterSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z.email("Email é obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})
