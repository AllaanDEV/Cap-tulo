import { useContext, useEffect } from "react";
import notificationIcon from "../../assets/svgIcons/notification-line.svg";
import { Div } from "../ComponentesFeed/div";
import { Post } from "../ComponentesFeed/post";
import { pencil, calendar, maps, link, ebook } from "../svgCode";
import { ContainerTags } from "./containerTags";
import { EbookProgress } from "./ebookProgress";
import { SpanDescription } from "./spanDescriotion";
import { SpanName } from "./spanName";
import { Table } from "./table";
import AppContext from "../context";
import { useLocation } from "react-router";
import { EditProfile } from "./editProfile";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

const Pencil = pencil;
const Ebook = ebook;

const Calendar = calendar;
const Maps = maps;
const Link = link;

const tags = [
  { description: "Ficção literária" },
  { description: "ensaio" },
  { description: "Poesia" },
  { description: "Clássicos" },
  { description: "Memórias" },
];

const buttons = [
  { name: "Publicações" },
  { name: "Estantes" },
  { name: "Resenha" },
  { name: "Sobre" },
];

export function Icon() {
  const { publication, search, setPublication, openOrCloseDialog, edit } =
    useContext(AppContext);
  const { state } = useLocation();

  const { nameIcon } = useRequisicoes({});

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPublication(data));
    // os dados dps da promessa
  }, []);

  const bios = [
    {
      bio: Maps,
      description: edit.location,
      id: "location",
    },
    {
      bio: Link,
      description: edit.link,
      id: "link",
    },
    {
      bio: Calendar,
      description: `entrou em: ${new Date().toLocaleDateString("pt-br")}`,
      id: "calendar",
    },
  ];

console.log("RENDER ICON:", edit);
  return (
    <section className="flex flex-col gap-3 border border-border p-1 rounded-xs bg-primary w-[70vw] mx-auto">
      <div className="bg-amber-300 w-full h-30 max-h-30 relative sm:h-50 sm:max-h-50 2xl:h-60  2xl:max-h-70">
        <div className="absolute w-20 h-20 sm:w-40 sm:h-40 bg-red-400 bottom-[-40px] sm:bottom-[-80px] 2xl:h-50 2xl:w-50 2xl:bottom-[-120px] left-5 rounded-full text-center     grid place-items-center">
          <span className="text-5xl absolute bottom-5.5 flex items-center justify-center">
            {nameIcon(edit.name || state?.author)}
          </span>
        </div>
      </div>
      <div className="flex flex-col py-10 2xl:py-20 justify-end gap-5 text-black p-2">
        <div className="flex justify-end gap-2 text-black">
          <ContainerTags>
            <img src={notificationIcon} className="w-auto h-5"></img>
          </ContainerTags>
          <ContainerTags onClick={openOrCloseDialog}>
            <Pencil></Pencil>
            editar perfil
          </ContainerTags>
          <ContainerTags className="bg-wine text-white">
            <p>seguir</p>
          </ContainerTags>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">{edit.name || state.author}</h1>
            <span className="text-xs">@{edit.username || state.author}</span>
            <span className="text-xs">TESTE: {edit.username}</span>
          </div>
          <p>{edit.bios || "coloque uma descrição sobre você!"}</p>
        </div>
        <div className="md:flex gap-5">
          {bios
            .filter((b) => b.description)
            .map((b) => {
              const BioIcon = b.bio;
              return (
                <p
                  key={b.id}
                  className="grid grid-flow-col gap-1 items-center text-gray"
                >
                  {BioIcon && <BioIcon></BioIcon>}
                  {b.description}
                </p>
              );
            })}
        </div>

        <div className="flex gap-2 flex-wrap text-black/50">
          {tags.map((t, index) => {
            return (
              <p
                key={index}
                className="rounded-full border border-border  px-3 text-center bg-background flex items-center"
              >
                {t.description}
              </p>
            );
          })}
        </div>

        <div class="grid grid-cols-2 border border-border rounded-2xl bg-background /60 divide-x divide-y divide-border overflow-hidden text-center lg:grid-rows-1 lg:grid-cols-4 lg:divide-y-0">
          <Table>
            <SpanName>Lidos</SpanName>
            <SpanDescription>142</SpanDescription>
          </Table>

          <Table>
            <SpanName>resenhas</SpanName>
            <SpanDescription>87</SpanDescription>
          </Table>

          <Table>
            <SpanName>seguindo</SpanName>
            <SpanDescription>318</SpanDescription>
          </Table>

          <Table>
            <SpanName>seguidores</SpanName>
            <SpanDescription>1,2k</SpanDescription>
          </Table>
        </div>

        <nav className="flex gap-8 flex-nowrap overflow-auto  [scrollbar-width:none] [*::-webkit-scrollbar]:hidden px-5">
          {buttons.map((b, index) => {
            return (
              <button key={index} className={`text-gray`}>
                {b.name}
              </button>
            );
          })}
        </nav>

        <Div>
          <h2 className="flex gap-1 items-center text-lg">
            <Ebook></Ebook>
            Lendo Agora
          </h2>
          <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 2x1:grid-cols-4 gap-3 ">
            <EbookProgress></EbookProgress>
            <EbookProgress></EbookProgress>
          </div>
        </Div>

        {(!search ? publication : search)
          .filter((p) => p.author == state.author)
          .map((p) => {
            return <Post key={p.id} post={p}></Post>;
          })}
      </div>
      <EditProfile></EditProfile>
    </section>
  );
}
