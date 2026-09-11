import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { Search, XSavedEbook } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";

import searchIcon from "../../assets/svgIcons/search-line.svg";

export function DialogGif({}) {
  const gifRef = useRef(null);
  const inputRef= useRef(null)
  const { dialogGif, setDialogGif, setGifData } = useContext(AppContext);

  const [busca, SetBusca] = useState();
  const [arrayGifs, setArrayGifs] = useState([]);

  useEffect(() => {
    console.log("vasco");
    if (dialogGif) {
      gifRef?.current.showModal();
    } else {
      gifRef?.current.close();
    }
  }, [dialogGif]);

  const getGifs = async () => {
    const response = await fetch(
      `/api/gifs?busca=${encodeURIComponent(busca)}`,
    );
    const data = await response.json();
    console.log("DATA DO GIFS EJ", data);
    return setArrayGifs(data);
  };

  console.log("ARAY", arrayGifs);
  return (
    <dialog
      ref={gifRef}
      onCancel={() => setDialogGif((prev) => !prev)}
      className="w-[35vw] h-[40vw] bg-background m-auto rounded-2xl"
    >
      <div className="flex items center justify-between p-3">
        <span className="text-2xl font-fraunce">Buscar Gif</span>
        <button onClick={() => setDialogGif((prev) => !prev)}>
          <XSavedEbook></XSavedEbook>
        </button>
      </div>
      <Lines></Lines>
      <div className="p-3">
        <label className="">
          <div className="relative top-7 ml-2">
            <Search></Search>
          </div>
          <input
          ref={inputRef}
            type="text"
            onInput={(e) => SetBusca(e.target.value)}
            className="bg-gray w-full bg- rounded-full py-2 border border-border pl-8"
          ></input>
        </label>

        <div className="mt-5 grid grid-cols-2">
          {arrayGifs?.map((g) => {
            return (
              <img
                key={g.id}
                src={g.images.original.url}
                let={g.title}
                className="h-40 w-auto transition-transform duration-200 hover:scale-105 rounded-xs"
                onClick={() => {
                  (setGifData(g), setDialogGif((prev) => !prev));
                }}
              />
            );
          })}
        </div>

        <button>Buscar mais</button>
        <div className="mt-full">
          <button onClick={() => setDialogGif((prev) => !prev)}>SAIR</button>
          <button onClick={getGifs} type="button">
            BUSCAR
          </button>
        </div>
      </div>
    </dialog>
  );
}
