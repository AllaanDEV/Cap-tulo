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
      ? allFollowers(true)
      : followersPost(profileId);
  };

  return (
    <button
      onClick={() => validation()}
      {...props}
      className={`${className} ${validationFollowers ? "bg-transparent  text-gray disabled:hover:bg-wine" : "bg-wine text-white"}   cursor-pointer transition duration-300`}
    >
      {validationFollowers ? "Deixar de seguir" : "Seguir"}
    </button>
  );
}
