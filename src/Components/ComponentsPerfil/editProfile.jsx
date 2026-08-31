import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";

import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

import { FormEditProfile } from "./formEditProfile";

export function EditProfile() {
  const dialogRef = useRef(null);
  const { id: profileId } = useParams();

  const { token, fetchProfile } = useRequisicoes({});
  const {
    dialog,
    openOrCloseDialog,
    setAtualizar,
    setEditRequisicao,
    setEditValue,
    midiaIcon,

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
      const edit = await fetch(
        `
http://localhost:3000/profileEdit/${profileId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            // name: formData.get("name").trim(),
            // username: formData.get("username").trim(),
            bios: formData.get("bios")?.trim() || null,
            location: formData.get("location")?.trim() || null,
            link: formData.get("link")?.trim() || null,
            midiaIcon: midiaIcon || null,
          }),
        },
      );

      setEditRequisicao((previousValue) => !previousValue);

      return edit;
    } catch (error) {
      console.error("Erro ao editar perfil:", error);
    }
  };

  useEffect(() => {
    setEditValue({});
  }, [profileId]);

  const editUser = async (e) => {
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        `http://localhost:3000/updateUser/${profileId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.get("name").trim(),
            userName: formData.get("username").trim(),
          }),
        },
      );
      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data.user));

      return response;
    } catch (error) {
      throw new Error.json({
        message: "Não foi possivel efetuar a mudança de nome do usuário",
        error,
      });
    }
  };   

  return (
    <>
      <dialog
        ref={dialogRef}
        onCancel={openOrCloseDialog}
        className="
          backdrop:bg-black/40
          backdrop:backdrop-blur-[2px]

          m-auto
          w-[calc(100%-2rem)]
          max-w-2xl

          rounded-2xl
          border border-[#e5d9c8]
          bg-[#fffdf8]
          text-[#2c2119]
          shadow-2xl
        "
      >
        <FormEditProfile
          active={(e) => {
            editProfile(e);
            editUser(e);
          }}
        ></FormEditProfile>
      </dialog>
    </>
  );
}
