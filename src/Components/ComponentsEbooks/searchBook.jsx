import { useContext,} from "react";
import { SelectBookCase } from "./selectBookCase";
import AppContext from "../context";

export function SearchBook() {
  const { ebooks, setBookSearch, setSearchValue } = useContext(AppContext);

  const searchBook = (e) => {
    setSearchValue(e.target.value);

    const booksFilter = ebooks.filter((ebook) => {
      const padrao = (text) => {
        return String(text ?? "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim();
      };

      return (
        padrao(ebook.volumeInfo?.authors?.join(" ")).includes(
          padrao(e.target.value),
        ) || padrao(ebook.volumeInfo?.title).includes(padrao(e.target.value))
      );
    });

    return setBookSearch(booksFilter);
  };

  const categoriesSearch= () =>{

  }

  return (
    <section className="py-14">
      <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <h3 className="font-serif text-3xl font-semibold">Toda a estante</h3>

          <p className="mt-1 text-sm text-[#866653]">
            9 títulos novos este mês
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          <div className="flex h-11 items-center gap-2 rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-4">
            <span className="text-[#9b806f]">⌕</span>
            <input
              type="text"
              onInput={searchBook}
              placeholder="Título ou autor"
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#a88f7d]"
            />
          </div>

          <SelectBookCase>
            <option>Todos os idiomas</option>
            <option>Português</option>
            <option>Inglês</option>
            <option>Espanhol</option>
          </SelectBookCase>

          <SelectBookCase onChange={categoriesSearch}>
            <option>Mais lidos</option>
            <option>Mais recentes</option>
            <option>Melhor avaliados</option>
          </SelectBookCase>
        </div>
      </div>
    </section>
  );
}
