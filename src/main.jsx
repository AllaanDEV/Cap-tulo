import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { FormLogin } from "./Components/ComponentsForm/formLogin.jsx";
import { FormRegister } from "./Components/ComponentsForm/formRegister.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<FormLogin></FormLogin>}></Route>
          <Route
            path="register"
            element={<FormRegister></FormRegister>}
          ></Route>
        </Route>

        <Route path="*" element={<FormLogin></FormLogin>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
);
