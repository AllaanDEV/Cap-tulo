import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const key = process.env.GIFS_GIPHY_API_KEY;

router.get("/", async (req, res) => {
  const { busca, offset = 0 } = req.query;

  if (!busca) {
    return res.json([]);
  }

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURIComponent(busca)}&limit=10&offset=${offset}&rating=g`,
  );

  const data = await response.json();

  res.json(data.data ?? []);
});

export default router;
