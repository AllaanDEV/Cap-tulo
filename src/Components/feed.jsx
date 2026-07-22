import { Container } from "./ComponentesFeed/container";
import { Header } from "./ComponentesFeed/header";
import { Post } from "./ComponentesFeed/post";
import { SideBar } from "./ComponentesFeed/sideBar";
import { SubHeader } from "./ComponentesFeed/subHeader";

export function Feed() {
  return (
    <>
      <Header></Header>
      <div className="flex pt-7 px-4 gap-4">
        <section>
          <SideBar></SideBar>
        </section>

        <section>
          <Container className="lg:min-w-[50vw]">
            <SubHeader></SubHeader>
            <Post></Post>
          </Container>
        </section>
      </div>
    </>
  );
}
