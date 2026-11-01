import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mime from "mime-types";

import {users} from "./dataBase/dataBaseUsers.js"
import {postsIniciais} from "./dataBase/dataBasePosts.js"

import { feedbackEbooks } from "./dataBase/dataBaseEbooks.js";
import booksRouter from "./booksApi.js";
import gifsRouter from "./gifsApi.js";
import emojisRouter from "./emojisApi.js";

import express from "express";
import cors from "cors";

import jwt from "jsonwebtoken";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/api/gifs", gifsRouter);
app.use("/api/emojis", emojisRouter);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API do Capítulo",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 2. As suas rotas (GET, POST, etc.) ficam APÓS a linha do /api-docs
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Banco de dados em memória (simulação)

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retorna todos os posts
 *     description: Lista todos os posts cadastrados no sistema.
 *     responses:
 *       200:
 *         description: Lista de posts retornada com sucesso.
 */

let posts = postsIniciais
  .filter((post) =>
    post.authorIndex !== undefined ? users[post.authorIndex] : post.authorId,
  )
  .map((post, index) => {
    const autor =
      post.authorIndex !== undefined
        ? users[post.authorIndex]
        : { name: post.author, id: post.authorId, userName: post.userName };

    return {
      id: `seed-post-${index + 1}`,
      author: autor.name,
      authorId: autor.id,
      userName: autor.userName,
      content: post.content,
      postModified: post.postModified ?? null,
      midia: post.midia ?? "listNull",
      type: post.type || "post",
      likes: post.likes ?? Math.floor(Math.random() * 100) + 1,
      comments: post.comments
        .filter(({ userIndex }) => users[userIndex])
        .map((comentario, commentIndex) => {
          const comentarista = users[comentario.userIndex];

          return {
            id: `seed-comment-${index + 1}-${commentIndex + 1}`,
            authorId: comentarista.id,
            userName: comentarista.userName,
            author: comentarista.name,
            text: comentario.text,
            createdAt: new Date(
              Date.now() - Math.floor(Math.random() * 7) * 86400000,
            ).toISOString(),
          };
        }),
      createdAt:
        post.createdAt ??
        new Date(
          Date.now() - Math.floor(Math.random() * 14) * 86400000,
        ).toISOString(),
    };
  })
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pasta: backend-capítulo/imagens
const pastaImagens = path.join(__dirname, "imagens");
// Associação dinâmica: todos os usuários pré-definidos consomem TODO o banco
// de imagens disponível na pasta "imagens", distribuídas em ordem (com ciclo
// quando houver mais usuários do que imagens). Nada é hardcoded aqui é se uma
// nova imagem for adicionada à pasta, ela passa a ser usada automaticamente.
const arquivosImagens = fs.existsSync(pastaImagens)
  ? fs
      .readdirSync(pastaImagens)
      .filter((arquivo) => /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(arquivo))
  : [];

const idsUsuariosPredefinidos = Array.from({ length: 30 }, (_, i) =>
  String(1729000000001 + i),
);

const imagensPorUsuario = Object.fromEntries(
  idsUsuariosPredefinidos.map((id, i) => [
    id,
    arquivosImagens.length > 0
      ? arquivosImagens[i % arquivosImagens.length]
      : null,
  ]),
);

function carregarImagem(nomeArquivo, pasta = pastaImagens) {
  if (!nomeArquivo) return null;

  const caminhoImagem = path.join(pasta, nomeArquivo);

  if (!fs.existsSync(caminhoImagem)) {
    console.warn(`Imagem não encontrada: ${nomeArquivo}`);
    return null;
  }

  const imagem = fs.readFileSync(caminhoImagem);
  const tipoMime = mime.lookup(caminhoImagem) || "application/octet-stream";

  return `data:${tipoMime};base64,${imagem.toString("base64")}`;
}

