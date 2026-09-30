import { useContext, useEffect } from "react";
import { Trending } from "../svgCode";
import { Div } from "./div";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";
import { ContainerEbooks } from "../ComponentsPerfil/containerEbooks";
import { Star } from "../svgCode";

export function TrendingSideBar() {
  const { arrayFeedbacksEbooks } = useRequisicoes({});
  const { feedbacksArray, order} = useContext(AppContext);

  useEffect(() => {
    arrayFeedbacksEbooks();
  }, []);


  return (
    <Div>
      <div className="flex gap-2 items-center text-wine">
        <Trending></Trending>
        <p className=" font-fraunce text-xl">Em alta esta semana</p>
      </div>
      <ul>
        {(order || []).map((ebook, index) => {
          return (
            <li className="flex gap-2 items-center mt-2 w-full">
              <div className="flex gap-2 items-center">
                <span className="text-2xl font-extralight text-gray/70 w-4">
                  {index + 1}
                </span>
                <div className="w-fit rounded-lg aspect-[3/4]">
                  <img
                    src={
                      ebook.data.ebook.ebook.volumeInfo.imageLinks?.thumbnail
                    }
                    alt={ebook.data.ebook.ebook.volumeInfo.title}
                    className="rounded-lg h-20 w-20"
                  ></img>
                </div>
              </div>

              <div className={`flex flex-col gap-5  w-[100%]`}>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">
                    {ebook.data.ebook.ebook.volumeInfo.title}
                  </span>
                  {/* {ebook.data.ebook.ebook.volumeInfo.subtitle && (
                    <span className="text-xs text-black/70">
                      {ebook.data.ebook.ebook.volumeInfo.subtitle}
                    </span>
                  )} */}

                  <div className="flex gap-1 items-center">
                    <Star fill={true} size={13}></Star>
                    <span className="text-xs text-gray">
                      {ebook.average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}
