import { useContext } from "react";
import { Container } from "./ComponentesFeed/container";
import { Header } from "./ComponentesFeed/header";
import { ArrayEbooks } from "./ComponentsEbooks/arrayEbooks";
import { EbookEmphasis } from "./ComponentsEbooks/ebookEmphasis";
import { Hero } from "./ComponentsEbooks/hero";
import { SearchBook } from "./ComponentsEbooks/searchBook";
import AppContext from "./context";

export function EbooksPage() {
  const{themeOn}=useContext(AppContext)
  return (
    <Container>
      <main className={`${ themeOn ? "text-[#342219] " : "text-border"}`}>
        <section className=" w-[95vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw] mx-auto">
          <Hero></Hero>
          <EbookEmphasis></EbookEmphasis>
          <SearchBook></SearchBook>
          <ArrayEbooks></ArrayEbooks>
        </section>
      </main>
    </Container>
  );
}
