import { Lines } from "../ComponentsForm/lines";

import { faceHappy, star, XSavedEbook, quotation } from "../svgCode";
// import { ebook } from "../svgCode"
import { ebook } from "../svgCode";
import { gallery } from "../svgCode";
import { Div } from "./div";

// import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useContext, useState } from "react";
import { TipTapEditor } from "./tiptapEditor";
import AppContext from "../context";
import { ContainerButtons } from "./containerButtons";
import { ArrayBookSaved } from "../ComponentsPerfil/arrayBookSaved";

// import { Container } from "./container";

const Ebook = ebook;

const navigation = [
  { name: "Para você" },
  { name: "Seguindo" },
  { name: "Clubes" },
];

const iconsCitationOpen = [
  { icon: quotation, name: "quotation" },
  { icon: star, name: "star" },
  { icon: ebook, name: "ebook" },
];
const buttons = [
  { icon: star, name: "Resenha" },
  { icon: quotation, name: "Citação" },
  { icon: faceHappy, name: "imojis" },
  { icon: gallery, name: "Foto" },
];

export function SubHeader({ children }) {
  const [button, setButton] = useState("Para você");
  const { midia } = useContext(AppContext);
  const [postCitation, setPostCitation] = useState(false);

  const citationOpen = (index) => {
    if (index === 1) {
      setPostCitation((prev) => !prev);
    }
  };

  const navigation = [
    { name: "Para você" },
    { name: "Seguindo" },
    { name: "Clubes" },
  ];

  const [styleButton, setStyleButton] = useState("quotation");
  return (
    <>
      <section className="pb-5 flex flex-col gap-5 w-full">
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

        <Div className="sm:max-w-[70vw]">
          {!postCitation ? (
            <>
              <TipTapEditor></TipTapEditor>
              <Lines></Lines>

              <nav className="flex justify-around">
                {buttons.map((p, index) => {
                  const Icon = p.icon;

                  if (index === 3) {
                    return (
                      <label
                        key={index}
                        className="hover:bg-border focus:bg-border py-2 px-6 rounded-xl group transition-colors flex gap-2 items-center"
                      >
                        <Icon />
                        <input
                          type="file"
                          className="hidden"
                          onChange={midia}
                        ></input>
                        {p.name}
                      </label>
                    );
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => citationOpen(index)}
                      className="hover:bg-border focus:bg-border py-2 px-6 rounded-xl group transition-colors flex gap-2 items-center"
                    >
                      <Icon />
                      <span>{p.name}</span>
                    </button>
                  );
                })}
              </nav>
            </>
          ) : (
            <section>
              <div className="flex justify-between ">
                <div className="w-40">
                  <ContainerButtons className={"h-2"}>
                    {iconsCitationOpen.map((b) => {
                      const Icon = b.icon;
                      return (
                        <button
                          className={`flex items-center rounded-full px-4 w-full hover:text-black ${b.name === styleButton ? "bg-wine text-white pointer-events-none" : "bg-transparent text-black"}`}
                          onClick={() => setStyleButton(b.name)}
                        >
                          <Icon></Icon>
                        </button>
                      );
                    })}
                  </ContainerButtons>
                </div>
                <button onClick={() => setPostCitation((prev) => !prev)}>
                  <XSavedEbook></XSavedEbook>
                </button>
              </div>
              <Lines className={"my-4"}></Lines>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-gray flex items-center gap-1 mb-2">
                    <Ebook></Ebook>
                    <span className="text-sm">LIVROS QUE VOCÊ ESTÁ LENDO</span>
                  </div>
                  <ArrayBookSaved></ArrayBookSaved>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray">A CITAÇÃO:</span>
                  <textarea
                    className="bg-background rounded-xl p-4 placeholder:font-medium placeholder:text-md border border-border"
                    placeholder="Copie aqui o trecho que te marcou..."
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <Lines className={"my-4"}></Lines>
              <h3>{`Sobre`}</h3>
            </section>
          )}
        </Div>
      </section>
    </>
  );
}
