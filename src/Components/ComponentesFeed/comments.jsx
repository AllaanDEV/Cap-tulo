import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration } from "../svgCode";

import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useContext } from "react";
import AppContext from "../context";
const Icon = configuration;

export function CommentsList({ post }) {
  const { toggleComments, SETEDIT,setPostEdit} = useContext(AppContext);
  const { commentDelete, addComment } = useRequisicoes({
    // comment,
    post,
    // setComment,
  });

  const dataCommentForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const content = formData.get("comment");
    addComment(e, content);
  };

  return (
    <>
      <Lines></Lines>
      <form onSubmit={(e) => dataCommentForm(e)}>
        <textarea
          name="comment"
          className="w-full bg-amber-200 flex placeholder:items-center"
          placeholder="Dê a sua opnião!"
        ></textarea>
        <button>Comentar</button>
      </form>
      <ul className=" fit-content py-3 flex flex-col gap-6">
        {post.comments.length == 0 ? (
          <div>Ainda não há comentários</div>
        ) : (
          [...post.comments].reverse().map((c) => {
            return (
              <li className="flex gap-2" key={c.id}>
                <div className="flex flex-col items-start">
                  <PerfilIcon>
                    {(
                      c.author[0] + (c.author[1] ? c.author[1] : "")
                    ).toUpperCase()}
                  </PerfilIcon>
                </div>
                <div className="p-2 bg-background border border-border items-center  rounded-b-3xl rounded-tr-3xl">
                  <div className="flex gap-2">
                    <p>{c?.author}</p>
                    <p>@{c?.author}</p>
                  </div>
                  <p>{c?.text}</p>
                  <details className="flex flex-col items-end relative">
                    <summary className="list-none marker:hidden">
                      <Icon></Icon>
                    </summary>
                    <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
                      <button
                        className="hover:text-wine"
                        onClick={() => {
                          SETEDIT(c.id);
                          setPostEdit(post)
                          toggleComments();
                        }}
                      >
                        Editar
                      </button>
                      <button
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
