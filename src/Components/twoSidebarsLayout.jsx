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

      <main className="pt-7 min-h-screen">
        <div className="flex justify-center max-w-full mx-auto px-4 lg:gap-10">
          {/* Sidebar esquerdo */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <SideBar />
            </div>
          </aside>

          {/* Conteúdo da página */}
          <section className="w-auto shrink-0">
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
        <SideBarMobile></SideBarMobile>
      </main>
    </>
  );
}
