import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { Search, XSavedEbook } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { createPortal } from "react-dom";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function DialogGif({className}) {
  const gifRef = useRef(null);
  const inputRef = useRef(null);
  const { dialogGif, setDialogGif, setGifData, themeOn } = useContext(AppContext);
  const { getGifs: fetchGifs } = useRequisicoes({});

  const [busca, setBusca] = useState("options");
  const [arrayGifs, setArrayGifs] = useState([]);

  useEffect(() => {
    if (dialogGif) {
      gifRef?.current.showModal();
    } else {
      gifRef?.current.close();
    }
  }, [dialogGif]);

  useEffect(() => {
    if (dialogGif) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [dialogGif]);

  const [gifOffset, setGifOffset] = useState();

  const getGifs = async (add, searchTerm = busca) => {
    const data = await fetchGifs(searchTerm, gifOffset);

    if (add) {
      setArrayGifs((prev) => [...prev, ...data]);
      setGifOffset((prev) => prev + 10);
      return;
    }

    setGifOffset();
    setArrayGifs(data);
    setGifOffset(10);
  };

  const handleDefaultItemClick = async (name) => {
    if (inputRef.current) {
      inputRef.current.value = name;
    }

    setBusca(name);

    await getGifs(false, name);
  };

  const valueDefault = (exit) => {
    const valueInput = inputRef.current.value;
    if (valueInput === "") {
      setBusca("options");
      setArrayGifs([]);
    } else if (exit) {
      inputRef.current.value = "";
      setArrayGifs([]);
      setBusca("options");
    }
  };

  const itemsDefault = [
    {
      name: "Feliz",
      url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2lyNnNkNW14a3l2a245cnFodXlja2FyaHljbWh3b3ZpbXV2emV0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dy6KtvPNfNVAIEx7O6/giphy.gif",
    },
    {
      name: "Dança",
      url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3d1bXEwdHVib2N1a2dmNWlxd2FzdTdiOWg2emlpMHMwdDVxcjJmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k1Psl92gw7YPSPYFKm/giphy.gif",
    },
    {
      name: "Triste",
      url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXBnY29qZ3ZqMGpiZDJuNDd1aWtoeTM5YXpucXpzbmhiM2wyaGZ1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H6cmWzp6LGFvqjidB7/giphy.gif",
    },
    {
      name: "Aplausos",
      url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRwbHpkYTh4NWpyMHlveTJ6ZjJnM2xkY2RuN3ZndmZvZGxuNXVvcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8caE07xm3s9TdsfGml/giphy.gif",
    },
    {
      name: "Não",
      url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2l6dnhqcTBzd3NrMDY2cWkxYWR0cnlqdXRrb3J3ZGVpemJtcmdzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VG5raNL2bfs88LhdEm/giphy.gif",
    },
    {
      name: "OOOOOH!!",
      url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3NvOTMzNmhqOHA5dmt1OXNzd205eTNma2F3dzZycXgyc21nM3A5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H88PTeoske3M4/giphy.gif",
    },
  ];

  return createPortal(
    <dialog
      ref={gifRef}
      onCancel={() => setDialogGif((prev) => !prev)}
      className={`fixed z-[9999] w-full h-[80vh] 

        sm:w-[70vw] md:w-[60vw] lg:w-[40vw]
         m-auto rounded-2xl scrollbar-none
        overflow-hidden animate-[dialogAppear_200ms_cubic-bezier(0.22,1,0.36,1)_both]
        ${className}`}
    >
      <div className="h-full overflow-y-auto scrollbar-none  bg-border">
        <div className="flex items center justify-between p-3">
          <span className={` text-2xl font-extrabold front-fraunce ${themeOn ? "text-black" : "text-white"}`}>Escolha um gif</span>
          <button
            onClick={() => {
              (setDialogGif((prev) => !prev),
                setBusca("options"),
                valueDefault(true));
            }}
            className="cursor-pointer"
          >
            <XSavedEbook></XSavedEbook>
          </button>
        </div>
        <Lines></Lines>
        <div className="py-3 px-1">
          <label className="">
            <div className="relative top-7 ml-2">
              <Search></Search>
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Pesquisar Gifs"
              onInput={(e) => {
                (setBusca(e.target.value.trim()), valueDefault());
              }}
              className="bg-gray w-full bg- rounded-full py-2 border border-border pl-8"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getGifs();
                  valueDefault();
                }
              }}
            ></input>
          </label>

          {arrayGifs && (
            <div className="mt-5 columns-2 gap-1">
              {arrayGifs?.map((g) => {
                return (
                  <img
                    key={g.id}
                    src={g.images.original.url}
                    alt={g.title}
                    className="mb-1 w-full break-inside-avoid rounded-md object-cover transition-transform duration-200 hover:scale-105 cursor-pointer"
                    onClick={() => {
                      setGifData(g);
                      setDialogGif((prev) => !prev);
                      valueDefault(true);
                    }}
                  />
                );
              })}
            </div>
          )}

          <ul className="grid grid-cols-2 gap-1 mt-5">
            {arrayGifs.length === 0 &&
              itemsDefault.map((i) => {
                return (
                  <li
                    key={i.url}
                    className="relative overflow-hidden rounded-xs"
                  >
                    <img
                      src={i.url}
                      alt={i.name}
                      className="w-full h-50 object-cover transition-transform duration-200 hover:scale-105 cursor-pointer"
                      onClick={() => handleDefaultItemClick(i.name)}
                    />
                    <span className="absolute bottom-2 left-2 text-lg font-extrabold text-white drop-shadow-md">
                      {i.name}
                    </span>
                  </li>
                );
              })}
          </ul>
          {arrayGifs.length > 0 && (
            <button
              onClick={() => getGifs(true)}
              className="w-full mt-2 bg-primary/20 border-border py-2 rounded-xs  hover:bg-primary/40"
            >
              Buscar mais
            </button>
          )}

          <div className="mt-full"></div>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
