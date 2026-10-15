
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { CommentsList } from "./commentsList";
import { UsersInfo } from "./usersInfo";
import { Lines } from "../ComponentsForm/lines";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { XSavedEbook } from "../svgCode";
import { ContainerButtonsPost } from "./containerButtonsPost";
import { EbookCitation } from "./ebookCitation";
import { Info } from "./info";
import { PostModifiedContainer } from "./postModifiedContainer";
import { CarouselImages } from "./carolselImages";

export function DialogPostFocus() {
  const {
    postFocus,
    setPostFocus,
    dataPostFocus,
    setDataPostFocus,
    setLike,
    ebookSaved,
    like,
    themeOn,
  } = useContext(AppContext);

  const { user, photoValueFeed } = useRequisicoes({
    setLike,
    like,
  });

  const [isVisible, setIsVisible] = useState(false);

  const dialogFocus = useRef(null);

  useEffect(() => {
    const dialog = dialogFocus.current;

    if (!dialog) return;

    if (postFocus && !dialog.open) {
      dialog.showModal();
    } else if (!postFocus && dialog.open) {
      dialog.close();
    }
  }, [postFocus]);

  const isModifiedPost = Boolean(dataPostFocus?.type);

  const ebookProgressFocus = ebookSaved
    .filter((ebook) => ebook.userId === user.id)
    .find(
      (progress) =>
        progress.ebook.ebook?.id ===
        dataPostFocus?.postModified?.ebook?.ebook?.id,
    );

  const media = dataPostFocus?.midia;

  const hasMedia =
    media &&
    media !== "listNull" &&
    (media?.type === "gif" ||
      (Array.isArray(media) && media.length > 0));

  return (
    <dialog
      ref={dialogFocus}
      onCancel={() => setPostFocus(false)}
      className={`w-[60vw] h-[40vw] m-auto rounded-3xl bg-primary transform transition-all duration-1200 ease-out overflow-hidden animate-[dialogAppear_200ms_cubic-bezier(0.22,1,0.36,1)_both] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <section
        className={`h-full w-full min-w-0 max-h-full ${
          isModifiedPost
            ? "grid grid-cols-2"
            : "flex flex-col"
        }`}
      >
        {/* COLUNA ESQUERDA: LIVRO OU MÍDIA */}
        {isModifiedPost ? (
          <div className="bg-background flex flex-col mx-auto p-4 w-full h-full min-w-0 overflow-y-auto">
            <div className="rounded-lg flex flex-col items-center">
              <img
                src={
                  dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                    ?.imageLinks?.thumbnail
                }
                alt={
                  dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                    ?.title
                }
                className="rounded-lg h-90 w-auto max-w-full object-contain"
              />

              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex flex-col gap-1 mt-2 items-center text-center">
                  <h4 className="text-2xl font-fraunce">
                    {
                      dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                        ?.title
                    }
                  </h4>

                  {dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                    ?.subtitle && (
                    <span className="text-xs text-gray">
                      {
                        dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                          ?.subtitle
                      }
                    </span>
                  )}
                </div>

                <p className="text-[#765242]">
                  {
                    dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                      ?.description
                  }
                </p>
              </div>
            </div>
          </div>
        ) : hasMedia ? (
          <div className="bg-background flex flex-col justify-center p-4 w-full min-w-0 overflow-y-auto">
            <Info className="rounded-xs">
              {media?.type === "gif" ? (
                <img
                  src={media?.images?.original?.url}
                  alt={media?.title}
                  className="w-full object-contain"
                />
              ) : Array.isArray(media) ? (
                <CarouselImages
                  key={dataPostFocus?.id}
                  images={media}
                />
              ) : null}
            </Info>
          </div>
        ) : null}

        {/* COLUNA DIREITA: CONTEÚDO, AÇÕES E COMENTÁRIOS */}
        <div
          className={`h-full min-h-0 min-w-0 overflow-y-auto bg-border/50 flex flex-col relative text-inherit ${
            isModifiedPost
              ? "border-l border-border"
              : "w-full flex-1"
          }`}
        >
          <div className="flex justify-between w-full items-start p-3 sticky top-0 z-50 border-b border-border">
            <UsersInfo post={dataPostFocus} />

            <button
              onClick={() => {
                setPostFocus(false);
                setDataPostFocus();
              }}
              className="cursor-pointer"
            >
              <XSavedEbook />
            </button>
          </div>

          <div className="flex flex-col items-start gap-5 w-full flex-1">
            <div className="p-4 w-full gap-2 flex flex-col">
              <p
                dangerouslySetInnerHTML={{
                  __html: dataPostFocus?.content ?? "",
                }}
                className={`text h-autor w-full ${
                  themeOn ? "text-black" : "text-white"
                }`}
              />

              {dataPostFocus?.type === "citation" ? (
                <EbookCitation
                  text={dataPostFocus.postModified?.content}
                  title={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo
                      ?.title
                  }
                  authors={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo
                      ?.authors
                  }
                />
              ) : dataPostFocus?.type === "feedback" ? (
                <PostModifiedContainer
                  title={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo
                      ?.title
                  }
                  subtitle={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo
                      ?.subtitle
                  }
                  thumbnail={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo
                      ?.imageLinks?.thumbnail
                  }
                  starsNumber={dataPostFocus.postModified?.starsEbook}
                  type={dataPostFocus?.type}
                />
              ) : dataPostFocus?.type === "resenha" ? (
                <PostModifiedContainer
                  book={dataPostFocus.postModified?.ebook}
                  progress={ebookProgressFocus}
                  type={dataPostFocus?.type}
                />
              ) : null}
            </div>

            <div className="w-full">
              <Lines />

              <ContainerButtonsPost
                className="my-3"
                post={dataPostFocus}
              />

              <div className="flex gap-2 w-full border-t-[2px] px-4 border-border mt-4">
                <CommentsList post={dataPostFocus} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </dialog>
  );
}
