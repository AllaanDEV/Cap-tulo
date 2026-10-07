import { Header } from "./ComponentesFeed/header";
import { Outlet } from "react-router";
import { SideBarMobile } from "./ComponentesFeed/sideBarMobile";

export function HeaderLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>

      <SideBarMobile></SideBarMobile>
    </>
  );
}
