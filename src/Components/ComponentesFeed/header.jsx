import logo from "../../assets/transparent-logo.svg";

import searchIcon from "../../assets/svgIcons/search-line.svg";
import notificationIcon from "../../assets/svgIcons/notification-line.svg";

import addIcon from "../../assets/svgIcons/add.svg";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

import { useLocation, useNavigate, useParams } from "react-router";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

export function Header() {
  const { id: profileId } = useParams();

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    openOrCloseDialog,
    publication,
    setSearch,
    ebooks,
    setBookSearch,
    setSearchValue,
    postId,
    editRequisicao,
  } = useContext(AppContext);

  const { nameIcon, user, fetchProfile, photoValueFeed } = useRequisicoes({});

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

  useEffect(() => {
    fetchProfile();
  }, [location.pathname, editRequisicao]);

  const Search = (e) => {
    const padrao = (text) => {
      return String(text ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    };

    if (
      location.pathname === `/feed/${user.id}` ||
      location.pathname === `/perfil/${postId.authorId || user.id}`
    ) {
      const filterPublications = publication.filter((p) => {
        return (
          padrao(p.content).includes(padrao(e.target.value)) ||
          padrao(p.author).includes(padrao(e.target.value))
        );
      });

      return setSearch(filterPublications);
    } else if (location.pathname === "/ebooks/") {
      setSearchValue(e.target.value);
      const booksFilter = ebooks.filter((ebook) => {
        return (
          padrao(ebook.volumeInfo?.authors?.join(" ")).includes(
            padrao(e.target.value),
          ) || padrao(ebook.volumeInfo?.title).includes(padrao(e.target.value))
        );
      });

      return setBookSearch(booksFilter);
    }
  };

  return (
    <header className="border border-border p-2 fixed w-full bg-border z-2">
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
              onInput={(e) => Search(e)}
            ></input>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:block w-50">
            <button
              className="bg-wine flex text-white items-center p-1 rounded-4xl px-3 gap-1 w-full justify-center"
              onClick={() =>
                openOrCloseDialog(
                  location.pathname === "/feed"
                    ? null
                    : navigate(`/feed/${user.id}`),
                )
              }
            >
              <img src={addIcon}></img>
              Publicar
            </button>
          </div>

          <button>
            <img src={notificationIcon} className="w-auto h-6"></img>
          </button>

          <PerfilIcon to={`/perfil/${user.id}`}>
            {photo?.midiaIcon ? (
              <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
            ) : (
              <p className="m-auto text-[1rem] font-medium font-serif text-white">
                {nameIcon(user.name)}
              </p>
            )}
          </PerfilIcon>
        </div>
      </nav>
    </header>
  );
}
