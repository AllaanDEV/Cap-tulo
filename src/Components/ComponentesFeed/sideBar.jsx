// import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { Div } from "./div";
import { Info } from "./info";

import { house, Circle } from "../svgCode";
import { compass } from "../svgCode";
import { book, logout, Group, save, spiral } from "../svgCode";
import { useContext, useEffect, useState } from "react";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Link, useNavigate, useParams } from "react-router";
import AppContext from "../context";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { Progress } from "../ComponentsPerfil/progress";
import { UsersInfo } from "./usersInfo";

const Spiral = spiral;

const formatarParaK = (numero) => {
  return new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
  }).format(numero);
};

const options = [
  { icon: house, name: "Feed" },
  { icon: compass, name: "Explorar" },
  { icon: book, name: "Minha estante" },
  // { icon: Group, name: "Seguindo" },
  { icon: save, name: "Quero ler" },
  { icon: logout, name: "sair" },
];

export function SideBar() {
  const { id: paramsId } = useParams();
  const {
    nameIcon,
    user,
    fetchProfile,
    photoValueFeed,
    allFollowers,
    getBookSave,
    postNumberGet,
  } = useRequisicoes({});
  const {
    setEbookSaved,
    setEditValue,
    followers,
    publication,
    ebookSaved,
    goal,
    progressAllEbooks,
  } = useContext(AppContext);

  useEffect(() => {
    fetchProfile();
    allFollowers();
    getBookSave(user.id);
  }, []);

  const [option, setOption] = useState("Feed");

  const navigate = useNavigate();

  const logout = (index) => {
    if (index === 5) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setEbookSaved([]);
      setEditValue({});
      setEditValue({});

      navigate("auth/login");
    } else if (index === 1) {
      navigate("/ebooks");
    }
  };

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

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

  const difference = goal?.number - ebookSaved?.length;
  const textDiference =
    difference <= 5
      ? "só mais"
      : difference <= 10
        ? "apenas"
        : difference <= 20 && "cerca";

  return (
    <aside className="fixed top-20">
      <div className=" flex flex-col gap-3 fixed w-80">
        <Div className="flex flex-col items-start">
          <UsersInfo >
      
          </UsersInfo>
          <Info className="grid grid-cols-3 divide-x divide-gray bg-border rounded-lg p-3">
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
                  logout(index);
                }}
              >
                <Icon></Icon>
                <p>{o.name}</p>
              </button>
            );
          })}
        </div>

        <Info className="flex flex-col gap-1 bg-primary rounded-lg p-3 items-start">
          <div className="flex gap-1 items-center text-wine">
            <Circle></Circle>
            <p>Meta de leitura {new Date().getFullYear()}</p>
          </div>
          {goal?.number > 0 ? (
            <>
              <p className="text-gray text-sm">
                {ebookSaved.length} de {goal.number} livros
              </p>
              <Progress
                goal={progressAllEbooks.toFixed()}
                className="w-full"
              ></Progress>
              <span className="text-gray text-xs">
                Faltam {textDiference} {difference} livros para a conclusão {difference <= 5 && "🎉"}
              </span>
            </>
          ) : (
            <Link
              className="text-gray hover:bg-gray/30 py-1 px-3 rounded-2xl flex items-center  transition duration-400"
              to={`/perfil/${user.id}`}
            >
              Faça uma meta!
            </Link>
          )}
        </Info>
      </div>
    </aside>
  );
}
