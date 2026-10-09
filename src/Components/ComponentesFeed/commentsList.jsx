import { useContext, useEffect, useRef, useState } from "react";

import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration, faceHappy, Send, Like } from "../svgCode";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { DialogImoji } from "./dialogEmoji";
import { ButtonPost } from "./buttonPost";
import { TimeAgo } from "./timeAgo";

const FaceHappy = faceHappy;
const Icon = configuration;

export function CommentsList({ post }) {
  const {
    toggleComments,
    SETEDIT,
    setPostEdit,
    editValue,
    postComment,
    setPublication,
    postFocus,
    setDialogEmoji,
    dialogEmoji,
    contentEmoji,
    setContentEmoji,
    postSaved,
    isLiked,
    handleLike,
    liking,
    like,
    setLike,
  } = useContext(AppContext);

  const [toggleDialogEmojisComment, setToggleDialogEmojisComment] =
    useState(false);

  const textareaRef = useRef(null);

  const {
    commentDelete,
    addComment,
    photoValueFeed,
    fetchProfile,
    nameIcon,
    user,
    Saves,
    LikeButton,
    LikesComment,
    isCommentLiked,
    getCommentLikesCount,
    getLikesComments,
  } = useRequisicoes({ post, like, setLike });

  const dataCommentForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const content = formData.get("comment");

    const updatedPost = await addComment(e, content, post);

    const validationPostSaved = postSaved.find((u) => u.post.id === post.id);

    if (validationPostSaved) {
      await Saves("update", updatedPost);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [postComment, editValue]);

  useEffect(() => {
    if (contentEmoji && textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const text = textarea.value;
      textarea.value =
        text.substring(0, start) + contentEmoji + text.substring(end);

      textarea.selectionStart = textarea.selectionEnd =
        start + contentEmoji.length;

      setContentEmoji("");
    }
  }, [contentEmoji, setContentEmoji]);

  const photoUser = (photoValueFeed ?? []).find(
    (midia) => midia.userId === user.id,
  );

  const [comment, setComment] = useState("");
  // const [itemsVisible, setItemsVisible] = useState(5);

  useEffect(() => {
    getLikesComments();
  }, []);
  return (
    <section className="flex flex-col w-full">
      {!postFocus && <Lines />}

      <div className="flex gap-1 pt-4">
        <PerfilIcon to={`/perfil/${user.id}`}>
          {photoUser?.midiaIcon ? (
            <ImgPerfil src={photoUser.midiaIcon} />
          ) : (
            <p className="m-auto text-[1rem] font-medium font-serif text-white">
              {nameIcon(user.name)}
            </p>
          )}
        </PerfilIcon>

        <div className="flex w-full bg-background rounded-2xl items-center gap-1 pr-2 border border-border">
          <form onSubmit={dataCommentForm} className="w-full flex items-center">
            <textarea
              ref={textareaRef}
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full flex placeholder:items-center px-5 outline-none bg-transparent resize-none placeholder:text-xs sm:placeholder:text-md"
              placeholder="Dê a sua opinião!"
            />

            <div className="relative">
              <button
                type="button"
                onClick={() => setToggleDialogEmojisComment((prev) => !prev)}
                className="hover:bg-gray/50 py-2 px-3 sm:p-3 rounded-xl group transition-colors flex gap-2 items-center w-fit"
              >
                <FaceHappy />
              </button>

              {toggleDialogEmojisComment && (
                <div className="absolute top-full right-0 z-50 mt-2 h-80 bg-white overflow-y-auto  border border-border rounded-lg shadow-lg scrollbar-thin scrollbar-thumb-wine/80">
                  <DialogImoji
                    toggleDialogEmojisComment={toggleDialogEmojisComment}
                    setToggleDialogEmojisComment={setToggleDialogEmojisComment}
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`hover:bg-gray/50 p-3 rounded-xl ml-1 ${
                !comment.trim() ? "text-black/30 cursor-not-allowed" : ""
              }`}
            >
              <Send />
            </button>
          </form>
        </div>
      </div>

      <ul className="fit-content py-3 flex flex-col gap-6 w-full">
        {(post?.comments ?? []).length === 0 ? (
          <div>Ainda não há comentários</div>
        ) : (
          [...(post?.comments ?? [])].reverse().map((c, index) => {
            const photo = (photoValueFeed ?? []).find(
              (midia) => midia.userId === c.authorId,
            );

            const liked = isCommentLiked(c.id, user?.id);
            const likesCount = getCommentLikesCount(c.id);

            return (
              <li
                className="flex gap-2 flex-col w-full animate-[commentCascade_300ms_ease-out_both]"
                key={c.id}
                style={{
                  animationDelay: `${150 + index * 60}ms`,
                }}
              >

                <div className="flex gap-2 relative w-full">
                  <div>
                    <div className="flex flex-col items-start">
                      <PerfilIcon to={`/perfil/${c.authorId}`} state={post}>
                        {photo?.midiaIcon ? (
                          <ImgPerfil src={photo?.midiaIcon} />
                        ) : (
                          <p className="m-auto text-[1rem] font-medium font-serif text-white">
                            {nameIcon(editValue.dataPerfil?.name || c.author)}
                          </p>
                        )}
                      </PerfilIcon>
                    </div>
                  </div>

                  <div className="pl-4 pr-2 pb-5 pt-1 bg-background border border-border items-center rounded-b-3xl rounded-tr-3xl">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <h3>{c.author}</h3>
                        <span className="text-gray text-xs">@{c.userName}</span>
                      </div>

                      <details className="flex flex-col">
                        <summary className="list-none marker:hidden">
                          <Icon />
                        </summary>

                        <div className="bg-bermuda absolute px-2 rounded-sm flex flex-col">
                          <button
                            type="button"
                            className="hover:text-wine"
                            onClick={() => {
                              SETEDIT(c.id);
                              setPostEdit(post);
                              toggleComments();
                            }}
                          >
                            Editar
                          </button>

                          <button
                            type="button"
                            className="hover:text-wine"
                            onClick={() => {
                              commentDelete(c);
                            }}
                          >
                            Excluir
                          </button>
                        </div>
                      </details>
                    </div>

                    <p className="pr-20">{c.text}</p>
                  </div>
                  <span className="absolute bottom-[-20px] left-15 text-gray text-xs flex">
                    <ButtonPost
                      onClick={() =>
                        handleLike(`comment-${c.id}`, () =>
                          LikesComment(c.id, post.id),
                        )
                      }
                      disabled={liking.includes(`comment-${c.id}`)}
                    >
                      <span className="mr-1">
                        <TimeAgo date={c.createdAt} />
                      </span>

                      <Like
                        filled={liked}
                        fill={liked ? "currentColor" : "none"}
                        className={liked ? "text-red-500" : ""}
                      />

                      <p className="text-sm">{likesCount}</p>
                    </ButtonPost>
                  </span>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
}
