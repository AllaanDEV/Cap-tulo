
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
      className="w-200 bg-white h-100 m-auto"
      onCancel={() => toggleComments()}
      method="dialog"
    >
      <Form active={(e) => commentEdit(e, EDIT)}>
        {/* {console.log(EDIT)} */}
        <textarea name="content"></textarea>
        <img name="midia"></img>
        <p>TESTE</p>
        <button>AI CLOSE</button>
      </Form>
      <button onClick={toggleComments}>FECHSAT</button>
    </dialog>
  );
}
