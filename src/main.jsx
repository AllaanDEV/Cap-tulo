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
import { Context } from "./Components/context/index.jsx";
import { HeaderLayout } from "./Components/headerLayout.jsx";
import { Icon } from "./Components/ComponentsPerfil/icon.jsx";

import { EbooksPage } from "./Components/ebooksPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="auth">
            <Route path="login" element={<FormLogin></FormLogin>}></Route>
            <Route
              path="register"
              element={<FormRegister></FormRegister>}
            ></Route>
          </Route>

          <Route element={<HeaderLayout></HeaderLayout>}>
            <Route path="save" element={<Saves></Saves>}></Route>
            <Route path="feed/:id" element={<Feed></Feed>}></Route>
            <Route path="perfil/:id" element={<Icon></Icon>}></Route>
            <Route path="ebooks" element={<EbooksPage></EbooksPage>}></Route>
          </Route>

          <Route path="*" element={<FormLogin></FormLogin>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Context>
  </StrictMode>,
);
