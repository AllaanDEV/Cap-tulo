import express from "express";
import jwt from "jsonwebtoken";
import {feedbackEbooks, savedBooks} from "./dataBase/dataBaseEbooks.js"

const key = process.env.GOOGLE_BOOKS_API_KEY;

const router = express.Router();


// router.get("/", async (req, res) => {
//   const { q = "fiction", page = 0 } = req.query;

//   const startIndex = Number(page) * 40;

// const params = new URLSearchParams({
//   q,
//   maxResults: "40",
//   startIndex: String(startIndex),
//   projection: "full",
//   key,
// });

//   const response = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?${params}`,
//   );

//   const data = await response.json();

//   res.json(data.items ?? []);
// });

router.post("/saved", (req, res) => {
  const ebook = req.body;
  const stringToken = req.headers.authorization.split(" ");
  const decoded = jwt.verify(stringToken[1], "minha_chave_super_secreta");

  const userId = decoded.id;

  if (!ebook?.etag) {
    return res.status(400).json({
      error: "O e-book precisa possuir um ID.",
    });
  }

  const ebookAlreadySaved = savedBooks.some(
    (savedBook) =>
      savedBook.userId === userId && savedBook.ebook.etag === ebook.etag,
  );

  if (ebookAlreadySaved) {
    return res.status(409).json({
      error: "Este e-book já foi salvo por este usuário.",
    });
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const newSavedBook = {
    userId,
    ebook,
    progress: randomNumber,
  };

  savedBooks.push(newSavedBook);

  return res.status(201).json({
    message: "E-book salvo com sucesso!",
    ebook: newSavedBook.ebook,
  });
});

router.get("/saved", (req, res) => {
  const stringToken = req.headers.authorization.split(" ");
  const decoded = jwt.verify(stringToken[1], "minha_chave_super_secreta");

  const userId = decoded.id;

  const arrayBookSavedUser = savedBooks.filter((a) => a.userId === userId);

  if (arrayBookSavedUser.length >= 1) {
    return res.status(200).json(arrayBookSavedUser);
  }

  return res.status(404).json({ error: "Ainda não foi salvo nenhum livro" });
});

router.get("/saved/:userId", (req, res) => {
  const { userId } = req.params;

  const booksUser = savedBooks.filter(
    (savedBook) => String(savedBook.userId) === String(userId),
  );

  return res.status(200).json(booksUser);
});

//retirar livros salvos

router.delete("/ebookDelete/:id", (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  const book = savedBooks.find((book) => book.ebook.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado :(",
    });
  }

  let indice = savedBooks.findIndex((book) => book.ebook.id === id);

  if (indice !== -1) {
    savedBooks.splice(indice, 1);
  }

  const booksUser = savedBooks.filter(
    (savedBook) => String(savedBook.userId) === String(userId),
  );

  return res.status(200).json(booksUser);
});

//retorna a lista de livros com notas
router.get("/feedbacks", (_, res) => {
  return res.status(200).json(feedbackEbooks);
});

export default router;
