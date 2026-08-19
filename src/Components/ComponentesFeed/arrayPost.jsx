import { useContext, useEffect } from "react";
import { Post } from "./post";
import AppContext from "../context";

// const post = [
//   {
//     name: "bola",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam nostrum ratione aspernatur provident consequatur quod, eius eligendi, iure et sunt inventore libero ex modi eos. Deleniti quibusdam assumenda corporis",
//     img: "https://observatoriodocinema.com.br/wp-content/uploads/2019/06/header-got-1068x580.jpg",
//     user: "Vasco",
//     midia: "Narcos",
//     likes: 322,
//     id: 11
//   },
//   // {
//   //   name: "bola",
//   //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam nostrum ratione aspernatur provident consequatur quod, eius eligendi, iure et sunt inventore libero ex modi eos. Deleniti quibusdam assumenda corporis",
//   //   img: "https://www.epicdope.com/wp-content/uploads/2022/08/Dragons-1.jpg",
//   //   user: "Vasco",
//   //   midia: "Narcos",
//   // },
//   // {
//   //   name: "bola",
//   //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam nostrum ratione aspernatur provident consequatur quod, eius eligendi, iure et sunt inventore libero ex modi eos. Deleniti quibusdam assumenda corporis",
//   //   img: "https://cdn.midiamax.com.br/wp-content/uploads/2021/12/sansa-stark.jpg.webp",
//   //   user: "Vasco",
//   //   midia: "Narcos",
//   // },
//   // {
//   //   name: "bola",
//   //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam nostrum ratione aspernatur provident consequatur quod, eius eligendi, iure et sunt inventore libero ex modi eos. Deleniti quibusdam assumenda corporis",
//   //   img: "https://www.google.com/imgres?q=GOT&imgurl=https%3A%2F%2Fs2.glbimg.com%2FeobijtD73Q1l308vKYHdEgaK9no%3D%2F640x424%2Fi.glbimg.com%2Fog%2Fig%2Finfoglobo%2Ff%2Foriginal%2F2019%2F03%2F28%2Fmv5bmji5odkzndqynf5bml5banbnxkftztgwndq5mjyznzm._v1_.jpg&imgrefurl=https%3A%2F%2Fkogut.oglobo.globo.com%2Fnoticias-da-tv%2Fseries%2Fnoticia%2F2019%2F03%2Fhbo-anuncia-documentario-sobre-temporada-final-de-game-thrones.html&docid=Kk102niM5YbCnM&tbnid=CqdvThRRTPs8QM&vet=12ahUKEwjJr6PCxueVAxUWpZUCHYigO9gQnPAOegUI1QEQAA..i&w=640&h=424&hcb=2&ved=2ahUKEwjJr6PCxueVAxUWpZUCHYigO9gQnPAOegUI1QEQAA",
//   //   user: "Vasco",
//   //   midia: "Narcos",
//   // },
//   // {
//   //   name: "bola",
//   //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam nostrum ratione aspernatur provident consequatur quod, eius eligendi, iure et sunt inventore libero ex modi eos. Deleniti quibusdam assumenda corporis",
//   //   img: "https://www.google.com/imgres?q=GOT&imgurl=https%3A%2F%2Fs2.glbimg.com%2FeobijtD73Q1l308vKYHdEgaK9no%3D%2F640x424%2Fi.glbimg.com%2Fog%2Fig%2Finfoglobo%2Ff%2Foriginal%2F2019%2F03%2F28%2Fmv5bmji5odkzndqynf5bml5banbnxkftztgwndq5mjyznzm._v1_.jpg&imgrefurl=https%3A%2F%2Fkogut.oglobo.globo.com%2Fnoticias-da-tv%2Fseries%2Fnoticia%2F2019%2F03%2Fhbo-anuncia-documentario-sobre-temporada-final-de-game-thrones.html&docid=Kk102niM5YbCnM&tbnid=CqdvThRRTPs8QM&vet=12ahUKEwjJr6PCxueVAxUWpZUCHYigO9gQnPAOegUI1QEQAA..i&w=640&h=424&hcb=2&ved=2ahUKEwjJr6PCxueVAxUWpZUCHYigO9gQnPAOegUI1QEQAA",
//   //   user: "Vasco",
//   //   midia: "Narcos",
//   // },
// ];

export function ArrayPost() {
 const {publication, setPublication, search}= useContext(AppContext)

 const o = publication.map((p) => p.author === "t")
 console.log(o)

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPublication(data));
      // os dados dps da promessa
  }, []);

  return (
    <ul className="flex flex-col gap-5">
      {(!search ? publication : search).map((p) => {
  
        return (
          <li key={p.id}>
            <Post post={p}></Post>
          </li>
        );
      })}
    </ul>
  );
}
