import { useContext, useEffect } from "react";

import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration } from "../svgCode";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

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
  } = useContext(AppContext);

  const {
    commentDelete,
    addComment,
    photoValueFeed,
    fetchProfile,
    nameIcon,
    user,
  } = useRequisicoes({ post });

  const dataCommentForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const content = formData.get("comment");

    addComment(e, content);
  };

  useEffect(() => {
    fetchProfile();
  }, [postComment, editValue]);

  const photoUser = (photoValueFeed ?? []).find(
    (midia) => midia.userId === user.id,
  );

  return (
    <div className="flex flex-col w-full">
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

        <form onSubmit={dataCommentForm} className="w-full">
          <textarea
            name="comment"
            className="w-full bg-background rounded-2xl flex placeholder:items-center border border-border px-5"
            placeholder="Dê a sua opinião!"
          />
          <button type="submit">Comentar</button>
        </form>
      </div>

      <ul className="fit-content py-3 flex flex-col gap-6 w-full">
        {(post?.comments ?? []).length === 0 ? (
          <div>Ainda não há comentários</div>
        ) : (
          [...(post?.comments ?? [])].reverse().map((c) => {
            const photo = (photoValueFeed ?? []).find(
              (midia) => midia.userId === c.authorId,
            );

            return (
              <li className="flex gap-2" key={c.id}>
                <div className="flex flex-col items-start">
                  <PerfilIcon to={`/perfil/${c.authorId}`} state={post}>
                    {photo?.midiaIcon ? (
                      <ImgPerfil src={photo.midiaIcon} />
                    ) : (
                      <p className="m-auto text-[1rem] font-medium font-serif text-white">
                        {nameIcon(editValue.dataPerfil?.name || c.author)}
                      </p>
                    )}
                  </PerfilIcon>
                </div>

                <div className="p-2 bg-background border border-border items-center rounded-b-3xl rounded-tr-3xl">
                  <div className="flex gap-2">
                    <h3>{c.author}</h3>
                    <span>@{c.userName}</span>
                  </div>

                  <p>{c.text}</p>

                  <details className="flex flex-col items-end relative">
                    <summary className="list-none marker:hidden">
                      <Icon />
                    </summary>

                    <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
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
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
