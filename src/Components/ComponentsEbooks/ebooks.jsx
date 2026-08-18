export function SponsoredBooks(ebook) {
    console.log(ebook)
  return (
    <div className="min-h-screen bg-[#fbf6ed] text-[#342219]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#e7d8c3] bg-[#fbf6ed]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#bd5638] text-white">
                ♧
              </div>

              <h1 className="font-serif text-xl font-bold">Marginália</h1>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              <a
                href="#"
                className="rounded-lg px-4 py-2 text-sm text-[#78685d] transition hover:bg-[#f0e4d2]"
              >
                Início
              </a>

              <a
                href="#"
                className="rounded-lg px-4 py-2 text-sm text-[#78685d] transition hover:bg-[#f0e4d2]"
              >
                Comunidades
              </a>

              <a
                href="#"
                className="rounded-lg bg-[#f0e4d2] px-4 py-2 text-sm font-medium"
              >
                Patrocinados
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <button className="text-xl">⌕</button>

            <button className="relative text-lg">
              ♧
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#bd5638]" />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#67764b] text-sm font-semibold text-white">
              LM
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="border-b border-[#e7d8c3] py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dfcfb8] bg-[#fffaf3] px-3 py-1 text-xs text-[#9b6752]">
            ♡ Acervo mantido por patrocinadores
          </span>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] md:text-6xl">
            Livros liberados para toda a comunidade
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#785444]">
            Editoras e apoiadores da Marginália pagam a licença de leitura para
            que estes títulos fiquem abertos aos leitores da rede. Escolha um,
            leia no seu ritmo e comente com quem está lendo junto — sem custo e
            sem prazo de devolução.
          </p>
        </section>

        {/* DESTAQUE */}
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
              LEITURA PATROCINADA DA SEMANA
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
              <info label="PÁGINAS" value="384" />
              <info label="IDIOMA" value="Português" />
              <info label="GÊNERO" value="Ficção literária" />
              <info label="PUBLICADO" value="2024" />
              <info label="FORMATO" value="E-book + Audiolivro" />
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button className="rounded-md bg-[#ba5236] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a9472e]">
                Ler agora — grátis
              </button>

              <button className="rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-5 py-3 text-sm">
                ♧ &nbsp; Salvar na estante
              </button>

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
              Marginália.
            </p>
          </div>
        </section>

        {/* ESTANTE */}
        <section className="py-14">
          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h3 className="font-serif text-3xl font-semibold">
                Toda a estante
              </h3>

              <p className="mt-1 text-sm text-[#866653]">
                9 títulos liberados pelos patrocinadores deste mês
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <div className="flex h-11 items-center gap-2 rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-4">
                <span className="text-[#9b806f]">⌕</span>
                <input
                  type="text"
                  placeholder="Título ou autor"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#a88f7d]"
                />
              </div>

              <select className="h-11 rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-4 text-sm outline-none">
                <option>Todos os idiomas</option>
                <option>Português</option>
                <option>Inglês</option>
                <option>Espanhol</option>
              </select>

              <select className="h-11 rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-4 text-sm outline-none">
                <option>Mais lidos</option>
                <option>Mais recentes</option>
                <option>Melhor avaliados</option>
              </select>
            </div>
          </div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* {books.map((book) => (
            //   <BookCard key={book.id} book={book} />
            ))} */}
          </div>
        </section>
      </main>
    </div>
  );
}
