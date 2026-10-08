import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";
import { UsersInfo } from "./usersInfo";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Info } from "./info";
import { XSavedEbook, Trending, Group, Circle, logout } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { Link, useNavigate } from "react-router";
import { Progress } from "../ComponentsPerfil/progress";
import { ContainerGoal } from "./containerGoal";

const Logout = logout;

export function DialogOptionsMobile() {
  const navigate = useNavigate();
  const optionsRef = useRef(null);
  const {
    optionsDialog,
    setOptionsDialog,
    toggleDialog,
    goal,
    ebookSaved,
    progressAllEbooks,
  } = useContext(AppContext);
  const { user, logout } = useRequisicoes({});

  useEffect(() => {
    if (optionsDialog) {
      optionsRef?.current.showModal();
    } else {
      optionsRef?.current.close();
    }
  }, [optionsDialog]);

  const options = [
    { Icon: Trending, name: "Em alta" },
    { Icon: Group, name: "Buscar" },
    // { Icon: Circle, name: "Meta de leitura" },
  ];

  const validationPage = (index) => {
    setOptionsDialog(false);
    if (index === 0) {
      navigate("/EmAlta");
    } else if (index === 1) {
      navigate("/SearchUsers");
    }
  };

  return (
    <dialog
      ref={optionsRef}
      onClick={toggleDialog}
      onCancel={() => setOptionsDialog(false)}
      className="bg-primary rounded-t-3xl outline-none h-100 w-full max-w-full fixed mt-auto p-0  bottom-0 left-0 right-0 backdrop:bg-black/50 px-5 py-2"
    >
      <section>
        <div className="flex flex-col gap-5">
          <Info className="rounded-2xl py-3 px-4 flex">
            <div className="w-full flex items-start">
              <UsersInfo users={user}></UsersInfo>
            </div>
            <button onClick={() => setOptionsDialog(false)}>
              <XSavedEbook size={"1.2em"}></XSavedEbook>
            </button>
          </Info>
          <ul className="flex flex-col gap-4 text-gray">
            {options.map((option, index) => {
              const Icon = option.Icon;
              return (
                <li key={index}>
                  <button
                    className="flex gap-2 items-center"
                    onClick={() => validationPage(index)}
                  >
                    <span
                      className="
                         text-wine/70"
                    >
                      <Icon></Icon>
                    </span>

                    <span>{option.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <ContainerGoal></ContainerGoal>

          <div className="flex flex-col gap-4">
            <Lines></Lines>
            <button
              className="flex gap-1 items-center text-wine "
              onClick={() => {logout(5), setOptionsDialog(false)}}
            >
              <Logout size={"1em"}></Logout>
              Sair
            </button>
          </div>
        </div>
      </section>
    </dialog>
  );
}
