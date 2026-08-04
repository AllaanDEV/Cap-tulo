import { useContext } from "react";
import AppContext from "../context";

export function PerfilIcon({ children, ...props }) {
  const { ui } = useContext(AppContext);
  console.log(ui.name)
  return (
    <button>
      <div className="bg-amber-800 rounded-4xl p-4 relative" {...props}>
        <p className="absolute top-1 right-1 left-1 bottom-1 text-white font-medium">{children}</p>
      </div>
    </button>
  );
}
