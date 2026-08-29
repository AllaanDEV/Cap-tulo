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
import { useEffect, useState } from "react";

const Save = save;
const Icon = configuration;

export function Post({ post }) {
  const [like, setLike] = useState(post.likes);
  const [postComment, setPostComment] = useState(!post);

  const {
    postDelete,
    LikeButton,
    nameIcon,
    user,
    photoValueFeed,
    fetchProfile,
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
  }, []);

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == post.authorId,
  );

  console.log("id da foto", photo?.userId);
  console.log("id de quem tirou a foto", user.id);
  return (
    <>
      <Div>
        <section className="flex flex-col gap-2">
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 items-center text-center justify-center">
              <PerfilIcon to={`/perfil/${post.authorId}`}>
                {photo?.userId == post?.authorId ? (
        
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
                <p className="text-gray text-xs">@{post.author}</p>
              </div>
            </div>

            <details className="flex flex-col items-end relative">
              <summary className="list-none marker:hidden">
                <Icon></Icon>
              </summary>
              <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
                {post.author === user.name ? (
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
              <ButtonPost onClick={LikeButton}>
                <Like></Like>
                <p className="text-sm">{like}</p>
              </ButtonPost>
            </div>
            <div>
              <ButtonPost onClick={openComments}>
                <Comment></Comment>
                {post.comments.length}
              </ButtonPost>
              <p className="text-sm">{}</p>
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
