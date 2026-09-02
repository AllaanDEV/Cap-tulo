import { useContext, useEffect } from "react";
import { Post } from "../ComponentesFeed/post";
import AppContext from "../context";
import { useLocation } from "react-router";
import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayPosts() {
  const { id: paramsId } = useParams();
  // const { state } = useLocation();
  const { search, publication, editValue} = useContext(AppContext);
  const { fetchProfile} = useRequisicoes({});

  useEffect(() => {
    fetchProfile();
  }, [publication, editValue]);



  return (
    <ul>
      {(!search ? publication : search)
        .filter((p) => p.authorId === (paramsId))
        .map((p) => (
          <li key={p.id}>
            <Post post={p} />
          </li>
        ))}
    </ul>
  );
}
