import { useContext, useEffect } from "react";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";
import { useLocation, useParams } from "react-router";

export function ButtonFlow({ profileId, users, className, ...props }) {
  const { followersPost, user, fetchProfile, userUP, allFollowers } =
    useRequisicoes({});
  const { followers } = useContext(AppContext);
  const location = useLocation();

  const validationFollowers = followers.find(
    (follower) => follower.userId === user.id,
  );

  useEffect(() => {
    fetchProfile();
    userUP();
  }, []);

  const validation = () => {
    location.pathname.startsWith("/feed")
      ? userUP(users)
      : followersPost(profileId);
  };

  const style = validationFollowers
    ? "bg-transparent  text-gray disabled:hover:bg-wine"
    : "bg-wine text-white";

  return (
    <button
      onClick={() => validation()}
      {...props}
      className={`${className} ${style} cursor-pointer transition duration-300 border border-gray  py-1 px-2 rounded-full`}
    >
      {validationFollowers ? "Deixar de seguir" : "Seguir"}
    </button>
  );
}
