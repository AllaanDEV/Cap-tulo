import { Header } from "./ComponentesFeed/header";
import { Outlet } from "react-router";

export function HeaderLayout(){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    )
}