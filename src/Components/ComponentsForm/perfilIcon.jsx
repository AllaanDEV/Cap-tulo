import { useContext} from "react";
import { Link } from "react-router";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function PerfilIcon({ children, className = "", ...props }) {
  return (
    <Link 
      {...props} 
      className={`flex justify-center items-center rounded-full h-10 w-10 overflow-hidden bg-amber-700 shrink-0 ${className}`}
    >
      {children}
    </Link>
  );
}