// Pasta: backend-capítulo/imagensTema
const pastaImagensTema = path.join(__dirname, "imagensTema");
// Mesma associação dinâmica das imagens de perfil, porém usando o banco de
// imagens da pasta "imagensTema" para os temas de perfil (midiaTheme).
const arquivosImagensTema = fs.existsSync(pastaImagensTema)
  ? fs
      .readdirSync(pastaImagensTema)
      .filter((arquivo) => /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(arquivo))
  : [];

const imagensTemaPorUsuario = Object.fromEntries(
  idsUsuariosPredefinidos.map((id, i) => [
    id,
    arquivosImagensTema.length > 0
      ? arquivosImagensTema[i % arquivosImagensTema.length]
      : null,
  ]),
);

// 1. Listar todos os posts
app.get("/feed", (req, res) => {
  res.json(posts);
});

// 2. Criar um post (Postar)
app.post("/api/posts", (req, res) => {
  const { author, content, midia, userName, type, postModified } = req.body;
  const stringToken = req.headers.authorization.split(" ");
  const decoded = jwt.verify(stringToken[1], "minha_chave_super_secreta");

  if (type === "feedback") {
    const feedbacks = {
      stars: postModified.starsEbook + 1,
      ebook: postModified.ebook,
    };

    feedbackEbooks.push(feedbacks);
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const newPost = {
    id: Date.now().toString(),
    author: author || "Anônimo",
    authorId: decoded.id,
    userName,
    content,
    postModified,
    midia,
    type,
    likes: randomNumber,
    comments: [],
    createdAt: new Date().toISOString(),
  };

  posts.unshift(newPost);
  res.status(201).json(newPost);
});

// 3. Deletar um post
app.delete("/api/posts/:id", (req, res) => {
  const { id, newUser } = req.params;
  const tokenString = req.headers.authorization.split(" ");
  const decoded = jwt.verify(tokenString[1], "minha_chave_super_secreta");
  const postClear = posts.find((p) => p.id === id);

  if (postClear?.type === "feedback") {
    const filterFeedbackEbooks = feedbackEbooks.filter((item) => {
      return item.ebook.ebook.id !== postClear.postModified.ebook.ebook?.id;
    });

    feedbackEbooks.length = 0;
    feedbackEbooks.push(...filterFeedbackEbooks);
  }

  if (postClear.authorId == decoded.id) {
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json({ message: "Post deletado com sucesso" });
  } else {
    res
      .status(404)
      .json({ message: "o post infelizmente não foi encontrado ;(" });
  }
});

let postsLikes = [];

// 4. Curtir um post (Incrementar likes)
app.post("/api/posts/:id/like", (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post não encontrado",
    });
  }

  const validationLike = postsLikes.find(
    (p) => p.postId === id && p.userId === userId,
  );

  if (validationLike?.validation) {
    post.likes -= 1;
    validationLike.validation = false;
  } else if (validationLike) {
    post.likes += 1;
    validationLike.validation = true;
    validationLike.createdAt = new Date().toISOString();
  } else {
    post.likes += 1;

    postsLikes.push({
      postId: id,
      userId,
      validation: true,
      createdAt: new Date().toISOString(),
    });
  }

  return res.json({
    post,
    likes: postsLikes,
  });
});

//buscar likes
app.get("/api/posts/likes", (_, res) => {
  return res.json(postsLikes);
});

// 5. Comentar em um post
app.post("/api/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const { author, text, authorId, userName } = req.body;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const newComment = {
    id: Date.now().toString(),
    authorId: authorId,
    userName: userName,
    author: author,
    text,
    createdAt: new Date().toISOString(),
  };

  post.comments.push(newComment);
  res.status(201).json(post);
});

//curtir um comentário
// Seed: curtidas pré-definidas espalhadas pelos comentários dos posts,
// vindas dos próprios usuários pré-definidos (sem duplicar like do mesmo user).
let likes = posts.flatMap((post) =>
  post.comments.flatMap((comment) => {
    const qtdLikes = Math.floor(Math.random() * 6); // 0 a 5 curtidas por comentário
    const curtintes = idsUsuariosPredefinidos
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, qtdLikes);

    return curtintes.map((userId) => ({
      userId,
      commentId: comment.id,
      postId: post.id,
      createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 7) * 86400000,
      ).toISOString(),
    }));
  }),
);

