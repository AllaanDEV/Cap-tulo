import { Div } from "./div";
import { Group, Search } from "../svgCode";
import { useContext, useEffect, useState } from "react";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Lines } from "../ComponentsForm/lines";
import { useParams } from "react-router";
import { UsersInfo } from "./usersInfo";
import { ButtonFlow } from "../ComponentsPerfil/buttonFlow";
import AppContext from "../context";

export function SearchUsersSidebar() {
  const { usersList, setUsersList, filterUsers, setFilterUsers } =
    useContext(AppContext);
  const { nameIcon, photoValueFeed, user, fetchProfile, userUP } =
    useRequisicoes({});

  const { id: paramsId } = useParams();

  useEffect(() => {
    fetchProfile();
    userUP();
  }, []);

  const alphabeticalOrder = [...usersList].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const handleFilterUsers = (e) => {
    const searchValue = String(e.target.value ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    if (!searchValue) {
      setFilterUsers(alphabeticalOrder);
      return;
    }

    const filteredUsers = alphabeticalOrder.filter((filteredUser) => {
      const padrao = (text) =>
        String(text ?? "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim();

      return (
        padrao(filteredUser.name).includes(searchValue) ||
        padrao(filteredUser.userName).includes(searchValue)
      );
    });

    setFilterUsers(filteredUsers);
  };

  const usersVisible = filterUsers.filter(
    (users) => users.id !== user.id && users.id !== paramsId,
  ).slice(0, 5);

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
          <input
            className="w-full h-full py-2 px-3 outline-none"
            onInput={handleFilterUsers}
          />
        </label>
        {usersVisible.length > 0 ? (
          <ul className="mt-2 flex flex-col gap-2">
            {usersVisible.map((users) => {
              return (
                <li
                  className="flex justify-between items-center"
                  key={users.id}
                >
                  <UsersInfo users={users}></UsersInfo>
                  <ButtonFlow
                    users={users.id}
                    className="text-sm "
                  ></ButtonFlow>
                </li>
              );
            })}
          </ul>
        ) : (
          <span className="text-black/80 flex justify-center items-center">
            Cri cri cri... 🦗🦗
          </span>
        )}
      </section>
    </Div>
  );
}
