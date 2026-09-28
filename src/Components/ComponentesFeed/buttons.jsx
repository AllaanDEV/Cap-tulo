import { useContext, useState } from "react";
import { Div } from "./div";
import { ContainerButtons } from "./containerButtons";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

const navigation = [
  { name: "Para você" },
  { name: "Seguindo" },
  { name: "Salvos" },
];

export function Buttons() {
  const { setFollowerPost } = useContext(AppContext);
  const [button, setButton] = useState("Para você");
  const { allFollowers } = useRequisicoes({});

  const validation = (index) => {
    if (index === 1) {
      allFollowers();
      setFollowerPost(true);
    } else if (index === 0) {
      setFollowerPost(false);
    }
  };

  return (
    <ContainerButtons>
      {navigation.map((b, index) => {
        return (
          <button
            key={index}
            className={`px-4 rounded-4xl flex justify-around items-center text-gray hover:text-black w-full ${b.name === button ? "bg-wine text-white pointer-events-none" : ""}`}
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
