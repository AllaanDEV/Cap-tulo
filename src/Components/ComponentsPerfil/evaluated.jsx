import { useContext, useState } from "react";
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

  const [itemsVisible, setItemsVisible] = useState(5);

  const hasMore = itemsVisible < postFeedback.length;
  const canShowLess = itemsVisible > 5;

  return (
    <Div className="p-2">
      {/* Cabeçalho */}
      <div className="flex justify-between">
        <p className="text-xl font-fraunce flex items-center">
          Avaliados ·
          <span className="text-gray text-md flex items-center pl-1">
            {postFeedback?.length}
          </span>
        </p>

        {postFeedback.length > 0 && (
          <div className="flex gap-1 text-wine">
            {canShowLess && (
              <button onClick={() => setItemsVisible(5)}>Ver menos</button>
            )}

            {hasMore && (
              <div className="flex items-center cursor-pointer">
                <button onClick={() => setItemsVisible((prev) => prev + 5)}>
                  Ver mais
                </button>

                <RightArrow />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Livros */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 mt-4">
        {postFeedback.slice(0, itemsVisible).map((ebook) => {
          return (
            <li key={ebook.id} className="flex flex-col min-w-0">
              {/* Imagem */}
              <div className="rounded-lg aspect-[3/4] overflow-hidden group w-full">
                <img
                  src={
                    ebook.postModified?.ebook?.ebook?.volumeInfo?.imageLinks
                      ?.thumbnail
                  }
                  alt={ebook.postModified?.ebook?.ebook?.volumeInfo?.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-lg
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Informações */}
              <div className="p-1 flex flex-col flex-1 min-h-0">
                <span>
                  {ebook.postModified?.ebook?.ebook?.volumeInfo?.title}
                </span>

                <span className="text-gray text-md">
                  {ebook?.postModified?.ebook?.ebook?.volumeInfo?.authors}
                </span>

                {/* Estrelas sempre no final */}
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
