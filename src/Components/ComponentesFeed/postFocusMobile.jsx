import { useContext, useEffect } from "react";
import AppContext from "../context";
import { Post } from "./post";
import { Container } from "./container";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Link, useParams } from "react-router";
import { LeftArrow } from "../svgCode";

export function PostFocusMobile() {
  const { dataPostFocus, publication, setLike} = useContext(AppContext);
  const { fetchProfile, likesGet, user } = useRequisicoes({ setLike});

  const { postId: paramsPostId } = useParams();

  useEffect(() => {
    fetchProfile();
    likesGet();
  }, []);

  const postFocus = publication.find((post) => post.id === paramsPostId);

  return (
    <Container className="w-[100vw] mb-25">
      <div className="flex flex-col gap-2 mt-2">
        <Link to={`/feed/${user.id}`} className="mx-2 flex items-center text-gray">
          <LeftArrow size={"2em"}></LeftArrow>
        </Link>

        <Post post={dataPostFocus || postFocus} className="w-full"></Post>
      </div>
    </Container>
  );
}
