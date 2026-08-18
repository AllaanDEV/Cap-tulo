import { useEffect, useState } from "react";
import { SponsoredBooks } from "./ebooks";

export function ArrayEbooks() {
  const [ebooks, setEbooks] = useState([]);
  const [page, setPage] = useState(0);
  const [booksContador, setBooksContador] = useState(0);

  const categorias = [
    "null",
    "fiction",
    "Fantasy",
    "Romance",
    "Mystery",
    "Thriller",
    "Horror",
    "Science Fiction",
    "Biography",
    "History",
    "Technology",
    "Business",
    "Self-Help",
    "Poetry",
  ];

  const [allBooks, setAllBooks] = useState(categorias[0]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/books?q=${allBooks}&page=${page}`);
      const res = await response.json();

      setEbooks((prev) => [...prev, ...(res.items ?? [])]);
    }
    fetchData();
  }, [page]);

  console.log(allBooks);
  useEffect(() => {
    setBooksContador(booksContador + 1);
  }, [allBooks]);

  return (
    <ul>
      {ebooks.map((e) => {
        //  {e.volumeInfo?.authors?.join(", ")}
        return <li key={e.etag}><SponsoredBooks ebook={e}></SponsoredBooks></li>;
      })}
      <button
        onClick={() => {
          (setPage(page + 1), setAllBooks(categorias[booksContador]));
        }}
      >
        carregar mais
      </button>
    </ul>
  );
}
