import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { FormLogin } from "./Components/formLogin.jsx";
import { FormRegister } from "./Components/formRegister.jsx";
// import { Header } from "./Components/ComponentesFeed/header.jsx";
// import { SubHeader } from "./Components/ComponentesFeed/subHeader.jsx"
// import { Post } from "./Components/ComponentesFeed/post.jsx";
import "./index.css";
// import App from "./App.jsx";
import { Feed } from "./Components/feed.jsx";
import { Saves } from "./Components/saves.jsx";

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

        <Route path="save" element={<Saves></Saves>}></Route>

        {/* <Route path="*" element={<FormLogin></FormLogin>}></Route> */}
        <Route path="*" element={<Feed></Feed>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
);
