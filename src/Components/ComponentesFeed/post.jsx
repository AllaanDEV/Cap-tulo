// import { Container } from "./container";
import { Div } from "./div";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { share } from "../svgCode";
import { comment } from "../svgCode";
import { like } from "../svgCode";
import { save } from "../svgCode";
import daenerys from "../../assets/dragoes-daenerys.webp";
import { Info } from "./info";


const Save = save;
const Icon = configuration;

const buttons = [{ icon: like }, { icon: comment }, { icon: share }];

export function Post() {
  return (
    <>
          <Div>
            <section className="flex flex-col gap-2">
              <div className="flex gap-3 justify-between">
                <div className="flex gap-3 items-center">
                  <PerfilIcon></PerfilIcon>
                  <p>
                    Vasco <span className="text-gray">resenhou</span>
                    <span className="text-wine"> Como treinar seu Dragão</span>
                    <p className="text-gray text-xs">@teste1234</p>
                  </p>
                </div>

                <button>
                  <Icon></Icon>
                </button>
              </div>

              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quibusdam nostrum ratione aspernatur provident consequatur quod,
                eius eligendi, iure et sunt inventore libero ex modi eos.
                Deleniti quibusdam assumenda corporis!
              </p>

              <Info className="bg-background border border-border rounded-3xl w-full h-auto flex items-center">
                <img src={daenerys}></img>
              </Info>
            </section>

            <Lines></Lines>
            <div className="flex justify-between px-5 ">
              <div className="flex justify-between w-30">
                {buttons.map((b, index) => {
                  const Icons = b.icon;
                  return (
                    <button key={index}>
                      <Icons></Icons>
                    </button>
                  );
                })}
              </div>
              <Save></Save>
            </div>
          </Div>

    </>
  );
}
