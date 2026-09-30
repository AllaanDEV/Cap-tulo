export function Hero() {
  return (
    <section className="border-b border-[#e7d8c3] py-5 md:pt-15 px-5">
      <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] md:text-6xl">
        Livros liberados para toda a comunidade
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-[#785444]">
        Editoras e apoiadores da Marginália pagam a licença de leitura para que
        estes títulos fiquem abertos aos leitores da rede. Escolha um, leia no
        seu ritmo e comente com quem está lendo junto — sem custo e sem prazo de
        devolução.
      </p>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#dfcfb8] bg-[#fffaf3] px-3 mt-2 text-xs text-[#9b6752] py-2">
        ♡ Acervo mantido por patrocinadores
      </span>
    </section>
  );
}
