import logo from "../../assets/transparent-logo.svg";

import searchIcon from "../../assets/svgIcons/search-line.svg";
import notificationIcon from "../../assets/svgIcons/notification-line.svg";

import addIcon from "../../assets/svgIcons/add.svg";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { useContext, useRef } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function Header() {
  const { openOrCloseDialog, publication, setSearch } = useContext(AppContext);
  const { nameIcon } = useRequisicoes({});
  const inputRef = useRef(null);

  const SearchUsers = (e) => {
    const filterPublications = publication.filter((p) => {
      const padrao = (text) => {
        return text
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim();
      };

      return padrao(p.content).includes(padrao(e.target.value)) ||
      padrao(p.author).includes(padrao(e.target.value));
    });

    return setSearch(filterPublications);
  };

  return (
    <header className="border border-border p-2">
      <nav className="flex items-center gap-3 justify-between p-1">
        <div className="flex gap-2">
          <img src={logo} className="w-auto h-10"></img>
          <div className="relative">
            <div className="">
              <img
                src={searchIcon}
                className="absolute inset-y-3.5 flex items-center pl-3 pointer-events-none"
                alt=""
              />
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar livros, autores, leitores..."
              className="bg-white rounded-4xl placeholder:pl-8 placeholder:text-gray h-10 border border-border
              w-[clamp(2rem,40vw,30rem)]"
              onInput={(e) => SearchUsers(e)}
            ></input>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:block w-50">
            <button
              className="bg-wine flex text-white items-center p-1 rounded-4xl px-3 gap-1 w-full justify-center"
              onClick={openOrCloseDialog}
            >
              <img src={addIcon}></img>
              Publicar
            </button>
          </div>

          <button>
            <img src={notificationIcon} className="w-auto h-6"></img>
          </button>

          <PerfilIcon to={"/perfil"}>{nameIcon}</PerfilIcon>
        </div>
      </nav>
    </header>
  );
}
