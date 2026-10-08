import logo from "../assets/transparent-logo.svg";
import { Input } from "./ComponentsForm/input";
import { ContainerForm } from "./ComponentsForm/containerForm";
import { Form } from "./ComponentsForm/form";
import { ButtonLogin } from "./ComponentsForm/buttonLogin";
import { Remenber } from "./ComponentsForm/remenber";
import { use, useContext } from "react";
import AppContext from "./context";
import { useNavigate } from "react-router";

export function FormRegister() {
  const { Register } = useContext(AppContext);
  const navigate = useNavigate();

  const registerData = async (e) => {
    e.preventDefault();

    const dataFormRegister = new FormData(e.target);

    const name = dataFormRegister.get("name");
    const userName = dataFormRegister.get("userName");
    const email = dataFormRegister.get("email");
    const password = dataFormRegister.get("password");

    const data = await Register({ email, password, name, userName });
    console.log(data);
    if (data.success == true) {
      navigate("/auth/login");
    } else {
      console.log("Erro ao enviar dados");
    }
  };

  return (
    <ContainerForm className="flex flex-col text-center min-h-screen bg-red-50 bg-[url(https://i.pinimg.com/736x/ec/c0/e6/ecc0e6909a0c630f3a4221e0117403df.jpg)] bg-cover bg-center px-5 py-4">
      <img src={logo} className="w-auto h-40 mb-5"></img>
      {/* <h1>Seja muito bem vindo(a)!</h1> */}
      <div
        className="text-start px-5 flex flex-col gap-2  rounded-3xl
    bg-white/15
    backdrop-blur-2xl
    border border-white/30
    shadow-[0_8px_32px_rgba(0,0,0,0.15)] "
      >
        <Form active={registerData}>
          <Input
            type="name"
            placeholder="Como as pessoas vão te chamar?"
          ></Input>
          <Input type="userName" placeholder="Digite seu usuario"></Input>
          <Input type="email" placeholder="Example@email.com"></Input>
          <Input type="password" placeholder="Digite sua senha"></Input>

          {/* <Remenber>
            <div className="flex gap-1">
              <input type="checkbox" required></input>
              <p>lembrar</p>
            </div>
          </Remenber> */}

          <ButtonLogin
            className="bg-wine py-1 rounded-sm text-white text-center font-normal mt-3"
            // to="/auth/login"
          >
            Faça seu login
          </ButtonLogin>
        </Form>
      </div>
    </ContainerForm>
  );
}
