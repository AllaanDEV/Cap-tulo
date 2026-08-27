import { useContext, useState } from "react";
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
      console.log("POST RETORNADO:", resJson);
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
          prev.map((p) => (p.id === data.id ? data : p)),
        );

        setSearch((prev) => prev.map((p) => (p.id === data.id ? data : p)));
      });
  };

  const addComment = async (e, content) => {
    e.preventDefault();

    console.log(content);
    if (content == "") {
      return;
    }

    try {
      const response = await fetch(`/api/posts/${post.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: user.name,
          text: content,
        }),
      });

      const data = await response.json();

      // const allComments = data.comments;
      //reverter a ordem, ficando os comentários novos em primeiro

      setSearch((prev) => prev?.map((p) => (p.id === data.id ? data : p)));
      setPublication((prev) => prev.map((p) => (p.id === data.id ? data : p)));
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
        console.log("alou")
        setLike(like + 1);
      }
    });
  };

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
  };
}
