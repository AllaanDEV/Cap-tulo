import { Input } from "./ComponentsForm/input";
import { Form } from "./ComponentsForm/form";
import { ButtonLogin } from "./ComponentsForm/buttonLogin";
import { useContext } from "react";
import AppContext from "./context";
import { useNavigate } from "react-router";
import { QuestionButton } from "./ComponentsForm/questionButton";

export function FormRegister({ onSwitch }) {
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
    <>
      <Form active={registerData} className="open:animate-[dialogLift_250ms_cubic-bezier(0.22,1,0.36,1)_both] backdrop:animate-[backdropFade_250ms_ease-out_both]">
        <Input type="name" placeholder="Como as pessoas vão te chamar?"></Input>
        <Input type="userName" placeholder="Digite seu usuario"></Input>
        <Input type="email" placeholder="Example@email.com"></Input>
        <Input type="password" placeholder="Digite sua senha"></Input>

        <ButtonLogin
          className="bg-wine py-1 rounded-sm text-white text-center font-normal mt-3"
          onClick={() => onSwitch(false)}
        >
       Login
        </ButtonLogin>
      </Form>

      <div className="flex text-xs gap-1 justify-center mt-5 text-[#000]">
        <span>Já tem conta?</span>
        <QuestionButton onClick={() => onSwitch(false)}>
          Faça seu login
        </QuestionButton>
      </div>
    </>
  );
}
