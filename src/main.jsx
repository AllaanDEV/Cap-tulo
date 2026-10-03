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
// import { HeaderLayout } from "./Components/headerLayout.jsx";
import { Icon } from "./Components/ComponentsPerfil/icon.jsx";

import { EbooksPage } from "./Components/ebooksPage.jsx";
// import { twoSidebarsLayout } from "./Components/twoSidebarsLayout.jsx";
import { PostFocus } from "./Components/postFocus.jsx";
import { TwoSidebarsLayout } from "./Components/twoSidebarsLayout.jsx";
// import { OneSidebarsLayout } from "./Components/oneSidebarsLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="auth">
            <Route path="login" element={<FormLogin></FormLogin>}></Route>
            <Route
              path="register"
              element={<FormRegister></FormRegister>}
            ></Route>
          </Route>

          {/* <Route element={<OneSidebarsLayout></OneSidebarsLayout>}>
            {/* <Route path="perfil/:id" element={<Icon></Icon>}></Route> */}
          {/* <Route path="ebooks" element={<EbooksPage></EbooksPage>}></Route> */}
          {/* </Route> */}

          {/* Rotas que possuem Header + Sidebars */}
          <Route element={<TwoSidebarsLayout />}>
            <Route path="feed/:id" element={<Feed />} />
            <Route path="feed/:id/:postId" element={<PostFocus />} />
            <Route path="save" element={<Saves />} />
            <Route path="ebooks" element={<EbooksPage />} />
            <Route path="perfil/:id" element={<Icon></Icon>}></Route>
            <Route path="ebooks" element={<EbooksPage></EbooksPage>}></Route>
          </Route>

          <Route path="*" element={<FormLogin></FormLogin>}></Route>
        </Routes>
      </Context>
    </BrowserRouter>
    {/* <App /> */}
    {/* </Context> */}
  </StrictMode>,
);
