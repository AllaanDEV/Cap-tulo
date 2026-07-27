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

const Save = save;
const Icon = configuration;

export function Post({ post }) {
  const [like, setLike] = useState(post.likes);

  const token=   localStorage.getItem("token")

  const LikeButton = () => {
    fetch(`/api/posts/${post.id}/like`, {
      method: "POST",
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        setLike(like + 1);
      }
    });
  };

  const Saves = () => {
    fetch(`/api/posts/${post.id}/save`, {
      method: "POST",
    }).then((response) => response.json());
  };


  return (
    <>
      <Div>
        <section className="flex flex-col gap-2">
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 items-center">
              <PerfilIcon></PerfilIcon>
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

            <button>
              <Icon></Icon>
            </button>
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
              <ButtonPost>
                <Comment></Comment>
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
          <button className="hover:text-yellow-600" onClick={Saves} to={"saves"}>
            <Save></Save>
          </button>
        </div>
      </Div>
    </>
  );
}
