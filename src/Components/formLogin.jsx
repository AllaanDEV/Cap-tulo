import { Input } from "./ComponentsForm/input";
import { Lines } from "./ComponentsForm/lines";
import googleIcon from "../assets/svgIcons/google.svg";
import githubIcon from "../assets/svgIcons/github.svg";
import { ButtonLogin } from "./ComponentsForm/buttonLogin";
import { QuestionButton } from "./ComponentsForm/questionButton";
import { Form } from "./ComponentsForm/form";
import { Remenber } from "./ComponentsForm/remenber";
import { useContext, useEffect, useState } from "react";
import AppContext from "./context";

import { Facebook } from "./svgCode";

export function FormLogin({ onSwitch, iniciarTransicao }) {
  const { Login,loadingLogin} = useContext(AppContext);

  const loginData = async (e) => {
    e.preventDefault();

    const dataFormRegister = new FormData(e.target);

    const email = dataFormRegister.get("email");
    const password = dataFormRegister.get("password");

    const data = await Login({ email, password });

    if (data.success == true) {
      iniciarTransicao(data.userId);
    } else {
      console.log("Erro ao enviar dados");
    }
  };

  const [textList, setTextList] = useState(-1);
  const [visible, setVisible] = useState(false);

  const text = ["Olá", "Seja bem vindo!"];

  useEffect(() => {
    if (textList === -1) {
      const timeout = setTimeout(() => {
        setTextList(0);
      }, 1000);

      return () => clearTimeout(timeout);
    }

    if (textList === 1) return;

    const timeout = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setTextList(1);
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [textList]);

  useEffect(() => {
    if (textList === -1) return;

    const timeout = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [textList]);

  return (
    <>
      <Form active={loginData}>
        <div className="h-9 flex items-center justify-center">
          {textList !== -1 && (
            <span
              key={textList}
              className={`text-2xl font-extralight transition-all duration-500 ease-out ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              {text[textList]}
            </span>
          )}
        </div>

        <Input type="email" placeholder="Example@email.com"></Input>
        <Input type="password" placeholder="Digite sua senha"></Input>

        <Remenber>
          <div className="flex gap-1 text-[#000]">
            <input type="checkbox" required></input>
            <p>lembrar</p>
          </div>
          <QuestionButton className="text-wine font-medium">
            <p>Esqueceu a senha?</p>
          </QuestionButton>
        </Remenber>

        <ButtonLogin
          className="bg-wine py-1 rounded-sm text-white font-normal mt-3 text-center"
          disabled={loadingLogin}
        >
          {loadingLogin ? "Entrando..." : "Entrar"}
        </ButtonLogin>
      </Form>
      <div className="flex items-center my-2">
        <Lines efe7dd={"efe7dd"}></Lines>
        <span className="mx-4 text-gray-500 font-medium text-xs">
          ou continue com
        </span>
        <Lines efe7dd={"efe7dd"}></Lines>
      </div>

      <div className="flex items-center justify-center gap-3">
        <ButtonLogin>
          <img src={googleIcon}></img>
          Google
        </ButtonLogin>

        <ButtonLogin>
          <img src={githubIcon}></img>
          Github
        </ButtonLogin>

        <ButtonLogin>
          <Facebook></Facebook>
          Facebook
        </ButtonLogin>
      </div>

      <div className="flex text-xs gap-1 justify-center mt-5 text-[#000]">
        <span>Não tem conta?</span>
        <QuestionButton onClick={() => onSwitch(true)}>
          Faça seu cadastro
        </QuestionButton>
      </div>
    </>
  );
}
