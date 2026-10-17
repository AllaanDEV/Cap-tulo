import { useContext, useEffect, useState } from "react";
import { EbookProgress } from "./ebookProgress";
import AppContext from "../context";
import { Ebook, Compass, RightArrow } from "../svgCode";
import { Link, useLocation } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Div } from "../ComponentesFeed/div";

export function ArrayBookSaved({ profile }) {
  const location = useLocation();
  const { ebookSaved, setStyleCardActive, publication, postModified, editRequisicao } =
    useContext(AppContext);
  const { stylePatchFeed, stylePatchProfile, user, getBookSave } =
    useRequisicoes({});

  // Quando um livro é salvo (ou removido) em qualquer página,
  // recarrega a estante para esta tela atualizar na hora.
  useEffect(() => {
    if (stylePatchFeed || stylePatchProfile) {
      getBookSave(user.id);
    }
  }, [editRequisicao]);

  const styleFeed = stylePatchFeed
    ? " 2xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]"
    : " grid-cols-1 sm:grid-cols-2";

  useEffect(() => {
    if (postModified === "feedback") {
      const validationPost = ebookSaved.find(
        (bookSaved) =>
          !publication.some(
            (post) =>
              post.authorId === user.id &&
              post.type === "feedback" &&
              post.postModified?.ebook?.ebook?.id === bookSaved.ebook?.id,
          ),
      );

      setStyleCardActive(validationPost ?? null);
    } else {
      setStyleCardActive(ebookSaved[0] ?? null);
    }
  }, [postModified, ebookSaved, publication, user.id]);
  const [itemsVisibleState, setItemsVisible] = useState(4);

  // No feed (ComplexPost) mostra todos os livros salvos;
  // no perfil mantém a paginação com "Ver mais".
  const itemsVisible = stylePatchFeed || stylePatchProfile ? ebookSaved.length : itemsVisibleState;

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
            <div className="mb-3 flex gap-2 items-center">
              <span>Salve um livro!</span>

              <Link
                to="/ebooks"
                className="bg-border bg-wine/20 hover:bg-wine/40 py-2 px-1 w-40 rounded-xl group transition-colors flex gap-2 items-center"
              >
                <Compass />
                Explorar
              </Link>
            </div>
          ) : (
            <span>{`${profile?.name} não tem livro salvo 😭`}</span>
          )}
        </div>
      ) : (
        <ul className={`grid grid-rows-1  gap-3 w-full ${styleFeed}`}>
          {Array.isArray(ebookSaved) &&
            ebookSaved.slice(0, itemsVisible).map((bookSave) => {
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
