import { Container } from "./container";
import { Div } from "./div";
import { SubHeader } from "./subHeader";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { share } from "../svgCode";
import { comment } from "../svgCode";
import { like } from "../svgCode";
import { save } from "../svgCode";

const Save = save;
const Icon = configuration;

const buttons = [{ icon: like }, { icon: comment }, { icon: share }];

export function Post() {
  return (
    <>
      <SubHeader></SubHeader>
      <Container>
        <Div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <PerfilIcon></PerfilIcon>
              <p>
                Vasco <span className="text-gray">resenhou</span>
                <span className="text-wine"> Como treinar seu Dragão</span>
                <p className="text-gray text-xs">@teste1234</p>
              </p>
              <Icon></Icon>
            </div>

            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              quibusdam nostrum ratione aspernatur provident consequatur quod,
              eius eligendi, iure et sunt inventore libero ex modi eos. Deleniti
              quibusdam assumenda corporis!
            </p>

            <div className="bg-background border border-border rounded-3xl w-full h-50"></div>
          </div>

          <Lines></Lines>
          <div className="flex justify-between px-5">
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
      </Container>
    </>
  );
}
