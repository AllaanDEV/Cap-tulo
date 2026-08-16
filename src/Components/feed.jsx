import { ArrayPost } from "./ComponentesFeed/arrayPost";
import { Container } from "./ComponentesFeed/container";

// import { Post } from "./ComponentesFeed/post";
import { SideBar } from "./ComponentesFeed/sideBar";
import { SubHeader } from "./ComponentesFeed/subHeader";
import { Dialog } from "./ComponentesFeed/dialog";
import { DialogComments } from "./ComponentesFeed/dialogComments";

export function Feed() {
  return (
    <>
      <main className="flex pt-7 px-4 lg:gap-4">
          <section className="w-50 hidden lg:block px-5">
            <SideBar></SideBar>
          </section>
          <Dialog></Dialog>
          <section className="mx-auto">
            <Container className="lg:min-w-[50vw] mt-12.5">
              <SubHeader></SubHeader>
              <ArrayPost></ArrayPost>
            </Container>
          </section>
          <DialogComments></DialogComments>
      </main>
    </>
  );
}
