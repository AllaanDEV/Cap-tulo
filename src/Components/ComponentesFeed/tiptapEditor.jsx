import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import Mention from "@tiptap/extension-mention";
import { UserSuggestions } from "./userSuggestions";
import { ReactRenderer } from "@tiptap/react";
// import { useEffect, useState } from "react";

export function TipTapEditor() {
  const { user } = useRequisicoes({});
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const usersList = async () => {
  //       const response = await fetch(`http://localhost:3000/updateUser`);
  //       const data = await response.json();
  //       setUsers(data);
  //     };

  //     usersList();
  //   }, []);

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
    <>
      <EditorContent
        editor={editor}
        className="                [&_.ProseMirror]:outline-none
        [&_.ProseMirror]:min-h-8
        [&_.ProseMirror]:px-5
        [&_.ProseMirror]:py-3
        [&_.ProseMirror]:rounded-4xl
        [&_.ProseMirror]:bg-background
        
        
        
  [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]
  [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-black/40
  [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left
  [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none
  [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0


  [&_.ProseMirror_[data-type='mention']]:text-black
[&_.ProseMirror_[data-type='mention']]:font-semibold

[&_.ProseMirror_[data-type='mention']]:rounded-md
[&_.ProseMirror_[data-type='mention']]:px-1
        "
      />
    </>
  );
}
