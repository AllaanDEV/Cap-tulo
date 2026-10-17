
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import { Feed } from "./Components/feed.jsx";
import { Saves } from "./Components/saves.jsx";
import { Context } from "./Components/context/index.jsx";
import { Icon } from "./Components/ComponentsPerfil/icon.jsx";
import { EbooksPage } from "./Components/ebooksPage.jsx";
import { TwoSidebarsLayout } from "./Components/twoSidebarsLayout.jsx";
import { PostFocusMobile } from "./Components/ComponentesFeed/postFocusMobile.jsx";
import { EmAltaPageMobile } from "./Components/EmAltaPageMobile.jsx";
import { SearchUsersPageMobile } from "./Components/searchUsersPageMobile.jsx";
import { ScrollToTop } from "./Components/scrollToTop.jsx";
import { LogoutPage } from "./Components/logoutPage.jsx";
import { Forms } from "./Components/forms.jsx";

import { ProtectedRoute } from "./Components/protectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Context>
        <Routes>
          
          <Route path="auth">
            <Route path="logout" element={<LogoutPage />} />
            <Route path="register" element={<Forms />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<TwoSidebarsLayout />}>
              <Route path="feed/:id" element={<Feed />} />

              <Route path="save" element={<Saves />} />

              <Route path="perfil/:id" element={<Icon />} />

              <Route path="ebooks" element={<EbooksPage />} />

              <Route path="EmAlta" element={<EmAltaPageMobile />} />

              <Route
                path="SearchUsers"
                element={<SearchUsersPageMobile />}
              />

              <Route
                path="feed/:id/:postId"
                element={<PostFocusMobile />}
              />
            </Route>
          </Route>

          <Route path="*" element={<Forms />} />
        </Routes>
      </Context>
    </BrowserRouter>
  </StrictMode>,
);
