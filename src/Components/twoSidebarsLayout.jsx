import { Outlet } from "react-router";
import { SideBar } from "./ComponentesFeed/sideBar";
import { TrendingSideBar } from "./ComponentesFeed/trendingSidebar";
import { SearchUsersSidebar } from "./ComponentesFeed/searchUsersSidebar";
import { Header } from "./ComponentesFeed/header";
import { SideBarMobile } from "./ComponentesFeed/sideBarMobile";

export function TwoSidebarsLayout() {
  return (
    <>
      <Header></Header>

      <main className="pt-7 min-h-screen mb-25 sm:mb-0">
        <div className="flex justify-center max-w-full lg:gap-10">
          {/* Sidebar esquerdo */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <SideBar />
            </div>
          </aside>

          {/* Conteúdo da página */}
          <section className="w-full lg:w-auto shrink-0 mt-10 sm:mt-12.5 mb-15">
            <Outlet />
          </section>

          {/* Sidebar direito */}
          <aside className="hidden xl:block w-80 shrink-0">
            <div className="sticky top-20">
              <div className="h-screen mt-13">
                <TrendingSideBar />
                <SearchUsersSidebar />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SideBarMobile></SideBarMobile>
    </>
  );
}
