import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useLocation } from "react-router";

export function ButtonFlow({
  profileId,
  userId,
  followBack,
  className,
  ...props
}) {
  const {
    followersPost,
    userUP,
    validationFollowers,
  } = useRequisicoes({});

  const location = useLocation();

  // fetchProfile/userUP no mount eram redundantes: o layout já carrega
  // esses dados globalmente (e agora com cache/dedup no useRequisicoes).

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

  return (
    <button
      onClick={validation}
      {...props}
      className={`${className} ${style} cursor-pointer transition duration-300 border border-gray py-1 px-2 rounded-full text-sm `}
    >
      {isFollowing
        ? "Deixar de seguir"
        : followBack
          ? "Seguir de volta"
          : "Seguir"}
    </button>
  );
}
