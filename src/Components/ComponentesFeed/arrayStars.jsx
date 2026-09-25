import { useContext } from "react";
import AppContext from "../context";

export function ArrayStars({ onClick, starsNumber, size}) {
  const { stars, starFilled } = useContext(AppContext);

  console.log("NOTA", starFilled)
  return (
    <div className="flex gap-1">
      {stars.map((Star, index) => {
        const Icon = Star.Star;
        return (
          <Icon
            size={size || Star.size}
            key={index}
            fill={starsNumber >= index || (starFilled >= index ? true : false)}
            onClick={() => onClick(index)}
          ></Icon>
        );
      })}
    </div>
  );
}
 