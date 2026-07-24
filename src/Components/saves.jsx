import { useEffect, useState } from "react";
import { Post } from "./ComponentesFeed/post";

export function Saves() {
  const [save, setSave] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts/saved")
      .then((reponse) => reponse.json)
      .then((data) => setSave(data));
  }, []);

  return <div>
    {save.map((p, index)=>{
        return(
            <Post key={index} post={p}></Post>
        )
    })}
  </div>;
}
