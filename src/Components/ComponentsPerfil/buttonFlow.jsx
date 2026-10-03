import { useContext, useEffect } from "react";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";
import { useLocation, useParams } from "react-router";

export function ButtonFlow({
  profileId,
  userId,
followBack, 
  className,
  listFollowersPerfil,
  ...props
}) {
  const {
    followersPost,
    fetchProfile,
    userUP,
    validationFollowers,
    validationFollowing,
    user,
  } = useRequisicoes({});

  const location = useLocation();

  useEffect(() => {
    fetchProfile();
    userUP();
  }, []);

  const validation = () => {
    if (location.pathname.startsWith("/feed")) {
      userUP(userId);
    } else {
      followersPost(profileId || userId);
    }
  };

  const isFollowing = validationFollowers(userId || profileId);

  const style = isFollowing
    ? "bg-transparent text-gray disabled:hover:bg-wine"
    : "bg-wine text-white";

  // const isfollower = validationFollowing(profileId || userId);

  return (
    <button
      onClick={validation}
      {...props}
      className={`${className} ${style} cursor-pointer transition duration-300 border border-gray py-1 px-2 rounded-full`}
    >
      {isFollowing
        ? "Deixar de seguir"
        : 
followBack
          ? "Seguir de volta"
          : "Seguir"}
    </button>
  );
}
