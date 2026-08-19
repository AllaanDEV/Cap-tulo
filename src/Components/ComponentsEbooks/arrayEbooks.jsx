import { useContext, useEffect, useState } from "react";
import { Ebook } from "./ebooks";
import { ButtonBook } from "./buttonBook";
import AppContext from "../context";

export function ArrayEbooks() {
  const {ebooks, setEbooks, bookSearch,  searchValue }= useContext(AppContext)

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

      setEbooks((prev) => [...prev, ...(res ?? [])]);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    setBooksContador(booksContador + 1);
  }, [allBooks]);

  return (
    <>
      <ul className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {( searchValue ? bookSearch  : ebooks ).map((e) => {
          return (
            <li key={e.etag} className="">
              <Ebook ebook={e}></Ebook>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center py-5">
        <ButtonBook
          onClick={() => {
            (setPage(page + 1), setAllBooks(categorias[booksContador]));
          }}
          className="w-[60vw]"
        >
          Carregar mais
        </ButtonBook>
      </div>
    </>
  );
}
