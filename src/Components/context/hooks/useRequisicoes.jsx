import { useContext, useState } from "react";
import AppContext from "..";

export function useRequisicoes({ post, like, setLike }) {
  const {
    publication,
    setPublication,
    setSearch,
    toggleComments,
    setEditRequisicao,
    setFollowers,
    followers,
    Login,
    imgIdUrl,
    setGifData,
    setImgIdUrl,
    gifData,
    setEbookSaved,
    hasText,
    setHasText,
    valuePostsCitation,
    styleCardActive,
    starFilled,
    setStarFilled,
    stars,
    postModified,
    setValuePostCitation,
    setStyleCardActive,
    setPostModified,
    contentHtml,
    setContentHtml,
    setFeedbacksArray,
  } = useContext(AppContext);

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
        prev?.map((p) => (p.id === resJson.id ? { ...resJson } : p)),
      );

      setSearch((prev) =>
        prev?.map((p) => (p.id === resJson.id ? { ...resJson } : p)),
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
      const response = await fetch(
        `http://localhost:3000/api/posts/${post.id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            author: user.name,
            userName: user.userName,
            text: content,
            authorId: user.id,
          }),
        },
      );

      const data = await response.json();

      setSearch((prev) => prev?.map((p) => (p.id === data.id ? data : p)));
      setPublication((prev) => prev?.map((p) => (p.id === data.id ? data : p)));

      e.target.reset();
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const LikeButton = async () => {
    const likesPost = await fetch(
      `http://localhost:3000/api/posts/${post.id}/like`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
        }),
      },
    );

    if (likesPost.ok) {
      likesGet();
    }

    return likesPost;
  };

  const likesGet = async () => {
    const response = await fetch("http://localhost:3000/api/posts/likes");
    const data = await response.json();
    setLike(data);
    setEditRequisicao((previousValue) => !previousValue);
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

      setPhotoValueFeed(data);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }
  };

  const allFollowers = async () => {
    console.log("VASCO");
    const response = await fetch("http://localhost:3000/allFollowers");
    const data = await response.json();
    setFollowers(data);
    console.log("ALLflow", data);
  };

  //   const seguindo = followers.filter(
  //   (f) => f.userId === (post?.authorId ?? user.id),
  // );
  // console.log("seguindo", seguindo);

  // const seguindoProfileId = followers.filter((f) => f.following === profileId);

  const getBookSave = async (profileId) => {
    try {
      setEbookSaved([]);

      const response = await fetch(
        `http://localhost:3000/api/books/saved/${profileId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar livros");
      }

      setEbookSaved(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error.message);
      setEbookSaved([]);
    }
  };

  const newPost = async () => {
    // const formData = new FormData(e.target);

    // if (hasText ) {
    //   return;
    // }

console.log("prova REALMENTE", styleCardActive )

    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: contentHtml || null,
        postModified: {
          content: valuePostsCitation || null,
          ebook: styleCardActive || null,
          starsEbook: starFilled,
        },
        midia: gifData || (imgIdUrl?.length > 0 && imgIdUrl) || "listNull",
        author: user.name,
        userName: user.userName,
        type: postModified || "",
        likes: 0,
        comments: [],
      }),
    }).then((res) =>
      res.json().then((data) => {
        localStorage.setItem("newPost", JSON.stringify(data));
        const posts = [data, ...publication];

        setSearch(posts);
        setGifData();
        setImgIdUrl();
        setHasText();
        setPostModified();
        setStyleCardActive();
        setValuePostCitation();
        setContentHtml();

        return setPublication(posts);
      }),
    );
  };

  const stylePatchFeed = location.pathname === `/feed/${user.id}`;
  const stylePatchProfile = location.pathname === `/perfil/${user.id}`;

  const arrayFeedbacksEbooks = async () => {
    const response = await fetch("http://localhost:5173/api/books/feedbacks");

    const data = await response.json();

    return setFeedbacksArray(data);
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
    fetchProfile,
    photoValueFeed,
    likesGet,
    allFollowers,
    newPost,
    getBookSave,
    stylePatchFeed,
    stylePatchProfile, arrayFeedbacksEbooks
  };
}
