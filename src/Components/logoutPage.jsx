import { Container } from "./ComponentesFeed/container";
import { logout } from "./svgCode";
import logo from "../assets/transparent-logo.svg";
import { Div } from "./ComponentesFeed/div";
import { UsersInfo } from "./ComponentesFeed/usersInfo";
import { useRequisicoes } from "./context/hooks/useRequisicoes";
import { Info } from "./ComponentesFeed/info";
import { useContext } from "react";
import AppContext from "./context";
import { Link, useNavigate } from "react-router";

const Logout = logout;
export function LogoutPage() {
//   const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const { user, logout} = useRequisicoes({});

  return (
    <div className="bg-[url('https://i.pinimg.com/736x/24/ae/e0/24aee06bdc7687e6bb50622d3045d8f5.jpg')] bg-cover bg-center">
      <div className="h-screen flex flex-col pt-20 gap-4 px-2 py-10 ">
                <img src={logo} className="w-auto h-[30vw]"></img>

        <div
          className="
          mt-auto
            
    p-6
    rounded-3xl
    bg-white/15
    backdrop-blur-sm
    border border-white/30
    shadow-[0_8px_32px_rgba(0,0,0,0.15)]


  flex flex-col justify-center gap-2 py-5 px-2"
        >

          <div className=" flex flex-col text-center gap-2">
            <Info className="py-2 rounded-2xl max-w-[10em] mx-auto ">
              <div className="w-full flex justify-baseline px-2">
                <UsersInfo></UsersInfo>
              </div>
            </Info>

            <div className="flex flex-col">
              <span className="text-2xl font-fraunce">Sair da sua conta?</span>
            </div>

            <button
              className="w-full sm:bg-wine/90 bg-wine hover:bg-wine transition duration-400 text-sm flex items-center text-center gap-1 justify-center py-2 text-white rounded-2xl cursor-pointer"
              onClick={() => logout(5)}
            >
              <Logout size="1rem"></Logout>
              Sair
            </button>

            <Link
              className="w-full bg-transparent text-sm flex items-center text-center gap-1 justify-center py-2 rounded-2xl border border-border cursor-pointer"
              to={`/feed/${user.id}`}
            >
              Cancelar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
