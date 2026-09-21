import { Div } from "./div";
import { Group, Search } from "../svgCode";
import { useEffect, useState } from "react";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Lines } from "../ComponentsForm/lines";

export function SearchUsersSidebar() {
  const [usersList, setUsersList] = useState([]);
  const { nameIcon, photoValueFeed, user } = useRequisicoes({});

  useEffect(() => {
    const userUP = async () => {
      const response = await fetch(`http://localhost:3000/updateUser`);
      const data = await response.json();
      setUsersList(data);
    };

    userUP();
  }, []);

  return (
    <Div>
      <section>
        <div className="flex items-center gap-2 text-wine">
          <Group></Group>
          <p className="text-xl font-fraunce">Leitores para seguir</p>
        </div>
        <label className="flex w-full border border-wine/50 outline-wine hover:outline rounded-full my-1">
          <div className="relative top-2.5 left-2">
            <Search></Search>
          </div>
          <input className=" w-full h-full py-2 px-3 outline-none"></input>
        </label>

        <ul className="mt-2">
          {(usersList || []).map((users) => {
            const photo = (photoValueFeed ? photoValueFeed : []).find(
              (photo) => photo.userId == user.id || photo.userId == users.id,
            );

            return (
              <li className="flex justify-between items-center ">
                <div className="flex gap-2 items-center w-full">
                  <PerfilIcon to={`/perfil/${users.id}`}>
                    {photo?.midiaIcon ? (
                      <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
                    ) : (
                      <p className="m-auto text-[1rem] font-medium font-serif text-white">
                        {nameIcon(users.name)}
                      </p>
                    )}
                  </PerfilIcon>

                  <div className="flex flex-col">
                    <span>{users.name}</span>
                    <span className="text-xs text-gray">@{users.userName}</span>
                  </div>
                </div>

                <button className="px-2 py-1 border border-wine rounded-2xl text-wine text-sm hover:bg-wine hover:text-white hover:cursor-pointer">
                  Seguir
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </Div>
  );
}
