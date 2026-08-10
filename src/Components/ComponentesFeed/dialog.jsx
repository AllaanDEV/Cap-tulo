import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";
import { Form } from "../ComponentsForm/form";

export function Dialog() {
  const user = localStorage.getItem("user");

  const userObj = user ? JSON.parse(user) : "anonimo";

  const { openOrCloseDialog, dialog, publication, setPublication, setSearch } =
    useContext(AppContext);

  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialog) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [dialog]);

  const newPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (formData.get("content") == "") {
      return;
    }

    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: formData.get("content"),
        midia: formData.get("midia"),
        author: userObj.name,
        likes: 0,
        comments: [],
      }),
    }).then((res) =>
      res.json().then((data) => {
  
        const posts = [data, ...publication];
        setSearch(posts);
        return setPublication(posts);
      }),
    );
  };
  return (
    <dialog ref={dialogRef} className="w-200 bg-white h-100 m-auto">
      <Form active={newPost}>
        <textarea name="content"></textarea>
        <img name="midia"></img>
        <p>TESTE</p>
        <button onClick={openOrCloseDialog}>AI CLOSE</button>
      </Form>
      <button onClick={openOrCloseDialog}>vasco</button>
    </dialog>
  );
}
