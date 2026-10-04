
export function SearchBook() {

  // const categoriesSearch = (e) => {
  //     setSearchValue(e.target.value);

  //   if (e.target.value === "Mais recentes") {
  //     const booksFilterDate = [...ebooks].sort((a, b) => {
  //       const formatDateA = parseInt(a.volumeInfo?.publishedDate) || 0;
  //       const formatDateB = parseInt(b.volumeInfo?.publishedDate) || 0;

  //       return formatDateB - formatDateA;
  //     });

  //     console.log(booksFilterDate);
  //     return setBookSearch(booksFilterDate);
  //   }
  // };

  return (
    <section className="py-5 flex flex-col justify-center border-b border-[#e7d8c3] mb-5">
        <div className="mx-auto text-center">
          <h3 className="font-serif text-4xl sm:text-6xl font-semibold">Toda a estante</h3>
          <p className="mt-1 text-sm text-[#866653]">
            9 títulos novos este mês
          </p>
        </div>

        {/* <div className="grid gap-2 sm:grid-cols-3"> */}
          {/* <div className="flex h-11 items-center gap-2 rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-4 w-[50vw]">
            <span className="text-[#9b806f]">⌕</span>
            <input
              type="text"
              ref={inputRef}
              onInput={searchBook}
              placeholder="Título ou autor"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#a88f7d]"
            />
          </div> */}

          {/* <SelectBookCase>
            <option>Todos os idiomas</option>
            <option>Português</option>
            <option>Inglês</option>
            <option>Espanhol</option>
          </SelectBookCase>

          <SelectBookCase>
            <option>Mais lidos</option>
            <option>Mais recentes</option>
            <option>Melhor avaliados</option>
          </SelectBookCase> */}

      {/* </div> */}
    </section>
  );
}
