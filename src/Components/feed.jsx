import { ArrayPost } from "./ComponentesFeed/arrayPost";
import { Container } from "./ComponentesFeed/container";

// import { Post } from "./ComponentesFeed/post";
import { SideBar } from "./ComponentesFeed/sideBar";
import { SubHeader } from "./ComponentesFeed/subHeader";
import { Dialog } from "./ComponentesFeed/dialog";
import { DialogComments } from "./ComponentesFeed/dialogComments";
import { Buttons } from "./ComponentesFeed/buttons";
import { TrendingSideBar } from "./ComponentesFeed/trendingSidebar";
import { SearchUsersSidebar } from "./ComponentesFeed/searchUsersSidebar";
export function Feed() {
  return (
    <>
      <main className="pt-7 min-h-screen">
        <div className="flex justify-center max-w-7xl mx-auto px-4 lg:gap-10">
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20">
              <SideBar />
            </div>
          </aside>

          <section className="w-[42vw] shrink-0 mx-auto">
            <Container className="mt-12.5 w-full">
              <Buttons />
              <SubHeader />
              <ArrayPost />
            </Container>
          </section>

          <aside className="hidden xl:block w-80 shrink-0">
            <div className="sticky top-20">
              <div className="h-screen mt-13 ">
                <TrendingSideBar></TrendingSideBar>
                <SearchUsersSidebar></SearchUsersSidebar>
              </div>

              {/* <SideBar /> */}
            </div>
          </aside>
        </div>

        <Dialog />
        <DialogComments />
      </main>
    </>
  );
}
