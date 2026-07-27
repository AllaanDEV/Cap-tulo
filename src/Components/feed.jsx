import { ArrayPost } from "./ComponentesFeed/arrayPost";
import { Container } from "./ComponentesFeed/container";
import { Header } from "./ComponentesFeed/header";
// import { Post } from "./ComponentesFeed/post";
import { SideBar } from "./ComponentesFeed/sideBar";
import { SubHeader } from "./ComponentesFeed/subHeader";
import { Dialog } from "./ComponentesFeed/dialog";

export function Feed() {
  return (
    <>
      <Header></Header>
      <main className="flex pt-7 px-4 lg:gap-4">
        <section>
          <SideBar></SideBar>
        </section>
        <Dialog></Dialog>
        <section>
          <Container className="lg:min-w-[50vw]">
            <SubHeader></SubHeader>
            <ArrayPost></ArrayPost>
          </Container>
        </section>
      </main>
    </>
  );
}
