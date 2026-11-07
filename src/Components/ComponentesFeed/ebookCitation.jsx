import { useContext } from "react";
import { CitationIcon } from "../svgCode";
import AppContext from "../context";
import { DeleteButton } from "./deleteButton";

export function EbookCitation({
  text,
  title,
  authors,
  delet,
  className,
  ...props
}) {
  const { themeOn } = useContext(AppContext);

  return (
    <div
      className={`bg-background p-4 border border-border rounded-xl flex ${delet ? "flex-row justify-between" : "flex-col"} ${className} ${
        themeOn ? "text-black" : "text-white"
      } `}
      {...props}
    >
      <div>
        <CitationIcon></CitationIcon>
        <h4 className="font-fraunce text-2xl">{`“${text}”`}</h4>
        <span className={` text-gray`}>
          <i>{`— ${title}, ${authors ? authors : "Desconhecido"}`}</i>
        </span>
      </div>

      {delet && <DeleteButton></DeleteButton>}
    </div>
  );
}
