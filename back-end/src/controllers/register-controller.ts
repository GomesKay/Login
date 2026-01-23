import bcrypt from "bcryptjs"
import { FastifyReply, FastifyRequest } from "fastify"

import { prisma } from "../lib/prisma"
import { bodyRegisterSchema } from "../schemas/login-schema"

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { name, email, password } = bodyRegisterSchema.parse(request.body)

  if (!name || !email || !password) {
    return reply
      .status(400)
      .send({ error: "Nome, email e senha são obrigatórios" })
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: { email },
  })

  if (userAlreadyExists) {
    return reply.status(409).send({
      error: "Usuário já existe",
    })
  }

  const passwordHash = await bcrypt.hash(password, 6)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
    },
  })

  return reply.status(201).send({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    },
  })
}
