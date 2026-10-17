
import { useContext } from "react";
import { Form } from "../ComponentsForm/form";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";

export function DialogComments() {
const {dialogRef,  EDIT, toggleComments, postEdit}= useContext(AppContext)
  
  const { commentEdit} = useRequisicoes({post: postEdit});

  return (
    <dialog
      ref={dialogRef}
      className="w-[90vw] max-w-lg bg-primary rounded-xl shadow-lg m-auto p-0 text-white"
      onCancel={() => toggleComments()}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
        <h2 className="font-medium">Editar comentário</h2>
        <button
          type="button"
          className="text-gray hover:text-white transition"
          onClick={toggleComments}
        >
          Fechar
        </button>
      </div>

      <Form active={(e) => commentEdit(e, EDIT)} className="p-5 flex flex-col gap-4">
        <textarea
          name="content"
          className="w-full min-h-32 bg-white/10 text-white rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-wine/50 placeholder:text-gray/60 break-words"
          placeholder="Edite seu comentário..."
        ></textarea>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={toggleComments}
            className="px-4 py-2 rounded-lg text-gray hover:bg-white/10 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-wine text-white hover:bg-wine/80 transition"
          >
            Salvar
          </button>
        </div>
      </Form>
    </dialog>
  );
}
