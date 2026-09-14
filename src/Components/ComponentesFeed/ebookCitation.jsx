import { CitationIcon } from "../svgCode";

export function EbookCitation({text, title, authors, className}) {

  return (
    <div className={`bg-background p-4 border border-border rounded-xl  flex flex-col ${className}`}>
      <CitationIcon></CitationIcon>
      <h4 className="font-fraunce text-2xl">{`“${text}”`}</h4>
      <span className="text-gray">{`— ${title}, ${authors ? authors : "Desconhecido"}`}</span>
    </div>
  );
}
