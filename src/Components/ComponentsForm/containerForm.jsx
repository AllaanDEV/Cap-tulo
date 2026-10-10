import { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/transparent-logo.svg";

import { useNavigate } from "react-router";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { AnimationTransiton } from "../svgCode";
import { FormLogin } from "../formLogin";
import { FormRegister } from "../formRegister";
import AppContext from "../context";

gsap.registerPlugin(DrawSVGPlugin);

const images = [
  "https://i.pinimg.com/736x/02/1d/e9/021de98afb8f766261e60d4b491dd9d9.jpg",
  "https://i.pinimg.com/1200x/f3/d5/71/f3d5714f50b1548f1c13976746719507.jpg",
  "https://i.pinimg.com/736x/64/58/f2/6458f2d112fde10d51fa250f68e27a91.jpg",
  "https://i.pinimg.com/736x/9f/d4/94/9fd49434235692bfa219b27d561914d8.jpg",
  "https://i.pinimg.com/1200x/27/97/c9/2797c97b43f864eaf9aca00317affe7d.jpg",
  "https://i.pinimg.com/1200x/27/97/c9/2797c97b43f864eaf9aca00317affe7d.jpg",
];

export function ContainerForm() {
  const { formsOn, setFormsOn, iniciarTransicao, Login } =
    useContext(AppContext);

  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      const html = document.documentElement;
      const body = document.body;

      const oldHtml = html.style.overflowY;
      const oldBody = body.style.overflowY;

      html.style.overflowY = "hidden";
      body.style.overflowY = "hidden";

      return () => {
        html.style.overflowY = oldHtml;
        body.style.overflowY = oldBody;
      };
    }
  }, []);

  function switchForm(nextValue) {
    if (nextValue === formsOn || exiting) return;

    setDirection(nextValue ? "forward" : "backward");
    setExiting(true);

    setTimeout(() => {
      setFormsOn(nextValue);
      setExiting(false);
    }, 220);
  }

  const exitAnimation =
    direction === "forward"
      ? "animate-[formExitUp_220ms_ease-in_both]"
      : "animate-[formExitDown_220ms_ease-in_both]";

  const enterAnimation =
    direction === "forward"
      ? "animate-[formEnterDown_350ms_ease-out_both]"
      : "animate-[formEnterUp_350ms_ease-out_both]";

  return (
    <div className="relative h-screen overflow-hidden animate-[screenEnter_1000ms_cubic-bezier(0.16,1,0.3,1)_both]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[3000ms] ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* <div
        ref={transitionRef}
        className="fixed inset-0 z-[300] pointer-events-none w-[100vw] scale-210"
      >
        <AnimationTransiton />
      </div> */}

      <div className="relative z-10 ml-auto flex h-screen md:p-[5vw] lg:p-0 lg:w-[55vw]  xl:w-[35vw] flex-col animate-[slideFromRight_1500ms_cubic-bezier(0.16,1,0.3,1)_both]">
        <div className="flex h-screen flex-col gap-2  md:rounded-3xl lg:rounded-l-3xl lg:rounded-r-none bg-primary p-5">
          <img src={logo} alt="Logo" className="w-auto h-40 mb-5" />

          <div className={exiting ? exitAnimation : enterAnimation}>
            <div className={formsOn ? "hidden" : "block"}>
              <FormLogin
                onSwitch={switchForm}
                iniciarTransicao={iniciarTransicao}
              />
            </div>

            <div className={formsOn ? "block" : "hidden"}>
              <FormRegister onSwitch={switchForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
