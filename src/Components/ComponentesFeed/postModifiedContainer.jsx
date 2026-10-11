import { useContext } from "react";
import { Progress } from "../ComponentsPerfil/progress";
import { XSavedEbook } from "../svgCode";
import { ArrayStars } from "./arrayStars";
import AppContext from "../context";

export function PostModifiedContainer({
  className,
  book,
  title,
  thumbnail,
  starsEbook,
  starsNumber,
  subtitle,
  type,
  progress,
  postModified,
  delet,
   setContainerModified,
  ...props
}) {

  const{setStyleCardActive , setPostModified}=useContext(AppContext)
  return (
    <div
      className={`bg-background border border-border w-full h-auto flex items-center rounded-lg transition duration-300 ${className}`}
      {...props}
    >
      <div className="px-3 py-4 flex gap-5 w-full">
        <div className="h-30 min-h-30 w-20 rounded-lg aspect-[3/4] ">
          <img
            src={book?.ebook?.volumeInfo?.imageLinks?.thumbnail || thumbnail}
            alt={book?.ebook?.volumeInfo?.title || title}
            className="rounded-lg"
          ></img>
        </div>
        <div className={`flex flex-col gap-5  w-full`}>
          <div className={`${title && "my-auto"}`}>
            <div className="flex justify-between w-full items-center">
              <p className={`${title ? "text-sm sm:text-lg" : "text-sm"}`}>
                {book?.ebook?.volumeInfo.title || title}
              </p>
              {delet && (
                <button className="cursor-pointer" onClick={() => {setStyleCardActive(), setPostModified(),    setContainerModified(false)}}>
                  <XSavedEbook size="1em"></XSavedEbook>
                </button>
              )}
            </div>

            <p className="text-xs text-black/70">
              {book?.ebook?.volumeInfo?.subtitle || subtitle}
            </p>
            {(postModified || type) === "feedback" && (
              <ArrayStars
                starsEbook={starsEbook}
                starsNumber={starsNumber}
              ></ArrayStars>
            )}
          </div>
          {type === "resenha" && (
            <Progress progress={progress || book}></Progress>
          )}
        </div>
      </div>
    </div>
  );
}
