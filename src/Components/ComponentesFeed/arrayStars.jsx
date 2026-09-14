import { useContext } from "react";
import AppContext from "../context";

export function ArrayStars({ onClick, starsEbook }) {
  const { stars, starFilled } = useContext(AppContext);
  return (
    <div className="flex">
      {stars.map((Star, index) => {
        const Icon = Star.Star;
        return (
          <Icon
            size={Star.size}
            key={index}
            fill={starsEbook || (starFilled >= index ? true : false)}
            onClick={() => onClick(index)}
          ></Icon>
        );
      })}
    </div>
  );
}