app.post("/api/comments/like", (req, res) => {
  const { commentId, postId, userId } = req.body;

  const post = posts.find((p) => p.id === postId);

  const comment = post?.comments.find((comment) => comment.id === commentId);

  if (!comment) {
    return res.status(404).json({
      error: "Post ou comentário não encontrado",
    });
  }

  const validation = likes.find(
    (like) => like.commentId === commentId && like.userId === userId,
  );

  if (validation) {
    likes = likes.filter(
      (like) => !(like.commentId === commentId && like.userId === userId),
    );

    return res.status(200).json(likes);
  }

  const newLike = {
    userId,
    commentId,
    postId,
    createdAt: new Date().toISOString(),
  };

  likes.push(newLike);

  return res.status(201).json(likes);
});

app.get("/api/comments/like", (_, res) => {
  res.status(201).json(likes);
});

// 5. editar um comentário

app.patch("/api/posts/:id/:comenID", (req, res) => {
  const { id, comenID } = req.params;
  const { text } = req.body;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }
  const comment = post.comments.find((c) => c.id === comenID);

  if (!comment) {
    return res.status(404).json({ error: "comentário não encontrado" });
  }

  ((comment.text = text), res.status(200).json(post));
});

//excluir um comentário
app.delete("/api/posts/:id/:comenID", (req, res) => {
  const { id, comenID } = req.params;
  const post = posts.find((p) => p.id == id);

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }
  const comments = post.comments.filter((p) => p.id !== comenID);

  if (!post.comments.find((p) => p.id == comenID)) {
    return res.status(404).json({ error: "comentário não encontrado" });
  }

  ((post.comments = comments), res.status(200).json(post));
});

app.post("/auth/register", (req, res) => {
  const { name, email, password, userName } = req.body;

  if (!name || !email || !password || !userName) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  const userExistsEmail = users.find((u) => u.email === email);
  const userExistsUser = users.find((u) => u.userName === userName);
  if (userExistsEmail || userExistsUser) {
    return res.status(409).json({ error: "Email ou usuário já cadastrados " });
  }
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    userName,
    password,
    followersArray: [],
    followersNumber: 0,
  };

  users.push(newUser);

  const token = jwt.sign(
    {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      userName: newUser.userName,
    },
    "minha_chave_super_secreta",
  );

  res.status(201).json({
    message: "Usuário registrado com sucesso!",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      userName: newUser.userName,
    },
    token: token,
  });
});

//edit users data
app.patch("/updateUser/:id", (req, res) => {
  const { name, userName } = req.body;
  const { id } = req.params;

  if (!name || !userName) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  const userExists = users.find((users) => users.id === id);

  if (!userExists) {
    return res.status(404).json({ error: "Usuário não encontardo " });
  }

  const userExistsUser = users.find(
    (u) => u.userName === userName && u.id !== id,
  );

  if (userExistsUser) {
    return res.status(409).json({ error: "Email ou usuário já cadastrados " });
  }

  userExists.name = name;
  userExists.userName = userName;

  res.status(201).json({
    message: "Usuário atualizado com sucesso!",
    user: {
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      userName: userExists.userName,
    },
  });
});

