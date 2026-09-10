import { useContext, useState } from "react";
import { EbookProgress } from "./ebookProgress";
import AppContext from "../context";
import { ebook, compass, Active } from "../svgCode";
import { Link, useLocation } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayBookSaved({ post }) {
  const location = useLocation();
  const { ebookSaved, styleCardActive, setStyleCardActive} = useContext(AppContext);
  const { user } = useRequisicoes({});

  const Ebook = ebook;
  const Compass = compass;

  const stylePatchFeed = location.pathname === `/feed/${user.id}`;
  const stylePatchProfile = location.pathname === `/perfil/${user.id}`;

  const styleFeed = stylePatchFeed ? " 2xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]" : "2xl:grid-cols-4";

// const [styleCardActive, setStyleCardActive] = useState(
//   ebookSaved[0]?.ebook.volumeInfo.title ?? null
// );

  return (
    <>
      <h4 className="flex gap-1 items-center text-lg">
        {stylePatchFeed ? null : stylePatchProfile ? (
          <>
            <Ebook />
            Lendo Agora
          </>
        ) : null}
      </h4>

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
            <span>{`${post?.author} não tem livro salvo 😭`}</span>
          )}
        </div>
      ) : (
        <ul
          className={`grid grid-rows-1 md:grid-cols-2  gap-3 w-full ${styleFeed}`}
        >
          {ebookSaved?.map((bookSave) => {
            return (
              <li key={bookSave.ebook.etag}>
                <EbookProgress book={bookSave} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
