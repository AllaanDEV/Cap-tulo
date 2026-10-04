import { useContext, useEffect } from "react";
import { Post } from "../ComponentesFeed/post";
import AppContext from "../context";
import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayPosts({ post }) {
  const { id: paramsId } = useParams();
  // const { state } = useLocation();
  const { search, publication, editValue, searchValue} = useContext(AppContext);
  const { fetchProfile, likesGet } = useRequisicoes({ post });

  useEffect(() => {
    fetchProfile();
    //   likesGet();
  }, [paramsId]);

  console.log(
    "PUBLICATION",
    publication.filter((p) => p.authorId === paramsId),
  );

  console.log("search:", search);

  const postsToRender = searchValue ? search : publication;

  return (
    <ul className="flex flex-col gap-5">
      {postsToRender
        .filter((p) => p.authorId === paramsId)
        .map((p) => (
          <li key={p.id}>
            <Post post={p} />
          </li>
        ))}
    </ul>
  );
}
