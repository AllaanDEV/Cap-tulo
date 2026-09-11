import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import Mention from "@tiptap/extension-mention";
import { UserSuggestions } from "./userSuggestions";
import { ReactRenderer } from "@tiptap/react";
import { useContext, useEffect } from "react";
import AppContext from "../context";
import { EventButton } from "../ComponentsPerfil/eventButton";
import { XIconProfile } from "../svgCode";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
// import { useEffect, useState } from "react";

export function TipTapEditor() {
  const { imgIdUrl, urls, setImgIdUrl, gifData, setGifData } =
    useContext(AppContext);
  //   const [users, setUsers] = useState([]);

  const { nameIcon, user, photoValueFeed, fetchProfile } = useRequisicoes({});

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

  useEffect(() => {
    fetchProfile();
  }, []);

  const filterUrl = (id) => {
    console.log("ID clicado:", id);
    setImgIdUrl((prev) => prev.filter((midia) => midia.id !== id));
  };

  // const styles = imgIdUrl.length >= 2 ? "w-[20vw] h-[20vw]" : "w-[20vw] h-auto";

  const stylesGrid =
    imgIdUrl.length === 1
      ? "grid-cols-1 w-[50vw] max-h-[60vw] sm:max-w-[20vw] sm:max-h-[20vw] "
      : imgIdUrl.length === 2
        ? "grid-cols-2 gap-1 w-full max-h-[60vw]  sm:max-w-[40vw] sm:h-[20vw] mx-auto" // Limita a altura com 2 imagens
        : "grid-cols-2 grid-rows-2 grid-flow-row gap-1 max-h-[60vw] sm:w-full sm:h-[20vw]"; // LIMITA A ALTURA AQUI PARA 3 OU 4 IMAGENS

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
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <PerfilIcon to={`/perfil/${user.id}`}>
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
                 [&_.ProseMirror]:px-5
        
        
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]
            [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-gray
              [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left
           [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0


                             [&_.ProseMirror_[data-type='mention']]:text-black
                           [&_.ProseMirror_[data-type='mention']]:font-semibold

                   [&_.ProseMirror_[data-type='mention']]:rounded-md
                [                           &_.ProseMirror_[data-type='mention']]:px-1
                                       "
            onClick={() => console.log("LAAAAAAAAAAAAAAAAAAAAEF")}
          ></EditorContent>
        </div>
      </div>
      {!gifData ? (
        imgIdUrl.length > 0 ? (
          <div
            className={`grid overflow-hidden rounded-2xl mt-5 ${stylesGrid}`}
          >
            {(imgIdUrl || []).map((midia, index) => {
              const isFirstOfThree = imgIdUrl.length === 3 && index === 0;

              return (
                <div
                  key={midia.id}
                  className={`relative group h-full w-full ${isFirstOfThree ? "row-span-2" : ""} `}
                >
                  <img
                    id="post-midia"
                    className="w-full h-full object-cover object-center"
                    src={midia.url}
                    alt="post media"
                  />

                  <EventButton
                    className={
                      "bg-black/40 text-white inset-0 flex items-center justify-center rounded-2xl absolute"
                    }
                    onClick={() => filterUrl(midia.id)}
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
          src={gifData.images.original.url}
          alt={gifData.title}
          className="max-w-full max-h-[25vw] object-contain rounded-lg mt-5 hover:brightness-75"
          onClick={() => setGifData()}
        />
      )}
    </div>
  );
}
