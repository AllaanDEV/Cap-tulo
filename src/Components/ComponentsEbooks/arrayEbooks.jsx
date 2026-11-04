import { useContext, useEffect, useMemo, useState } from "react";
import { Ebook } from "./ebooks";
import { ButtonBook } from "./buttonBook";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_EBOOKS } from "../../../graphql/queries/ebooks";

export function ArrayEbooks() {
  const { ebooks, setEbooks, bookSearch, searchValue, themeOn } =
    useContext(AppContext);
  const { getBookSave, user, getBooks } = useRequisicoes({});

  const [page, setPage] = useState(0);
  const [booksContador, setBooksContador] = useState(0);
  const [arraySearh, setArraySearch] = useState([]);

  const [termoAtivo, setTermoAtivo] = useState("");

  const categorias = [
    "game of thrones",
    "Kafka",
    "Sousou no Frieren",
    "breaking bad",
    "Evangelion",
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

  const { data, loading, error, refetch } = useQuery(GET_ALL_EBOOKS, {
    variables: {
      q: termoAtivo?.trim() || allBooks,
      page: page,
    },
  });

  useEffect(() => {
    if (!searchValue.trim()) {
      const handleSearch = () => {
        refetch({
          q: allBooks,
          page: page,
        });
      };
      handleSearch();
      setArraySearch(() => new Map());
      setPage((prev) => prev);
    }
  }, [searchValue, page]);

  useEffect(() => {
    if (!data?.ebooks) return;

    if (termoAtivo.trim() && data.ebooks) {
  
        setEbooks(() => new Map());
   
      setArraySearch((prev) => {
        return new Map(
          [...prev.values(), ...data.ebooks].map((book) => [book.etag, book]),
        );
      });
      return;
    }

    if (page === 0) {
      setEbooks(new Map(data.ebooks.map((book) => [book.etag, book])));
      return;
    }

    setEbooks((prev) => {
      const combinado = [...prev.values(), ...data.ebooks];

      return new Map(combinado.map((book) => [book.etag, book]));
    });
  }, [data, termoAtivo, page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooksContador((prev) => prev + 1);
    }, 0);

    return () => clearTimeout(timer);
  }, [allBooks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTermoAtivo(searchValue);
      setPage(0);
    }, 0);

    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    getBookSave(user.id);
  }, []);

  useEffect(() => {
    if (error) {
      console.warn("A busca de livros foi interrompida por:", error);
    }
  }, [error]);

  const arrayValidation =
    [...ebooks.values()].length > 0 || [...arraySearh.values()].length > 0;

  return (
    <>
      {arrayValidation ? (
        <>
          <ul className="grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {([...arraySearh.values()].length > 0
              ? [...arraySearh.values()]
              : [...ebooks.values()]
            ).map((e) => {
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
                setPage(page + 1);

                setAllBooks(categorias[booksContador]);
              }}
              className={` w-[40vw] ${themeOn ? "text-[#995d43]" : "text-[#765242]"}`}
            >
              {loading ? "Buscando..." : "Carregar mais"}
            </ButtonBook>
          </div>
        </>
      ) : (
        <span className="font-extralight flex justify-center">
          Carregando livros...
        </span>
      )}
      {error && (
        <span className="w-full flex justify-center items-center">
          Infelizmente não conseguimos buscar os livros, consulte o console para
          mais informações. Por favor, tente novamente regarregando a página
        </span>
      )}
    </>
  );
}
