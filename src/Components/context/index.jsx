import { useEffect, useRef, useState } from "react";
import AppContext from ".";

import { useComments } from "./hooks/useComments";


export function Context({ children }) {
  const comments = useComments();


  const [dialog, setDialog] = useState(false);
  const [publication, setPublication] = useState([]);


  const openOrCloseDialog = () => {
    setDialog(!dialog);
  };

  const Register = async ({ name, email, password, userName }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, userName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const Login = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const responseJson = await response.json();
      localStorage.setItem("token", JSON.stringify(responseJson.token));
      localStorage.setItem("user", JSON.stringify(responseJson.user));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const dialogRef = useRef(null);

  const [editComments, setEditComments] = useState(false);

  const [EDIT, SETEDIT] = useState();
  const [postEdit, setPostEdit] = useState();

  const toggleComments = () => {
    setEditComments(!editComments);
  };

  useEffect(() => {
    if (editComments) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [editComments]);

  const [search, setSearch] = useState();
  const [post, setPost] = useState([]);
  const [edit, setEdit] = useState({});
  const [atualizar, setAtualizar] = useState(false);
  const [iconsProfile, setIconsProfile] = useState({});
  const [ebookSaved, setEbookSaved] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [bookSearch, setBookSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [editRequisicao, setEditRequisicao] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [midiaIcon, setMidiaIcon] = useState();
  const [postId, setPostId] = useState();
  const [progressEbook, setProgressEbook] = useState();
  const [read, setRead] = useState(0);

  useEffect(() => {
    setAtualizar(atualizar);
  }, [atualizar]);

  useEffect(() => {
    setIconsProfile(iconsProfile);
  }, [iconsProfile]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPublication(data));
  }, [editRequisicao]);

  return (
    <AppContext.Provider
      value={{
        openOrCloseDialog,
        dialog,
        Register,
        Login,
        publication,
        setPublication,
        ...comments,
        toggleComments,
        dialogRef,
        EDIT,
        SETEDIT,
        postEdit,
        setPostEdit,
        search,
        setSearch,
        setPost,
        post,
        edit,
        setEdit,
        atualizar,
        setAtualizar,
        iconsProfile,
        setIconsProfile,
        ebooks,
        setEbooks,
        bookSearch,
        setBookSearch,
        searchValue,
        setSearchValue,
        ebookSaved,
        setEbookSaved,
        editRequisicao,
        setEditRequisicao,
        editValue,
        setEditValue,
        midiaIcon,
        setMidiaIcon,
        postId,
        setPostId,
        progressEbook,
        setProgressEbook,
        read,
        setRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
