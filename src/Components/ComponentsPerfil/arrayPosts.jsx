import { useContext } from "react";
import { Post } from "../ComponentesFeed/post";
import AppContext from "../context";
import { useLocation } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayPosts() {
  const { state } = useLocation();
  const { user } = useRequisicoes({});
  const { search, publication } = useContext(AppContext);

  return (
    <>
      {(!search ? publication : search)
        .filter((p) => p.author == (state?.author || user?.name))
        .map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </>
  );
}
