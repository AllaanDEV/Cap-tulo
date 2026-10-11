import { useContext, useEffect, useState } from "react";
import { EbookProgress } from "./ebookProgress";
import AppContext from "../context";
import { ebook, Compass, Active, RightArrow } from "../svgCode";
import { Link, useLocation } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Div } from "../ComponentesFeed/div";

export function ArrayBookSaved({ profile }) {
  const location = useLocation();
  const localiton = useLocation();
  const { ebookSaved, setStyleCardActive } = useContext(AppContext);
  const { stylePatchFeed, stylePatchProfile, getBookSave } = useRequisicoes({});

  const Ebook = ebook;


  const styleFeed = stylePatchFeed
    ? " 2xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]"
    : " grid-cols-1 sm:grid-cols-2";

  useEffect(() => {
    setStyleCardActive(ebookSaved[0] ?? null);
  }, []);

  const [itemsVisible, setItemsVisible] = useState(4);

  const hasMore = itemsVisible < ebookSaved.length;
  const canShowLess = itemsVisible > 4;
  return (
    <Div>
      <div className="flex items-center justify-between">
        <h4 className="flex gap-1 items-center text-lg">
          {stylePatchFeed
            ? null
            : location.pathname.startsWith("/perfil") && (
                <>
                  <Ebook />
                  Lendo Agora
                </>
              )}
        </h4>

        {ebookSaved.length > 0 && location.pathname.startsWith("/perfil") && (
          <div className="flex gap-1 text-wine">
            {canShowLess && (
              <button onClick={() => setItemsVisible(4)}>Ver menos</button>
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

      {ebookSaved?.length === 0 ? (
        <div className="flex items-center gap-1">
          {stylePatchProfile || stylePatchFeed ? (
            <>
              <span>Salve um livro!</span>

              <Link
                to="/ebooks"
                className="bg-border bg-wine/20 hover:bg-wine/40 py-2 px-1 w-40 rounded-xl group transition-colors flex gap-2 items-center"
              >
                <Compass />
                Explorar
              </Link>
            </>
          ) : (
            <span>{`${profile?.name} não tem livro salvo 😭`}</span>
          )}
        </div>
      ) : (
        <ul
          className={`grid grid-rows-1  gap-3 w-full ${styleFeed}`}
        >
          {Array.isArray(ebookSaved) &&
            ebookSaved.slice(0, itemsVisible).map((bookSave) => {
              console.log("id", ebookSaved);
              return (
                <li key={bookSave.ebook.etag}>
                  <EbookProgress book={bookSave} />
                </li>
              );
            })}
        </ul>
      )}
    </Div>
  );
}
