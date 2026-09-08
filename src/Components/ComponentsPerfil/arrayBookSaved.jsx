import { useContext } from "react";
import { EbookProgress } from "./ebookProgress";
import AppContext from "../context";
import { ebook, compass } from "../svgCode";
import { Link } from "react-router";

export function ArrayBookSaved() {
  const { ebookSaved} = useContext(AppContext);

  const Ebook = ebook;
  const Compass = compass;


  return (
    <>
      <h4 className="flex gap-1 items-center text-lg">
        <Ebook></Ebook>
        Lendo Agora
      </h4>
      {ebookSaved?.length === 0 ? (
        <div className="flex items-center gap-1">
          <p>Salve um livro!</p>
          <Link to={"/ebooks"} className="`bg-border bg-wine/20 hover:bg-wine/40 py-2 px-1 w-40 rounded-xl group transition-colors flex gap-2 items-center">
            <Compass></Compass>
            Explorar
          </Link>
        </div>
      ) : (
        <ul className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 2x1:grid-cols-4 gap-3 ">
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
