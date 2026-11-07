import { useContext } from "react";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { TimeAgo } from "./timeAgo";

export function UsersInfo({ post, users, following, className }) {
  const { user, nameIcon, photoValueFeed } = useRequisicoes({});

  const { followers, usersList, themeOn } = useContext(AppContext);

  const followingDataUser = usersList.find(
    (dataFollowing) => dataFollowing?.id === following?.following,
  );

  const profile = {
    id: post?.authorId || users?.id || followingDataUser?.id || user?.id,

    name: post?.author || users?.name || followingDataUser?.name || user?.name,

    userName:
      post?.userName ||
      users?.userName ||
      followingDataUser?.userName ||
      user?.userName,
  };

  const isFollowing = followers.some(
    (f) => f.userId === user?.id && f.following === profile.id,
  );

  const followsYou = followers.some(
    (f) => f.userId === profile.id && f.following === user?.id,
  );

  const photo = (photoValueFeed || []).find(
    (photo) => photo.userId == profile.id,
  );

  console.log("FOLLOWING", users)
  return (
    <div className={`flex gap-2 items-start justify-center ${className || ""}`}>
      <PerfilIcon to={`/perfil/${profile.id}`} state={{ profile }}>
        {photo?.midiaIcon ? (
          <ImgPerfil src={photo.midiaIcon} />
        ) : (
          <p className="m-auto text-[1rem] font-medium font-serif text-white">
            {nameIcon(profile.name)}
          </p>
        )}
      </PerfilIcon>

      <div className="flex flex-col">
        <div className="flex items-start gap-1 text-sm">
          <span className={`${themeOn ? "text-black" : "text-white"} text-sm`}>
            {profile.name}
          </span>

          {users?.id === user.id && (
            <span className="text-gray text-sm">·  Você</span>
          )}

          {post?.type === "resenha" && (
            <p className="text-gray">
              resenhou
              <span className="text-wine mx-1">
                {post?.postModified?.ebook?.ebook?.volumeInfo?.title}
              </span>
            </p>
          )}

          {post?.type === "feedback" && (
            <p className="text-gray">
              avaliou
              <span className="text-wine mx-1">
                {post?.postModified?.ebook?.ebook?.volumeInfo?.title}
              </span>
            </p>
          )}

          {post?.type === "citation" && (
            <p className="text-gray">
              fez uma citação
              <span className="text-wine mx-1">
                {post?.postModified?.ebook?.ebook?.volumeInfo?.title}
              </span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs">
          <p className="text-gray">@{profile.userName}</p>

          {profile.id !== user?.id &&
            (isFollowing ? (
              <span className="text-gray">· seguindo</span>
            ) : followsYou ? (
              <span className="text-gray">· segue você</span>
            ) : null)}

          {post?.createdAt && (
            <>
              <span className="text-gray">·</span>
              <TimeAgo date={post.createdAt} className="text-xs text-gray" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
