export const authDocs = {
  loginUser: {
    tags: ["Auth"],
    summary: "Autentica usuário",
    description: "Realiza login do usuário.",
    body: {
      type: "object",
      required: ["email", "password"],
      "x-examples": {
        exemplo: {
          summary: "Exemplo de login",
          value: {
            email: "johndoe@email.com",
            password: "123456",
          },
        },
      },
      properties: {
        email: {
          type: "string",
          format: "email",
          description: "E-mail do usuário",
        },
        password: {
          type: "string",
          minLength: 6,
          description: "Senha do usuário",
        },
      },
    },
    response: {
      200: {
        description: "Login realizado com sucesso",
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
      401: {
        description: "Credenciais inválidas",
        type: "object",
        properties: {
          error: {
            type: "string",
          },
        },
      },
    },
  },

  registerUser: {
    tags: ["Auth"],
    summary: "Registra usuário",
    description: "Registra um novo usuário.",
    body: {
      type: "object",
      required: ["name", "email", "password"],
      "x-examples": {
        exemplo: {
          summary: "Exemplo de registro",
          value: {
            name: "John Doe",
            email: "johndoe@email.com",
            password: "123456",
          },
        },
      },
      properties: {
        name: {
          type: "string",
          description: "Nome do usuário",
        },
        email: {
          type: "string",
          format: "email",
          description: "E-mail do usuário",
        },
        password: {
          type: "string",
          minLength: 6,
          description: "Senha do usuário",
        },
      },
    },
    response: {
      201: {
        description: "Registro criado com sucesso",
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
      400: {
        description: "Credenciais inválidas",
        type: "object",
        properties: {
          error: {
            type: "string",
          },
        },
      },
      409: {
        description: "Usuário já existe",
        type: "object",
        properties: {
          error: {
            type: "string",
          },
        },
      },
    },
  },
}
