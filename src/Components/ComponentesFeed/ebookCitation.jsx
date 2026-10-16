import { useContext } from "react";
import { CitationIcon } from "../svgCode";
import App from "../../App";
import AppContext from "../context";

export function EbookCitation({ text, title, authors, className, ...props }) {
  const { themeOn } = useContext(AppContext);

  return (
    <div
      className={`bg-background p-4 border border-border rounded-xl flex flex-col ${className} ${
        themeOn ? "text-black" : "text-white"
      } `}
      {...props}
    >
      <CitationIcon></CitationIcon>
      <h4 className="font-fraunce text-2xl">{`“${text}”`}</h4>
      <span className={` text-gray`}>
        <i>{`— ${title}, ${authors ? authors : "Desconhecido"}`}</i>
      </span>
    </div>
  );
}
