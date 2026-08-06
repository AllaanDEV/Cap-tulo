import { useState } from "react";
import AppContext from ".";

import { useComments } from "./hooks/useComments";
import { useRequisicoes } from "./hooks/useRequisicoes";
export function Context({ children }) {
  const 
  comments = useComments();
  const requisicoes = useRequisicoes();
  const [dialog, setDialog] = useState(false);

  const openOrCloseDialog = () => {
    setDialog(!dialog);
  };

  const Register = async ({ name, email, password }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
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

  const [publication, setPublication] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  const addComment = async (e) => {
    e.preventDefault();
    e.target.setComments(!comments)

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`/api/posts/${publication.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now().toString(),
          author: user.name,
          text: formData.get("comment"),
        }),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      return { success: false, error: error.message };
    }
  };


  const nameIcon= (user.name[0] + (user.name[1]? user.name[1] : "")).toUpperCase()
  return (
    <AppContext.Provider
      value={{
        openOrCloseDialog,
        dialog,
        Register,
        Login,
        publication,
        setPublication,
        addComment,
        ...comments,
        ...requisicoes,
        token,
        user,
        nameIcon
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
