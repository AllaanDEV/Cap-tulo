const GOOGLE_BOOKS_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const GIPHY_KEY = process.env.GIPHY_API_KEY;
const EMOJIS_KEY = process.env.EMOJIS_API_KEY;

const resolvers = {
  Query: {
    // Google Books
    ebooks: async (_, { q = "fiction", page = 0 }) => {
      const startIndex = Number(page) * 40;

      const params = new URLSearchParams({
        q,
        maxResults: "40",
        startIndex: String(startIndex),
        projection: "full",
        key: GOOGLE_BOOKS_KEY,
      });

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?${params}`,
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar livros no Google Books");
      }

      const data = await response.json();

      return data.items ?? [];
    },

    // Giphy
    gifs: async (_, { busca, offset = 0 }) => {
      if (!busca?.trim()) return [];

      const params = new URLSearchParams({
        q: busca,
        limit: "10",
        api_key: GIPHY_KEY,
        offset: String(offset),
        rating: "g",
      });

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${params}`,
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar GIFs na Giphy.");
      }

      const data = await response.json();

      return data.data ?? [];
    },

    // Emojis
    emojis: async () => {
      const response = await fetch(
        `https://emoji-api.com/emojis?access_key=${EMOJIS_KEY}`,
      );

      if (!response.ok) {
        throw new Error("Não foi possível buscar os emojis.");
      }

      return (await response.json()) ?? [];
    },

    searchEmojis: async (_, { search }) => {
      const response = await fetch(
        `https://emoji-api.com/emojis?search=${encodeURIComponent(search)}&access_key=${EMOJIS_KEY}`,
      );

      if (!response.ok) {
        throw new Error("Não foi possível realizar a busca de emojis.");
      }

      return (await response.json()) ?? [];
    },

    emojisByCategory: async (_, { categorie }) => {
      const response = await fetch(
        `https://emoji-api.com/categories/${encodeURIComponent(categorie)}?access_key=${EMOJIS_KEY}`,
      );

      if (!response.ok) {
        throw new Error("Não foi possível buscar emojis desta categoria.");
      }

      return (await response.json()) ?? [];
    },
  },
};

export default resolvers;