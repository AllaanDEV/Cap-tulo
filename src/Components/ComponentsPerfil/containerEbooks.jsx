import { useContext, useEffect } from "react";
import { EventButton } from "./eventButton";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { XSavedEbook, Star } from "../svgCode";
import { useLocation, useParams } from "react-router";
import { ArrayStars } from "../ComponentesFeed/arrayStars";

export function ContainerEbooks({
  children,
  styleActive,
  className,
  book,
  title,
  subtitle,
  thumbnail,
  starsEbook,
  ...props
}) {
  const { setEbookSaved, postModified, starFilled, stars, containerModified } =
    useContext(AppContext);
  const { token, user, getBookSave } = useRequisicoes({});
  const location = useLocation();
  const { id: profileId } = useParams();

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

  const styleHover =
    (containerModified || location.pathname === `/perfil/`) &&
    location.pathname === `/feed/${user.id}`
      ? ""
      : "hover:-translate-y-1 hover:shadow-lg";

  console.log("conatiner", containerModified);
  return (
    <div
      className={`bg-background border border-border w-full h-auto flex items-center rounded-lg transition duration-300 ${(containerModified === true || location.pathname === `/perfil/`) && location.pathname === `/feed/${user.id}` ? "" : "hover:-translate-y-1 hover:shadow-lg"} group relative ${styleActive} ${className}`}
      {...props}
    >
      {(location.pathname === `/feed/${user.id}` ||
        location.pathname === `/perfil/${user.id}`) &&
      containerModified === false ? (
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
            src={book?.ebook.volumeInfo.imageLinks?.thumbnail || thumbnail}
            alt={book?.ebook.volumeInfo.title || title}
            className="rounded-lg"
          ></img>
        </div>
        <div className={`flex flex-col gap-5  w-[100%]`}>
          <div className={`${title && "my-auto"}`}>
            <p className={`${title ? "text-lg" : "text-sm"}`}>
              {book?.ebook.volumeInfo.title || title}
            </p>
            <p className="text-xs text-black/70">
              {book?.ebook.volumeInfo.subtitle || subtitle}
            </p>
            {title && <ArrayStars starsEbook={starsEbook}></ArrayStars>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
