import notificationIcon from "../../assets/svgIcons/notification-line.svg";
import { Div } from "../ComponentesFeed/div";
import { Info } from "../ComponentesFeed/info";
import { pencil, calendar, maps, link, ebook } from "../svgCode";
import { ContainerTags } from "./containerTags";
import { SpanDescription } from "./spanDescriotion";
import { SpanName } from "./spanName";
import { Table } from "./table";

const Pencil = pencil;
const Ebook = ebook;

const Calendar = calendar;
const Maps = maps;
const Link = link;

const bios = [
  { bio: Maps, description: "Porto Alegrem RS" },
  {
    bio: Calendar,
    description: `entrou em: ${new Date().toLocaleDateString("pt-br")}`,
  },
  { bio: Link, description: "vasco.com" },
];

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
  // const [tags, setTags]= useState([{

  // }])

  return (
    <section className="flex flex-col gap-3 border border-border p-1 rounded-xs bg-primary">
      <div className="bg-amber-300 w-full h-30 max-h-30 relative">
        <div className="absolute w-20 h-20 bg-red-400 bottom-[-40px] left-5 rounded-full "></div>
      </div>
      <div className="flex flex-col py-10 justify-end gap-5 text-black p-2">
        <div className="flex justify-end gap-2 text-black">
          <ContainerTags>
            <img src={notificationIcon} className="w-auto h-5"></img>
          </ContainerTags>
          <ContainerTags>
            <Pencil></Pencil>
            <p>editar perfil</p>
          </ContainerTags>
          <ContainerTags className="bg-wine text-white">
            <p>seguir</p>
          </ContainerTags>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">USER</h1>
            <p className="text-xs">@USER</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus iste consequatur mollitia corporis neque laboriosam
            natus, ipsum fugiat autem soluta voluptatibus, repellat tempore
            minima molestiae vel, consequuntur libero qui possimus!
          </p>
        </div>
        <div>
          {bios.map((b, index) => {
            const BioIcon = b.bio;
            return (
              <p key={index} className="flex gap-1 items-center text-gray">
                <BioIcon />
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

        <div class="grid grid-cols-2 border border-border rounded-2xl bg-background /60 divide-x divide-y divide-border overflow-hidden text-center">
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
          <Info>
            <div className="p-3 flex gap-5 items-start">
              <div className="h-30 w-20 bg-bermuda rounded-lg"></div>
              <div className="flex flex-col gap-5">
                <div>
                  <p>vasco silencioso</p>
                  <p>gama</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p>progresso</p> 40%
                  </div>
                  <div className="w-full rounded-2xl bg-gray/30">
                    <div
                      className="w-full py-1 bg-wine rounded-2xl"
                      style={{
                        width: "40%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Info>
        </Div>
      </div>
    </section>
  );
}