//c
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(
    (u) => u.email === email && u.password === password,
  );

  if (userExists) {
    const token = jwt.sign(
      { id: userExists.id, email: userExists.email, name: userExists.name },
      "minha_chave_super_secreta",
    );

    return res.status(200).json({
      message: "Usuário logado com sucesso!",
      user: {
        id: userExists.id,
        email: userExists.email,
        name: userExists.name,
        userName: userExists.userName,
        followersArray: [],
        followersNumber: 0,
      },
      token: token,
    });
  } else {
    return res.status(401).json({ error: "Erro ao efetuar login" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Simulação de um banco de dados simples (ou perfil do usuário)
// let posts = [
//   {
//     id: "1",
//     author: "Maria",
//     content: "Estudando JavaScript hoje!",
//     likes: 2,
//     comments: [],
//   },
//   {
//     id: "2",
//     author: "João",
//     content: "Conectando o front ao back-end!",
//     likes: 4,
//     comments: [],
//   },
// ];

// Lista para armazenar os IDs dos posts salvos pelo usuário
// let postsSalvos = [];

// 1. Rota para salvar ou remover dos salvos (Toggle Bookmark)
// app.post("/api/posts/:id/save", (req, res) => {
//   const { id } = req.params;

//   // Verifica se o post realmente existe
//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return res.status(404).json({ error: "Post não encontrado." });
//   }

//   // Verifica se o post já está salvo
//   const index = postsSalvos.indexOf(id);

//   if (index > -1) {
//     // Se já estiver salvo, remove da lista (desalvar)
//     postsSalvos.splice(index, 1);
//     return res
//       .status(200)
//       .json({ message: "Post removido dos salvos.", saved: false });
//   } else {
//     // Se não estiver salvo, adiciona na lista
//     postsSalvos.push(id);
//     return res
//       .status(200)
//       .json({ message: "Post salvo com sucesso!", saved: true });
//   }
// });

let saved = [];

app.post("/api/posts/saved", (req, res) => {
  const { post, savedType } = req.body;

  if (!post?.id) {
    return res.status(400).json({
      message: "Não foi possível identificar o post",
    });
  }

  if (savedType === "delete") {
    saved = saved.filter((item) => item.postId !== post.id);

    return res.json(saved);
  }

  if (savedType === "saved") {
    const alreadySaved = saved.some((item) => item.postId === post.id);

    if (alreadySaved) {
      return res.json(saved);
    }

    saved.push({
      postId: post.id,
    });

    return res.json(saved);
  }

  if (savedType === "update") {
    return res.json(saved);
  }

  return res.status(400).json({
    message: "Ação inválida",
  });
});

app.get("/api/posts/saved", (_, res) => {
  return res.json(saved);
});

// 1. Rota para filtar)
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post não encontrado.",
    });
  }

  return res.status(200).json(post);
});

