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
