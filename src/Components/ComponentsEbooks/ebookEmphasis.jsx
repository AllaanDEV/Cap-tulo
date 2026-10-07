import { useContext } from "react";
import { ButtonBook } from "./buttonBook";
import { DetailsBook } from "./detailsBook";
import AppContext from "../context";
import { Star } from "../svgCode";

export function EbookEmphasis() {
  const { order } = useContext(AppContext);

  return (
    <section className="flex flex-col gap-5 border-b border-[#e7d8c3] py-14 md:grid-cols-[300px_1fr] md:py-16">
      <div className="flex flex-col justify-center text-center  px-2 ">
        <span className="text-xs font-semibold tracking-[0.18em] text-[#c45738]">
          LEITURA DA SEMANA
        </span>

        <h3 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
          {order[0]?.data?.ebook?.ebook?.volumeInfo.title}
        </h3>

        {order[0]?.data?.ebook?.ebook?.volumeInfo?.authors && (
          <p className="mt-2 font-serif text-lg italic text-[#8f583d]">
            por{order[0]?.data?.ebook?.ebook?.volumeInfo?.authors}
          </p>
        )}

        <p className="mt-7 max-w-3xl leading-7 text-start text-[#6e4d3d]">
          {order[0]?.data?.ebook?.ebook?.volumeInfo?.description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5 text-xs">
          <DetailsBook
            label="PÁGINAS"
            value={order[0]?.data?.ebook?.ebook?.volumeInfo?.pageCount}
          />
          <DetailsBook
            label="IDIOMA"
            value={order[0]?.data?.ebook?.ebook?.volumeInfo?.language}
          />
          <DetailsBook label="GÊNERO" value={order[0]?.data?.ebook?.volumeInfo?.categories} />
          <DetailsBook
            label="PUBLICADO"
            value={order[0]?.data?.ebook?.ebook?.volumeInfo?.publishedDate}
          />
          <DetailsBook label="FORMATO" value="E-book" />
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3 justify-center flex-col sm:flex-row">
          <button className="rounded-md bg-[#ba5236] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9472e]">
            Ler agora — grátis
          </button>

          <ButtonBook>♧ &nbsp; Salvar na estante</ButtonBook>

          {/* <button className="px-3 py-3 text-sm text-[#806254]">
            ♧ &nbsp; Ouvir amostra
          </button> */}

          <span className="text-sm">
            <span className="text-[#c17b20] flex gap-1 items-center text-center">
              <Star fill={true} size={13} />
              <strong className="text-xs text-gray">
                {order[0]?.average?.toFixed(1)}
              </strong>
            </span>
            {/* <span className="text-[#a07c68]"> · 12.480 leitores</span> */}
          </span>
        </div>

        <p className="mt-6 text-xs text-[#aa7d65]">
          Disponibilizado por Editora Solar para toda a comunidade Capítulo.
        </p>
      </div>

      <div className="rounded-md bg-[#f3eadc] p-4">
        <img
          src={order[0]?.data.ebook.ebook.volumeInfo.imageLinks?.thumbnail}
            alt={order[0]?.data?.ebook?.ebook?.volumeInfo.title}
          className="aspect-[3/4] h-auto w-full rounded-sm object-cover"
        />
      </div>
    </section>
  );
}
