import { useContext, useEffect, useRef, useState } from "react";
import { Post } from "./post";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Link } from "react-router";
import { Group } from "../svgCode";

export function ArrayPost() {
  const { publication, search, followerPost, searchValue, postSaved } =
    useContext(AppContext);

  const hasAnimatedInitialPosts = useRef(false);
  const { postFollowers, user } = useRequisicoes({});

  const [on, setOn] = useState(false);

  const arraySaved = followerPost === "saved" && [...postSaved].reverse();

  const postsToRender = searchValue
    ? search
    : followerPost === "followers"
      ? postFollowers
      : followerPost === "saved"
        ? arraySaved
        : publication;

  useEffect(() => {
    if (followerPost === "saved") {
      setOn(false);
      const timer = setTimeout(() => {
        setOn(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [followerPost]);

  if (postsToRender.length > 0) {
    hasAnimatedInitialPosts.current = true;
  }

  return (
    <ul className="flex flex-col gap-5 sm:mb-0">
      {postsToRender.length > 0 ? (
        postsToRender.map((p) => (
          <>
            <li
              key={p.id}
              className="animate-[appear_500ms_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <Post post={p.post || p} />
            </li>
          </>
        ))
      ) : !followerPost ? (
        <span className="text-sm mx-auto text-wine">
          {searchValue} está em falta
        </span>
      ) : followerPost !== "saved" ? (
        <div className="mx-auto items-center flex flex-col sm:flex-row text-center gap-1 text-sm">
          <span className="text-wine">Siga outros leitores!</span>

          <Link className="flex gap-1 items-center text-start w-40  bg-wine/80 hover:bg-wine cursor-pointer rounded-md px-4 py-2 transition duration-400 xl:hidden">
            <Group></Group>
            Buscar
          </Link>
        </div>
      ) : (
        <div className="mx-auto flex flex-col  text-center items-center transition-all duration-400 ">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBxeWJrY2dkaDVwNTM2NG91a2lja2gzOWl4eWVrc3Uwd240NGowOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qF5kNHJdptVXJJKe6h/giphy.gif"
            className="w-[40vw] sm:w-[20vw] h-auto"
          ></img>

          <span className="text-wine">Procurando... 😼😼</span>
          {on && (
            <span className="text-xs text-wine animate-pulse duration-500 ">
              {"(salve publicações)"}
            </span>
          )}
        </div>
      )}

      {followerPost !== "saved" &&
        followerPost !== "followers" &&
        !searchValue && (
          <span className="text-xs text-wine mx-auto sm:mb-20">
            {user.name}, acho que você leu demais 🫣
          </span>
        )}
    </ul>
  );
}
