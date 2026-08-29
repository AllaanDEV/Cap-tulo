import { useContext } from "react";
import { Post } from "../ComponentesFeed/post";
import AppContext from "../context";
import { useLocation } from "react-router";
import { useParams } from "react-router";

export function ArrayPosts() {
  const { id: paramsId } = useParams();
  const { state } = useLocation();
  const { search, publication } = useContext(AppContext);

  return (
    <>
      {(!search ? publication : search)
        .filter((p) => p.authorId === (state?.authorId || paramsId))
        .map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </>
  );
}
