import logo from "../assets/transparent-logo.svg";
import { Input } from "./ComponentsForm/input";
import { ContainerForm } from "./ComponentsForm/containerForm";
import { Form } from "./ComponentsForm/form";
import { ButtonLogin } from "./ComponentsForm/buttonLogin";
import { Remenber } from "./ComponentsForm/remenber";
export function FormRegister() {
  return (
    <ContainerForm className="flex flex-col text-center min-h-screen bg-red-50 ">
      <img src={logo} className="w-auto h-15"></img>
      <h1>Seja muito bem vindo(a)!</h1>
      <div className="text-start px-5 flex flex-col gap-2">
        <Form>
          <Input type="name" placeholder="Seu nome completo"></Input>
          <Input type="email" placeholder="Example@email.com"></Input>
          <Input type="password" placeholder="Digite sua senha"></Input>

          <Remenber>
            <div className="flex gap-1">
              <input type="checkbox" required></input>
              <p>lembrar</p>
            </div>
          </Remenber>

          <ButtonLogin
            className="bg-wine py-1 rounded-sm text-white text-center font-normal mt-3"
            to="/auth/login"
          >
            Faça seu login
          </ButtonLogin>
        </Form>
      </div>
    </ContainerForm>
  );
}
