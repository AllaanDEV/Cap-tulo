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
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AppContext from "./context";
import { useRequisicoes } from "./context/hooks/useRequisicoes";

export function FormLogin() {
  const navigate = useNavigate();

  const { Login } = useContext(AppContext);
  // const { user } = useRequisicoes({});
  const loginData = async (e) => {
    e.preventDefault();

    const dataFormRegister = new FormData(e.target);

    const email = dataFormRegister.get("email");
    const password = dataFormRegister.get("password");

    const data = await Login({ email, password });

    if (data.success == true) {
      navigate(`/feed/${data.userId}`);
    } else {
      console.log("Erro ao enviar dados");
    }
  };

  useEffect(() => {
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
  }, []);

  const images = [
  "https://i.pinimg.com/736x/02/1d/e9/021de98afb8f766261e60d4b491dd9d9.jpg",
  "https://i.pinimg.com/1200x/f3/d5/71/f3d5714f50b1548f1c13976746719507.jpg",
  "https://i.pinimg.com/736x/64/58/f2/6458f2d112fde10d51fa250f68e27a91.jpg",
  "https://i.pinimg.com/736x/9f/d4/94/9fd49434235692bfa219b27d561914d8.jpg",
  "https://i.pinimg.com/1200x/27/97/c9/2797c97b43f864eaf9aca00317affe7d.jpg",
  "https://i.pinimg.com/736x/0e/e9/f4/0ee9f42d5c17bbaa465789acc9d7d490.jpg"
];


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="bg-cover bg-center h-screen animate-[screenEnter_1000ms_cubic-bezier(0.16,1,0.3,1)_both] overflow-hidden">

          <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover
            transition-opacity duration-3000
            ${
              current === index
                ? "opacity-500"
                : "opacity-0"
            }`}
        />
      ))}
    </div>
      {/* <img src={logo} className="w-auto h-40 mb-5"></img> */}
      {/* <h1 className="text-white">Bem vindo de volta!</h1> */}
      {/* <div className="h-screen">
        <img
          src="https://i.pinimg.com/736x/02/1d/e9/021de98afb8f766261e60d4b491dd9d9.jpg"
          className=" object-cover h-full w-full "
        ></img>
      </div> */}

      <div className="flex justify-center flex-col ml-auto w-[35vw] animate-[slideFromRight_1500ms_cubic-bezier(0.16,1,0.3,1)_both]">
        <div
          className=" px-5 flex flex-col gap-2     rounded-l-3xl
     bg-primary py-5 h-screen"
        >
          <img src={logo} className="w-auto h-40 mb-5"></img>
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
            <QuestionButton to="/auth/register">
              Faça seu cadastro
            </QuestionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
