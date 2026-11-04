const key = process.env.GOOGLE_BOOKS_API_KEY;

const resolvers = {
  Query: {
    ebooks: async (_, { q = "fiction", page = 0 }) => {
      const startIndex = Number(page) * 40;

      const params = new URLSearchParams({
        q,
        maxResults: "40",
        startIndex: String(startIndex),
        projection: "full",
        key,
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
  },
};

export default resolvers;
