import { useState } from "react";

export function useComments() {
    const [comments, setComments] = useState(false);
    const [editComments, setEditComments] = useState(false);
  
  
//   const toggleComments = (c) => {
//     if (c == 1) {
//       return;
//     } else if (c == 2) {
//       setEditComments(!editComments);
//       console.log(editComments);
//     }
//   };

//     const [EDIT, SETEDIT] = useState();

//   const commentEdit = async (e, EDIT) => {
//     e.preventDefault();
//     setEditComments(!editComments);

//     const formData = new FormData(e.target);

//     if (formData.get("content") == "") {
//       return;
//     }

//     const response = await fetch(
//       `
// http://localhost:3000/api/posts/${post.id}/${EDIT}`,
//       {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...EDIT,
//           text: formData.get("content"),
//         }),
//       },
//     );

//     const resJson = await response.json();

//     return setPublication(
//       publication.map((p) => (p.id === resJson.id ? resJson : p)),
//     );
//   };

  return {comments, setComments, editComments, setEditComments,};
}

