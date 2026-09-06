import { Div } from "./div";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration, Like } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { Share } from "../svgCode";
import { Comment } from "../svgCode";

import { save } from "../svgCode";
// import daenerys from "../../assets/dragoes-daenerys.webp";
import { Info } from "./info";
import { ButtonPost } from "./buttonPost";

import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { CommentsList } from "./commentsList";

import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { useParams } from "react-router";

const Save = save;
const Icon = configuration;

export function Post({ post }) {
  const { id: paramsId } = useParams();

  const { setPostId, editValue } = useContext(AppContext);
  const [like, setLike] = useState([]);
  const [liked, setLiked] = useState(false);
  const [liking, setLiking] = useState(false);
  const likeLock = useRef(false);
  const [postComment, setPostComment] = useState(!post);
  setPostId(post);

  const {
    postDelete,
    LikeButton,
    nameIcon,
    user,
    photoValueFeed,
    fetchProfile,
    likesGet,
  } = useRequisicoes({
    post,
    like,
    setLike,
  });

  const Saves = () => {
    fetch(`/api/posts/${post.id}/save`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const openComments = () => {
    setPostComment(!postComment);
  };

  useEffect(() => {
    fetchProfile();
    likesGet();
  }, [ paramsId]);

const handleLike = async () => {
  if (likeLock.current) return;

  likeLock.current = true;
  setLiking(true);

  try {
    await LikeButton();

    setLiked((prev) => !prev);
  } catch (error) {
    console.error(error);
  } finally {
    likeLock.current = false;
    setLiking(false);
  }
};
  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == post.authorId,
  );

  useEffect(() => {
  const likes = like?.find(
    (p) => p.postId === post.id && p.userId === user.id
  );

  setLiked(likes?.validation ?? false);
}, [like, post.id, user.id]);

  return (
    <>
      <Div>
        <section className="flex flex-col gap-2">
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 items-center text-center justify-center">
              <PerfilIcon to={`/perfil/${post.authorId}`} state={post}>
                {photo?.midiaIcon ? (
                  <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
                ) : (
                  <p className="m-auto text-[1rem] font-medium font-serif text-white">
                    {nameIcon(post.author)}
                  </p>
                )}
              </PerfilIcon>
              <div>
                <span>{post.author}</span>
                {post?.midia && (
                  <div className="flex gap-3 items-center">
                    <span className="text-gray">resenhou</span>
                    <span className="text-wine">{post.midia}</span>
                  </div>
                )}
                <p className="text-gray text-xs">@{post.userName}</p>
              </div>
            </div>

            <details className="flex flex-col items-end relative">
              <summary className="list-none marker:hidden">
                <Icon></Icon>
              </summary>
              <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
                {post.authorId === user.id ? (
                  <button className="hover:text-wine" onClick={postDelete}>
                    Deletar
                  </button>
                ) : null}
              </div>
            </details>
          </div>

          <p className="text">{post.content}</p>

          {post?.img && (
            <Info>
              <img src={post.img}></img>
            </Info>
          )}

          {/* <img src={daenerys}></img> */}
        </section>

        <Lines></Lines>
        <div className="flex justify-between px-5 ">
          <div className="flex justify-between w-55  items-center">
            <div>
              <ButtonPost onClick={handleLike} disabled={liking}>
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
                {post.comments.length}
              </ButtonPost>
              {/* <p className="text-sm"></p> */}
            </div>
            <div>
              <ButtonPost>
                <Share></Share>
                Compartilhar
              </ButtonPost>
              <p className="text-sm">{""}</p>
            </div>
          </div>
          <button
            className="hover:text-yellow-600"
            onClick={Saves}
            to={"saves"}
          >
            <Save></Save>
          </button>
        </div>

        {postComment && <CommentsList post={post}></CommentsList>}
      </Div>
    </>
  );
}
