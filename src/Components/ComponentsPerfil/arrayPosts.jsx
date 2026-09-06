import { useContext, useEffect } from "react";
import { Post } from "../ComponentesFeed/post";
import AppContext from "../context";
import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayPosts({post}) {
  const { id: paramsId } = useParams();
  // const { state } = useLocation();
  const { search, publication, editValue } = useContext(AppContext);
  const { fetchProfile, likesGet} = useRequisicoes({post});

  // useEffect(() => {
  //   fetchProfile();
  //   likesGet();
  // }, [publication, editValue, paramsId]);

  return (
    <ul>
      {(!search ? publication : search)
        .filter((p) => p.authorId === paramsId)
        .map((p) => (
          <li key={p.id}>
            <Post post={p} />
          </li>
        ))}
    </ul>
  );
}
