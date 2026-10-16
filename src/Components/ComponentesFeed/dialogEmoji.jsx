import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { Search, XSavedEbook } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { ContainerTags } from "../ComponentsPerfil/containerTags";

export function DialogEmoji({
  emojiContainerRef,
  toggleDialogEmojisComment,
  setToggleDialogEmojisComment,
}) {
  const { setContentEmoji, dialogEmoji, setDialogEmoji, themeOn} =
    useContext(AppContext);

  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const groupRefs = useRef({});

  const [emojis, setEmojis] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingEmojis, setLoadingEmojis] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const isOpen = toggleDialogEmojisComment || dialogEmoji;
  const isSearching = search.trim().length > 0;

  // Scroll horizontal das categorias
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const handleWheel = (e) => {
      if (menu.scrollWidth <= menu.clientWidth) return;

      e.preventDefault();
      menu.scrollLeft += e.deltaY;
    };

    menu.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      menu.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  // Carrega a lista completa de emojis
  useEffect(() => {
    if (!isOpen) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setLoadingEmojis(true);

      try {
        const response = await fetch("/api/emojis", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar emojis");
        }

        const data = await response.json();
        setEmojis(Array.isArray(data) ? data : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Erro ao carregar emojis:", error);
          setEmojis([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingEmojis(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [isOpen]);

  // Pesquisa automática com debounce e cancelamento
  useEffect(() => {
    if (!isOpen) return;

    const query = search.trim();

    if (!query) {
      setSearchList([]);
      setSearchError(false);
      setLoadingSearch(false);
      return;
    }

    const controller = new AbortController();

    setLoadingSearch(true);
    setSearchError(false);

    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/emojis/search/${encodeURIComponent(query)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Erro ao pesquisar emojis");
        }

        const data = await response.json();
        setSearchList(Array.isArray(data) ? data : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Erro ao pesquisar emojis:", error);
          setSearchList([]);
          setSearchError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingSearch(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [search, isOpen]);

  const tagsEmojis = [
    { tag: "😆", categorie: "smileys-emotion" },
    { tag: "👁️", categorie: "people-body" },
    { tag: "🐵", categorie: "animals-nature" },
    { tag: "🍇", categorie: "food-drink" },
    { tag: "🌚", categorie: "travel-places" },
    { tag: "🎃", categorie: "activities" },
    { tag: "🕶️", categorie: "objects" },
    { tag: "⚠️", categorie: "symbols" },
    { tag: "🚩", categorie: "Flags" },
  ];

  const selectEmoji = (character) => {
    setContentEmoji(character);
    setToggleDialogEmojisComment(false);
    setDialogEmoji(false);
  };

  const closeDialog = () => {
    setDialogEmoji(false);
    setToggleDialogEmojisComment(false);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-primary">
      {(toggleDialogEmojisComment || dialogEmoji) && (
        <div
          className="w-80 h-96 m-auto rounded-2xl px-1 animate-[dialogAppear_200ms_cubic-bezier(0.22,1,0.36,1)_both] flex flex-col overflow-hidden scrollbar-thin scrollbar-thumb-wine/80 "
          onCancel={closeDialog}
        >
          <div className="flex w-full justify-between items-start p-1 shrink-0">
            <span className= {` text-2xl font-extrabold ${themeOn ? "text-black" : "text-white"}`}>EMOJIS</span>

            <button
              type="button"
              onClick={closeDialog}
              className="cursor-pointer"
            >
              <XSavedEbook />
            </button>
          </div>

          {/* Pesquisa fixa */}
          <form
            className="flex w-full shrink-0 items-center border border-border rounded-full my-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative top-0 left-2">
              <Search />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={search}
              placeholder="Pesquisar emojis..."
              className="w-full h-full py-2 px-3 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="submit"
              className="bg-gray rounded-full hover:bg-wine  hover:text-whitetransition duration-500 text-sm p-2"
            >
              Buscar
            </button>
          </form>

          {!isSearching && (
            <ul
              ref={menuRef}
              className="flex max-w-full shrink-0 gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1"
            >
              {tagsEmojis.map((tag, index) => (
                <li key={index} className="shrink-0">
                  <ContainerTags
                    className="hover:bg-gray/20 text-xl"
                    onClick={() => {
                      const container = emojiContainerRef?.current;
                      if (!container) return;

                      const targetKey = Object.keys(groupRefs.current).find(
                        (key) =>
                          key.trim().toLowerCase() ===
                          tag.categorie.trim().toLowerCase(),
                      );

                      const target = groupRefs.current[targetKey];

                      if (!target) {
                        console.warn(
                          `Categoria não encontrada: ${tag.categorie}`,
                        );
                        return;
                      }
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {tag.tag}
                  </ContainerTags>
                </li>
              ))}
            </ul>
          )}

          <div className="flex-1 min-h-0 overflow-y-auto">
            {isSearching ? (
              loadingSearch ? (
                <div className="mx-auto w-fit mt-5">
                  <p>Pesquisando emojis...</p>
                </div>
              ) : searchError ? (
                <div>
                  <p>Não foi possível pesquisar emojis. Tente novamente.</p>
                </div>
              ) : searchList.length > 0 ? (
                <ul className="flex flex-wrap">
                  {searchList.map((item, index) => (
                    <li
                      key={item.unicodeName ?? `${item.character}-${index}`}
                      onClick={() => selectEmoji(item.character)}
                      className="cursor-pointer text-2xl"
                      title={item.unicodeName}
                    >
                      {item.character}
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <p>Nenhum emoji encontrado.</p>
                </div>
              )
            ) : loadingEmojis ? (
              <div>
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRldTk4ejllNXR2bDJ5NHlsNmRtc21xanNlMjMzYWxlZmVzaDhwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mtrWumAn1N9Hg27BrI/giphy.gif"
                  className="w-full h-auto"
                  alt="Carregando emojis"
                />
              </div>
            ) : emojis.length > 0 ? (
              [...new Set(emojis.map((emoji) => emoji.group))].map((group) => (
                <div
                  key={group}
                  className="flex flex-col gap-2"
                  ref={(element) => {
                    groupRefs.current[group] = element;
                  }}
                >
                  <Lines className="border-[2px] mt-1" />

                  <span className={`text-lg font-bold ${themeOn ? "text-black" : "text-white"}`}>
                    {group?.charAt(0).toUpperCase() + group?.slice(1)}
                  </span>

                  <ul className="flex flex-wrap justify-center">
                    {emojis
                      .filter((emoji) => emoji.group === group)
                      .map((item, index) => (
                        <li
                          key={item.unicodeName ?? `${item.character}-${index}`}
                          onClick={() => selectEmoji(item.character)}
                          className="cursor-pointer text-2xl"
                        >
                          <span>{item.character}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))
            ) : (
              <div>
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRldTk4ejllNXR2bDJ5NHlsNmRtc21xanNlMjMzYWxlZmVzaDhwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mtrWumAn1N9Hg27BrI/giphy.gif"
                  className="w-full h-auto"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
