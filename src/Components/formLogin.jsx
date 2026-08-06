import logo from "../assets/transparent-logo.svg";
import { Input } from "./ComponentsForm/input";
import { Lines } from "./ComponentsForm/lines";
import googleIcon from "../assets/svgIcons/google.svg";
import githubIcon from "../assets/svgIcons/github.svg";
import { ButtonLogin } from "./ComponentsForm/buttonLogin";
import { QuestionButton } from "./ComponentsForm/questionButton";
import { Form } from "./ComponentsForm/form";
import { ContainerForm } from "./ComponentsForm/containerForm";
import { Remenber } from "./ComponentsForm/remenber";
import { useContext } from "react";
import { useNavigate } from "react-router";
import AppContext from "./context";

export function FormLogin() {

  const navigate= useNavigate()

  const {Login}= useContext(AppContext)

  const loginData = async (e) => {
   e.preventDefault()

   const dataFormRegister= new FormData(e.target)

    const email = dataFormRegister.get("email");
    const password = dataFormRegister.get("password")
  
    const data = await Login ({ email, password });

    if (data.success == true) {
      navigate("/feed");
    } else {
      console.log("Erro ao enviar dados");
    }
  };

  return (
    <ContainerForm>
      <img src={logo} className="w-auto h-15"></img>
      <h1>Bem vindo de volta!</h1>
      <div className=" px-5 flex flex-col gap-2">
        <Form active={loginData}>
          <Input type="email" placeholder="Example@email.com"></Input>
          <Input type="password" placeholder="Digite sua senha"></Input>

          <Remenber>
            <div className="flex gap-1">
              <input type="checkbox" required></input>
              <p>lembrar</p>
            </div>
            <QuestionButton className="text-wine font-medium">
              <p>Esqueceu a senha?</p>
            </QuestionButton>
          </Remenber>

          <ButtonLogin className="bg-wine py-1 rounded-sm text-white font-normal mt-3 text-center">
            Faça login
          </ButtonLogin>
        </Form>
        <div className="flex items-center my-2">
          <Lines></Lines>
          <span className="mx-4 text-gray-500 font-medium text-xs">
            ou continue com
          </span>
          <Lines></Lines>
        </div>

        <div className="flex justify-center gap-3">
          <ButtonLogin>
            <img src={googleIcon}></img>
            Google
          </ButtonLogin>

          <ButtonLogin>
            <img src={githubIcon}></img>
            Github
          </ButtonLogin>
        </div>

        <div className="flex text-xs gap-1 justify-center mt-5">
          <span>Não tem conta?</span>
          <QuestionButton to="/auth/register">Faça seu cadastro</QuestionButton>
        </div>
      </div>
    </ContainerForm>
  );
}
