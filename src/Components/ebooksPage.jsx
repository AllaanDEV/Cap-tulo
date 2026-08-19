import { ArrayEbooks } from "./ComponentsEbooks/arrayEbooks";
import { EbookEmphasis } from "./ComponentsEbooks/ebookEmphasis";
import { Hero } from "./ComponentsEbooks/hero";
import { SearchBook } from "./ComponentsEbooks/searchBook";

export function EbooksPage() {
  return (
    <main className="min-h-screen bg-[#fbf6ed] text-[#342219]">
      <section className="mx-auto max-w-6xl px-5 w-[90vw]">
        <Hero></Hero>
        <EbookEmphasis></EbookEmphasis>
        <SearchBook></SearchBook>
        <ArrayEbooks></ArrayEbooks>
      </section>
    </main>
  );
}
