export const protectedDocs = {
  profileUser: {
    tags: ["User"],
    summary: "Perfil do usuário",
    description: "Retorna os dados do usuário autenticado.",
    security: [{ bearerAuth: [] }],
    response: {
      200: {
        description: "Perfil retornado com sucesso",
        type: "object",
        properties: {
          profile: {
            type: "object",
            properties: {
              id: { type: "string", description: "ID do usuário" },
              name: { type: "string", description: "Nome do usuário" },
              role: { type: "string", description: "Regra do usuário" },
            },
          },
        },
      },
      401: {
        description: "Token inválido ou ausente",
        type: "object",
        properties: {
          error: { type: "string" },
        },
      },
    },
  },

  adminUser: {
    tags: ["Admin"],
    summary: "Área administrativa",
    description: "Rota restrita a usuários com papel de administrador.",
    security: [{ bearerAuth: [] }],
    response: {
      200: {
        description: "Acesso autorizado",
        type: "object",
        properties: {
          message: { type: "string" },
          user: {
            type: "object",
            properties: {
              id: { type: "string", description: "ID do usuário" },
              name: { type: "string", description: "Nome do usuário" },
              role: { type: "string", description: "Regra do usuário" },
            },
          },
        },
      },
      401: {
        description: "Token inválido ou ausente",
        type: "object",
        properties: {
          error: { type: "string" },
        },
      },
      403: {
        description: "Acesso negado — usuário não é administrador",
        type: "object",
        properties: {
          error: { type: "string" },
        },
      },
    },
  },
}
