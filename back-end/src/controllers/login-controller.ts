import bcrypt from "bcryptjs"
import { FastifyReply, FastifyRequest } from "fastify"

import { prisma } from "../lib/prisma"
import { bodyLoginSchema } from "../schemas/login-schema"

export async function loginController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password } = bodyLoginSchema.parse(request.body)

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return reply.status(401).send({ error: "Usuário não existe" })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return reply.status(401).send({ error: "Senha incorreta" })
  }

  const tokenPayload = {
    id: user.id,
    name: user.name,
    role: user.role,
  }

  const token = request.server.jwt.sign(tokenPayload, {
    expiresIn: "1h",
  })

  return reply.send({ token, message: `Bem-vindo, ${user.name}` })
}
