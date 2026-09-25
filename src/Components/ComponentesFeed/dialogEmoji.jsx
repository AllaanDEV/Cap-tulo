import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { Search, XSavedEbook } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { ContainerTags } from "../ComponentsPerfil/containerTags";

export function DialogImoji({
  emojiContainerRef,
  toggleDialogEmojisComment,
  setToggleDialogEmojisComment,
}) {
    const { contentEmoji, setContentEmoji } = useContext(AppContext);


  const inputRef = useRef();
  const menuRef = useRef(null);
  const groupRefs = useRef({});

  const [emojis, setEmojis] = useState([]);
  const [searchList, setSearchList] = useState();
  const [search, setSearch] = useState();
  const { dialogEmoji, setDialogEmoji } = useContext(AppContext);
  const imojiRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    // Mudamos a tipagem para 'any' para evitar conflitos no JSX
    const handleWheel = (e) => {
      // 1. Bloqueia a rolagem vertical da página (eixo Y global)
      e.preventDefault();

      // 2. Transforma o movimento vertical da rodinha em rolagem horizontal no menu
      menu.scrollLeft += e.deltaY;
    };

    // O 'passive: false' é o segredo para permitir o preventDefault()
    menu.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      menu.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const fetchData = async () => {
    const response = await fetch(`/api/imojis`);
    const res = await response.json();

    return setEmojis(res);
  };

  useEffect(() => {
    fetchData();
  }, [dialogEmoji]);

  const searchEmoji = async () => {
    const response = await fetch(`/api/imojis/search/${search}`);

    const data = await response.json();

    return setSearchList(data);
  };

  const validation = () => {
    const inputRefValue = inputRef?.current.value;

    if (inputRefValue !== "") {
      setEmojis([]);
      return;
    } else {
      setSearch();
      setSearchList([]);
      // fetchData();
      return;
    }
  };

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

  useEffect(() => {
    if (search === undefined || search === " ") {
      fetchData();
    }
  }, [search]);

  const isOpen = toggleDialogEmojisComment || dialogEmoji;
  if (!isOpen) return null;



  return (
    <>
      {toggleDialogEmojisComment ||
        (dialogEmoji && (
          <div
            className="w-80 h-96 m-auto  rounded-2xl px-1"
            ref={imojiRef}
            onCancel={() => {
              (setDialogEmoji(false), setToggleDialogEmojisComment(false));
            }}
          >
            <div className="flex w-full justify-between items-start p-1">
              <span className="text-2xl font-extrabold ">EMOJIS</span>
              <button
                onClick={() => {
                  setDialogEmoji(false);
                  setToggleDialogEmojisComment(false);
                }}
                className="cursor-pointer"
              >
                <XSavedEbook></XSavedEbook>
              </button>
            </div>
            <Lines></Lines>
            <label className="flex w-full border border-border rounded-full my-1">
              <div className="relative top-2.5 left-2">
                <Search></Search>
              </div>
              <input
                ref={inputRef}
                className=" w-full h-full py-2 px-3 outline-none"
                onInput={(e) => {
                  setSearch(e.target.value.trim());
                  validation();
                }}
              ></input>

              <button
                onClick={searchEmoji}
                className="bg-amber-600/90 rounded-full hover:bg-amber-600 transition duration-500 text-sm px-2"
              >
                Buscar
              </button>
            </label>

            <ul
              ref={menuRef}
              className="flex max-w-full gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {tagsEmojis.map((tag, index) => {
                return (
                  <li key={index} className="shrink-0">
                    <ContainerTags
                      className={"hover:bg-gray/20 text-xl"}
                      onClick={() => {
                        const container = emojiContainerRef.current;
                        if (!container) return;

                        // 1. BUSCA INTELIGENTE: Procura a chave exata ou parecida dentro do groupRefs
                        const targetKey = Object.keys(groupRefs.current).find(
                          (key) =>
                            key
                              .trim()
                              .toLowerCase()
                              .includes(tag.categorie.trim().toLowerCase()),
                        );

                        const target = groupRefs.current[targetKey];

                        if (!target) {
                          console.warn(
                            `Seção não encontrada para a categoria: ${tag.categorie}`,
                          );
                          return;
                        }

                        container.scrollTo({
                          top: target.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {tag.tag}
                    </ContainerTags>
                  </li>
                );
              })}
            </ul>

            {emojis?.length > 0 ? (
              [...new Set(emojis.map((emoji) => emoji.group))].map((group) => (
                <div
                  key={group}
                  className="flex flex-col gap-2"
                  ref={(element) => {
                    groupRefs.current[group] = element;
                  }}
                >
                  <Lines className="border-[2px] mt-1"></Lines>
                  <span className="text-lg font-bold">
                    {group?.charAt(0).toUpperCase() + group?.slice(1)}
                  </span>
                  <ul className="flex flex-wrap justify-center">
                    {emojis
                      .filter((emoji) => emoji.group === group)
                      .map((item) => (
                        <li
                          key={item.unicodeName}
                          onClick={() => {
                            setContentEmoji(item.character);
                            setToggleDialogEmojisComment(false);
                            setDialogEmoji(false);
                          }}
                          className="cursor-pointer text-2xl"
                        >
                          <span> {item.character}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))
            ) : searchList?.length > 0 ? (
              <ul className="flex flex-wrap">
                {searchList?.map((emojis) => {
                  return (
                    <li
                      key={emojis.unicodeName}
                      onClick={() => setContentEmoji(emojis.character)}
                      className="cursor-pointer"
                    >
                      {emojis.character}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div>
                <img
                  src={
                    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRldTk4ejllNXR2bDJ5NHlsNmRtc21xanNlMjMzYWxlZmVzaDhwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mtrWumAn1N9Hg27BrI/giphy.gif"
                  }
                  className="w-full h-auto"
                ></img>
              </div>
            )}
          </div>
        ))}
    </>
  );
}
