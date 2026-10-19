import { useContext, useEffect, useState } from "react";
import { Ebook } from "./ebooks";
import { ButtonBook } from "./buttonBook";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayEbooks() {
  const { ebooks, setEbooks, bookSearch, searchValue, themeOn, setBookSearch } =
    useContext(AppContext);
  const { getBookSave, user, getBooks } = useRequisicoes({});

  const [page, setPage] = useState(0);
  const [booksContador, setBooksContador] = useState(0);
  // Termo da busca em andamento: o "Carregar mais" deve trazer mais livros
  // do MESMO termo (próxima página), e não de categorias aleatórias.
  const [termoAtivo, setTermoAtivo] = useState("");

  const categorias = [
    "game of thrones",
    "Sousou no Frieren",
    "evangelion",
    "Stranger Things",
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
      // Quando há um termo ativo (busca no header), pagina o resultado da
      // busca; sem termo, pagina a categoria atual como antes.
      const res = await getBooks(termoAtivo || allBooks, page);

      if (!Array.isArray(res) || res.length === 0) return;

      setEbooks((prev) => {
        const combinado = [...prev, ...res];

        // Deduplica por id para não repetir livros ao paginar.
        return [...new Map(combinado.map((book) => [book.id, book])).values()];
      });
    }
    fetchData();
  }, [page, termoAtivo]);

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

  // Mantém sincronizado com o campo de busca do header: quando o termo muda,
  // reseta a paginação para começar a busca do zero.
  useEffect(() => {
    setTermoAtivo(searchValue);
    setPage(0);
  }, [searchValue]);

  useEffect(() => {
    getBookSave(user.id);
  }, []);

  return (
    <>
      <ul className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedBooks.map((e) => {
          return (
            <li
              key={e.etag}
              className="animate-[appear_500ms_cubic-bezier(0.22,1,0.36,1)_both]"
            >
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
          className={` w-[40vw] ${themeOn ? "text-[#995d43]" : "text-[#765242]"}`}
        >
          Carregar mais
        </ButtonBook>
      </div>
    </>
  );
}
