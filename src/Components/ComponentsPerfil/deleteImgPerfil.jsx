import { useParams } from "react-router";
import { x } from "../svgCode";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context";

export default function DeleteImgIcon() {
  const X = x;
  const { id: paramsId } = useParams();
  const { token } = useRequisicoes({});
  const { openOrCloseDialog } = useContext(AppContext);
const [imagemUrl, setImagemUrl] = useState("url_da_imagem_atual.jpg");

  const deleteIcon = async (e) => {
    e.preventDefault();
    openOrCloseDialog();

    try {
      const response = await fetch(
        `http://localhost:3000/profilePerfilIcon/${paramsId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
    if (response.ok) {
      setImagemUrl(null); // Remove a imagem do estado para sumir da tela na hora
    }
      return response;
    } catch (error) {
      throw new Error("Falha ao deletar a imagem de perfil!", { cause: error });
    }
  };


  return (
    <button
      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
      onClick={deleteIcon} type="button"
    >
      <div className="w-8 h-8 text-white">
        <X />
      </div>
    </button>
  );
}
