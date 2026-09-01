import { useContext, useEffect } from "react";

import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration } from "../svgCode";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Comments } from "./comments";

const Icon = configuration;

export function CommentsList({ post }) {
  const { toggleComments, SETEDIT, setPostEdit,   editValue,    postComment } =
    useContext(AppContext);

  const { commentDelete, addComment, photoValueFeed, fetchProfile, nameIcon } =
    useRequisicoes({ post });

  const dataCommentForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const content = formData.get("comment");

    addComment(e, content);
  };

  useEffect(() => {
    fetchProfile();
  }, [postComment, editValue]);

  return (
    <>
      <Lines />

      <form onSubmit={dataCommentForm}>
        <textarea
          name="comment"
          className="w-full bg-amber-200 flex placeholder:items-center"
          placeholder="Dê a sua opinião!"
        />

        <button type="submit">Comentar</button>
      </form>

      <ul className="fit-content py-3 flex flex-col gap-6">
        {post.comments.length === 0 ? (
          <div>Ainda não há comentários</div>
        ) : (
          [...post.comments].reverse().map((c) => {
            const photo = (photoValueFeed ?? []).find(
              (midia) => midia.userId === c.authorId,
            );

            return (
              <li className="flex gap-2" key={c.id ?? c.comenID ?? c.authorId}>
                <div className="flex flex-col items-start">
                  <PerfilIcon to={`/perfil/${c.authorId}`} state={post}>
                    {photo?.midiaIcon ? (
                      <ImgPerfil src={photo.midiaIcon} />
                    ) : (
                      <p className="m-auto text-[1rem] font-medium font-serif text-white">
                        {nameIcon(editValue.dataPerfil?.name)}
                      </p>
                    )}
                  </PerfilIcon>
                </div>

                <div className="p-2 bg-background border border-border items-center rounded-b-3xl rounded-tr-3xl">
                  <div className="flex gap-2">
                    <p>{c.author}</p>
                    <p>@{c.userName}</p>
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
                          SETEDIT(c.authorId);
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
    </>
  );
}
