import { Container } from "./ComponentesFeed/container";
import { Header } from "./ComponentesFeed/header";
import { ArrayEbooks } from "./ComponentsEbooks/arrayEbooks";
import { EbookEmphasis } from "./ComponentsEbooks/ebookEmphasis";
import { Hero } from "./ComponentsEbooks/hero";
import { SearchBook } from "./ComponentsEbooks/searchBook";

export function EbooksPage() {
  return (
    <Container>
      <main className=" bg-[#fbf6ed] text-[#342219] ">
        <section className="mt-12.5 w-[95vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw]">
          <Hero></Hero>
          <EbookEmphasis></EbookEmphasis>
          <SearchBook></SearchBook>
          <ArrayEbooks></ArrayEbooks>
        </section>
      </main>
    </Container>
  );
}
