import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";

export function PerfilIcon({ children, ...props }) {
  const { id: profileId } = useParams();
  const { token, user } = useRequisicoes({});
  const { editValue, setEditValue } = useContext(AppContext);

  useEffect(() => {
    const get = async () => {
      const responseGet = await fetch(
        `http://localhost:3000/profileTheme/${profileId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await responseGet.json();
      setEditValue((prev) => ({ ...prev, data }));
    };
    get();
  }, [profileId, token]);

  return (
    <Link {...props}>
      {!editValue?.dataPerfil?.midiaIcon ? (
        <div className="bg-amber-800 rounded-4xl p-4 relative">
          <p className="absolute top-1 right-1 left-1 bottom-1 text-white font-medium">
            {children}
          </p>
        </div>
      ) : editValue?.dataPerfil?.userId === user.id ? (
        <div className="flex justify-center rounded-4xl h-10 w-10 bg-amber-800">
{children}
        </div>
      ) : (
        <div className="bg-amber-800 rounded-4xl p-4 relative">
          <p className="absolute top-1 right-1 left-1 bottom-1 text-white font-medium">
            {children}
          </p>
        </div>
      )}
    </Link>
  );
}
