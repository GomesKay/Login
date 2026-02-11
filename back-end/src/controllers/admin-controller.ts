import { FastifyReply, FastifyRequest } from "fastify"

export async function adminController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  return { message: "Bem-vindo à área administrativa", user: request.user }
}
