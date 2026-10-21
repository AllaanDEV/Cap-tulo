import logo from "../../assets/transparent-logo.svg";

import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

import { useLocation } from "react-router";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { Notification, Theme, Vector } from "../svgCode";

export function Header() {
  const inputRef = useRef(null);
  const location = useLocation();

  const {
    publication,
    setSearch,
    setBookSearch,
    setSearchValue,
    postId,
    editRequisicao,
    followerPost,
    setThemeOn,
    themes,
  } = useContext(AppContext);

  const {
    nameIcon,
    user,
    fetchProfile,
    photoValueFeed,
    postFollowers,
    searchBooks,
  } = useRequisicoes({});

  const [isSearchingBooks, setIsSearchingBooks] = useState(false);

  // Refs para debounce e cancelamento da busca de livros na API
  const booksSearchTimer = useRef(null);
  const booksSearchController = useRef(null);

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user?.id,
  );

  // O perfil já é carregado com cache/dedup pelo layout; aqui só recarrega
  // quando uma edição de perfil aconteceu (editRequisicao alterna).
  useEffect(() => {
    if (editRequisicao) {
      fetchProfile();
    }
  }, [editRequisicao]);

  const Search = (e) => {
    const padrao = (text) => {
      return String(text ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    };

    if (
      location.pathname === `/feed/${user?.id}` ||
      location.pathname === `/perfil/${postId?.authorId || user?.id}`
    ) {
      setSearchValue(e.target.value);
      const validationPost = !followerPost ? publication : postFollowers;

      const filterPublications = validationPost.filter((p) => {
        return (
          padrao(p.content).includes(padrao(e.target.value)) ||
          padrao(p.author).includes(padrao(e.target.value))
        );
      });

      return setSearch(filterPublications);
    } else if (location.pathname === "/ebooks") {
      const term = e.target.value;

      setSearchValue(term);

      // Cancela a busca anterior (timer e requisição em andamento)
      if (booksSearchTimer.current) {
        clearTimeout(booksSearchTimer.current);
      }

      booksSearchController.current?.abort();

      if (!term.trim()) {
        setIsSearchingBooks(false);
        return setBookSearch([]);
      }

      setIsSearchingBooks(true);

      // Debounce: busca na API após o usuário parar de digitar,
      // independente da lista já carregada na página.
      booksSearchTimer.current = setTimeout(async () => {
        const results = await searchBooks(term);

        setIsSearchingBooks(false);
        setBookSearch(results);
      }, 400);
    }
  };

  // const html = document.querySelector("html");

  const [numberTheme, setNumberTheme] = useState(0);

  // Aplica as cores e a classe do tema
  const applyTheme = (index) => {
    const html = document.documentElement;
    const theme = themes[index];

    if (!theme) return;

    html.classList.remove("cocoa", "cocoaNoir", "noir", "imperal");

    if (theme.name) {
      html.classList.add(theme.name);
    }

    html.style.removeProperty("--color-border");
    html.style.removeProperty("--color-hover");

    html.style.setProperty("--color-primary", theme.primary);
    html.style.setProperty("--color-background", theme.background);
    html.style.setProperty("--color-gray", theme.gray);

    html.style.color = theme.text;

    setNumberTheme(index);
    setThemeOn(index === 0);
  };

  // Restaura o tema salvo para o usuário atual
  useEffect(() => {
    if (!user?.id || !themes?.length) return;

    const key = `theme-user-${user.id}`;
    const savedTheme = localStorage.getItem(key);
    const index = savedTheme === null ? 0 : Number(savedTheme);

    const validIndex =
      Number.isInteger(index) && index >= 0 && index < themes.length;

    const timer = setTimeout(() => applyTheme(validIndex ? index : 0), 0);

    return () => clearTimeout(timer);
  }, [user?.id, themes]);

  // Alterna o tema e salva a preferência
  const changeTheme = () => {
    if (!user?.id || !themes?.length) return;

    const next = (numberTheme + 1) % themes.length;

    applyTheme(next);

    localStorage.setItem(`theme-user-${user.id}`, String(next));
  };

  return (
    <header className="border border-border p-2 fixed w-full bg-border/80 z-10 opacity-95">
      <nav className="flex items-center gap-3 justify-between py-1 sm:px-10">
        <div className="flex gap-2 items-center">
          <img src={logo} className="w-auto h-10 hidden sm:block"></img>
          <div className="sm:hidden">
            <Vector></Vector>
          </div>

          <div className="relative">
            {/* <div className="">
              <img
                src={searchIcon}
                className="absolute inset-y-3.5 flex items-center pl-3 pointer-events-none"
                alt=""
              />
      
            </div> */}
            <input
              ref={inputRef}
              type="text"
              placeholder={
                isSearchingBooks
                  ? "Buscando livros..."
                  : "Buscar livros, leitores..."
              }
              className="bg-white rounded-4xl placeholder:text-gray h-10 border border-border
  w-[clamp(2rem,40vw,30rem)] text-black pl-5"
              onInput={(e) => Search(e)}
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* <div className="hidden sm:block w-50">
            <button
              className="bg-wine flex text-white items-center p-1 rounded-4xl px-3 gap-1 w-full justify-center"
              onClick={() =>
                openOrCloseDialog(
                  location.pathname === "/feed"
                    ? null
                    : navigate(`/feed/${user?.id}`),
                )
              }
            >
              <img src={addIcon}></img>
              Publicar
            </button>
          </div> */}

          <button className="text-black cursor-pointer" onClick={changeTheme}>
            <Theme></Theme>
          </button>

          <button>
            <Notification></Notification>
            {/* <img src={notificationIcon} className="w-auto h-6"></img> */}
          </button>

          <div className="sm:hidden">
            <PerfilIcon
              to={
                location.pathname === `/perfil/${user?.id}`
                  ? null
                  : `/perfil/${user?.id}`
              }
            >
              {photo?.midiaIcon ? (
                <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
              ) : (
                <p className="m-auto text-[1rem] font-medium font-serif text-white">
                  {nameIcon(user?.name)}
                </p>
              )}
            </PerfilIcon>
          </div>
        </div>
      </nav>
    </header>
  );
}
