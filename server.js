import express from "express";
import dotenv from "dotenv";
import comidasRoute from './src/routes/comidasRoute.js'

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("servidor aberto...");
});

app.use('/comidas', comidasRoute);

app.listen(serverPort, () => {
  console.log(` Servidor comidas foi iniciado em: http://localhost:${serverPort}`);
});







/* 
1️⃣ CONFIGURAÇÃO DO PROJETO
- Criar pasta do projeto e inicializar o Node.js:
  npm init -y
- Instalar dependências:
  npm install express @prisma/client
- Habilitar ES Modules no package.json:
  "type": "module"

2️⃣ CONFIGURAÇÃO DO PRISMA
- Inicializar Prisma:
  npx prisma init --datasource-provider postgresql
- Criar arquivo .env com a URL do banco PostgreSQL:
  DATABASE_URL="postgresql://usuario:senha@localhost:5432/comidas_db"
- Exemplo:
  DATABASE_URL="postgresql://postgres:123456@localhost:5432/comidas_db"

3️⃣ DEFINIR SCHEMA DO BANCO
- No arquivo prisma/schema.prisma, criar o model Comida:

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url = env("DATABASE_URL")
}

model Comida {
  id        Int      @id @default(autoincrement())
  nome      String   @unique
  tipo      String
  preco     Float
  descricao String
  criadoEm  DateTime @default(now())
  atualizadoEm DateTime @updatedAt

  @@map("comidas")
}

4️⃣ CRIAR MIGRAÇÃO E GERAR CLIENTE PRISMA
- Criar tabela no banco:
  npx prisma migrate dev --name init
- Gerar cliente Prisma:
  npx prisma generate
- Abrir interface visual (opcional):
  npx prisma studio

*/