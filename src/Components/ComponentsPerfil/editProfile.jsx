import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";

import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

import { FormEditProfile } from "./formEditProfile";

export function EditProfile() {
  const dialogRef = useRef(null);
  const { id: profileId } = useParams();

  const {
    fetchProfile,
    editProfileRequest,
    editUserRequest,
    getProfileEditData,
    token,
    editRequisicao,
  } = useRequisicoes({});
  const {
    dialog,
    openOrCloseDialog,
    setAtualizar,
    setEditRequisicao,
    setEditValue,
    midiaIcon,
    editValue,
    deletePhoto,
    setMidiaIcon,
    setDeletePhoto, themeOn
  } = useContext(AppContext);

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (dialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [dialog]);

  const editProfile = async (e) => {
    openOrCloseDialog();
    setAtualizar(true);

    const formData = new FormData(e.target);

    try {
      const edit = await editProfileRequest(profileId, {
        name: formData.get("name").trim(),
        username: formData.get("username").trim(),
        bios: formData.get("bios")?.trim() || null,
        location: formData.get("location")?.trim() || null,
        link: formData.get("link")?.trim() || null,
        midiaIcon: deletePhoto
          ? null
          : midiaIcon || editValue.dataPerfil.midiaIcon || null,
      });

      if (edit.ok) {
        setEditRequisicao((previousValue) => !previousValue);
        setDeletePhoto(false);
        setMidiaIcon(null);
      }
      return edit;
    } catch (error) {
      console.error("Erro ao editar perfil:", error);
    }
  };

  useEffect(() => {
    // Sincroniza o perfil da URL atual em editValue.dataPerfil. Usar
    // "setEditValue({})" aqui apagava dataPerfil/data ao desmontar (ex.: ao
    // abrir a lista de seguidores), o que fazia a foto e o tema sumirem ao
    // voltar — só o F5 recuperava.
    if (!profileId || !token) return;

    const fetchPerfil = async () => {
      try {
        const dataPerfil = await getProfileEditData(profileId);
        setEditValue((prev) => ({ ...prev, dataPerfil }));
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchPerfil();
  }, [profileId, token, editRequisicao]);

  const editUser = async (e) => {
    const formData = new FormData(e.target);

    try {
      const response = await editUserRequest(profileId, {
        name: formData.get("name").trim(),
        userName: formData.get("username").trim(),
      });

      return response;
    } catch (error) {
      throw new Error.json({
        message: "Não foi possivel efetuar a mudança de nome do usuário",
        error,
      });
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={openOrCloseDialog}
      className={`fixed inset-0
    m-0
    w-screen
    h-screen
    max-w-none
    max-h-none

    border
    border-[#e5d9c8]
    bg-primary
   
   
    shadow-2xl

    backdrop:bg-black/40
    backdrop:backdrop-blur-[2px]

scrollbar-none
    sm:m-auto
    sm:w-[calc(100%-2rem)]
    sm:max-w-2xl
    sm:h-auto
    sm:max-h-[90vh]
    sm:rounded-2xl ${themeOn ? " text-[#2c2119]" : "text-white"}`}
    >
      <FormEditProfile
        active={(e) => {
          editProfile(e);
          editUser(e);
        }}
      />
    </dialog>
  );
}
