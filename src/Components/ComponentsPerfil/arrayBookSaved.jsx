import { useContext, useEffect, useState } from "react";
import { EbookProgress } from "./ebookProgress";
import AppContext from "../context";
import { ebook, compass, Active, RightArrow } from "../svgCode";
import { Link, useLocation } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Div } from "../ComponentesFeed/div";

export function ArrayBookSaved({ profile }) {
  const location = useLocation();
  const { ebookSaved, setStyleCardActive } = useContext(AppContext);
  const { stylePatchFeed, stylePatchProfile, getBookSave } = useRequisicoes({});

  const Ebook = ebook;
  const Compass = compass;

  const styleFeed = stylePatchFeed
    ? " 2xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]"
    : "2xl:grid-cols-4";

  useEffect(() => {
    setStyleCardActive(ebookSaved[0] ?? null);
  }, []);

  const [itemsVisible, setItemsVisible] = useState(4);

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

        <div className="flex gap-1 text-wine">
          {itemsVisible > ebookSaved.length && (
            <button onClick={() => setItemsVisible((prev) => prev - 5)}>
              Ver menos
            </button>
          )}

          {itemsVisible < ebookSaved.length && (
            <div className="flex items-center cursor-pointer">
              <button onClick={() => setItemsVisible((prev) => prev + 5)}>
                Ver mais
              </button>
              <RightArrow></RightArrow>
            </div>
          )}
        </div>
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
          className={`grid grid-rows-1 md:grid-cols-2  gap-3 w-full ${styleFeed}`}
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
