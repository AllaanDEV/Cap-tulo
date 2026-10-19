import { Outlet } from "react-router";
import { useEffect } from "react";
import { SideBar } from "./ComponentesFeed/sideBar";
import { TrendingSideBar } from "./ComponentesFeed/trendingSidebar";
import { SearchUsersSidebar } from "./ComponentesFeed/searchUsersSidebar";
import { Header } from "./ComponentesFeed/header";
import { SideBarMobile } from "./ComponentesFeed/sideBarMobile";
import { useRequisicoes } from "./context/hooks/useRequisicoes";

export function TwoSidebarsLayout() {
  // Ponto único de carregamento dos dados globais (perfil, likes, usuários,
  // seguidores e trending). O cache com dedup do useRequisicoes garante que
  // cada requisição é feita uma vez por navegação — e não dezenas de vezes,
  // uma por componente montado (header, sidebars, cada post, cada card).
  const {
    fetchProfile,
    likesGet,
    userUP,
    allFollowers,
    getBookSave,
    arrayFeedbacksEbooks,
    user,
  } = useRequisicoes({});

  useEffect(() => {
    fetchProfile();
    likesGet();
    userUP();
    allFollowers();
    arrayFeedbacksEbooks();

    if (user?.id) {
      getBookSave(user.id);
    }
  }, [user?.id]);
  return (
    <>
      <Header></Header>

      <main className="pt-7 min-h-screen mb-25 sm:mb-0">
        <div className="flex justify-center max-w-full lg:gap-10">
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <SideBar />
            </div>
          </aside>

          <section className="w-full lg:w-auto shrink-0 mt-10 sm:mt-12.5 mb-15">
            <Outlet />
          </section>

          <aside className="hidden xl:block w-90 shrink-0">
            {/* <div className="sticky top-20 min-h-screen"> */}
            <div className=" mt-13 flex flex-col gap-5 sticky top-20">
              <TrendingSideBar />
              <SearchUsersSidebar />
            </div>
            {/* </div> */}
          </aside>
        </div>
      </main>
      <SideBarMobile></SideBarMobile>
    </>
  );
}
