import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Feed } from "./Components/feed.jsx";
import { Saves } from "./Components/saves.jsx";
import { Context } from "./Components/context/index.jsx";
// import { HeaderLayout } from "./Components/headerLayout.jsx";
import { Icon } from "./Components/ComponentsPerfil/icon.jsx";

import { EbooksPage } from "./Components/ebooksPage.jsx";
// import { twoSidebarsLayout } from "./Components/twoSidebarsLayout.jsx";

import { TwoSidebarsLayout } from "./Components/twoSidebarsLayout.jsx";
import { PostFocusMobile } from "./Components/ComponentesFeed/postFocusMobile.jsx";
import { EmAltaPageMobile } from "./Components/EmAltaPageMobile.jsx";

import { SearchUsersPageMobile } from "./Components/searchUsersPageMobile.jsx";
import { ScrollToTop } from "./Components/scrollToTop.jsx";
import { LogoutPage } from "./Components/logoutPage.jsx";
import { Forms } from "./Components/forms.jsx";
// import { OneSidebarsLayout } from "./Components/oneSidebarsLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Context>
        <Routes>
          <Route path="auth">
            {/* <Route path="login" element={<FormLogin></FormLogin>}></Route> */}
            {/* <Route
              path="register"
              element={<FormRegister></FormRegister>}
            ></Route> */}
            <Route path="logout" element={<LogoutPage></LogoutPage>}></Route>
            <Route path="register" element={<Forms></Forms>}></Route>
          </Route>

          {/* <Route element={<HeaderLayout></HeaderLayout>}>
            {/* <Route path="perfil/:id" element={<Icon></Icon>}></Route> */}
          {/* <Route
              path="EmAlta"
              element={<EmAltaPageMobile></EmAltaPageMobile>}
            ></Route>
            <Route path="feed/:id/:postId" element={<PostFocusMobile />} /> */}
          {/* </Route> */}

          {/* Rotas que possuem Header + Sidebars */}
          <Route element={<TwoSidebarsLayout />}>
            <Route path="feed/:id" element={<Feed />} />

            <Route path="save" element={<Saves />} />
            {/* <Route path="ebooks" element={<EbooksPage />} /> */}
            <Route path="perfil/:id" element={<Icon></Icon>}></Route>
            <Route path="ebooks" element={<EbooksPage></EbooksPage>}></Route>
            <Route
              path="EmAlta"
              element={<EmAltaPageMobile></EmAltaPageMobile>}
            ></Route>
            <Route
              path="SearchUsers"
              element={<SearchUsersPageMobile></SearchUsersPageMobile>}
            ></Route>
            <Route path="feed/:id/:postId" element={<PostFocusMobile />} />
          </Route>

          <Route path="*" element={<Forms></Forms>}></Route>
        </Routes>
      </Context>
    </BrowserRouter>
    {/* <App /> */}
    {/* </Context> */}
  </StrictMode>,
);
