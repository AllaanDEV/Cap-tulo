
<img src="src/assets/transparent-logo.svg">

# 📚 Capítulo

O Capítulo é uma aplicação web voltada para leitores, criada para compartilhar experiências literárias, descobrir novos livros e interagir com uma comunidade de pessoas que gostam de leitura.

Primordialmente tive a ideia de criar o Capítulo pra praticar o uso de requisições para o consumo de APIs, com isso praticando tailwind, hooks React e permanência de objetos (objetos complexos). As requisições são puro JS de propósito, fiz isso para praticar no vanilla sem o uso de bibliotecas como Axios, que por facilitar o processo creio que não aprenderia 100% se algo desse errado.

## ✨ Funcionalidades

- Busca e exploração de qualquer livro que você queira.
- Avaliação de livros
- Feed com publicações personalizadas de livros.
- Usuários simulados.
- Curtidas, comentários (edição e exclusão), salvamento de posts.
- Lista de qualquer interação em seu perfil
- Perfis personalizados.
- temas dinâmicos.
- Acompanhamento de progresso e metas de leitura.
- Salvamento de livros.
- Pesquisa e envio de GIFs.
- Seletor e busca de emojis.

## Feed
<img width="1586" height="683" alt="{9B746EAE-EF7B-4C66-A0BB-D577E4652054}" src="https://github.com/user-attachments/assets/17586311-9105-4010-9621-ed77ab24cd98" />

## Post
<img width="1585" height="685" alt="{BF96B7D3-E470-4307-AEBC-CAE9294AB885}" src="https://github.com/user-attachments/assets/57bdb4ad-1247-47c7-bd5a-c132d6d38551" />

## Perfil
<img width="1585" height="686" alt="{99CD8C4B-A122-4E24-A75A-A622A6BB976E}" src="https://github.com/user-attachments/assets/cb500231-debd-4def-9b1f-c05ef744a3b9" />


## 🛠️ Tecnologias utilizadas

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![TipTap](https://img.shields.io/badge/TipTap-000000?style=for-the-badge&logo=github&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

**APIs externas**
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

Preencha as chaves conforme as instruções da próxima seção.

### 5. Inicie o backend

Dentro da pasta `backend-capítulo/`:

```bash
node server.js
```

Mantenha esse terminal aberto.

### 6. Inicie o frontend

Abra outro terminal na pasta principal `Capítulo` e execute:

```bash
npm run dev
```

Acesse o endereço local informado pelo Vite no terminal.

## 🔑 Configuração das APIs

As chaves são necessárias para que as funcionalidades que dependem das APIs externas funcionem corretamente.

**Não compartilhe suas chaves reais.** O arquivo `.env` deve permanecer local e não deve ser enviado ao GitHub.

### 1. GIPHY API — GIFs

1. Acesse o [GIPHY Developers](https://developers.giphy.com/dashboard/).
2. Entre ou crie uma conta.
3. Crie um aplicativo e obtenha uma API key.
4. Abra `backend-capítulo/.env`.
5. Configure a variável com o nome esperado pelo backend:

```env
GIPHY_API_KEY=COLOQUE_SUA_CHAVE_AQUI
```

Confirme o nome da variável no `server.js`; se o código usar outro nome, mantenha o nome esperado pelo código.

### 2. Google Books API — livros

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Crie ou selecione um projeto.
3. Habilite a Google Books API no catálogo de APIs.
4. Acesse a página de credenciais e crie uma chave de API.
5. Adicione a chave ao arquivo `backend-capítulo/.env`:

```env
GOOGLE_BOOKS_API_KEY=COLOQUE_SUA_CHAVE_AQUI
```

### 3. Open Emoji API — emojis

1. Acesse [emoji-api.com](https://emoji-api.com/).
2. Solicite sua chave de API gratuita.
3. Adicione a chave ao arquivo `backend-capítulo/.env`:

```env
IMOJIS_API_KEY=COLOQUE_SUA_CHAVE_AQUI
```

### Exemplo de arquivo `.env`

O arquivo real deve conter suas chaves. O exemplo abaixo é apenas ilustrativo:

```env
GOOGLE_BOOKS_API_KEY=*chave*
GIFS_GIPHY_API_KEY=*chave*
EMOJIS_API_KEY=*chave*
```

> Os nomes das variáveis precisam corresponder exatamente aos usados pelo backend. Após alterar o `.env`, reinicie o servidor.

Obs: Não deve haver espaços entre o nome da variável de ambiente e a própria chave, assim como os exemplos acima
## 🔒 Segurança

- Nunca envie o arquivo `.env` ao GitHub.
- Não coloque chaves secretas diretamente no código-fonte.
- Mantenha o `.env.example` sem credenciais reais.
- Configure restrições e limites de uso nas plataformas que oferecem esses recursos.

## 📌 Observações

O projeto utiliza APIs externas, que podem ter limites de requisições ou exigir credenciais próprias.

Os dados de demonstração e o armazenamento da aplicação dependem da implementação atual do projeto. Consulte o código para entender as limitações de persistência.

