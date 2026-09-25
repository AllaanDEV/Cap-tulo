import { useCallback, useContext } from "react";
import { Div } from "../ComponentesFeed/div";
import { Info } from "../ComponentesFeed/info";
import { Circle } from "../svgCode";
import AppContext from "../context";

export function ReadingPace() {
  const { ebookSaved } = useContext(AppContext);
  return (
    <Div className="flex items-start">
      <div className="flex gap-1 items-center">
        <div className="text-wine">
          <Circle></Circle>
        </div>
        <span className="font-fraunce text-xl ">Ritmo de Leitura</span>
      </div>


      <Info className="flex flex-col p-5 rounded-2xl">
      <label>
        <span>Que tal fazer uma meta de leitura?</span>
        <input type="text" className="w-10 bg-gray" placeholder="20..."></input>
      </label>

        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex items-start">
              <p className="text-2xl font-fraunce">
                {ebookSaved?.length}

                <span className="text-gray text-lg">de 45</span>
              </p>
            </div>
            <span className="text-wine">%</span>
          </div>

          <div className="w-full rounded-2xl bg-gray/30">
            <div
              className="w-full py-1 bg-wine rounded-2xl"
              style={
                {
                  //   width: `${book?.progress === 100 ? "100" : book?.progress}%`,
                  //   backgroundColor: `${book?.progress === 100 ? "green" : progress < 100 ? "var(--color-wine: #722F37)" : null}`,
                }
              }
            ></div>
          </div>
        </div>
      </Info>
    </Div>
  );
}
