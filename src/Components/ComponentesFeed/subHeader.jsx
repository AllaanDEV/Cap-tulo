import { Lines } from "../ComponentsForm/lines";

import {
  faceHappy,
  star,
  XSavedEbook,
  quotation,
  CitationIcon,
} from "../svgCode";
// import { ebook } from "../svgCode"
import { ebook, GifIcon } from "../svgCode";
import { gallery } from "../svgCode";
import { Div } from "./div";

// import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useContext, useEffect, useState } from "react";
import { TipTapEditor } from "./tiptapEditor";
import AppContext from "../context";
import { ContainerButtons } from "./containerButtons";
import { ArrayBookSaved } from "../ComponentsPerfil/arrayBookSaved";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useParams } from "react-router";
import { DialogGif } from "./dialogGif";

// import { Container } from "./container";

const Ebook = ebook;
const Star = star;

const navigation = [
  { name: "Para você" },
  { name: "Seguindo" },
  { name: "Clubes" },
];

const iconsCitationOpen = [
  { icon: quotation, name: "quotation" },
  { icon: star, name: "star", size: "18" },
  { icon: ebook, name: "ebook" },
];
const buttons = [
  { icon: star, name: "Resenha", size: "18" },
  { icon: GifIcon, name: "Gif" },
  { icon: faceHappy, name: "imojis" },
  { icon: gallery, name: "Foto" },
  // { icon: faceHappy, name: "imojis" },
];

export function SubHeader() {
  const { id: profileId } = useParams();

  const { midia, styleCardActive, setDialogGif, imgIdUrl, setGifData } =
    useContext(AppContext);

  const { getBookSave, user } = useRequisicoes({});

  const [postCitation, setPostCitation] = useState(false);
  const [postModified, setPosModified] = useState(false);

  const citationOpen = (index) => {
    if (index === 0) {
      setPostCitation((prev) => !prev);
      setPosModified(false);
    } else if (index === 1) {
      setDialogGif((prev) => !prev);
    }
  };

  useEffect(() => {
    getBookSave(profileId);
  }, []);

  const modified = (index) => {
    if (index === 1) {
      setPosModified(null);
    } else if (index === 0) {
      setPosModified(false);
    } else {
      setPosModified(true);
    }
  };

  const stars = [
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
  ];

  const [starFilled, setStarFilled] = useState(stars[0]);
  const [valuePotsCitation, setValuePostCitation] = useState();

  const citationPublication = (e) => {
    setValuePostCitation(e.target.value);
  };

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

        <Div className="w-full">
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
                        className={`py-2 px-6 rounded-xl group transition-colors flex gap-2 items-center ${
                          imgIdUrl.length === 4
                            ? "text-gray pointer-events-none"
                            : "hover:bg-border focus:bg-border"
                        }`}
                        onClick={() => setGifData()}
                      >
                        <Icon imgIdUrl={imgIdUrl} />

                        <input
                          type="file"
                          className="hidden"
                          onChange={midia}
                          disabled={imgIdUrl.length === 4}
                        />

                        <span className=" hidden sm:block">{p.name}</span>
                      </label>
                    );
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => citationOpen(index)}
                      className="hover:bg-border focus:bg-border py-2 px-6 rounded-xl group transition-colors flex gap-2 items-center"
                    >
                      <Icon size={p.size} />
                      <span className=" hidden sm:block">{p.name}</span>
                    </button>
                  );
                })}
              </nav>
            </>
          ) : (
            <section className="w-full">
              <div className="flex justify-between ">
                <div className="w-40">
                  <ContainerButtons className={"h-2"}>
                    {iconsCitationOpen.map((b, index) => {
                      const Icon = b.icon;

                      return (
                        <button
                          key={index}
                          className={`flex items-center rounded-full px-4 w-full hover:text-black ${
                            styleButton === b.name
                              ? "bg-wine text-white"
                              : "bg-transparent cursor-pointer"
                          }`}
                          onClick={() => {
                            (modified(index), setStyleButton(b.name));
                          }}
                        >
                          <Icon size={b.size} />
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
                  {postModified === false ? (
                    <span className="text-sm text-gray">A CITAÇÃO:</span>
                  ) : postModified === null ? (
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {stars.map((Star, index) => {
                          const Icon = Star.Star;
                          return (
                            <Icon
                              size={Star.size}
                              key={index}
                              fill={starFilled >= index ? true : false}
                              onClick={() => setStarFilled(index)}
                            ></Icon>
                          );
                        })}
                      </div>
                      <span className="text-xs text-gray">{`${starFilled >= 0 ? starFilled + 1 : 0} DE 5`}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray">PROGRESSO</span>
                  )}
                  <textarea
                    className="bg-background rounded-xl p-4 placeholder:font-medium placeholder:text-md border border-border"
                    placeholder={
                      postModified === false
                        ? " Selecione um livro e copie aqui o trecho que te marcou..."
                        : postModified === null
                          ? "O que você achou dessa leitura?"
                          : `O que está achando dessa leitura ${user.name}?`
                    }
                    rows="3"
                    onInput={citationPublication}
                  ></textarea>
                  {valuePotsCitation &&
                    styleCardActive &&
                    postModified === false && (
                      <>
                        <div className="bg-background p-4 border border-border rounded-xl  flex flex-col">
                          <CitationIcon></CitationIcon>
                          <h4 className="font-fraunce text-2xl">{`“${valuePotsCitation}”`}</h4>
                          <span className="text-gray">{`— ${styleCardActive.ebook.volumeInfo.title}, ${styleCardActive.ebook.volumeInfo.authors}`}</span>
                        </div>
                      </>
                    )}
                </div>
              </div>
              <Lines className={"my-4"}></Lines>
              <div className="flex items-center justify-between">
                <span className="text-wine font-medium text-xs sm:text-sm md:text-md flex gap-2 flex-col sm:flex-row">
                  {styleCardActive
                    ? `Sobre: `
                    : "Escolha um livro para continuar"}
                  <h3 className="text-gray font-medium">
                    {styleCardActive
                      ? styleCardActive.ebook.volumeInfo.title
                      : null}
                  </h3>
                </span>

                <div className="flex gap-2 justify-end">
                  <button
                    className="border-[2px] border-border py-1 px-2 hover:bg-black/10 rounded-2xl"
                    onClick={() => setPostCitation((prev) => !prev)}
                  >
                    Cancelar
                  </button>
                  <button
                    className={` py-1 px-2 rounded-2xl text-white ${
                      styleCardActive ? "bg-wine cursor-pointer" : "bg-wine/90"
                    }`}
                    disabled={!styleCardActive}
                  >
                    Publicar
                  </button>
                </div>
              </div>
            </section>
          )}

          <DialogGif></DialogGif>
        </Div>
      </section>
    </>
  );
}
