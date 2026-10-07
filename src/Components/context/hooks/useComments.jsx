
// import { useEffect, useState } from "react";

import { ReactRenderer, useEditor } from "@tiptap/react";
import { useRequisicoes } from "./useRequisicoes";
import { useContext, useState } from "react";
import AppContext from "..";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import Mention from "@tiptap/extension-mention";
import { UserSuggestions } from "../../ComponentesFeed/userSuggestions";

//   const [users, setUsers] = useState([]);

export function useComments({ setHasText, setContentHtml }) {
  const [comments, setComments] = useState(false);
  const [editComments, setEditComments] = useState(false);
const user = JSON.parse(localStorage.getItem("user"));
 

  
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     Placeholder.configure({
  //       placeholder: `O que você está lendo, ${user.name}? `,
  //     }),

  //     Mention.configure({
  //       suggestion: {
  //         items: async ({ query }) => {
  //           const response = await fetch(
  //             `http://localhost:3000/users?search=${encodeURIComponent(query)}`,
  //           );

  //           return await response.json();
  //         },

  //         render: () => {
  //           let component;

  //           return {
  //             onStart: (props) => {
  //               component = new ReactRenderer(UserSuggestions, {
  //                 props,
  //                 editor: props.editor,
  //               });

  //               document.body.appendChild(component.element);

  //               if (props.clientRect) {
  //                 const rect = props.clientRect();

  //                 component.element.style.position = "absolute";
  //                 component.element.style.left = `${rect.left}px`;
  //                 component.element.style.top = `${rect.bottom + 5}px`;
  //               }
  //             },

  //             onUpdate: (props) => {
  //               component.updateProps(props);

  //               if (props.clientRect) {
  //                 const rect = props.clientRect();

  //                 component.element.style.left = `${rect.left}px`;
  //                 component.element.style.top = `${rect.bottom + 5}px`;
  //               }
  //             },

  //             onKeyDown: (props) => {
  //               if (props.event.key === "Escape") {
  //                 component.destroy();

  //                 return true;
  //               }

  //               return component.ref?.onKeyDown(props) ?? false;
  //             },

  //             onExit: () => {
  //               component.destroy();
  //             },
  //           };
  //         },
  //       },
  //     }),
  //   ],
  //   content: "",
  //   onUpdate: ({ editor }) => {
  //     setHasText(editor.getText().trim());
  //     setContentHtml(editor.getHTML());
  //   },
  // });
  return { comments, setComments, editComments};
}
