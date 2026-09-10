import { useContext, useEffect, useState } from "react";
import AppContext from "../context";
import { EventButton } from "./eventButton";
import { Active, XSavedEbook } from "../svgCode";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useLocation, useParams } from "react-router";

export function EbookProgress({ book }) {
  const { setProgressEbook, setEbookSaved, styleCardActive, setStyleCardActive} =
    useContext(AppContext);

  const { token, user } = useRequisicoes({});
  const { id: paramsId } = useParams();
  const location = useLocation();

  
  const locationPatch = location.pathname === `/feed/${user.id}`;
  const deleteSavedBook = async () => {


    const response = await fetch(
      `http://localhost:3000/api/books/ebookDelete/${book.ebook.etag}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          etagBook: book.ebook.etag,
        }),
      },
    );
    const data = await response.json();
    setEbookSaved(data);
    return response;
  };

  const [progress, setProgress] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    setProgress(randomNumber);

    // Estado compartilhado pelo Context
    setProgressEbook((prev) => [...prev, randomNumber]);
  }, []);

console.log(book)
  return (
    <div
      className={`bg-background border border-border w-full h-auto flex items-center rounded-lg transition duration-300 hover:-translate-y-1 hover:shadow-lg group relative ${styleCardActive?.ebook.volumeInfo.title == book?.ebook.volumeInfo.title && locationPatch  ? "bg-wine/20 border-wine" : null}`}
      onClick={() =>
        locationPatch
          ? styleCardActive?.ebook.volumeInfo.title == book?.ebook.volumeInfo.title
            ? setStyleCardActive(null)
            : setStyleCardActive(book)
          : null
      }
    >
      {location.pathname === `/feed/${user.id}` ||
      location.pathname === `/perfil/${user.id}` ? (
        <EventButton
          className={"text-black top-1 right-1"}
          onClick={deleteSavedBook}
        >
          <XSavedEbook></XSavedEbook>
        </EventButton>
      ) : null}

      <div className="px-3 py-4 flex gap-5 w-full">
        <div className="h-30 min-h-30 w-20 rounded-lg aspect-[3/4] ">
          <img
            src={book.ebook.volumeInfo.imageLinks?.thumbnail}
            alt={book.ebook.volumeInfo.title}
            className="rounded-lg"
          ></img>
        </div>
        <div className="flex flex-col gap-5  w-[100%]">
          <div>
            <p className="text-sm">{book.ebook.volumeInfo.title}</p>
            <p className="text-xs text-black/70">
              {book.ebook.volumeInfo.subtitle}
            </p>
          </div>

          {styleCardActive?.ebook.volumeInfo.title === book?.ebook.volumeInfo.title && locationPatch ? (
            <span className="rounded-full bg-wine absolute w-fit p-1 text-white left-1 top-1">
              <Active></Active>
            </span>
          ) : null}

          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between">
              <span className="text-xs text-black/70">Progresso</span>
              <span className="text-xs text-wine">{progress}%</span>
            </div>
            <div className="w-full rounded-2xl bg-gray/30">
              <div
                className="w-full py-1 bg-wine rounded-2xl"
                style={{
                  width: `${progress === 100 ? "100" : progress}%`,
                  backgroundColor: `${progress === 100 ? "green" : progress < 100 ? "var(--color-wine: #722F37)" : null}`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
