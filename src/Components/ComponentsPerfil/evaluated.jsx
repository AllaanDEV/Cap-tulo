import { useCallback, useContext, useState } from "react";
import { Div } from "../ComponentesFeed/div";
import AppContext from "../context";
import { useParams } from "react-router";
import { ArrayStars } from "../ComponentesFeed/arrayStars";
import { RightArrow } from "../svgCode";

export function Evaluated() {
  const { publication } = useContext(AppContext);
  const { id: paramsId } = useParams();

  const postFeedback = publication
    .filter((post) => post.authorId === paramsId)
    .filter((avaliation) => avaliation.type === "feedback")
    .sort((a, b) => b.postModified.starsEbook - a.postModified.starsEbook);

  console.log("AVALIADOS", postFeedback);

  const [itemsVisible, setItemsVisible] = useState(5);
  
  return (
    <Div className="p-2">
      <div className="flex justify-between">
        <p className="text-xl font-fraunce flex items-center">
          Avaliados ·
          <span className="text-gray text-md flex items-center">
            {postFeedback?.length}
          </span>
        </p>

        <div className="flex gap-1 text-wine">
          {itemsVisible > postFeedback.length && (
            <button onClick={() => setItemsVisible((prev) => prev - 5)}>
              Ver menos
            </button>
          )}

          {itemsVisible < postFeedback.length && (
            <div className="flex items-center cursor-pointer">
              <button onClick={() => setItemsVisible((prev) => prev + 5)}>
                Ver mais
              </button>{" "}
              <RightArrow></RightArrow>
            </div>
          )}
        </div>
      </div>

      <ul className="flex flex-wrap gap-5">
        {postFeedback.slice(0, itemsVisible).map((ebook) => {
          return (
            <li className="max-w-[10vw] h-[20vw] flex flex-col">
              {/* Imagem */}
              <div className="rounded-lg aspect-[3/4] overflow-hidden group">
                <img
                  src={
                    ebook.postModified?.ebook?.ebook?.volumeInfo.imageLinks
                      ?.thumbnail
                  }
                  alt={ebook.data?.ebook?.ebook?.volumeInfo.title}
                  className="
        rounded-lg
        h-auto
        max-h-[14vw]
        w-[10vw]
        transition-transform
        duration-300
        group-hover:scale-110
      "
                />
              </div>

              {/* Informações */}
              <div className="p-1 flex flex-col flex-1 min-h-0">
                <span>
                  {ebook.postModified?.ebook?.ebook?.volumeInfo.title}
                </span>

                <span className="text-gray text-md">
                  {ebook?.postModified?.ebook?.ebook?.volumeInfo?.authors}
                </span>

                {/* Sempre no final */}
                <div className="mt-auto">
                  <ArrayStars
                    starsNumber={ebook?.postModified?.starsEbook}
                    size="15"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}
