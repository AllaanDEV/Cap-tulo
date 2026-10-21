
<img src="src/assets/transparent-logo.svg">

# 📚 Capítulo

O Capítulo é uma aplicação web voltada para leitores, criada para compartilhar experiências literárias, descobrir novos livros e interagir com uma comunidade de pessoas que gostam de leitura.


## ✨ Funcionalidades

- Feed com publicações de livros.
- Usuários simulando.
- Curtidas e comentários.
- Perfis personalizados.
- Busca e exploração de qualquer livro.
- temas dinâmicos.
- Acompanhamento de progresso e metas de leitura.
- Salvamento de livros.
- Pesquisa e envio de GIFs.
- Seletor e busca de emojis.

## 🛠️ Tecnologias utilizadas

**Frontend**
- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- TipTap 

**Backend**
- Node.js
- Express

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
git clone URL_DO_REPOSITORIO
cd Capítulo
```

Substitua `URL_DO_REPOSITORIO` pela URL HTTPS do repositório no GitHub.

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
GOOGLE_BOOKS_API_KEY= *chave*
GIFS_GIPHY_API_KEY= *chave*
EMOJIS_API_KEY= *chave*
```

> Os nomes das variáveis precisam corresponder exatamente aos usados pelo backend. Após alterar o `.env`, reinicie o servidor.

## 🔒 Segurança

- Nunca envie o arquivo `.env` ao GitHub.
- Não coloque chaves secretas diretamente no código-fonte.
- Mantenha o `.env.example` sem credenciais reais.
- Configure restrições e limites de uso nas plataformas que oferecem esses recursos.

## 📌 Observações

O projeto utiliza APIs externas, que podem ter limites de requisições ou exigir credenciais próprias.

Os dados de demonstração e o armazenamento da aplicação dependem da implementação atual do projeto. Consulte o código para entender as limitações de persistência.

