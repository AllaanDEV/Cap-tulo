import { useContext, useEffect, useState } from "react";
import AppContext from "../context";

import { Active } from "../svgCode";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useLocation } from "react-router";
import { ContainerEbooks } from "./containerEbooks";

export function EbookProgress({ book }) {
  const {
    setProgressEbook,
    styleCardActive,
    setStyleCardActive,
  } = useContext(AppContext);

  const {user } = useRequisicoes({});

  const location = useLocation();

  const locationPatch = location.pathname === `/feed/${user.id}`;

  const [progress, setProgress] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    setProgress(randomNumber);

    // Estado compartilhado pelo Context
    setProgressEbook((prev) => [...prev, randomNumber]);
  }, []);

  console.log("text",     styleCardActive)
  return (
    <ContainerEbooks
      styleActive={
        styleCardActive?.ebook.volumeInfo.title ==
          book?.ebook.volumeInfo.title && locationPatch
          ? "bg-wine/20 border-wine"
          : null
      }
      onClick={() =>
        locationPatch
          ? styleCardActive?.ebook.volumeInfo.title ==
            book?.ebook.volumeInfo.title
            ? setStyleCardActive(null)
            : setStyleCardActive(book)
          : null
      }
      book={book}
    >
      {styleCardActive?.ebook.volumeInfo.title ===
        book?.ebook.volumeInfo.title && locationPatch ? (
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
    </ContainerEbooks>
  );
}
