import { FastifyReply, FastifyRequest } from "fastify"

export async function profileController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userData = request.user

  return reply.send({ profile: userData })
}
