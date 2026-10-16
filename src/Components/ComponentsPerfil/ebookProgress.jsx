import { useContext, useEffect } from "react";
import AppContext from "../context";

import { Active } from "../svgCode";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useLocation } from "react-router";
import { ContainerEbooks } from "./containerEbooks";
import { Progress } from "./progress";

export function EbookProgress({ book, className, ...props }) {
  const {
    setProgressEbook,
    styleCardActive,
    setStyleCardActive,
    PostModified,
    publication,
  } = useContext(AppContext);

  const { user } = useRequisicoes({});

  const location = useLocation();

  const locationPatch = location.pathname === `/feed/${user.id}`;

  useEffect(() => {
    // Estado compartilhado pelo Context
    setProgressEbook((prev) => [book?.progress, ...prev]);
  }, []);

  const styleDisable = publication
    .filter((postUser) => postUser.authorId === user.id)
    .filter((postFeedback) => postFeedback.type === "feedback")
    .some(
      (bookSaved) =>
        bookSaved.postModified.ebook.ebook.volumeInfo.title ===
        book.ebook.volumeInfo.title,
    );
  console.log("STYLEDISLABE", styleDisable);

  return (
    <ContainerEbooks
      styleActive={
        styleCardActive?.ebook?.volumeInfo?.title ==
          book?.ebook?.volumeInfo?.title && locationPatch
          ? "bg-wine/20 border-wine"
          : null
      }
      styleDisable={styleDisable}
      onClick={() =>
        locationPatch
          ? PostModified === "resenha"
            ? null
            : styleCardActive?.ebook?.volumeInfo?.title ==
                book?.ebook?.volumeInfo?.title
              ? setStyleCardActive()
              : setStyleCardActive(book)
          : null
      }

      book={book}
      className={className}
      {...props}
    >
      {styleCardActive?.ebook?.volumeInfo?.title ===
        book?.ebook?.volumeInfo?.title && locationPatch ? (
        <span className="rounded-full bg-wine absolute w-fit p-1 text-white left-1 top-1">
          <Active></Active>
        </span>
      ) : null}

      <Progress book={book}></Progress>
    </ContainerEbooks>
  );
}