const dadosPerfil = {
  1729000000001: {
    bios: "Leio 3 páginas e já considero desenvolvimento pessoal. ??",
    location: "São Paulo, SP",
    link: "https://example.com/gabriel-lendo",
  },
  1729000000002: {
    bios: "40% gato, 60% poeira estelar e 100% sem pagar aluguel. ??",
    location: "Via Láctea, planeta Terra",
    link: "https://example.com/miau-cosmico",
  },
  1729000000003: {
    bios: "Minha lista de livros é maior que minha disposição.",
    location: "Campinas, SP",
    link: "https://example.com/ana-leitora",
  },
  1729000000004: {
    bios: "Forte como café, emocionalmente leite morno. ?",
    location: "Cafeteria do Multiverso",
    link: "https://example.com/cafe-com-leite",
  },
  1729000000005: {
    bios: "Só mais um capítulo. Mentira, são mais 47.",
    location: "Curitiba, PR",
    link: "https://example.com/lucas-mais-um-capitulo",
  },
  1729000000006: {
    bios: "Disponível para conversas profundas e viagens interplanetárias. ??",
    location: "Anéis de Saturno, bloco B",
    link: "https://example.com/lua-fora-de-orbita",
  },
  1729000000007: {
    bios: "Personagem principal de um livro que ainda não comecei.",
    location: "Rio de Janeiro, RJ",
    link: "https://example.com/bia-protagonista",
  },
  1729000000008: {
    bios: "Não sou sobremesa. Sou um estilo de vida. ??",
    location: "Geladeira, prateleira de cima",
    link: "https://example.com/pudim-supremo",
  },
  1729000000009: {
    bios: "Leitor profissional, comprador compulsivo de livros.",
    location: "Belo Horizonte, MG",
    link: "https://example.com/pedro-estante-infinita",
  },
  1729000000010: {
    bios: "Visualizo tudo, respondo nunca. ??",
    location: "Entre o mundo real e o Wi-Fi",
    link: "https://example.com/fantasma-visto",
  },
  1729000000011: {
    bios: "Romances fictícios porque os reais estáo em manutenão.",
    location: "Florianópolis, SC",
    link: "https://example.com/julia-romances",
  },
  1729000000012: {
    bios: "Uma batata pequena diante do universo. ??",
    location: "Galáxia do Puruí",
    link: "https://example.com/batata-intergalactica",
  },
  1729000000013: {
    bios: "Leio fantasia para fugir dos boletos da realidade.",
    location: "Santos, SP",
    link: "https://example.com/matheus-fantasia",
  },
  1729000000014: {
    bios: "Previsão do dia: 90% de chance de ficar em casa. ???",
    location: "Acima da sua cidade, talvez chovendo",
    link: "https://example.com/nuvem-depressiva",
  },
  1729000000015: {
    bios: "Coleciono livros, marcadores e problemas imaginãorios.",
    location: "Porto Alegre, RS",
    link: "https://example.com/lari-entre-paginas",
  },
  1729000000016: {
    bios: "Carregando personalidade... 99% há três horas.",
    location: "Atrês do monitor",
    link: "https://example.com/pixel-sem-sinal",
  },
  1729000000017: {
    bios: "Leitor de madrugada, arrependido de manhã.",
    location: "Brasília, DF",
    link: "https://example.com/joao-sem-sono",
  },
  1729000000018: {
    bios: "Respira. Bebe Água. Ignora os problemas. ??",
    location: "Lago tranquilo, perto de um jacaré",
    link: "https://example.com/capivara-paz",
  },
  1729000000019: {
    bios: "Se o casal não ficar junto no final, eu viro vilã.",
    location: "Recife, PE",
    link: "https://example.com/duda-casal-endgame",
  },
  1729000000020: {
    bios: "Bio não encontrada. Tente novamente após o próximo capítulo.",
    location: "Página não encontrada",
    link: "https://example.com/erro-404",
  },
  1729000000021: {
    bios: "Crítico literário autoproclamado desde ontem.",
    location: "Goiânia, GO",
    link: "https://example.com/rafa-opina",
  },
  1729000000022: {
    bios: "Durmo de dia e julgo personagens às 3 da manhã. ??",
    location: "Caverna 13, setor das sombras",
    link: "https://example.com/morcego-madrugada",
  },
  1729000000023: {
    bios: "Meu tipo favorito? Personagem literário emocionalmente indisponível.",
    location: "Salvador, BA",
    link: "https://example.com/bela-ficcao",
  },
  1729000000024: {
    bios: "Duas metades, um recheio e zero estabilidade emocional. ??",
    location: "Pacote aberto na cozinha",
    link: "https://example.com/biscoito-recheio",
  },
  1729000000025: {
    bios: "Leio livros enormes para fugir de conversas curtas.",
    location: "Manaus, AM",
    link: "https://example.com/vitin-leitor",
  },
  1729000000026: {
    bios: "Au-au.exe iniciado. Carinho detectado. Bateria fraca. ??",
    location: "Tomada mais próxima",
    link: "https://example.com/robozinho.exe",
  },
  1729000000027: {
    bios: "Minha linguagem do amor é indicar livros e cobrar a leitura.",
    location: "Niterói, RJ",
    link: "https://example.com/manu-indica",
  },
  1729000000028: {
    bios: "Penso, logo coaxo. ??",
    location: "Lago existencialista",
    link: "https://example.com/sapo-pensa",
  },
  1729000000029: {
    bios: "Protagonista de uma história que nem o autor entende.",
    location: "São José dos Campos, SP",
    link: "https://example.com/enzo-protagonista",
  },
  1729000000030: {
    bios: "Conexão instável, sinal forte quando ninguém está olhando. ??",
    location: "Rede protegida por senha",
    link: "https://example.com/wifi-gratis-talvez",
  },
};

