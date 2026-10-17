import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";
import { Form } from "../ComponentsForm/form";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function Dialog() {
  const { openOrCloseDialog, dialog, publication, setPublication, setSearch } =
    useContext(AppContext);

  const { user, newPostSimple } = useRequisicoes({});

  const dialogRef = useRef(null);
  const midiaRef = useRef(null);

  useEffect(() => {
    if (dialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [dialog]);

  const newPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (formData.get("content") == "") {
      return;
    }

    newPostSimple({
      content: formData.get("content"),
      midia: formData.get("midia"),
      author: user.name,
      userName: user.userName,
    }).then((data) => {
      // localStorage.setItem("newPost", JSON.stringify(data));
      const posts = [data, ...publication];
      setSearch(posts);

      e.target.reset();

      return setPublication(posts);
    });
  };

  return (
    <dialog
      ref={dialogRef}
      className="w-200 bg-white h-100 m-auto"
      onCancel={openOrCloseDialog}
    >
      <Form active={newPost}>
        <textarea name="content"></textarea>

        <img name="midia" ref={midiaRef}></img>
        <p>TESTE</p>
        <button onClick={openOrCloseDialog}>AI CLOSE</button>
      </Form>
      <button onClick={openOrCloseDialog}>vasco</button>
    </dialog>
  );
}
