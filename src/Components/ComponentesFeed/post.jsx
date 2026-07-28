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
import { useContext, useState } from "react";
import AppContext from "../context";

const Save = save;
const Icon = configuration;

export function Post({ post }) {
  const { publication, setPublication } = useContext(AppContext);
  const [like, setLike] = useState(post.likes);

  const token = localStorage.getItem("token");

  const LikeButton = () => {
    fetch(`/api/posts/${post.id}/like`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        setLike(like + 1);
      }
    });
  };

  // mudar os nomes pq esta dando conflitokkkkkk
  const Saves = () => {
    fetch(`/api/posts/${post.id}/save`, {
      method: "POST",
    }).then((response) => response.json());
  };

  const postDelete = () => {
    fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        const newFeed = publication.filter((p) => p.id != post.id);
        return setPublication(newFeed);
      });
  };

  const [comments, setComments] = useState(false);
  const commentsOpenOrClose = () => {
    setComments(!comments);
  };

  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  const [comment, setComment] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(`/api/posts/${post.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Date.now().toString(),
          author: userObj.name,
          text: formData.get("comment"),
        }),
      });

      const data = await response.json();
      const allComments = [data, ...post.comments];
      return setComment(allComments);
    } catch (error) {
      return { success: false, error: error.message };
    }
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
              <ButtonPost onClick={commentsOpenOrClose}>
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
          <button
            className="hover:text-yellow-600"
            onClick={Saves}
            to={"saves"}
          >
            <Save></Save>
          </button>
        </div>

        {comments && (
          <>
            <Lines></Lines>
            <form onSubmit={addComment}>
              <textarea
                name="comment"
                className="w-full bg-amber-200 flex placeholder:items-center"
                placeholder="DIGITE UM COMENTÁRIO"
              ></textarea>
              <button>lançar</button>
            </form>
            <ul className=" fit-content py-3 flex flex-col gap-6">
              {comment.length == 0 ? (
                <div>Ainda não há comentários</div>
              ) : (
                comment.map((c, index) => {
                  return (
                    <li className="flex gap-2" key={index}>
                      <div className="flex flex-col items-start">
                        <PerfilIcon></PerfilIcon>
                      </div>
                      <div className="p-2 bg-background border border-border items-center  rounded-b-3xl rounded-tr-3xl">
                        <div className="flex gap-2">
                          <p>{c?.author}</p>
                          <p>@{c?.author}</p>
                        </div>
                        <p>{c?.text}</p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </>
        )}
      </Div>
    </>
  );
}
