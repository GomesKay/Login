<h1 align="center">Login | Sistema de Autenticação com JWT</h1>

<img width="1910" height="946" alt="Captura de tela 2026-02-04 232257" src="https://github.com/user-attachments/assets/19fddf4a-f78b-4e5c-be7e-b7b3c987bb55" />
<img width="1908" height="945" alt="Captura de tela 2026-02-04 232307" src="https://github.com/user-attachments/assets/924dca98-1393-4fba-bb22-9c1b3a7ad3bc" />
<img width="1910" height="946" alt="Captura de tela 2026-02-11 163040" src="https://github.com/user-attachments/assets/b95ab757-6230-41c2-b182-91d36152407a" />
<img width="1908" height="946" alt="Captura de tela 2026-02-11 163054" src="https://github.com/user-attachments/assets/4bc528cd-3a88-4308-93dc-9a135b018d54" />

<h2 align="center"> 💻 Instalação e Uso</h2>

> [!NOTE]
> Esse projeto foi separado em duas pastas (<b>back-end</b> e <b>front-end</b>), então será necessário deixar um terminal aberto para cada pasta

### 🛠️ Pré-requisitos
  - Git
  - Node.js
  - NPM
  - VSCode (ou outro editor de código)

### 🔐 Autenticação
  - Token gerado no login
  - Assinado com `JWT_SECRET`
  - Validado via middleware

| Passos | Comandos | Descrição |
| --- | --- | --- |
| 01 | `git clone https://github.com/GomesKay/Login.git` | Clona este repositório no seu computador |
| 02 | `cd login` | Acesse a pasta do projeto |
| 03 | `cd back-end` | Acesse a pasta `back-end` pelo terminal |
| 04 | `npm install` | Instala todas as dependências necessárias |
| 05 | - | Crie o arquivo `.env` baseado no `.env.example` e altere o `JWT_SECRET` |
| 06 | `npx prisma migrate dev` | Executa as migrations para criar as tabelas no banco de dados |
| 07 | `npx prisma generate` | Gera o Prisma Client |
| 08 | `npm run dev` | Inicia o servidor em modo desenvolvimento |
| 09 | `cd front-end` | Em outro terminal, com a API já em execução, acesse a pasta `front-end` |
| 10 | `npm install` | Instala todas as dependências necessárias |
| 11 | - | Crie o arquivo `.env` baseado no `.env.example` e altere o `VITE_API_URL`, se necessário |
| 12 | `npm run dev` | Inicia o servidor de desenvolvimento com Vite |

<div align="center">

  ## ⚙️ Back-end

  ### 🔧 Arquitetura da API

  | HTTP | Rotas | Descrição |
  | --- | --- | --- |
  | `POST` | /register | Criação de novo usuário |
  | `POST` | /login | Autenticação do usuário e geração do JWT |
  | `GET` | /profile | Retorna dados do usuário autenticado (rota protegida) |
  | `GET` | /admin | Rota restrita apenas para usuários com role `ADMIN` |

  ### 🚀 Tecnologias
  <img title="ESLint" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" alt="ESLint" width="50" /> &nbsp;
  <img title="JWT" src="https://github.com/user-attachments/assets/7810018a-c65e-4c8c-b84a-2cdca74d2baf" alt="JWT" width="50" /> &nbsp;
  <img title="Postman" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="50" /> &nbsp;
  <img title="Fastify" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" alt="Fastify" width="50" /> &nbsp;
  <img title="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" /> &nbsp;
  <img title="PrismaORM" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="PrismaORM" width="50" /> &nbsp;
  <img title="SQLite" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  ---

  ## 🖥️ Front-end

  

  ### 🚀 Tecnologias
  <img title="Axios" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="Axios" width="50" /> &nbsp;
  <img title="Tanstack" src="https://github.com/user-attachments/assets/7a722d63-da8a-46a7-84f7-9fc42f148e68" alt="Tanstack" width="50" /> &nbsp;
  <img title="ESLint" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" alt="ESLint" width="50" /> &nbsp;
  <img title="Prettier" src="https://github.com/user-attachments/assets/67a609b6-d4d4-4c89-9ab1-154b56c61289" alt="Prettier" width="50" /> &nbsp;
  <img title="React Hook Form" src="https://github.com/user-attachments/assets/913089a0-f8ca-47f1-9843-704163d3d270" alt="React Hook Form" width="50" /> &nbsp;
  <img title="React.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React.js" width="50" /> &nbsp;
  <img title="Shadcn/ui" src="https://github.com/user-attachments/assets/d4faa79c-ae66-4fe5-adfe-377ddb62ee62" alt="Shadcn/ui" width="50" /> &nbsp;
  <img title="TailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Vite" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  ### 🗡️ Projeto
  <p>Este projeto consiste em uma aplicação <b>Full-Stack</b> com Registro de usuário, Login com autenticação JWT, Proteção de rotas e Separação entre rotas públicas e privadas.</p>

</div>
