// import { Container } from "./container";
import { Div } from "./div";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration, Like } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { Share } from "../svgCode";
import { Comment } from "../svgCode";
// import { Like } from "../svgCode";
import { save } from "../svgCode";
// import daenerys from "../../assets/dragoes-daenerys.webp";
import { Info } from "./info";
import { ButtonPost } from "./buttonPost";
import { useState } from "react";
// import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { CommentsList } from "./comments";


const Save = save;
const Icon = configuration;

export function Post({ post }) {

  console.log(
  "POST RENDER:",
  post.id,
  post.comments
);

  // const [comment, setComment] = useState(post.comments || []);

  const [like, setLike] = useState(post.likes);

  const {
    postDelete,
    LikeButton,
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

  const [postComment, setPostComment] = useState(!post);

  const openComments = () => {
    setPostComment(!postComment);
  };

  return (
    <>
      <Div>
        <section className="flex flex-col gap-2">
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 items-center">
              <PerfilIcon>
                {(
                  post.author[0] + (post.author[1] ? post.author[1] : "")
                ).toUpperCase()}
              </PerfilIcon>
              <p>
                {post.author}
                {post?.midia && (
                  <div className="flex gap-3 items-center">
                    <span className="text-gray">resenhou</span>
                    <span className="text-wine">{post.midia}</span>
                  </div>
                )}
                <p className="text-gray text-xs">@{post.author}</p>
              </p>
            </div>

            <details className="flex flex-col items-end relative">
              <summary className="list-none marker:hidden">
                <Icon></Icon>
              </summary>
              <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
                <button className="hover:text-wine" onClick={postDelete}>
                  Deletar
                </button>
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
          <div className="flex justify-between w-50">
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
              </ButtonPost>
              <p className="text-sm">{}</p>
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

        {postComment && <CommentsList  post={post} ></CommentsList>}

        {/* <dialog
          ref={dialogRef}
          className="w-200 bg-white h-100 m-auto"
          onCancel={() => toggleComments(2)}
          method="dialog"
        >
          <Form active={(e) => commentEdit(e, EDIT)}>
            {console.log(EDIT)}
            <textarea name="content"></textarea>
            <img name="midia"></img>
            <p>TESTE</p>
            <button>AI CLOSE</button>
          </Form>
        </dialog> */}
      </Div>
    </>
  );
}
