import { useContext } from "react";
import { EbookProgress } from "./ebookProgress";
import AppContext from "../context";
import { ebook } from "../svgCode";

export function ArrayBookSaved() {
  const { ebookSaved } = useContext(AppContext);
  const Ebook = ebook;

  const bar = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <>
      <h4 className="flex gap-1 items-center text-lg">
        <Ebook></Ebook>
        Lendo Agora
      </h4>
      <ul className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 2x1:grid-cols-4 gap-3 ">
        {ebookSaved.length === 0 ? (
          <p>Nenhum livro salvo.</p>
        ) : (
          <>
            {ebookSaved.map((bookSave) => {
              const progressBar = bar();
              return (
                <li key={bookSave.ebook.etag}>
                  <EbookProgress book={bookSave} progress={progressBar} />
                </li>
              );
            })}
          </>
        )}
      </ul>
    </>
  );
}
