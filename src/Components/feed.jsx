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
import { useComments } from "./context/hooks/useComments";
import { useContext } from "react";
import AppContext from "./context";


export function Feed() {
  return (
    <Container className="w-[95vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw] mx-auto">
      <Buttons />
      <SubHeader />
      <ArrayPost />
      <Dialog />
      <DialogComments />
    </Container>
  );
}
