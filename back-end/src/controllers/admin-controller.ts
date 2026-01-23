import { FastifyReply, FastifyRequest } from "fastify"

export async function adminController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const user = request.user

  if (user.role !== "admin") {
    return reply.status(403).send({ error: "Acesso negado - Você não é admin" })
  }

  return { message: "Bem-vindo à área administrativa", user: request.user }
}
