import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";
import { CommentsList } from "./commentsList";
import { Post } from "./post";
import { UsersInfo } from "./usersInfo";
import { Lines } from "../ComponentsForm/lines";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { XSavedEbook } from "../svgCode";

export function DialogPostFocus({ post }) {
  const { postFocus, setPostFocus } = useContext(AppContext);
  const { user, nameIcon, photoValueFeed } = useRequisicoes({});
  const dialogFocus = useRef(null);

  useEffect(() => {
    if (postFocus) {
      dialogFocus?.current.showModal();
    } else {
      dialogFocus?.current.close();
    }
  }, [postFocus]);

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

  console.log("post",post.author)
  return (
    <dialog
      ref={dialogFocus}
      onCancel={() => setPostFocus((prev) => !prev)}
      className=" w-[60vw] h-[40vw] m-auto rounded-3xl bg-primary"
    >
      <section className="grid grid-cols-2 h-full">
        {post.type !== "" && (
          <div className="bg-background flex flex-col justify-center">
            <div className="w-fit rounded-lg aspect-[3/4]">
              <img
                src={post?.ebook?.ebook.volumeInfo.imageLinks?.thumbnail}
                alt={post?.ebook?.ebook.volumeInfo.title}
                className="rounded-lg h-20 w-20"
              ></img>
            </div>
          </div>
        )}

        <div className=" p-4 border-l border-border h-full w-full">
          <div className="flex flex-col items-start gap-5">
            <div className="flex justify-between w-full items-start">
              <UsersInfo post={post}></UsersInfo>
              <button
                onClick={() => setPostFocus((prev) => !prev)}
                className="cursor-pointer"
              >
                <XSavedEbook></XSavedEbook>
              </button>
            </div>

            <p
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text"
            />
            <Lines></Lines>
            <div className="flex gap-2 w-full">
              <PerfilIcon to={`/perfil/${user.id}`}>
                {photo?.midiaIcon ? (
                  <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
                ) : (
                  <p className="m-auto text-[1rem] font-medium font-serif text-white">
                    {nameIcon(user.name)}
                  </p>
                )}
              </PerfilIcon>
              <CommentsList post={post}></CommentsList>
            </div>
          </div>
        </div>
      </section>
    </dialog>
  );
}
