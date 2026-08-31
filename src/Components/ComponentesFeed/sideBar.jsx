// import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { Div } from "./div";
import { Info } from "./info";

import { house } from "../svgCode";
import { compass } from "../svgCode";
import { book, logout, group, save,  spiral } from "../svgCode";
import { useContext, useEffect, useState } from "react";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useNavigate } from "react-router";
import AppContext from "../context";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

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
  { icon: group, name: "Seguindo" },
  { icon: save, name: "Quero ler" },
  { icon: logout, name: "sair" },
];

export function SideBar() {
  const { nameIcon, user, fetchProfile, photoValueFeed } = useRequisicoes({});
  const { setEbookSaved, setEditValue, read } = useContext(AppContext);

  useEffect(() => {
    fetchProfile();
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

  const stats = [
  { status: "Lidos", number: formatarParaK(read) },
  { status: "Seguindo", number: formatarParaK(318) },
  { status: "Seguidores", number: formatarParaK(1200) },
];


  return (
    <aside className="fixed top-20">
      <div className=" flex flex-col gap-3 fixed w-80">
        <Div>
          <div className="flex gap-2">
            <PerfilIcon to={`/perfil/${user.id}`}>
              {photo?.midiaIcon ? (
                <ImgPerfil src={photo?.midiaIcon}></ImgPerfil>
              ) : (
                <p className="m-auto text-[1rem] font-medium font-serif text-white">
                  {nameIcon(user.name)}
                </p>
              )}
            </PerfilIcon>
            <div className="text-start">
              <p>{user.name || "anonimo"}</p>
              <p className="flex items-center">@{user.userName}</p>
            </div>
          </div>
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

        <Info className="flex flex-col gap-3 bg-primary rounded-lg p-3">
          <div className="flex gap-3 items-center">
            <Spiral></Spiral>
            <p>Meta de leitrua 2026</p>
          </div>
          <p>30 de 50 livros</p>
          <div className="h-2 w-full rounded-3xl bg-border">
            <div
              style={{
                width: "40%",
                backgroundColor: "var(--color-wine)",
              }}
              className="h-full rounded-3xl"
            ></div>
          </div>
        </Info>
      </div>
    </aside>
  );
}
