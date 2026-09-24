import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { CommentsList } from "./commentsList";
import { Post } from "./post";
import { UsersInfo } from "./usersInfo";
import { Lines } from "../ComponentsForm/lines";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { XSavedEbook } from "../svgCode";
import { ArrayStars } from "./arrayStars";
import { ContainerButtonsPost } from "./containerButtonsPost";
import { EbookCitation } from "./ebookCitation";
import { ContainerEbooks } from "../ComponentsPerfil/containerEbooks";
import { EbookProgress } from "../ComponentsPerfil/ebookProgress";
import { Info } from "./info";

export function DialogPostFocus() {
  const { postFocus, setPostFocus, dataPostFocus, setDataPostFocus, setLike } =
    useContext(AppContext);

  const { user, nameIcon, photoValueFeed, likesGet } = useRequisicoes({
    setLike,
  });

  const [isVisible, setIsVisible] = useState(false);

  const dialogFocus = useRef(null);

  useEffect(() => {
    if (postFocus) {
      dialogFocus?.current.showModal();
    } else {
      dialogFocus?.current.close();
    }
  }, [postFocus]);

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (dialogFocus.current) {
      observer.observe(dialogFocus.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    likesGet();
  }, []);

  return (
    <dialog
      ref={dialogFocus}
      onCancel={() => setPostFocus((prev) => !prev)}
      className={`w-[60vw] h-[40vw] m-auto rounded-3xl bg-primary transform transition-all duration-1200 ease-out overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0 "
      }`}
    >
      <section className="grid grid-cols-2 h-full w-full max-h-full">
        {dataPostFocus?.type !== "" ? (
          <div className="bg-background flex flex-col  mx-auto p-4 w-full h-full overflow-y-auto">
            <div className="rounded-lg flex  flex-col items-center">
              <img
                src={
                  dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo
                    ?.imageLinks?.thumbnail
                }
                alt={
                  dataPostFocus?.postModified?.ebook?.ebook?.volumeInfo?.title
                }
                className="rounded-lg h-90 w-auto"
              ></img>

              <div className="flex flex-col items-center gap-2">
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

                {/* {dataPostFocus?.type === "feedback" && (
                  <ArrayStars
                    starsNumber={dataPostFocus?.postModified?.starsEbook}
                  ></ArrayStars>
                )} */}

                <p className="text-[#765242] ">
                  {
                    dataPostFocus?.postModified?.ebook?.ebook.volumeInfo
                      .description
                  }
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-background flex flex-col justify-center mx-auto p-4 w-full h-full overflow-y-auto">
            {dataPostFocus?.midia !== "listNull" && (
              <Info className="rounded-xs">
                {dataPostFocus?.midia?.type === "gif" ? (
                  <img
                    src={dataPostFocus?.midia?.images?.original?.url}
                    alt={dataPostFocus?.midia?.title}
                    className="w-full object-contain sm:max-h-auto"
                  />
                ) : Array.isArray(dataPostFocus?.midia) ? (
                  <div className="flex flex-col gap-2">
                    {dataPostFocus.midia.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt="Imagem do post"
                        className="w-full sm:max-h-auto object-cover"
                      />
                    ))}
                  </div>
                ) : null}
              </Info>
            )}
          </div>
        )}

        <div className="border-l border-border h-full max-h-[40vw] w-full overflow-y-auto bg-white flex flex-col relative">
          <div className="flex justify-between w-full items-start  p-3  sticky top-0 bg-white z-50 border-b border-border">
            <UsersInfo post={dataPostFocus}></UsersInfo>
            <button
              onClick={() => {
                setPostFocus((prev) => !prev);
                setDataPostFocus();
              }}
              className="cursor-pointer"
            >
              <XSavedEbook></XSavedEbook>
            </button>
          </div>

          <div className="flex flex-col items-start gap-5 w-full flex-1">
            <div className="p-4 w-full gap-2 flex flex-col">
              <p
                dangerouslySetInnerHTML={{ __html: dataPostFocus?.content }}
                className="text h-autor w-full"
              />

              {dataPostFocus?.type === "citation" ? (
                <EbookCitation
                  text={dataPostFocus.postModified?.content}
                  title={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo?.title
                  }
                  authors={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo
                      ?.authors
                  }
                ></EbookCitation>
              ) : dataPostFocus?.type === "feedback" ? (
                <ContainerEbooks
                  title={
                    dataPostFocus.postModified?.ebook?.ebook?.volumeInfo?.title
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
                ></ContainerEbooks>
              ) : (
                dataPostFocus?.type === "resenha" && (
                  <EbookProgress
                    book={dataPostFocus.postModified.ebook}
                  ></EbookProgress>
                )
              )}
            </div>

            <div className="w-full">
              <Lines></Lines>
              <ContainerButtonsPost
                className={"my-3"}
                post={dataPostFocus}
              ></ContainerButtonsPost>

              <div className="flex gap-2 w-full border-t-[2px] px-4 border-border mt-4">
                <CommentsList post={dataPostFocus}></CommentsList>
              </div>
            </div>
          </div>
        </div>
      </section>
    </dialog>
  );
}
