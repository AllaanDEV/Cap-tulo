import { useContext, useEffect, useState } from "react";
import AppContext from "..";

export function useRequisicoes({ post, like, setLike }) {
  const { publication, setPublication, setSearch, toggleComments } =
    useContext(AppContext);

  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  const nameIcon = (name) => {
    if (name) {
      return (name[0] + (name[1] ? name[1] : "")).toUpperCase();
    }
  };

  const [comments, setComments] = useState(false);
  const [photoValueFeed, setPhotoValueFeed] = useState([]);

  const postDelete = () => {
    fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status == 200) {
        const newFeed = publication.filter((p) => p.id != post.id);

        setSearch(newFeed);
        return setPublication(newFeed);
      } else {
        return;
      }
    });
  };

  const commentEdit = async (e, EDIT) => {
    e.preventDefault();

    if (!post) return;
    if (!EDIT) return;

    const formData = new FormData(e.target);
    const content = formData.get("content");

    if (!content) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${post.id}/${EDIT}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: content,
          }),
        },
      );

      const resJson = await response.json();

      setPublication((prev) =>
        prev.map((p) => (p.id === resJson.id ? { ...resJson } : p)),
      );

      setSearch((prev) =>
        prev.map((p) => (p.id === resJson.id ? { ...resJson } : p)),
      );

      // setEditComments(false);
      toggleComments();
    } catch (error) {
      console.log(error);
    }
  };

  const commentDelete = async (c) => {
    await fetch(`http://localhost:3000/api/posts/${post.id}/${c.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // const commentFilter = comment.filter((a) => a.id != c.id);
        // return setComment(commentFilter);
        setPublication((prev) =>
          prev?.map((p) => (p.id === data.id ? data : p)),
        );

        setSearch((prev) => prev?.map((p) => (p.id === data.id ? data : p)));
      });
  };

  const addComment = async (e, content) => {
    e.preventDefault();

    if (content === "") {
      return;
    }

    try {
      const response = await fetch(`/api/posts/${post.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: user.name,
          userName: user.userName,
          text: content,
          authorId: user.id,
        }),
      });

      const data = await response.json();

      setSearch((prev) => prev?.map((p) => (p.id === data.id ? data : p)));
      setPublication((prev) => prev?.map((p) => (p.id === data.id ? data : p)));

      e.target.reset();
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const LikeButton = () => {
    fetch(`http://localhost:3000/api/posts/${post.id}/like`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        console.log("alou");
        setLike(like + 1);
      }
    });
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/profileEdit/?t=${Date.now()}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const data = await response.json();
      console.log("direto", data.userId);
      setPhotoValueFeed(data);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }
  };

  // if (user) {
  //   const updatePublication = (publication && []).find(
  //     (post) => post?.authorId === user.id && post?.author !== user.name,
  //   );

  //   if (updatePublication) {
  //     updatePublication.author = user.name;
  //     updatePublication.userName = user.userName;
  //   }

  //   const updateComments = (publication && []).find((post) => {
  //     const comment = post.comments.find(
  //       (c) => c?.authorId === user.id && c?.author !== user.name,
  //     );
  //     console.log("lau", comment);
  //     return comment;
  //   });

  //   if (updateComments) {
  //     updateComments.comments.author = user.name;
  //     updateComments.comments.userName = user.userName;
  //     console.log("lau", updateComments);
  //   }
  // }

  console.log(user);
  return {
    token,
    postDelete,
    publication,
    setPublication,
    commentEdit,
    comments,
    setComments,
    user,
    nameIcon,
    commentDelete,
    addComment,
    LikeButton,
    fetchProfile,
    photoValueFeed,
  };
}
