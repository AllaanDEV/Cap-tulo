import { useContext } from "react";
import { EventButton } from "./eventButton";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { XSavedEbook } from "../svgCode";
import { useLocation } from "react-router";
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
  starsNumber,
  styleDisable,
  onClick,
  ...props
}) {
  const { setEbookSaved, postModified, containerModified } =
    useContext(AppContext);
  const { user, deleteSavedBook: deleteSavedBookRequest } = useRequisicoes({});
  const location = useLocation();

  const deleteSavedBook = async () => {
    const data = await deleteSavedBookRequest(book.ebook.id);
    setEbookSaved(data);
    return data;
  };

  return (
    <div
      {...props}
      onClick={(event) => {
        if (
          styleDisable &&
          postModified === "feedback" &&
          location.pathname === `/feed/${user.id}`
        ) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        onClick?.(event);
      }}
      className={`bg-background border border-border w-full h-auto flex items-center rounded-lg transition duration-300 ${
        containerModified === true || location.pathname === `/perfil/`
          ? ""
          : "hover:-translate-y-1 hover:shadow-lg"
      } ${
        styleDisable &&
        postModified === "feedback" &&
        location.pathname === `/feed/${user.id}`
          ? "bg-gray/50"
          : ""
      } group relative ${styleActive} ${className}`}
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
            src={book?.ebook?.volumeInfo?.imageLinks?.thumbnail || thumbnail}
            alt={book?.ebook?.volumeInfo?.title || title}
            className="rounded-lg"
          ></img>
        </div>
        <div className={`flex flex-col gap-5  w-[100%]`}>
          <div className={`${title && "my-auto"}`}>
            <p className={`${title ? "text-sm sm:text-lg" : "text-sm"}`}>
              {book?.ebook?.volumeInfo.title || title}
            </p>
            <p className="text-xs text-black/70">
              {book?.ebook?.volumeInfo?.subtitle || subtitle}
            </p>
            {title && (
              <ArrayStars
                starsEbook={starsEbook}
                starsNumber={starsNumber}
              ></ArrayStars>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
