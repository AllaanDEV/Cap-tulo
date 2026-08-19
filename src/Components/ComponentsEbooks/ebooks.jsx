import { useState } from "react";
import { Lines } from "../ComponentsForm/lines";
import { DetailsBook } from "./detailsBook";

export function Ebook(ebook) {
  console.log(ebook);
  const [details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails(!details);
  };
  
  return (
    <article className="overflow-hidden rounded-lg border border-[#e1d1ba] bg-[#fffaf3] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-md bg-[#f1eadf]">
        <img
          src={ebook.ebook.volumeInfo?.imageLinks?.thumbnail}
          alt={ebook.ebook.volumeInfo?.title}
          className="aspect-[3/4] w-full object-contain transition duration-500 hover:scale-[1.02]"
        />

        {ebook.ebook.volumeInfo?.categories && (
          <span className="absolute left-3 top-3 rounded bg-[#fffaf3] px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#c4593a]">
            {ebook.ebook.volumeInfo?.categories}
          </span>
        )}
      </div>

      <div className="pt-4">
        <h4 className="font-serif text-xl font-semibold">{ebook.title}</h4>

        <p className="mt-1 font-serif text-sm italic text-[#995d43]">
          {ebook.ebook.volumeInfo.title}
        </p>
        <p className="mt-1 mb-5 font-serif text-[12px] italic text-[#995d43]/60">
          {ebook.ebook.volumeInfo.subtitle}
        </p>

        <Lines></Lines>
        <button
          onClick={toggleDetails}
          className="mt-4 font-serif text-[12px] text-[#995d43]/80 hover:text-[#995d43]"
        >
          Detalhes
        </button>
        {details && (
          <>
            {ebook.ebook.volumeInfo.description && (
              <>
                <p className="mt-4 min-h-13 text-sm leading-6 text-[#765242]">
                  {ebook.ebook.volumeInfo.description}
                </p>
              </>
            )}

            <div className="mt-8 grid grid-cols-2/-2 gap-6 sm:grid-cols-3">
              <DetailsBook
                label="PÁGINAS"
                value={ebook.ebook.volumeInfo.pageCount}
              />
              <DetailsBook
                label="IDIOMA"
                value={ebook.ebook.volumeInfo.language}
              />
              <DetailsBook
                label="PUBLICADO"
                value={ebook.ebook.volumeInfo.publishedDate}
              />
              <DetailsBook
                label="AUTORES"
                value={ebook.ebook.volumeInfo?.authors?.join(", ")}
              />
            </div>
          </>
        )}
      </div>
    </article>
  );
}
