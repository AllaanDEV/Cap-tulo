 <img src="src/assets/transparent-logo.svg" />

# 📚 Capítulo

O Capítulo é uma aplicação web voltada para leitores, criada para compartilhar experiências literárias, descobrir novos livros e interagir com uma comunidade de pessoas que gostam de leitura.

Primordialmente, tive a ideia de criar o Capítulo para praticar o uso de requisições para o consumo de APIs, além de aprofundar meus conhecimentos em Tailwind CSS, React Hooks e persistência de objetos complexos.

As requisições REST são feitas com JavaScript puro de propósito, sem bibliotecas como Axios. A intenção foi praticar o funcionamento das requisições nativamente, entendendo melhor cada etapa do processo e como lidar com possíveis erros.

## ✨ Funcionalidades

- Busca e exploração de livros.
- Avaliação de livros.
- Feed com publicações personalizadas sobre livros.
- Usuários simulados.
- Curtidas e comentários (edição e exclusão).
- Salvamento de publicações.
- Histórico de interações no perfil.
- Perfis personalizados.
- Temas dinâmicos.
- Acompanhamento de progresso e metas de leitura.
- Salvamento de livros.
- Pesquisa e envio de GIFs.
- Seletor e busca de emojis.

## Feed

<img width="1586" height="683" alt="Feed" src="https://github.com/user-attachments/assets/17586311-9105-4010-9621-ed77ab24cd98" />

## Post

<img width="1585" height="685" alt="Post" src="https://github.com/user-attachments/assets/57bdb4ad-1247-47c7-bd5a-c132d6d38551" />

## Perfil

<img width="1585" height="686" alt="Perfil" src="https://github.com/user-attachments/assets/cb500231-debd-4def-9b1f-c05ef744a3b9" />

## 🛠️ Tecnologias utilizadas

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![TipTap](https://img.shields.io/badge/TipTap-000000?style=for-the-badge&logo=github&logoColor=white)
![Apollo Client](https://img.shields.io/badge/Apollo_Client-311C87?style=for-the-badge&logo=apollographql&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

### APIs externas

- [Google Books API](https://developers.google.com/books/docs/v1/using)
- [GIPHY API](https://developers.giphy.com/docs/api/quick-start-guide/)
- [Open Emoji API](https://emoji-api.com/)

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado.
- Chaves de API configuradas conforme as instruções abaixo.

### 1. Clone o repositório

```bash
git clone https://github.com/AllaanDEV/Cap-tulo.git
cd Capítulo
```

### 2. Instale as dependências do frontend

Na pasta principal do projeto:

```bash
npm install
```

### 3. Instale as dependências do backend

Entre na pasta do backend:

```bash
cd backend-capítulo
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` dentro de `backend-capítulo/`, seguindo o modelo `.env.example`.

Preencha as chaves conforme as instruções da seção [Configuração das APIs](#-configuração-das-apis).

### 5. Inicie os servidores

O projeto utiliza três processos independentes durante a execução: o servidor REST, o servidor GraphQL e o servidor de desenvolvimento do frontend.

**Terminal 1 — Backend REST (Express)**

Dentro da pasta `backend-capítulo/`:

```bash
npm run dev
```

O servidor Express será iniciado na porta `3000`.

**Terminal 2 — Backend GraphQL (JSON GraphQL Server)**

Abra outro terminal, entre novamente na pasta `backend-capítulo/` e execute:

```bash
npm run server:graphql
```

O servidor GraphQL será iniciado na porta `3001`, utilizando os dados definidos em `dataBase/index.js`.

**Terminal 3 — Frontend (Vite)**

Abra um terceiro terminal na pasta principal `Capítulo` e execute:

```bash
npm run dev
```

Acesse o endereço local informado pelo Vite no terminal.

**Resumo dos servidores:**

| Serviço | Tecnologia | Porta |
|---|---|---|
| Frontend | Vite | 5173 (padrão) |
| Backend REST | Express | 3000 |
| Backend GraphQL | JSON GraphQL Server | 3001 |

Mantenha os três terminais abertos enquanto estiver utilizando a aplicação.

## 🔑 Configuração das APIs

As chaves são necessárias para que as funcionalidades que dependem das APIs externas funcionem corretamente.

**Não compartilhe suas chaves reais.** O arquivo `.env` deve permanecer local e não deve ser enviado ao GitHub.

### 1. GIPHY API — GIFs

1. Acesse o [GIPHY Developers](https://developers.giphy.com/dashboard/).
2. Entre ou crie uma conta.
3. Crie um aplicativo e obtenha uma API key.
4. Abra `backend-capítulo/.env`.
5. Configure a variável com o nome esperado pelo backend.

### 2. Google Books API — livros

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Crie ou selecione um projeto.
3. Habilite a Google Books API no catálogo de APIs.
4. Acesse a página de credenciais e crie uma chave de API.
5. Adicione a chave ao arquivo `backend-capítulo/.env`.

### 3. Open Emoji API — emojis

1. Acesse [emoji-api.com](https://emoji-api.com/).
2. Solicite sua chave de API gratuita.
3. Adicione a chave ao arquivo `backend-capítulo/.env`.

### Exemplo de arquivo `.env`

O arquivo real deve conter suas chaves. O exemplo abaixo é apenas ilustrativo:

```env
GOOGLE_BOOKS_API_KEY=SUA_CHAVE
GIFS_GIPHY_API_KEY=SUA_CHAVE
EMOJIS_API_KEY=SUA_CHAVE
```

Os nomes das variáveis precisam corresponder exatamente aos utilizados pelo backend. Após alterar o `.env`, reinicie o servidor.

**Observação:** não deve haver espaços entre o nome da variável de ambiente e o valor da chave.

## 🔒 Segurança

- Nunca envie o arquivo `.env` ao GitHub.
- Não coloque chaves secretas diretamente no código-fonte.
- Mantenha o `.env.example` sem credenciais reais.
- Configure restrições e limites de uso nas plataformas que oferecem esses recursos.

## 📌 Observações

O projeto utiliza APIs externas, que podem ter limites de requisições ou exigir credenciais próprias.

O backend disponibiliza endpoints REST por meio do Express e um servidor GraphQL independente por meio do JSON GraphQL Server.

O servidor GraphQL utiliza os dados definidos na pasta `dataBase/`, enquanto o frontend consome as consultas por meio do Apollo Client.

Os dados de demonstração e o armazenamento da aplicação dependem da implementação atual do projeto. Consulte o código para entender as limitações de persistência.