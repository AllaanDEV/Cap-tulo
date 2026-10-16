import { useContext, useState } from "react";
import { ContainerButtons } from "./containerButtons";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

const navigation = [
  { name: "Para você" },
  { name: "Seguindo" },
  { name: "Salvos" },
];

export function Buttons() {
  const { setFollowerPost, themeOn} = useContext(AppContext);
  const [button, setButton] = useState("Para você");
  const { allFollowers, getPostsSaved } = useRequisicoes({});

  const validation = (index) => {
    if (index === 1) {
      allFollowers();
      setFollowerPost("followers");
      return;
    } else if (index === 0) {
      setFollowerPost(false);
      return;
    }

    getPostsSaved();
    return setFollowerPost("saved");
  };

  return (
    <ContainerButtons>
      {navigation.map((b, index) => {
        const style =
          b.name === button ? "bg-wine text-white pointer-events-none" : "";

        return (
          <button
            key={index}
            className={`px-4 rounded-4xl flex justify-around items-center text-gray  w-full transition-all duration-200  text-sm sm:text-md ${style} ${`  ${themeOn ? "hover:text-black" : "hover:text-white"}`}`}
            onClick={() => {
              (setButton(b.name), validation(index));
            }}
          >
            {b.name}
          </button>
        );
      })}
    </ContainerButtons>
  );
}
