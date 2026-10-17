import { Div } from "./div";
import { Info } from "./info";

import { useContext, useEffect } from "react";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useLocation, useNavigate, useParams } from "react-router";
import AppContext from "../context";
import { UsersInfo } from "./usersInfo";
import { ContainerGoal } from "./containerGoal";

const formatarParaK = (numero) => {
  return new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
  }).format(numero);
};

export function SideBar() {
  const { id: paramsId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { user, allFollowers, getBookSave, postNumberGet } = useRequisicoes({});
  const { followers, ebookSaved, option, setOption, options, editRequisicao } =
    useContext(AppContext);

  const { logout } = useRequisicoes({});

  useEffect(() => {
    allFollowers();
    getBookSave(user.id);
  }, []);

  // Recarrega a estante da sidebar quando um livro é salvo/removido.
  useEffect(() => {
    getBookSave(user.id);
  }, [editRequisicao]);

  const seguindoProfileId = followers.filter((f) => f.following === user.id);
  const seguindo = followers.filter((f) => f.userId === user.id);

  const read = ebookSaved.filter((ebook) => ebook.progress === 100);

  const stats = [
    { status: "Lidos", number: formatarParaK(read.length) },
    { status: "Seguindo", number: formatarParaK(seguindo?.length) },
    { status: "Seguidores", number: formatarParaK(seguindoProfileId?.length) },
  ];

  useEffect(() => {
    postNumberGet(paramsId);
  }, []);

  useEffect(() => {
    if (location.pathname == `/perfil/${user.id}`) {
      setOption("Perfil");
    } else if (location.pathname == `/feed/${user.id}`) {
      setOption("Feed");
    } else if (location.pathname == `/ebooks`) {
      setOption("Explorar");
    } else if (location.pathname == `/auth/logout`) {
      setOption("sair");
    }
  }, [location]);

  return (
    <aside className="fixed top-20">
      <div className=" flex flex-col gap-3 fixed w-80">
        <Div className="flex flex-col items-start">
          <UsersInfo></UsersInfo>
          <Info className="grid grid-cols-3 divide-x divide-black bg-border rounded-lg p-3">
            {stats.map((s, index) => {
              return (
                <div
                  key={index}
                  className={`text-xs flex flex-col items-center`}
                >
                  <p>{s.number}</p>
                  <p>{s.status}</p>
                </div>
              );
            })}
          </Info>
        </Div>

        <div className="flex flex-col gap-1 ">
          {options.map((o, index) => {
            const Icon = o.icon;
            return (
              <button
                key={index}
                className={`flex gap-2 items-center hover:bg-border py-2 pl-2 rounded-2xl ${option == o.name ? "bg-wine/15 text-wine enabled:hover:bg-border" : ""}`}
                onClick={() => {
                  setOption(o.name);
                  if (o.name === "Explorar") {
                    navigate("/ebooks");
                  } else if (o.name === "Minha estante") {
                    navigate(`/perfil/${user.id}`);
                  } else if (o.name === "sair") {
                    navigate("/auth/logout");
                  } else if (o.name === "Feed") {
                    navigate(`/feed/${user.id}`);
                  } else if (o.name === "Perfil") {
                    navigate(`/perfil/${user.id}`);
                  }
                }}
              >
                <Icon size="1em"></Icon>
                <p>{o.name}</p>
              </button>
            );
          })}
        </div>

        <ContainerGoal></ContainerGoal>
      </div>
    </aside>
  );
}