let profileEdit = users.map((user) => ({
  userId: user.id,
  name: user.name,
  username: user.userName,
  bios: dadosPerfil[user.id]?.bios ?? null,
  location: dadosPerfil[user.id]?.location ?? null,
  link: dadosPerfil[user.id]?.link ?? null,
  midiaIcon: carregarImagem(imagensPorUsuario[user.id]),
}));

//edit profile

app.post("/profileEdit/:userId", (req, res) => {
  const { name, username, bios, location, link, midiaIcon } = req.body;
  const { userId } = req.params;

  const profile = users.find((u) => u.id === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  const userExistsUser = users.find(
    (u) => u.userName === username && u.id !== userId,
  );

  if (userExistsUser) {
    return res.status(409).json({
      message: "Este username já está em uso por outro usuário.",
    });
  }

  const perfilAnterior = profileEdit.find((u) => u.userId === userId);

  const edit = {
    userId,
    name: name ?? perfilAnterior?.name ?? profile.name,
    username: username ?? perfilAnterior?.username ?? profile.userName,
    bios: bios ?? perfilAnterior?.bios ?? null,
    location: location ?? perfilAnterior?.location ?? null,
    link: link ?? perfilAnterior?.link ?? null,
    // "midiaIcon: null" no body significa REMOVER a foto é não pode usar
    // "??" aqui, pois null ?? anterior devolve a foto antiga e a exclusão
    // nunca tinha efeito. Só preservamos o valor anterior quando a chave
    // não veio na requisição (undefined).
    midiaIcon: ("midiaIcon" in req.body && req.body.midiaIcon == null)
      ? null
      : midiaIcon ?? perfilAnterior?.midiaIcon ?? null,
  };

  // Atualiza os dados básicos do usuário
  profile.name = edit.name;
  profile.userName = edit.username;

  // Atualiza os nomes nos comentários
  posts.forEach((post) => {
    post.comments
      .filter((comment) => comment.authorId === userId)
      .forEach((comment) => {
        comment.author = edit.name;
        comment.userName = edit.username;
      });
  });

  // Atualiza os nomes nas publicações
  posts
    .filter((post) => post.authorId === userId)
    .forEach((post) => {
      post.author = edit.name;
      post.userName = edit.username;
    });

  // Substitui o perfil anterior
  profileEdit = profileEdit.filter((u) => u.userId !== userId);

  profileEdit.push(edit);

  return res.status(200).json({
    message: "Edit feita com sucesso!",
  });
});

//get edit profile

app.get("/profileEdit/:userId", (req, res) => {
  const { userId } = req.params;

  const profile = profileEdit.find((u) => u.userId === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  return res.status(200).json(profile);
});

//photos
// Seed: cada usuário pré-definido recebe a imagem de tema da pasta
// "imagensTema" (mesma distribuição em ordem/ciclo usada nas imagens de perfil).
let photos = idsUsuariosPredefinidos.map((id) => ({
  userId: id,
  midiaTheme: carregarImagem(imagensTemaPorUsuario[id], pastaImagensTema),
}));

app.post("/profileTheme/:userId", (req, res) => {
  const { midiaTheme } = req.body;
  const { userId } = req.params;

  let profile = users.find((u) => u.id === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  const newEditPhoto = photos.filter((u) => u.userId !== userId);

  const editPhotos = {
    userId,
    midiaTheme,
  };

  photos = newEditPhoto;

  photos.push(editPhotos);

  return res.status(200).json({
    message: "Edição de foto feita com sucesso!",
  });
});

//get edit profile

app.get("/profileTheme/:userId", (req, res) => {
  const { userId } = req.params;

  const profile = photos.find((u) => u.userId === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  return res.status(200).json(profile);
});

//get all
app.get("/profileEdit", (_, res) => {
  return res.status(200).json(profileEdit);
});

//delete perfilIcon

app.delete("/profilePerfilIcon/:id", (req, res) => {
  const { id } = req.params;

  const profile = profileEdit.find((photo) => photo.userId === id);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  profile.midiaIcon = null;

  return res
    .status(200)
    .json({ message: "Foto de perfil apagada com sucesso" });
});

//seguidores
let allFollowers = [
  {
    user: "Ana Clara Souza",
    userId: "1729000000003",
    following: "1729000000001",
  },
  {
    user: "Gabriel Oliveira",
    userId: "1729000000001",
    following: "1729000000005",
  },
  {
    user: "Pudim",
    userId: "1729000000008",
    following: "1729000000003",
  },
  {
    user: "Lua de Saturno",
    userId: "1729000000006",
    following: "1729000000018",
  },
  {
    user: "Pedro Henrique Lima",
    userId: "1729000000009",
    following: "1729000000001",
  },
  {
    user: "Capivara Zen",
    userId: "1729000000018",
    following: "1729000000008",
  },
  {
    user: "Beatriz Costa",
    userId: "1729000000007",
    following: "1729000000011",
  },
  {
    user: "Fantasma Online",
    userId: "1729000000010",
    following: "1729000000003",
  },
  {
    user: "Julia Ferreira",
    userId: "1729000000011",
    following: "1729000000009",
  },
  {
    user: "Matheus Santos",
    userId: "1729000000013",
    following: "1729000000006",
  },
  {
    user: "Nuvem Cinza",
    userId: "1729000000014",
    following: "1729000000013",
  },
  {
    user: "Larissa Almeida",
    userId: "1729000000015",
    following: "1729000000007",
  },
  {
    user: "Pixel Perdido",
    userId: "1729000000016",
    following: "1729000000020",
  },
  {
    user: "João Pedro Ribeiro",
    userId: "1729000000017",
    following: "1729000000015",
  },
  {
    user: "Maria Eduarda Silva",
    userId: "1729000000019",
    following: "1729000000011",
  },
  {
    user: "Rafael Carvalho",
    userId: "1729000000021",
    following: "1729000000002",
  },
  {
    user: "Morcego Noturno",
    userId: "1729000000022",
    following: "1729000000016",
  },
  {
    user: "Isabela Rodrigues",
    userId: "1729000000023",
    following: "1729000000019",
  },
  {
    user: "Biscoito Recheado",
    userId: "1729000000024",
    following: "1729000000008",
  },
  {
    user: "Vitor Mendes",
    userId: "1729000000025",
    following: "1729000000021",
  },
  {
    user: "Manuela Gomes",
    userId: "1729000000027",
    following: "1729000000023",
  },
  {
    user: "Sapo Filosófico",
    userId: "1729000000028",
    following: "1729000000014",
  },
  {
    user: "Enzo Barros",
    userId: "1729000000029",
    following: "1729000000005",
  },
  {
    user: "Wi-Fi do Vizinho",
    userId: "1729000000030",
    following: "1729000000027",
  },
  {
    user: "Gabriel Oliveira",
    userId: "1729000000001",
    following: "1729000000018",
  },
  {
    user: "Ana Clara Souza",
    userId: "1729000000003",
    following: "1729000000024",
  },
  {
    user: "Café com Leite",
    userId: "1729000000004",
    following: "1729000000010",
  },
  {
    user: "Robô de Estimação",
    userId: "1729000000026",
    following: "1729000000004",
  },
  {
    user: "Lucas Martins",
    userId: "1729000000005",
    following: "1729000000029",
  },
  {
    user: "Batata Cósmica",
    userId: "1729000000012",
    following: "1729000000022",
  },
  {
    user: "Rafael Carvalho",
    userId: "1729000000021",
    following: "1729000000030",
  },
  {
    user: "Isabela Rodrigues",
    userId: "1729000000023",
    following: "1729000000017",
  },
  {
    user: "Manuela Gomes",
    userId: "1729000000027",
    following: "1729000000012",
  },
  {
    user: "Pudim",
    userId: "1729000000008",
    following: "1729000000026",
  },
  {
    user: "Julia Ferreira",
    userId: "1729000000011",
    following: "1729000000025",
  },
  {
    user: "Enzo Barros",
    userId: "1729000000029",
    following: "1729000000014",
  },
];

app.post("/user/followers/:id", (req, res) => {
  const { user, userId } = req.body;
  const { id } = req.params;

  const userChosen = users.find((u) => u.id === id);

  if (!userChosen) {
    return res.status(404).json({ message: "usuário não encontrado" });
  }

  const unfollow = userChosen.followersArray?.find(
    (followers) => followers.userId === userId,
  );

  if (unfollow) {
    userChosen.followersNumber -= 1;

    allFollowers = allFollowers.filter(
      (follower) => !(follower.userId === userId && follower.following === id),
    );

    userChosen.followersArray = userChosen.followersArray.filter(
      (follower) => follower.userId !== userId,
    );

    return res.status(201).json(userChosen.followersArray);
  }

  const newFollow = {
    user: user,
    userId: userId,
    following: id,
  };

  allFollowers.push(newFollow);

  const arraySetFollowers = [
    ...new Map(
      allFollowers.map((followers) => [
        `${followers.user}-${followers.userId}-${followers.following}`,
        followers,
      ]),
    ).values(),
  ];

  allFollowers = arraySetFollowers;

  userChosen.followersNumber += 1;
  userChosen.followersArray.push(newFollow);

  return res.status(201).json(userChosen.followersArray);
});

app.get("/allFollowers", (_, res) => {
  return res.status(200).json(allFollowers);
});

app.get("/updateUser", (_, res) => {
  const usersWithoutPassword = users.map(({ password, ...user }) => user);

  return res.status(200).json(usersWithoutPassword);
});

app.get("/users", (req, res) => {
  const { search = "" } = req.query;

  const usersFilter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return res.status(200).json(usersFilter);
});

let goalNumberList = [
  { number: 12, userId: "1729000000019" },
  { number: 37, userId: "1729000000005" },
  { number: 8, userId: "1729000000011" },
  { number: 45, userId: "1729000000021" },
  { number: 23, userId: "1729000000013" },
  { number: 16, userId: "1729000000009" },
  { number: 4, userId: "1729000000025" },
  { number: 31, userId: "1729000000004" },
  { number: 49, userId: "1729000000017" },
  { number: 6, userId: "1729000000028" },
  { number: 28, userId: "1729000000010" },
  { number: 19, userId: "1729000000002" },
  { number: 41, userId: "1729000000022" },
  { number: 14, userId: "1729000000015" },
  { number: 33, userId: "1729000000007" },
  { number: 2, userId: "1729000000029" },
  { number: 26, userId: "1729000000012" },
  { number: 47, userId: "1729000000006" },
  { number: 10, userId: "1729000000024" },
  { number: 35, userId: "1729000000018" },
];

app.post("/goalNumber/:id", (req, res) => {
  const { number } = req.body;
  const { id } = req.params;

  const validation = goalNumberList.find((user) => user.userId === id);

  if (validation) {
    validation.number = number;
    return res.status(200).json(validation, { message: "Meta atualizada!" });
  }

  const numberBooksObj = {
    number: number,
    userId: id,
  };

  goalNumberList.push(numberBooksObj);

  return res.status(200).json(numberBooksObj, { message: "Meta formada!" });
});

//buscar numeros das metas

app.get("/goalNumber/:id", (req, res) => {
  const { id } = req.params;

  const validation = goalNumberList.find((user) => user.userId === id);

  if (validation) {
    return res.status(200).json(validation);
  }

  return res.status(404).json("Meta não encontrada");
});

// Buscar a meta do usuário logado
app.get("/goalNumber/user/:id", (req, res) => {
  const { id } = req.params;

  const goalUser = goalNumberList.find((user) => user.userId === id);

  if (!goalUser) {
    return res.status(404).json({
      message: "Meta não encontrada",
    });
  }

  return res.status(200).json(goalUser);
});
