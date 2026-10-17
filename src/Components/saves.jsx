import { useEffect, useState } from "react";
import { Post } from "./ComponentesFeed/post";
import { useRequisicoes } from "./context/hooks/useRequisicoes";

export function Saves() {
  const [save, setSave] = useState([]);

  const { getPostsSavedPage } = useRequisicoes({});

  useEffect(() => {
    getPostsSavedPage()
      .then((data) => setSave(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>
    {save.map((p, index)=>{
        return(
            <Post key={index} post={p}></Post>
        )
    })}
  </div>;
}
