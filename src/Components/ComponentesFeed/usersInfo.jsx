import { useContext, useEffect } from "react";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function UsersInfo({ post, users }) {
  const { user, nameIcon, fetchProfile, photoValueFeed } = useRequisicoes({});
  const { followers} = useContext(AppContext);

  const profile = {
    id: post?.authorId || users?.id,
    name: post?.author || users?.name,
    userName: post?.userName || users?.userName,
  };

  const seguindoProfileId = followers.find((f) => f.following === profile.id);

  const photo = (photoValueFeed || []).find(
    (photo) => photo.userId == profile.id,
  );

  useEffect(() => {
    fetchProfile();
  }, []);

console.log("--> RENDERIZOU! photoValueFeed:", photoValueFeed);
  console.log("--> PHOTO ENCONTRADA:", photo);
  console.log("--> TEM midiaIcon?", !!photo?.midiaIcon);


  return (
    <div className="flex gap-2 items-center justify-center">
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
        <div className="flex gap-1 text-sm">
          <span>{profile.name}</span>

          {seguindoProfileId?.userId == user?.id && (
            <span className="text-gray"> · seguindo</span>
          )}
        </div>

        {post?.midia && <div className="flex gap-3 items-center"></div>}

        <p className="text-gray text-xs">@{profile.userName}</p>
      </div>
    </div>
  );
}
