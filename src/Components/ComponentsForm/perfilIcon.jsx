import { useContext, useEffect } from "react";
import { Link } from "react-router";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function PerfilIcon({ children, ...props }) {
  const { user } = useRequisicoes({});
  const { photoValueFeed } = useContext(AppContext);
  // const { fetchProfile } = useRequisicoes({});

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

  return (
    <Link {...props}>
      {photo ? (
        <div className="flex justify-center rounded-4xl h-10 w-10 overflow-hidden">
          {children}
        </div>
      ) : (
        <div className="flex justify-center rounded-4xl h-10 w-10 overflow-hidden bg-amber-700">
          {children}
        </div>
      )}
    </Link>
  );
}
