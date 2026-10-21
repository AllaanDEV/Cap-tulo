import { Container } from "./ComponentesFeed/container";
import { ArrayEbooks } from "./ComponentsEbooks/arrayEbooks";
import { EbookEmphasis } from "./ComponentsEbooks/ebookEmphasis";
import { Hero } from "./ComponentsEbooks/hero";
import { SearchBook } from "./ComponentsEbooks/searchBook";
import { DialogPostFocus } from "./ComponentesFeed/dialogPostFocus";

export function EbooksPage() {
  return (
    <Container>
      <main>
        <section className=" w-[95vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw] mx-auto">
          <Hero></Hero>
          <EbookEmphasis></EbookEmphasis>
          <SearchBook></SearchBook>
          <ArrayEbooks></ArrayEbooks>
        </section>
      </main>
      <DialogPostFocus></DialogPostFocus>
    </Container>
  );
}
