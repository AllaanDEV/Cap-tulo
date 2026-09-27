import { useContext, useEffect, useState } from "react";
import { ContainerButtons } from "./containerButtons";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { ArrayStars } from "./arrayStars";
import { EbookCitation } from "./ebookCitation";
import { ContainerEbooks } from "../ComponentsPerfil/containerEbooks";
import { Lines } from "../ComponentsForm/lines";
import { XSavedEbook } from "../svgCode";
import { ArrayBookSaved } from "../ComponentsPerfil/arrayBookSaved";
import { ebook } from "../svgCode";

import { Star, quotation } from "../svgCode";
import { useParams } from "react-router";
import { PostModifiedContainer } from "./postModifiedContainer";

const Ebook = ebook;

export function ComplexPost() {
  const { id: profileId } = useParams();

  const {
    styleCardActive,
    setDialogGif,

    valuePostsCitation,
    setValuePostCitation,
    postModified,
    setPostModified,
    setContainerModified,

    starFilled,
    setStarFilled,

    setPostCitation,

    setDisabledCardActive,
    ebookSaved,
    setStyleCardActive,
    setDialogImoji,
  } = useContext(AppContext);

  const { getBookSave } = useRequisicoes({});

  //   const citationOpen = (index) => {
  //     if (index === 0) {
  //       setPostCitation((prev) => !prev);
  //       setPostModified("citation");
  //     } else if (index === 1) {
  //       setDialogGif((prev) => !prev);
  //     } else if (index === 2) {
  //       setDialogImoji((prev) => !prev);
  //     }
  //   };

  useEffect(() => {
    getBookSave(profileId);
  }, []);

  const modified = (index) => {
    if (index === 1) {
      setPostModified("feedback");
    } else if (index === 0) {
      setPostModified("citation");
      setDisabledCardActive(false);
    } else if (index === 2) {
      setPostModified("resenha");
    }
  };

  const citationPublication = (e) => {
    setValuePostCitation(e.target.value);
  };

  const [styleButton, setStyleButton] = useState("quotation");

  const iconsCitationOpen = [
    { icon: quotation, name: "quotation" },
    { icon: Star, name: "star", size: "18" },
    { icon: ebook, name: "ebook" },
  ];

  // const avaliationTypePost = !styleCardActive && setPostModified();
  return (
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
                    (modified(index),
                      setStyleButton(b.name),
                      setContainerModified(false));
                  }}
                >
                  <Icon
                    size={b.size}
                    color={
                      styleButton === b.name ? "white" : "var(--color-gray)"
                    }
                  />
                </button>
              );
            })}
          </ContainerButtons>
        </div>
        <button
          onClick={() => {
            ((setPostCitation((prev) => !prev),
            setStyleButton("quotation"),
            setStyleCardActive()),
              setPostModified());
          }}
        >
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
          {ebookSaved.length > 0 ? (
            postModified === "citation" ? (
              <span className="text-sm text-gray">A CITAÇÃO:</span>
            ) : (
              postModified === "feedback" && (
                <div className="flex items-center gap-2">
                  <ArrayStars onClick={setStarFilled}></ArrayStars>
                  <span className="text-xs text-gray">{`${starFilled >= 0 ? starFilled + 1 : 0} DE 5`}</span>
                </div>
              )
            )
          ) : null}

          {postModified === "citation" && ebookSaved.length > 0 && (
            <textarea
              className="bg-background rounded-xl p-4 placeholder:font-medium placeholder:text-md border border-border outline-yellow-600 "
              placeholder={
                postModified === "citation" &&
                " Selecione um livro e copie aqui o trecho que te marcou..."
              }
              rows="3"
              onInput={citationPublication}
            ></textarea>
          )}

          {valuePostsCitation &&
            styleCardActive &&
            postModified === "citation" && (
              <EbookCitation
                text={valuePostsCitation}
                title={styleCardActive.ebook.volumeInfo.title}
                authors={styleCardActive.ebook.volumeInfo.authors}
              ></EbookCitation>
            )}

          {styleCardActive && postModified === "feedback" && (
            <PostModifiedContainer
              title={styleCardActive.ebook.volumeInfo.title}
              subtitle={styleCardActive.ebook.volumeInfo.subtitle}
              thumbnail={styleCardActive.ebook.volumeInfo.imageLinks?.thumbnail}
              starsEbook={starFilled}
              postModified={postModified}
            ></PostModifiedContainer>
          )}
        </div>
      </div>
      <Lines className={"my-4"}></Lines>
      <div className="flex items-center justify-between">
        <span className="text-wine font-medium text-xs sm:text-sm md:text-md flex gap-2 flex-col sm:flex-row">
          {styleCardActive ? `Sobre: ` : "Escolha um livro para continuar"}
          <h3 className="text-gray font-medium">
            {styleCardActive ? styleCardActive.ebook.volumeInfo.title : null}
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
              (styleCardActive && valuePostsCitation) ||
              (postModified === "feedback" && ebookSaved.length > 0) ||
              (postModified === "resenha" && styleCardActive)
                ? "bg-wine cursor-pointer"
                : "bg-wine/70 text-white/60"
            }`}
            disabled={
              (!styleCardActive &&
                valuePostsCitation &&
                ebookSaved.length > 0) ||
              (postModified === "feedback" &&
                !styleCardActive &&
                ebookSaved.length > 0)
            }
            onClick={() => {
              setPostCitation((prev) => !prev);
              setContainerModified(true);
              setDisabledCardActive(true);
              setStyleButton("quotation");
              // if (!styleCardActive) {
              //   setPostModified();
              // }
              // setStyleCardActive(ebookSaved[0]);
            }}
          >
            Publicar
          </button>
        </div>
      </div>
    </section>
  );
}
