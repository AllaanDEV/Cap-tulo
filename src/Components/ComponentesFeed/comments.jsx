import { useContext, useEffect } from "react";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { Icon } from "../ComponentsPerfil/icon";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

export function Comments({ comment }) {
  const { toggleComments, SETEDIT, editValue } =
    useContext(AppContext);

  const { commentDelete, photoValueFeed, fetchProfile, nameIcon } =
    useRequisicoes({
    });

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == comment.authorId,
  );

  useEffect(() => {
    fetchProfile();
  }, [editValue]);


  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-start">
        <PerfilIcon to={`/perfil/${comment.authorId}`}>
          {photo?.midiaIcon && photo.authorId === comment.authorId ? (
            <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
          ) : (
            <p className="m-auto text-[1rem] font-medium font-serif text-white">
              {nameIcon(comment.author)}
            </p>
          )}
        </PerfilIcon>
      </div>

      <div className="p-2 bg-background border border-border items-center rounded-b-3xl rounded-tr-3xl">
        <div className="flex gap-2">
          <p>{comment?.author}</p>
          <p>@{comment?.userName}</p>
        </div>
        <p>{comment?.text}</p>
        <details className="flex flex-col items-end relative">
          <summary className="list-none marker:hidden">
            <Icon></Icon>
          </summary>
          <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
            <button
              className="hover:text-wine"
              onClick={() => {
                SETEDIT(comment.authorId);
                toggleComments();
              }}
            >
              Editar
            </button>
            <button
              className="hover:text-wine"
              onClick={() => {
                commentDelete(comment);
              }}
            >
              Excluir
            </button>
          </div>
        </details>
      </div>
    </div>
  );
}
