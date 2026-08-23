import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { Form } from "../ComponentsForm/form";
import { useLocation, useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function EditProfile() {
  const dialogRef = useRef(null);
  const { id: profileId } = useParams();

  const { state } = useLocation();

  const [defaultValue, setDefaultValue] = useState({});

  const {
    dialog,
    openOrCloseDialog,
    setEdit,
    setAtualizar,
    edit,
    editRequsicao,
    setEditRequisicao,
    setEditValue,
    editValue,
  } = useContext(AppContext);

  const { token } = useRequisicoes({});

  useEffect(() => {
    if (dialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [dialog]);

  useEffect(() => {
    setEdit(edit);
  }, [edit]);

  useEffect(() => {
    setDefaultValue(defaultValue)
  }, [defaultValue]);

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
            name: formData.get("name").trim(),
            username: formData.get("username").trim(),
            bios: formData.get("bio")?.trim() || null,
            location: formData.get("location")?.trim() || null,
            link: formData.get("link")?.trim() || null,
          }),
        },
      );

      if (editRequsicao) {
        setEditRequisicao(false);
      } else {
        setEditRequisicao(true);
      }

      return edit;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const reset = () => {
      setEditValue({});
    };

    reset();
  }, [profileId]);


    const [form, setForm] = useState({
    name: "",
    username: "",
    bios: "",
    location: "",
    link: "",
  });

  useEffect(() => {
    setForm({
      name: editValue?.name ?? "",
      username: editValue?.username ?? "",
      bios: editValue?.bios ?? "",
      location: editValue?.location ?? "",
      link: editValue?.link ?? "",
    });
  }, [editValue]);
  



  const changeInput = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
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
        <Form active={editProfile} method="dialog">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#e8dece] px-6 py-4">
            <div>
              <h2 className="font-serif text-2xl">Editar perfil</h2>
              <p className="mt-1 text-sm text-[#8c7b69]">
                Atualize como seu perfil aparece para outros leitores.
              </p>
            </div>

            <button
              type="button"
              onClick={openOrCloseDialog}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                text-xl
                text-[#786858]
                hover:bg-[#f3ecdf]
                transition
              "
            >
              ×
            </button>
          </div>

          {/* Conteúdo */}
          <div className="flex max-h-[70vh] flex-col gap-6 overflow-y-auto px-6 py-6">
            {/* Foto */}
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-[#f1e7d8] bg-[#e4d4bf]">
                <span className="font-serif text-2xl">HB</span>
              </div>

              <div>
                <button
                  type="button"
                  className="
                    rounded-full
                    border border-[#d9cbb8]
                    px-4 py-2
                    text-sm font-medium
                    hover:bg-[#f5eee3]
                    transition
                  "
                >
                  Alterar foto
                </button>

                <p className="mt-2 text-xs text-[#998875]">JPG, PNG ou WEBP.</p>
              </div>
            </div>

            {/* Nome + usuário */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Nome</span>

                <input
                  type="text"
                  name="name"
                  onChange={changeInput}
                  defaultValue={form.name}
                  required
                  className="
                    rounded-xl
                    border border-[#ded2c1]
                    bg-white
                    px-4 py-3
                    outline-none
                    focus:border-[#ba613e]
                    focus:ring-2 focus:ring-[#ba613e]/10
                  "
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Nome de usuário</span>

                <div className="flex items-center rounded-xl border border-[#ded2c1] bg-white px-4 focus-within:border-[#ba613e]">
                  <span className="text-[#9a8a78]">@</span>

                  <input
                    type="text"
                    name="username"
                    required
                    onChange={changeInput}
                    defaultValue={form.username}
                    className="w-full bg-transparent px-1 py-3 outline-none"
                  />
                </div>
              </label>
            </div>

            {/* Bio */}
            <label className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Sobre você</span>
                <span className="text-xs text-[#9b8b79]">0 / 180</span>
              </div>

              <textarea
                name="bio"
                rows="4"
                onChange={changeInput}
                defaultValue={form.bios}
                className="
                  resize-none
                  rounded-xl
                  border border-[#ded2c1]
                  bg-white
                  px-4 py-3
                  outline-none
                  focus:border-[#ba613e]
                  focus:ring-2 focus:ring-[#ba613e]/10
                "
              />
            </label>

            {/* Localização */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Localização</span>

              <input
                type="text"
                name="location"
                onChange={changeInput}
                defaultValue={form.location}
                placeholder="Cidade, Estado"
                className="
                  rounded-xl
                  border border-[#ded2c1]
                  bg-white
                  px-4 py-3
                  outline-none
                  focus:border-[#ba613e]
                  focus:ring-2 focus:ring-[#ba613e]/10
                "
              />
            </label>

            {/* Link */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Link</span>

              <input
                type="text"
                name="link"
                onChange={changeInput}
                defaultValue={form.link}
                placeholder="https://..."
                className="
                  rounded-xl
                  border border-[#ded2c1]
                  bg-white
                  px-4 py-3
                  outline-none
                  focus:border-[#ba613e]
                  focus:ring-2 focus:ring-[#ba613e]/10
                "
              />
            </label>

            {/* Preferências literárias */}
            <div>
              <p className="mb-3 text-sm font-medium">Interesses literários</p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Ficção literária",
                  "Ensaio",
                  "Poesia",
                  "Memórias",
                  "Clássicos",
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="
                      rounded-full
                      border border-[#dfd2bf]
                      bg-[#f8f2e8]
                      px-4 py-2
                      text-sm
                      text-[#856b51]
                      hover:border-[#ba613e]
                      hover:text-[#ba613e]
                      transition
                    "
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-[#e8dece] bg-[#fcf8f1] px-6 py-4">
            <button
              type="button"
              onClick={openOrCloseDialog}
              className="
                rounded-full
                border border-[#ded2c1]
                px-5 py-2.5
                text-sm font-medium
                hover:bg-[#f1e9dd]
                transition
              "
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                rounded-full
                bg-[#bb603e]
                px-6 py-2.5
                text-sm font-semibold
                text-white
                hover:bg-[#a95134]
                transition
              "
            >
              Salvar alterações
            </button>
          </div>
        </Form>
      </dialog>
    </>
  );
}
