import { useContext, useEffect } from "react";
import { Post } from "../ComponentesFeed/post";
import AppContext from "../context";
import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ArrayPosts({ post }) {
  const { id: paramsId } = useParams();
  // const { state } = useLocation();
  const { search, publication, editValue, searchValue,  feedFilter } =
    useContext(AppContext);
  const { fetchProfile, likesGet } = useRequisicoes({ post });

  useEffect(() => {
    fetchProfile();
    //   likesGet();
  }, [paramsId]);

  const postsToRender = searchValue ? search : publication;

  return (
    <>
      <ul className="flex flex-col gap-5">
        {postsToRender
          .filter((p) => p.authorId === paramsId)
          .map((p) => (
            <li key={p.id}>
              <Post post={p} />
            </li>
          ))}
      </ul>
      {postsToRender.length === 0 &&  feedFilter === "posts" && <span className="mx-auto text-sm text-wine">Publique algo!</span>}
    </>
  );
}
