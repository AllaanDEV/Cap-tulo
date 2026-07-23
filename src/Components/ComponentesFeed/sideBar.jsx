// import { Lines } from "../ComponentsForm/lines";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { Div } from "./div";
import { Info } from "./info";

import { house } from "../svgCode";
import { compass } from "../svgCode";
import { book } from "../svgCode";
import { group } from "../svgCode";
import { save } from "../svgCode";
import { spiral } from "../svgCode";
import { useState } from "react";

const Spiral = spiral;

const formatarParaK = (numero) => {
  return new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
  }).format(numero);
};

const stats = [
  { status: "Lidos", number: formatarParaK(142) },
  { status: "Seguindo", number: formatarParaK(318) },
  { status: "Seguidores", number: formatarParaK(1200) },
];

const options = [
  { icon: house, name: "Feed" },
  { icon: compass, name: "Explorar" },
  { icon: book, name: "Minha estante" },
  { icon: group, name: "Clubes de leitura" },
  { icon: save, name: "Quero ler" },
];

export function SideBar() {
  const [option, setOption]= useState("Feed")

  return (
    <section className="hidden lg:block w-60 relative">
      <div className=" flex flex-col gap-3 fixed w-60">
        <Div>
          <button className="flex gap-2">
            <PerfilIcon></PerfilIcon>
            <div className="text-start">
              <p>teste</p>
              <p>@teste123</p>
            </div>
          </button>
          <Info className="flex gap-3 bg-border rounded-lg p-3">
            {stats.map((s, index) => {
              return (
                <div key={index} className={`text-xs flex flex-col items-center`}>
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
              <button key={index} className={`flex gap-2 items-center hover:bg-border py-2 pl-2 rounded-2xl ${option == o.name ? "bg-wine/15 text-wine enabled:hover:bg-border" : ""}`} onClick={() => setOption(o.name)}>
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
    </section>
  );
}
