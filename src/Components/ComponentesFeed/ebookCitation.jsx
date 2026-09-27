import { CitationIcon } from "../svgCode";

export function EbookCitation({text, title, authors, className, ...props}) {

  return (
    <div className={`bg-background p-4 border border-border rounded-xl  flex flex-col ${className}`} {...props}>
      <CitationIcon></CitationIcon>
      <h4 className="font-fraunce text-2xl">{`“${text}”`}</h4>
      <span className="text-gray"><i>{`— ${title}, ${authors ? authors : "Desconhecido"}`}</i></span>
    </div>
  );
}
