import { useContext, useEffect, useRef, useState } from "react";
import { InputDefault } from "./inputDefault";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { ImgPerfil } from "./imgPerfil";
import { Form } from "../ComponentsForm/form";

export function FormEditProfile({ active, ...props }) {
  const inputFile = useRef(null);

  const { openOrCloseDialog, editValue, setMidiaIcon} = useContext(AppContext);
  const { user, fetchProfile, photoValueFeed } = useRequisicoes({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const photo = (photoValueFeed ? photoValueFeed : []).find(
    (photo) => photo.userId == user.id,
  );

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

  const photoIcon = (evento) => {
    const file = evento.target.files[0];

    if (file) {
      const content = new FileReader();
      content.onload = (e) => {
        inputFile.current.src = e.target.result;
        inputFile.current.style.display = "block";

        setMidiaIcon(content.result);
      };

      content.readAsDataURL(file);
    }
  };

  const fields = [
    {
      label: "Localização",
      name: "location",
      defaultValue: form.location,
      placeholder: "Cidade, Estado",
    },
    {
      label: "Link",
      name: "link",
      defaultValue: form.link,
      placeholder: "https://...",
    },
  ];

  return (
    <Form active={active} method="dialog" {...props}>
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
          <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-[#f1e7d8] bg-[#e4d4bf] font-serif text-2xl text-center">
            <ImgPerfil ref={inputFile} src={photo?.midiaIcon}></ImgPerfil>
            <label>
              <input
                className="hidden"
                type="file"
                onChange={photoIcon}
              ></input>
            </label>
          </div>

          <div>
            <label
              type="file"
              className="
                            rounded-full
                            border border-[#d9cbb8]
                            px-4 py-2
                            text-sm font-medium
                            hover:bg-[#f5eee3]
                            transition
                          "
            >
              <input type="file" onChange={photoIcon}></input>
              Alterar foto
            </label>

            <p className="mt-2 text-xs text-[#998875]">JPG, PNG ou WEBP.</p>
          </div>
        </div>

        {/* Nome + usuário */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Nome</span>

            <InputDefault
              type="text"
              name="name"
              onChange={changeInput}
              defaultValue={form.name || user.name}
              required
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
                defaultValue={form.username || user.name}
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
            name="bios"
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
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-sm font-medium">{field.label}</span>

            <InputDefault
              type="text"
              name={field.name}
              onChange={changeInput}
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
            />
          </label>
        ))}

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
  );
}
