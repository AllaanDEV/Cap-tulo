import express from "express";

const router = express.Router();

const KEY = process.env.EMOJIS_API_KEY;

router.get("/", async (_, res) => {
  //   const { busca, offset = 0 } = req.query;

  const response = await fetch(
    `https://emoji-api.com/emojis?access_key=${KEY}`,
  );

  const data = await response.json();

  res.json(data);
});


router.get("/search/:search", async (req, res) => {
  const { search } = req.params;

  const response = await fetch(
    `https://emoji-api.com/emojis?search=${search}&access_key=${KEY}`,
  );

  if (!response.ok) {
    return res.status(404).json({
      error:
        "não foi possivel realizar a busca de emojis, tente novamente mais tarde",
    });
  }

  const data = await response.json();

  return res.status(200).json(data);
});


router.get("/search/categories/:categorie", async (req, res) => {
  const { categorie } = req.params;

  const response = await fetch(
    `https://emoji-api.com/categories/${categorie}?access_key=${KEY}`,
  );

  if (!response.ok) {
    return res.status(404).json({
      error:
        "não foi possivel realizar a busca de emojis, tente novamente mais tarde",
    });
  }

  const data = await response.json();

  return res.status(200).json(data);
});

export default router;
