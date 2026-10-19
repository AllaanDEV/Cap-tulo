import { useParams } from "react-router";
import { X } from "../svgCode";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useContext } from "react";
import AppContext from "../context";

export default function DeleteImgIcon() {
  const XIcon = X;
  const { id: paramsId } = useParams();
  const {
    deleteImgPerfil: deleteImgPerfilRequest,
    getProfileEditData,
    fetchProfile,
  } = useRequisicoes({});
  const { openOrCloseDialog, setEditValue, setEditRequisicao } =
    useContext(AppContext);

  const deleteIcon = async (e) => {
    e.preventDefault();

    try {
      const response = await deleteImgPerfilRequest(paramsId);

      if (response.ok) {
        // Re-busca os dados do perfil: o backend grava midiaIcon = null e a UI
        // (icon.jsx lê editValue.dataPerfil.midiaIcon) só atualiza se o
        // editValue for recarregado — antes só um estado local mudava.
        const dataPerfil = await getProfileEditData(paramsId);
        setEditValue((prev) => ({ ...prev, dataPerfil }));
        fetchProfile();
        setEditRequisicao((v) => !v);
      }

      openOrCloseDialog();
      return response;
    } catch (error) {
      openOrCloseDialog();
      throw new Error("Falha ao deletar a imagem de perfil!", { cause: error });
    }
  };


  return (
    <button
      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
      onClick={deleteIcon} type="button"
    >
      <div className="w-8 h-8 text-white">
        <XIcon />
      </div>
    </button>
  );
}
