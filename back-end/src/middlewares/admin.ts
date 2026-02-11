import { FastifyReply, FastifyRequest } from "fastify"

export async function adminMiddleware(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const user = request.user as { role: string }

  if (user.role !== "admin") {
    return reply.status(403).send({
      error: "Acesso negado - Você não é admin",
    })
  }
}
