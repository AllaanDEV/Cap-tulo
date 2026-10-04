import { Like, Share } from "../svgCode";
import { ButtonPost } from "./buttonPost";
import { save } from "../svgCode";
import { Comment } from "../svgCode";
import { useContext, useEffect, useRef, useState } from "react";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";

const Save = save;
export function ContainerButtonsPost({ post, openComments, className }) {
  const { like, setLike, getPostsSaved, isLiked, handleLike, liking } =
    useContext(AppContext);
  const { Saves, user,  LikeButton} = useRequisicoes({  post,
  like,
  setLike,});
  
  //   const [like, setLike] = useState([]);
  //   const [liked, setLiked] = useState(false);
  // const [liking, setLiking] = useState(false);
  // const likeLock = useRef(false);

  // const Saves = async (type, post) => {
  //   const response = await fetch(`http://localhost:3000/api/posts/saved`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       post: post,
  //       saveType: type
  //     }),
  //   });

  // if (response.ok) {
  //   const data= await response.json()
  //   console.log("respose", data)
  // return  getPostsSaved()
  // }
  //   return response
  // };

  // const handleLike = async () => {
  //   if (likeLock.current) return;

  //   likeLock.current = true;
  //   setLiking(true);

  //   try {
  //     await LikeButton();
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     likeLock.current = false;
  //     setLiking(false);
  //   }
  // };

  // const { LikeButton, user } = useRequisicoes({
  //   post,
  //   like,
  //   setLike,
  // });

  // const liked =
  //   like?.some(
  //     (p) =>
  //       p.postId === post?.id && p.userId === user?.id && p.validation === true,
  //   ) ?? false;

  const liked = isLiked(post?.id, user?.id);

  return (
    <div className={`flex justify-between px-5  ${className}`}>
      <div className="flex justify-baseline gap-5 sm:justify-between w-55  items-center">
        <div>
          <ButtonPost
            onClick={() => handleLike(post.id, LikeButton)}
            disabled={liking.includes(post?.id)}
          >
            <Like
              filled={liked}
              fill={liked ? "currentColor" : "none"}
              className={liked ? "text-red-500" : ""}
            />

            <p className="text-sm">{post?.likes}</p>
          </ButtonPost>
        </div>
        <div>
          <ButtonPost onClick={openComments}>
            <Comment></Comment>
            {post?.comments?.length}
          </ButtonPost>
          {/* <p className="text-sm"></p> */}
        </div>
        <div>
          <ButtonPost>
            <Share></Share>
            <span className="hidden sm:block">Compartilhar</span>
          </ButtonPost>
          <p className="text-sm"></p>
        </div>
      </div>
      <button
        className="hover:text-yellow-600"
        onClick={() => Saves("saved", post)}
        to={"saves"}
      >
        <Save size={"1em"}></Save>
      </button>
    </div>
  );
}
