import { useContext, useEffect, useEffectEvent, useState } from "react";
import AppContext from "../context";
import { ArrayPosts } from "./arrayPosts";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useParams } from "react-router";

export function ArrayTable() {
  const { id: paramsId } = useParams();
  const { publication, ebookSaved, progressEbook, read, setRead } =
    useContext(AppContext);

  useEffect(() => {
    publication;
  }, []);

  const { user } = useRequisicoes({});

  useEffect(() => {
    const finished = progressEbook.filter(
      (progress) => progress === 100,
    ).length;

    setRead(finished);
  }, [progressEbook]);


  const userPublications = publication.filter((p) => p.authorId === paramsId);

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
