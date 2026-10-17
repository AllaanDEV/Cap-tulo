import { useContext, useEffect, useState } from "react";
import { Ebook } from "./ebooks";
import { ButtonBook } from "./buttonBook";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayEbooks() {
  const { ebooks, setEbooks, bookSearch, searchValue, themeOn } = useContext(AppContext);
  const { getBookSave, user, getBooks } = useRequisicoes({});

  const [page, setPage] = useState(0);
  const [booksContador, setBooksContador] = useState(0);

  const categorias = [
    "Sousou no Frieren",
    "evangelion",
    "game of thrones",
    "Stranger Things",
    "DragonBall",
    "Codigo Da Vinci",
    "breaking bad",
    "The Sopranos",
    "Balduino",
    "Fantasy",
    "Romance",
    "agostinho",
    "maquiavel",
    "Science Fiction",
    "Technology",
    "Self-Help",
    "Poetry",
  ];

  const [allBooks, setAllBooks] = useState(categorias[0]);

  useEffect(() => {
    async function fetchData() {
      const res = await getBooks(allBooks, page);

      setEbooks((prev) => [...prev, ...res]);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    setBooksContador(booksContador + 1);
  }, [allBooks]);

  const arraySetEbooks = [
    ...new Map(ebooks.map((book) => [book.id, book])).values(),
  ];

  const arraySetBook = [
    ...new Map(bookSearch.map((book) => [book.id, book])).values(),
  ];

  const displayedBooks = searchValue ? arraySetBook : arraySetEbooks;

  useEffect(() => {
    getBookSave(user.id);
  }, []);

  return (
    <>
      <ul className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedBooks.map((e) => {
          return (
            <li key={e.etag} className="animate-[appear_500ms_cubic-bezier(0.22,1,0.36,1)_both]">
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
          className= { ` w-[40vw] ${themeOn ? "text-[#995d43]" : "text-[#765242]"}`}
        >
          Carregar mais
        </ButtonBook>
      </div>
    </>
  );
}
