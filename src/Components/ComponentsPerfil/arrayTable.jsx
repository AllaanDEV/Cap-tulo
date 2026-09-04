import { useContext, useEffect, useState } from "react";
import AppContext from "../context";

export function ArrayTable({ post }) {
  const { publication, ebookSaved, progressEbook, read, setRead} = useContext(AppContext);

  const userPublications = publication?.filter(
    (p) => p?.authorId === post?.authorId,
  );

  console.log("table", userPublications)

  useEffect(() => {
    if (progressEbook == 100) {
      setRead((prev) => prev + 1);
    }
  }, [progressEbook]);

  const tableObj = [
    { name: "Lidos", number: read },
    { name: "Lendo", number: ebookSaved.length },
    { name: "Resenhas", number: userPublications.length },
    // { name: "Seguindo", number: 318 },
    // { name: "Seguidores", number: "1,2k" },
  ];

  return (
    <>
      {tableObj.map((t, index) => {
        return (
          <div
            className="p-4 flex flex-col justify-center items-center"
            key={index}
          >
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
              {t.name.toUpperCase()}
            </span>
            <span className="text-2xl font-serif text-stone-800 font-semibold mt-1">
              {t.number}
            </span>
          </div>
        );
      })}
    </>
  );
}
