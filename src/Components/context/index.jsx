import { useState } from "react";
import AppContext from ".";

export function Context({ children }) {
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

      return {success: true}
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const Login = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const responseJson= await response.json()

      localStorage.setItem("token", JSON.stringify(responseJson.token))
      localStorage.setItem("user", JSON.stringify(responseJson.user))

      return {success: true}
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

   const [publication, setPublication] = useState([]);

  return (
    <AppContext.Provider value={{ openOrCloseDialog, dialog, Register, Login, publication, setPublication}}>
      {children}
    </AppContext.Provider>
  );
}
