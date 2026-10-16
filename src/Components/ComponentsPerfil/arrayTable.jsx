import { useContext, useEffect } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useParams } from "react-router";

export function ArrayTable() {
  const { id: paramsId } = useParams();
  const { publication, ebookSaved } = useContext(AppContext);
  const { fetchProfile } = useRequisicoes({});

  useEffect(() => {
    publication;
    fetchProfile();
  }, []);

  const userPublications = publication.filter((p) => p.authorId === paramsId);
  const read = ebookSaved.filter((ebook) => ebook.progress === 100);

  const tableObj = [
    { name: "Lidos", number: read.length },
    { name: "Lendo", number: ebookSaved.length },
    { name: "Resenhas", number: userPublications.length },
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
            <span className="text-2xl font-serif text-gray font-semibold mt-1">
              {t.number}
            </span>
          </div>
        );
      })}
    </>
  );
}
