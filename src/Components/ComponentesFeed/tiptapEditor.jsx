import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import Mention from "@tiptap/extension-mention";
import { UserSuggestions } from "./userSuggestions";
import { ReactRenderer } from "@tiptap/react";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context";
import { EventButton } from "../ComponentsPerfil/eventButton";
import { XIconProfile } from "../svgCode";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { EbookCitation } from "./ebookCitation";
import { ContainerEbooks } from "../ComponentsPerfil/containerEbooks";
import { EbookProgress } from "../ComponentsPerfil/ebookProgress";
// import { useEffect, useState } from "react";

export function TipTapEditor() {
  const {
    imgIdUrl,
    urls,
    setImgIdUrl,
    gifData,
    setGifData,
    publication,
    setPublication,
    setSearch,
    valuePostsCitation,
    hasText,
    setHasText,
    styleCardActive,
    valuePostCitation,
    postModified,
    setValuePostCitation,
    containerModified,
    setContainerModified,
    postCitation,
    typePost,
    ebookSaved,
  } = useContext(AppContext);
  //   const [users, setUsers] = useState([]);

  const { nameIcon, user, photoValueFeed, fetchProfile, newPost } =
    useRequisicoes({});

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

  // const [hasText, setHasText] = useState(false);
  const [getMidiaUrl, setGetMidiaUrl] = useState();

  useEffect(() => {
    fetchProfile();
  }, []);

  const filterUrl = (index) => {
    setImgIdUrl((prev) => prev.filter((_, i) => i !== index));
  };

  const stylesGrid =
    imgIdUrl?.length === 1
      ? "grid-cols-1 w-[50vw] max-h-[60vw] sm:max-w-[25vw] sm:max-h-[20vw] "
      : imgIdUrl?.length === 2
        ? "grid-cols-2 gap-1 w-full max-h-[60vw] sm:h-[25vw] mx-auto"
        : "grid-cols-2 grid-rows-2 grid-flow-row gap-1 max-h-[60vw] sm:w-full sm:h-[40vw] lg:h-[25vw]";

  const canPost = Boolean(
    hasText ||
    imgIdUrl?.length > 0 ||
    gifData ||
    valuePostCitation ||
    containerModified,
  );

  const typeResenha = () => {
    console.log("postModified:", postModified);
    console.log("styleCardActive:", styleCardActive);
    console.log("ebookSaved:", ebookSaved);

    if (postModified !== "resenha") return null;

    const cardResenha = ebookSaved.find(
      (e) =>
        e.ebook.volumeInfo.title === styleCardActive?.ebook?.volumeInfo?.title,
    );

    console.log("LIVRO ENCONTRADO:", cardResenha);

    return cardResenha;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: `O que você está lendo, ${user.name}? `,
      }),

      Mention.configure({
        suggestion: {
          items: async ({ query }) => {
            const response = await fetch(
              `http://localhost:3000/users?search=${encodeURIComponent(query)}`,
            );

            return await response.json();
          },

          render: () => {
            let component;

            return {
              onStart: (props) => {
                component = new ReactRenderer(UserSuggestions, {
                  props,
                  editor: props.editor,
                });

                document.body.appendChild(component.element);

                if (props.clientRect) {
                  const rect = props.clientRect();

                  component.element.style.position = "absolute";
                  component.element.style.left = `${rect.left}px`;
                  component.element.style.top = `${rect.bottom + 5}px`;
                }
              },

              onUpdate: (props) => {
                component.updateProps(props);

                if (props.clientRect) {
                  const rect = props.clientRect();

                  component.element.style.left = `${rect.left}px`;
                  component.element.style.top = `${rect.bottom + 5}px`;
                }
              },

              onKeyDown: (props) => {
                if (props.event.key === "Escape") {
                  component.destroy();

                  return true;
                }

                return component.ref?.onKeyDown(props) ?? false;
              },

              onExit: () => {
                component.destroy();
              },
            };
          },
        },
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setHasText(editor.getText().trim());
    },
  });

  console.log("LA PROVA REAL", gifData);
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <PerfilIcon
          to={`/perfil/${user.id}`}
          className="hidden sm:block mb-auto"
        >
          {photo?.midiaIcon ? (
            <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
          ) : (
            <p className="m-auto text-[1rem] font-medium font-serif text-white">
              {nameIcon(user.name)}
            </p>
          )}
        </PerfilIcon>
        <div>
          <EditorContent
            editor={editor}
            className="            
          [&_.ProseMirror]:outline-none
                 [&_.ProseMirror]:px-1
                 [&_.ProseMirror]:sm:px-5
        
        
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]
            [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-gray
              [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left
           [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-sm
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:sm:text-lg


                             [&_.ProseMirror_[data-type='mention']]:text-black
                           [&_.ProseMirror_[data-type='mention']]:font-semibold

                   [&_.ProseMirror_[data-type='mention']]:rounded-md
                [                           &_.ProseMirror_[data-type='mention']]:px-1




                    w-full
    max-w-[52vw]
    sm:max-w-[47vw]

    lg:max-w-[35vw]
    [&_.ProseMirror]:outline-none
    [&_.ProseMirror]:sm:px-5
    [&_.ProseMirror]:break-words
                                       "
          ></EditorContent>
        </div>
        <button
          className={`w-20 h-10 p-1 ml-auto bg-wine text-white rounded-2xl  sticky mt-auto ${!canPost ? "bg-wine/40 text-white/40" : "cursor-pointer"}`}
          disabled={!canPost}
          onClick={() => {
            (newPost(),
              editor.commands.clearContent(),
              setValuePostCitation(),
              setContainerModified(false));
          }}
        >
          Postar
        </button>
      </div>

      {!gifData ? (
        imgIdUrl?.length > 0 ? (
          <div
            className={`grid overflow-hidden rounded-2xl mt-5 ${stylesGrid}`}
          >
            {imgIdUrl.map((midia, index) => {
              const isFirstOfThree = imgIdUrl.length === 3 && index === 0;
              return (
                <div
                  key={index}
                  className={`relative group h-full w-full ${
                    isFirstOfThree ? "row-span-2" : ""
                  }`}
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={midia}
                    alt="post media"
                  />

                  <EventButton
                    className="bg-black/40 text-white inset-0 flex items-center justify-center rounded-2xl absolute"
                    onClick={() => filterUrl(index)}
                  >
                    <XIconProfile />
                  </EventButton>
                </div>
              );
            })}
          </div>
        ) : null
      ) : (
        <img
          src={gifData?.images.original.url}
          alt={gifData?.title}
          className="max-w-full max-h-[25vw] object-contain rounded-lg mt-5 hover:brightness-75"
          onClick={() => setGifData()}
        />
      )}

      {containerModified && postModified === "citation" ? (
        <EbookCitation
          className="mt-5"
          text={valuePostsCitation}
          title={styleCardActive?.ebook.volumeInfo.title}
          authors={styleCardActive?.ebook.volumeInfo.authors}
        ></EbookCitation>
      ) : containerModified && postModified === "feedback" ? (
        <ContainerEbooks
          title={styleCardActive.ebook.volumeInfo.title}
          subtitle={styleCardActive.ebook.volumeInfo.subtitle}
          thumbnail={styleCardActive.ebook.volumeInfo.imageLinks?.thumbnail}
          className={"mt-5"}
        ></ContainerEbooks>
      ) : (
        containerModified &&
        postModified === "resenha" && (
          <EbookProgress book={typeResenha()}></EbookProgress>
        )
      )}
    </div>
  );
}
