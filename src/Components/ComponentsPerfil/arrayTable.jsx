import { useContext, useEffect, useEffectEvent, useState } from "react";
import AppContext from "../context";
import { ArrayPosts } from "./arrayPosts";

export function ArrayTable() {
  const {
    publication,
    ebookSaved,
    progressEbook,
    read,
    setRead,
  } = useContext(AppContext);

  useEffect(() =>{
   publication
  },[])

  useEffect(() => {
    const finished = progressEbook.filter(
      (progress) => progress === 100,
    ).length;

    setRead(finished);
  }, [progressEbook]);


  const tableObj = [
    { name: "Lidos", number: read },
    { name: "Lendo", number: ebookSaved.length },
    { name: "Resenhas", number: ArrayPosts.length },
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
