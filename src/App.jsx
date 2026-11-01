import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { TwoSidebarsLayout } from './Components/twoSidebarsLayout'
import { ProtectedRoute } from './Components/protectedRoute'
import { Saves } from './Components/saves'
import { EbooksPage } from './Components/ebooksPage'
import { EmAltaPageMobile } from './Components/EmAltaPageMobile'
import { SearchUsersPageMobile } from './Components/searchUsersPageMobile'
import { PostFocusMobile } from './Components/ComponentesFeed/postFocusMobile'
import { ContainerForm } from './Components/ComponentsForm/containerForm'
import { Feed } from './Components/feed'
import { Icon } from './Components/ComponentsPerfil/icon'
import { LogoutPage } from './Components/logoutPage'
import { Context } from "./Components/context/index.jsx"
import { ScrollToTop } from './Components/scrollToTop'

function App() {

  return (
   <BrowserRouter>
          <ScrollToTop />
  
          <Context>
            <Routes>
              <Route path="auth">
                <Route path="logout" element={<LogoutPage />} />
                <Route path="register" element={<ContainerForm />} />
              </Route>
  
              <Route element={<ProtectedRoute />}>
                <Route element={<TwoSidebarsLayout />}>
                  <Route path="feed/:id" element={<Feed />} />
  
                  <Route path="save" element={<Saves />} />
  
                  <Route path="perfil/:id" element={<Icon />} />
  
                  <Route path="ebooks" element={<EbooksPage />} />
  
                  <Route path="EmAlta" element={<EmAltaPageMobile />} />
  
                  <Route path="SearchUsers" element={<SearchUsersPageMobile />} />
  
                  <Route path="feed/:id/:postId" element={<PostFocusMobile />} />
                </Route>
              </Route>
  
              <Route path="*" element={<ContainerForm />} />
            </Routes>
          </Context>
        </BrowserRouter>
  )
}

export default App
