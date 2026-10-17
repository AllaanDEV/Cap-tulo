import { useCallback, useContext, useState } from "react";
import AppContext from "..";
import { useNavigate } from "react-router";

// Chave (URL base) de todas as requisições do projeto
export const KEY = "http://localhost:3000/";

// ===== Requisições que não dependem do contexto (usadas pelo próprio Context)
// Vindas de "context/index.jsx"
export const registerRequest = async ({ name, email, password, userName }) => {
  const response = await fetch(`${KEY}auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, userName }),
  }).catch((error) => {
    console.error(error);
    return null;
  });

  if (!response) {
    alert("Não foi possível realizar o cadastro. Tente novamente mais tarde.");
    throw new Error("Erro ao cadastrar");
  }

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return { success: true };
};

export const loginRequest = async ({ email, password }) => {
  const response = await fetch(`${KEY}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).catch((error) => {
    console.error(error);
    return null;
  });

  if (!response) {
    alert("Não foi possível entrar na sua conta. Tente novamente mais tarde.");
    throw new Error("Erro ao entrar");
  }

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
};

export const getPostsFeed = async () => {
  const response = await fetch(`${KEY}api/posts`);
  return await response.json();
};

export function useRequisicoes({ post, setLike }) {
  const navigate = useNavigate();

  const {
    publication,
    setPublication,
    setSearch,
    toggleComments,
    setEditRequisicao,
    setFollowers,
    followers,
    imgIdUrl,
    setGifData,
    setImgIdUrl,
    gifData,
    setEbookSaved,
    setHasText,
    valuePostsCitation,
    starFilled,
    styleCardActive,
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
    setEditValue,
    setLikesCommentList,
    likesCommentList,
    setGoalUser,
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
    const res = await fetch(`${KEY}api/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).catch((error) => {
      console.error(error);
      alert("Não foi possível excluir o post. Tente novamente mais tarde.");
    });

    if (res?.ok) {
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
      const response = await fetch(`${KEY}api/posts/${post.id}/${EDIT}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: content,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao editar o comentário");
      }

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
      console.error(error);
      alert(
        "Não foi possível editar o comentário. Tente novamente mais tarde.",
      );
    }
  };

  const commentDelete = async (c) => {
    await fetch(`${KEY}api/posts/${post.id}/${c.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao excluir o comentário");
        }

        return response.json();
      })
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
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Não foi possível excluir o comentário. Tente novamente mais tarde.",
        );
      });
  };

  const addComment = async (e, content, post) => {
    e.preventDefault();

    if (content === "") {
      return;
    }

    try {
      const response = await fetch(`${KEY}api/posts/${post.id}/comments`, {
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
      console.error(error);
      alert(
        "Não foi possível publicar o comentário. Tente novamente mais tarde.",
      );

      return { success: false, error: error.message };
    }
  };

  const LikeButton = async () => {
    const likesPost = await fetch(`${KEY}api/posts/${post.id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
      }),
    }).catch((error) => {
      console.error(error);
      return null;
    });

    if (!likesPost || !likesPost.ok) {
      alert("Não foi possível curtir o post. Tente novamente mais tarde.");
      throw new Error("Erro ao atualizar like");
    }

    const data = await likesPost.json();

    // Atualiza a lista global de likes.
    await likesGet();

    // Atualiza o contador do post aberto na dialog.
    setDataPostFocus((prev) => {
      if (!prev || prev.id !== data.post.id) {
        return prev;
      }

      return {
        ...prev,
        likes: data.post.likes,
      };
    });

    return likesPost;
  };

  const likesGet = async (post) => {
    const response = await fetch(`${KEY}api/posts/likes`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar as curtidas. Tente novamente mais tarde.",
      );
      return null;
    }

    const data = await response.json();

    if (!response.ok) {
      alert(
        "Não foi possível carregar as curtidas. Tente novamente mais tarde.",
      );
      throw new Error("Erro ao buscar likes");
    }

    setLike(data);
    setEditRequisicao((previousValue) => !previousValue);

    if (!post) {
      return data;
    }

    // Mantém a atualização dos posts salvos.
    const postsSaved = await getPostsSaved();

    const validationPostSaved = postsSaved.find(
      (item) => item?.post?.id === post.id,
    );

    if (validationPostSaved) {
      await Saves("update", post);
    }

    return data;
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${KEY}profileEdit/?t=${Date.now()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      setPhotoValueFeed(data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      alert("Não foi possível carregar o perfil. Tente novamente mais tarde.");
    }
  };

  const allFollowers = async () => {
    const response = await fetch(`${KEY}allFollowers`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar os seguidores. Tente novamente mais tarde.",
      );
      return;
    }

    const data = await response.json();
    return setFollowers(data);
  };

  const getBookSave = async (profileId) => {
    try {
      setEbookSaved([]);

      const response = await fetch(`${KEY}api/books/saved/${profileId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar livros");
      }

      setEbookSaved(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error.message);
      alert(
        "Não foi possível carregar os livros salvos. Tente novamente mais tarde.",
      );
      setEbookSaved([]);
    }
  };

  const newPost = async () => {
    fetch(`${KEY}api/posts`, {
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
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao publicar o post");
        }

        return res.json();
      })
      .then((data) => {
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
      })
      .catch((error) => {
        console.error(error);
        alert("Não foi possível publicar o post. Tente novamente mais tarde.");
      });
  };

  const stylePatchFeed = location.pathname === `/feed/${user?.id}`;
  const stylePatchProfile = location.pathname === `/perfil/${user?.id}`;

  const arrayFeedbacksEbooks = async () => {
    const response = await fetch(`${KEY}api/books/feedbacks`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar as resenhas dos livros. Tente novamente mais tarde.",
      );
      return;
    }

    const data = await response.json();

    return setFeedbacksArray(data);
  };

  const followersPost = async (profileId) => {
    const response = await fetch(`${KEY}user/followers/${profileId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: user.name,
        userId: user.id,
      }),
    }).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível seguir este usuário. Tente novamente mais tarde.",
      );
      return;
    }

    if (response.ok) {
      // userUP();
      allFollowers();
    } else {
      alert(
        "Não foi possível seguir este usuário. Tente novamente mais tarde.",
      );
    }
  };

  const userUP = async (users) => {
    const response = await fetch(`${KEY}updateUser`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar os usuários. Tente novamente mais tarde.",
      );
      return;
    }

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
      const response = await fetch(`${KEY}goalNumber/${paramsId}`);

      if (response.status === 404) {
        setGoal(null);

        if (paramsId === user?.id) {
          setGoalUser(null);
        }

        return null;
      }

      if (!response.ok) {
        throw new Error("Erro ao buscar a meta.");
      }

      const data = await response.json();

      setGoal(data);

      if (paramsId === user?.id) {
        setGoalUser(data);
      }

      return data;
    } catch (error) {
      console.error(error);

      alert(
        "Não foi possível realizar a busca da meta, tente novamente mais tarde.",
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
    const [savedResponse, postsResponse] = await Promise.all([
      fetch(`${KEY}api/posts/saved/?t=${Date.now()}`).catch(() => null),
      fetch(`${KEY}api/posts/?t=${Date.now()}`).catch(() => null),
    ]);

    if (!savedResponse || !postsResponse) {
      alert(
        "Não foi possível carregar os posts salvos. Tente novamente mais tarde.",
      );
      return [];
    }

    if (!savedResponse.ok || !postsResponse.ok) {
      throw new Error("Erro ao buscar posts salvos");
    }

    const savedIds = await savedResponse.json();
    const posts = await postsResponse.json();

    const postsSaved = savedIds
      .map(({ postId }) => posts.find((post) => post.id === postId))
      .filter(Boolean)
      .map((post) => ({ post }));

    setPostSaved(postsSaved);

    return postsSaved;
  };

  const Saves = async (type, post) => {
    const response = await fetch(`${KEY}api/posts/saved/?t=${Date.now()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post,
        savedType: type,
        postId: post.id,
      }),
    }).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível atualizar os posts salvos. Tente novamente mais tarde.",
      );
      return null;
    }

    if (!response.ok) {
      throw new Error("Erro ao atualizar posts salvos");
    }

    await getPostsSaved();

    return response;
  };

  const getFollowBack = (userId) => {
    return followers.some(
      (follower) =>
        follower.userId === userId && follower.following === user.id,
    );
  };

  const LikesComment = async (commentId, postId) => {
    const response = await fetch(`${KEY}api/comments/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        commentId,
        postId,
      }),
    }).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response || !response.ok) {
      alert(
        "Não foi possível curtir o comentário. Tente novamente mais tarde.",
      );
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
    const response = await fetch(`${KEY}api/comments/like`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar as curtidas dos comentários. Tente novamente mais tarde.",
      );
      return null;
    }

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

    if (index === 5) {
      if (location.pathname === "/auth/logout") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        navigate("/auth/register", { replace: true });
        return;
      }

      navigate("/auth/logout");
      return;
    }

    if (index === 1) {
      navigate(`/feed/${user.id}`);
    } else if (index === 2) {
      navigate("/ebooks");
    } else if (index === 3) {
      navigate(`/perfil/${user.id}`);
    } else if (index === 4) {
      navigate("/save");
    } else if (index === 0) {
      navigate(`/feed/${user.id}`);
    }
  };

  const goalUserLogged = useCallback(
    async (userId) => {
      if (!userId) return null;

      try {
        const response = await fetch(`${KEY}goalNumber/user/${userId}`).catch(
          (error) => {
            console.error(error);
            return null;
          },
        );

        if (!response) {
          alert(
            "Não foi possível carregar sua meta de leitura. Tente novamente mais tarde.",
          );
          return null;
        }

        if (response.status === 404) {
          setGoalUser(null);
          return null;
        }

        if (!response.ok) {
          throw new Error("Erro ao buscar a meta do usuário.");
        }

        const data = await response.json();

        setGoalUser(data);

        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [setGoalUser],
  );

  // ===== Requisições movidas de outros componentes para cá =====

  // Vinda de "ComponentesFeed/dialog.jsx"
  const newPostSimple = async ({ content, midia, author, userName }) => {
    const response = await fetch(`${KEY}api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content,
        midia,
        author,
        userName,
        likes: 0,
        comments: [],
      }),
    }).catch((error) => {
      console.error(error);
      alert("Não foi possível publicar o post. Tente novamente mais tarde.");
      return null;
    });

    if (!response) return null;

    return await response.json();
  };

  // Vinda de "ComponentsEbooks/ebooks.jsx"
  const saveBook = async (ebook) => {
    const response = await fetch(`${KEY}api/books/saved`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(ebook),
    }).catch((error) => {
      console.error(error);
      alert(
        "Não foi possível salvar este livro na sua estante. Tente novamente mais tarde.",
      );
      return null;
    });

    if (!response) return null;

    if (response.ok) {
      // Recarrega os livros salvos e sinaliza para todas as páginas
      // (perfil e ComplexPost) se atualizarem no mesmo instante.
      await getBookSave(user.id);
      setEditRequisicao((previousValue) => !previousValue);
    } else {
      alert(
        "Não foi possível salvar este livro na sua estante. Tente novamente mais tarde.",
      );
    }

    return response;
  };

  // Vinda de "ComponentsEbooks/arrayEbooks.jsx"
  const getBooks = async (term, page) => {
    const response = await fetch(
      `${KEY}api/books?q=${term}&page=${page}`,
    ).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert("Não foi possível carregar os livros. Tente novamente mais tarde.");
      return [];
    }

    const res = await response.json();

    return res ?? [];
  };

  // Busca de livros usada pelo header na página de livros.
  // Busca diretamente na API, independente da lista já carregada.
  const searchBooks = async (term) => {
    if (!term || !term.trim()) return [];

    const response = await fetch(
      `${KEY}api/books?q=${encodeURIComponent(term.trim())}&page=0`,
    ).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert("Não foi possível buscar os livros. Tente novamente mais tarde.");
      return [];
    }

    const res = await response.json();

    return res ?? [];
  };

  // Vinda de "saves.jsx"
  const getPostsSavedPage = async () => {
    const response = await fetch(`${KEY}api/posts/saved`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response || !response.ok) {
      alert(
        "Não foi possível carregar os posts salvos. Tente novamente mais tarde.",
      );
      throw new Error("Erro ao buscar posts salvos");
    }

    return await response.json();
  };

  // Vinda de "ComponentesFeed/dialogGif.jsx"
  const getGifs = async (busca, offset) => {
    const response = await fetch(
      `${KEY}api/gifs?busca=${encodeURIComponent(busca)}&offset=${offset}`,
    ).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert("Não foi possível carregar os gifs. Tente novamente mais tarde.");
      return [];
    }

    return await response.json();
  };

  // Vindas de "ComponentesFeed/dialogEmoji.jsx"
  const getEmojis = async (signal) => {
    const response = await fetch(`${KEY}api/emojis`, { signal }).catch(
      (error) => {
        if (error.name === "AbortError") return null;

        console.error(error);
        return null;
      },
    );

    if (!response) {
      if (signal?.aborted) return null;

      alert("Não foi possível carregar os emojis. Tente novamente mais tarde.");
      throw new Error("Erro ao carregar emojis");
    }

    if (!response.ok) {
      throw new Error("Erro ao carregar emojis");
    }

    return await response.json();
  };

  const searchEmojis = async (query, signal) => {
    const response = await fetch(
      `${KEY}api/emojis/search/${encodeURIComponent(query)}`,
      { signal },
    ).catch((error) => {
      if (error.name === "AbortError") return null;

      console.error(error);
      return null;
    });

    if (!response) {
      if (signal?.aborted) return null;

      alert("Não foi possível pesquisar emojis. Tente novamente mais tarde.");
      throw new Error("Erro ao pesquisar emojis");
    }

    if (!response.ok) {
      throw new Error("Erro ao pesquisar emojis");
    }

    return await response.json();
  };

  // Vinda de "ComponentesFeed/tiptapEditor.jsx"
  const searchUsersMention = async (query) => {
    const response = await fetch(
      `${KEY}users?search=${encodeURIComponent(query)}`,
    ).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível buscar usuários para mencionar. Tente novamente mais tarde.",
      );
      return [];
    }

    return await response.json();
  };

  // Vinda de "ComponentsPerfil/containerEbooks.jsx"
  const deleteSavedBook = async (bookId) => {
    const response = await fetch(`${KEY}api/books/ebookDelete/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
      }),
    }).catch((error) => {
      console.error(error);
      alert(
        "Não foi possível remover este livro da sua estante. Tente novamente mais tarde.",
      );
      return null;
    });

    if (!response) return null;

    return await response.json();
  };

  // Vinda de "ComponentsPerfil/readingPace.jsx"
  const saveGoal = async (paramsId, goalNumber) => {
    const response = await fetch(`${KEY}goalNumber/${paramsId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        number: goalNumber,
      }),
    }).catch((error) => {
      console.error(error);
      alert(
        "Não foi possível salvar sua meta de leitura. Tente novamente mais tarde.",
      );
      return null;
    });

    if (!response) return null;

    if (!response.ok) {
      alert(
        "Não foi possível salvar sua meta de leitura. Tente novamente mais tarde.",
      );
    }

    return response;
  };

  // Vinda de "ComponentsPerfil/editProfile.jsx"
  const editProfileRequest = async (profileId, profileData) => {
    const edit = await fetch(`${KEY}profileEdit/${profileId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    }).catch((error) => {
      console.error("Erro ao editar perfil:", error);
      alert("Não foi possível editar seu perfil. Tente novamente mais tarde.");
      return null;
    });

    if (!edit) return null;

    if (!edit.ok) {
      alert("Não foi possível editar seu perfil. Tente novamente mais tarde.");
    }

    return edit;
  };

  const editUserRequest = async (profileId, userData) => {
    const response = await fetch(`${KEY}updateUser/${profileId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    }).catch((error) => {
      console.error(error);
      alert(
        "Não foi possível alterar o nome do usuário. Tente novamente mais tarde.",
      );
      return null;
    });

    if (!response) return null;

    if (!response.ok) {
      alert(
        "Não foi possível alterar o nome do usuário. Tente novamente mais tarde.",
      );
      return response;
    }

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data.user));

    return response;
  };

  // Vinda de "ComponentsPerfil/deleteImgPerfil.jsx"
  const deleteImgPerfil = async (paramsId) => {
    const response = await fetch(`${KEY}profilePerfilIcon/${paramsId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).catch((error) => {
      console.error(error);
      alert(
        "Não foi possível excluir a imagem de perfil. Tente novamente mais tarde.",
      );
      return null;
    });

    if (!response) return null;

    if (!response.ok) {
      alert(
        "Não foi possível excluir a imagem de perfil. Tente novamente mais tarde.",
      );
    }

    return response;
  };

  // Vindas de "ComponentsPerfil/icon.jsx"
  const getPostsProfile = async () => {
    const response = await fetch(`${KEY}api/posts`).catch((error) => {
      console.error(error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar as publicações do perfil. Tente novamente mais tarde.",
      );
      return [];
    }

    return await response.json();
  };

  const getProfileEditData = async (profileId) => {
    const response = await fetch(`${KEY}profileEdit/${profileId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => {
      console.error("Erro ao buscar perfil:", error);
      return null;
    });

    if (!response) {
      alert(
        "Não foi possível carregar os dados do perfil. Tente novamente mais tarde.",
      );
      return null;
    }

    return await response.json();
  };

  const saveProfileTheme = async (profileId, midiaTheme) => {
    const responsePost = await fetch(`${KEY}profileTheme/${profileId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        midiaTheme: midiaTheme || null,
      }),
    }).catch((error) => {
      console.error(error);
      alert(
        "Não foi possível salvar o tema do seu perfil. Tente novamente mais tarde.",
      );
      return null;
    });

    if (!responsePost) return null;

    if (!responsePost.ok) {
      alert(
        "Não foi possível salvar o tema do seu perfil. Tente novamente mais tarde.",
      );
    }

    return responsePost;
  };

  const getProfileTheme = async (profileId) => {
    const responseGet = await fetch(`${KEY}profileTheme/${profileId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((error) => {
      console.error(error);
      return null;
    });

    if (!responseGet) {
      alert(
        "Não foi possível carregar o tema do perfil. Tente novamente mais tarde.",
      );
      return null;
    }

    return await responseGet.json();
  };

  // Vindas de "context/index.jsx"

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
    goalUserLogged,
    newPostSimple,
    saveBook,
    getBooks,
    searchBooks,
    getPostsSavedPage,
    getGifs,
    getEmojis,
    searchEmojis,
    searchUsersMention,
    deleteSavedBook,
    saveGoal,
    editProfileRequest,
    editUserRequest,
    deleteImgPerfil,
    getPostsProfile,
    getProfileEditData,
    saveProfileTheme,
    getProfileTheme,
    registerRequest,
    loginRequest,
    getPostsFeed,
  };
}
