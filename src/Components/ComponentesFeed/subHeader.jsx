
import { Lines } from "../ComponentsForm/lines";

import { faceHappy, star } from "../svgCode";
// import { ebook } from "../svgCode"
import { quotation } from "../svgCode";
import { gallery } from "../svgCode";
import { Div } from "./div";

// import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useState } from "react";
import { TipTapEditor } from "./tiptapEditor";

// import { Container } from "./container";

const navigation = [
  { name: "Para você" },
  { name: "Seguindo" },
  { name: "Clubes" },
];

  const buttons = [
    { icon: star, name: "Resenha" },
    { icon: quotation, name: "Citação" },
    { icon: faceHappy, name: "imojis" },
    { icon: gallery, name: "Foto" },
  ];

export function SubHeader({ children }) {
  const [button, setButton] = useState("Para você");
  // const { user } = useRequisicoes({});



  return (
    <>
      <section className="pb-5 flex flex-col gap-5">
        {/* <div
            className="bg-primary rounded-4xl h-12 border border-border
              w-full flex justify-around py-1 px-1"
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
          </div> */}
        {/* card a Div */}
        <Div>
          <div
            className="bg-primary rounded-4xl h-12 border border-border
              w-full flex justify-around py-1 px-1"
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
          </div>
          {/* <form className="flex gap-3">
     
              <textarea
                className="bg-background rounded-4xl h-12 border border-border
              w-full flex py-1 px-4 items-center text-right placeholder:py-1 placeholder:pl-3 placeholder:text-[10px] text-gray"
              placeholder={`       O que você está lendo, ${user.name}?`}
              >
         
              </textarea>
    
          </form> */}
          <TipTapEditor></TipTapEditor>
          <Lines></Lines>

          <nav className="flex justify-around">
            {buttons.map((p, index) => {
              const Icon = p.icon;
              return (
                <button
                  key={index}
                  className={`hover:bg-border focus:bg-border py-2 px-6 rounded-xl group transition-colors flex gap-2 items-center`}
                >
                  <Icon></Icon>
                  <p>{p.name}</p>
                </button>
              );
            })}
          </nav>

          {children}
        </Div>
      </section>
    </>
  );
}
