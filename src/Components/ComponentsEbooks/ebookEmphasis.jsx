import { ButtonBook } from "./buttonBook";
import { DetailsBook } from "./detailsBook";

export function EbookEmphasis(){
    return(
          <section className="grid gap-10 border-b border-[#e7d8c3] py-14 md:grid-cols-[300px_1fr] md:py-16">
                  <div className="rounded-md bg-[#f3eadc] p-4">
                    <img
                      src="/books/featured-book.jpg"
                      alt="O Jardim das Horas Lentas"
                      className="aspect-[3/4] h-full w-full rounded-sm object-cover"
                    />
                  </div>
        
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#c45738]">
                      LEITURA DA SEMANA
                    </span>
        
                    <h3 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                      O Jardim das Horas Lentas
                    </h3>
        
                    <p className="mt-2 font-serif text-lg italic text-[#8f583d]">
                      por Helena Vasques
                    </p>
        
                    <p className="mt-7 max-w-3xl leading-7 text-[#6e4d3d]">
                      Três gerações de mulheres cuidam do mesmo jardim em uma vila do
                      interior, e cada estação revela um segredo que elas preferiam
                      manter enterrado. Um romance sobre tempo, herança e o que floresce
                      depois do silêncio.
                    </p>
        
                    <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
                      <DetailsBook label="PÁGINAS" value="384" />
                      <DetailsBook label="IDIOMA" value="Português" />
                      <DetailsBook label="GÊNERO" value="Ficção literária" />
                      <DetailsBook label="PUBLICADO" value="2024" />
                      <DetailsBook label="FORMATO" value="E-book + Audiolivro" />
                    </div>
        
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                      <button className="rounded-md bg-[#ba5236] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9472e]">
                        Ler agora — grátis
                      </button>
        
                      <ButtonBook>
                        ♧ &nbsp; Salvar na estante
                      </ButtonBook>
        
                      <button className="px-3 py-3 text-sm text-[#806254]">
                        ♧ &nbsp; Ouvir amostra
                      </button>
        
                      <span className="text-sm">
                        <span className="text-[#c17b20]">★</span> <strong>4.8</strong>
                        <span className="text-[#a07c68]"> · 12.480 leitores</span>
                      </span>
                    </div>
        
                    <p className="mt-6 text-xs text-[#aa7d65]">
                      Disponibilizado por Editora Solar para toda a comunidade
                      Capítulo.
                    </p>
                  </div>
                </section>
    )
}