import notificationIcon from "../../assets/svgIcons/notification-line.svg";
import { pencil } from "../svgCode";
import { ContainerTags } from "./containerTags";

const Pencil = pencil;
export function Icon() {
  return (
    <section className="flex flex-col gap-3 border border-border p-1 rounded-xs bg-primary">
      <div className="bg-amber-300 w-full h-30 max-h-30 relative">
        <div className="absolute w-20 h-20 bg-red-400 bottom-[-40px] left-5 rounded-full "></div>
      </div>
      <div className="flex flex-col py-10 justify-end gap-2 text-black p-2">
        <div className="flex justify-end gap-2 text-black">
          <ContainerTags>
            <img src={notificationIcon} className="w-auto h-5"></img>
          </ContainerTags>
          <ContainerTags>
            <Pencil></Pencil>
            <p>editar perfil</p>
          </ContainerTags>
          <ContainerTags>
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
      </div>
    </section>
  );
}
