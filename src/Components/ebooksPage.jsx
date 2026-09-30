import { Container } from "./ComponentesFeed/container";
import { Header } from "./ComponentesFeed/header";
import { ArrayEbooks } from "./ComponentsEbooks/arrayEbooks";
import { EbookEmphasis } from "./ComponentsEbooks/ebookEmphasis";
import { Hero } from "./ComponentsEbooks/hero";
import { SearchBook } from "./ComponentsEbooks/searchBook";

export function EbooksPage() {
  return (
    <Container>
      <main className=" bg-[#fbf6ed] text-[#342219]">
        <section className="">
          <Hero></Hero>
          <EbookEmphasis></EbookEmphasis>
          <SearchBook></SearchBook>
          <ArrayEbooks></ArrayEbooks>
        </section>
      </main>
    </Container>
  );
}
