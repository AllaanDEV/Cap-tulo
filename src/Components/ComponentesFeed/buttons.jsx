import { useState } from "react";
import { Div } from "./div";
import { ContainerButtons } from "./containerButtons";

  const navigation = [
    { name: "Para você" },
    { name: "Seguindo" },
    { name: "Clubes" },
  ];
  
export function Buttons() {

  const [button, setButton] = useState("Para você");
  return (

      <ContainerButtons
      >
        {navigation.map((b, index) => {
          return (
            <button
              key={index}
              className={`px-4 rounded-4xl flex justify-around items-center text-gray hover:text-black w-full ${b.name === button ? "bg-wine text-white pointer-events-none" : ""}`}
              onClick={() => setButton(b.name)}
            >
              {b.name}
            </button>
          );
        })}
      </ContainerButtons>
  
  );
}
