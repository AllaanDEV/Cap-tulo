import { useContext, useEffect } from "react";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { TimeAgo } from "./timeAgo";

export function UsersInfo({ post, users, following, followerUserId }) {
  const { user, nameIcon, fetchProfile, photoValueFeed } = useRequisicoes({});
  const { followers, usersList } = useContext(AppContext);

  useEffect(() => {
    fetchProfile();
    // userUP();
  }, []);

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

  const seguindoProfileId = [...followers]
    .reverse()
    .find((f) => f.following === profile.id);

  const photo = (photoValueFeed || []).find(
    (photo) => photo.userId == profile.id,
  );

  // const myS = followers.filter((u) => u.userId === user.id);

  // const seguindo = publication.filter((f) => {
  //   return myS.some((u) => u.following === f.authorId);
  // });

  return (
    <div className="flex gap-2 items-start justify-center">
      <PerfilIcon to={`/perfil/${profile?.id}`} state={{ profile }}>
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
          <span>{profile.name}</span>

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

          {seguindoProfileId?.userId == user?.id ? (
            <span className="text-gray"> · seguindo</span>
          ) : (
            followerUserId && <span className="text-gray"> · segue você</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <p className="text-gray text-xs">@{profile.userName}</p>
          {post?.createdAt && (
            <>
              <span className="text-gray"> · </span>
              <TimeAgo
                date={post.createdAt}
                className="text-xs text-gray ml-1"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
