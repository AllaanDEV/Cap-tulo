import { useContext, useEffect, useState } from "react";
import AppContext from "..";
import { useNavigate } from "react-router";
import { useComments } from "./useComments";

export function useRequisicoes({ post, like, setLike }) {
  const navigate = useNavigate();

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
    setUsersList,
    setFilterUsers,
    dataPostFocus,
    setDataPostFocus,
    setGoal,
    setPostSaved,
    followerPost,
    setEditValue,
    setLikesCommentList,
    likesCommentList,
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

  const postDelete = async (data) => {
    const res = await fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const newFeed = publication.filter((p) => p.id !== post.id);

      if (data.type === "feedback") {
        arrayFeedbacksEbooks();
      }

      await Saves("delete", post);

      setSearch(newFeed);
      setPublication(newFeed);

      await getPostsSaved();
    }
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

      const data = await response.json();

      setPublication((prev) =>
        prev?.map((p) => (p.id === data.id ? { ...data } : p)),
      );

      setSearch((prev) =>
        prev?.map((p) => (p.id === data.id ? { ...data } : p)),
      );

      // setEditComments(false);
      if (dataPostFocus && data.id === dataPostFocus.id) {
        setDataPostFocus(data);
      }

      toggleComments();
      Saves("update", data);
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

        if (dataPostFocus && data.id === dataPostFocus.id) {
          setDataPostFocus(data);
        }

        Saves("update", data);
      });
  };

  const addComment = async (e, content, post) => {
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

      if (dataPostFocus && data.id === dataPostFocus.id) {
        setDataPostFocus(data);
      }

      const postsSaved = await getPostsSaved();

      const validationPostSaved = postsSaved.find(
        (p) => p?.post?.id === post?.id,
      );

      if (validationPostSaved) {
        await Saves("update", data);
      }

      e.target.reset();

      return data;
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
      await likesGet(post);
    }

    return likesPost;
  };

  const likesGet = async (post) => {
    const response = await fetch("http://localhost:3000/api/posts/likes");
    const data = await response.json();

    setLike(data);

    setEditRequisicao((previousValue) => !previousValue);

    if (!post) {
      return;
    }

    if (response.ok) {
      const likesDoPost = data.filter(
        (like) => like.postId === post.id && like.validation === true,
      );

      const updatedPost = {
        ...post,
        likes: likesDoPost.length,
      };

      const postsSaved = await getPostsSaved();

      const validationPostSaved = postsSaved.find(
        (p) => p?.post?.id === post?.id,
      );

      if (validationPostSaved) {
        await Saves("update", updatedPost);
      }
    }
    return data;
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
      return data
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }
  };

  const allFollowers = async () => {
    const response = await fetch(`http://localhost:3000/allFollowers`);
    const data = await response.json();
    return setFollowers(data);
  };

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

  const stylePatchFeed = location.pathname === `/feed/${user?.id}`;
  const stylePatchProfile = location.pathname === `/perfil/${user?.id}`;

  const arrayFeedbacksEbooks = async () => {
    const response = await fetch("http://localhost:3000/api/books/feedbacks");

    const data = await response.json();

    return setFeedbacksArray(data);
  };

  const followersPost = async (profileId) => {
    const response = await fetch(
      `http://localhost:3000/user/followers/${profileId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: user.name,
          userId: user.id,
        }),
      },
    );

    if (response.ok) {
      // userUP();
      allFollowers();
    }
  };

  const userUP = async (users) => {
    const response = await fetch(`http://localhost:3000/updateUser`);
    const data = await response.json();
    setUsersList(data);
    setFilterUsers(data);

    if (users && response.ok) {
      allFollowers();
      return followersPost(users);
    }
  };

  const postNumberGet = async (paramsId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/goalNumber/${paramsId}`,
      );

      const data = await response.json();

      if (data) {
        setGoal(data);
      }
      return data;
    } catch (error) {
      console.error(error);
      alert(
        "Não foi possível realizar a busca da meta, tente novamente mais tarde",
      );
    }
  };

  const myFollowers = followers.filter((u) => u.userId === user.id);

  const postFollowers = publication.filter((f) => {
    return myFollowers.some((u) => u.following === f.authorId);
  });

  const validationFollowers = (id) => {
    return followers.some(
      (follower) => follower.userId === user.id && follower.following === id,
    );
  };

  const getPostsSaved = async () => {
    console.log("ZAUS");
    const response = await fetch(
      `http://localhost:3000/api/posts/saved/?t=${Date.now()}`,
    );

    const data = await response.json();

    setPostSaved(data);
    return data;
  };

  const Saves = async (type, post) => {
  const response = await fetch(
    `http://localhost:3000/api/posts/saved/?t=${Date.now()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post,
        savedType: type,
        postId: post.id,
      }),
    }
  );

  if (response.ok) {
    if (type === "saved") {
      setPostSaved((prev) => [
        ...prev,
        { post },
      ]);
    }

    if (type === "update") {
      setPostSaved((prev) =>
        prev.map((item) =>
          item?.post?.id === post?.id
            ? { ...item, post }
            : item
        )
      );
    }

    if (type === "delete") {
      setPostSaved((prev) =>
        prev.filter(
          (item) => item?.post?.id !== post?.id
        )
      );
    }
  }

  return response;
};

  const getFollowBack = (userId) => {
    return followers.some(
      (follower) =>
        follower.userId === userId && follower.following === user.id,
    );
  };

  const LikesComment = async (commentId, postId) => {
    const response = await fetch("http://localhost:3000/api/comments/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        commentId,
        postId,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao curtir comentário");
    }

    const data = await response.json();
    setLikesCommentList(data);
    return data;
  };

  const isCommentLiked = (commentId, userId) => {
    return (
      likesCommentList?.some(
        (item) => item.commentId === commentId && item.userId === userId,
      ) ?? false
    );
  };

  const getCommentLikesCount = (commentId) => {
    return (
      likesCommentList?.filter((item) => item.commentId === commentId).length ??
      0
    );
  };

  const getLikesComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments/like");

    if (!response.ok) {
      throw new Error("Erro ao buscar curtidas dos comentários");
    }

    const data = await response.json();
    setLikesCommentList(data);

    return data;
  };

  const logout = (index) => {
    setEbookSaved([]);
    setEditValue({});
    setEditValue({});

    if (index === 5) {
      if (location.pathname === "auth/logout") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        navigate("/auth/register");
        return;
      }

      navigate("auth/logout");
    } else if (index === 1) {
      navigate("/ebooks");
    } else if (index === 3) {
      navigate(`/perfil/${user.id}`);
    } else if (index === 0) [navigate(`/feed/${user.id}`)];
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
    stylePatchProfile,
    arrayFeedbacksEbooks,
    followersPost,
    userUP,
    postNumberGet,
    postFollowers,
    validationFollowers,
    getPostsSaved,
    Saves,
    getFollowBack,
    LikesComment,
    isCommentLiked,
    getCommentLikesCount,
    getLikesComments,
    logout,
  };
}
