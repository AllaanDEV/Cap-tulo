import { useContext, useEffect, useState } from "react";
import notificationIcon from "../../assets/svgIcons/notification-line.svg";
import { Div } from "../ComponentesFeed/div";
import { pencil, calendar, maps, link } from "../svgCode";
import { ContainerTags } from "./containerTags";

import { ArrayTable } from "./arrayTable";
import AppContext from "../context";
import { useLocation } from "react-router";
import { EditProfile } from "./editProfile";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Lines } from "../ComponentsForm/lines";
import { ArrayBookSaved } from "./arrayBookSaved";
import { ArrayPosts } from "./arrayPosts";
import { useParams } from "react-router";

const Pencil = pencil;

const Calendar = calendar;
const Maps = maps;
const Link = link;

const tags = [
  { description: "Ficção literária" },
  { description: "ensaio" },
  { description: "Poesia" },
  { description: "Clássicos" },
  { description: "Memórias" },
];

const buttons = [
  { name: "Todos" },
  { name: "Publicações" },
  { name: "Estantes" },
  { name: "Sobre" },
];

export function Icon() {


  const { id: profileId } = useParams();

  const { setPublication, openOrCloseDialog, setEbookSaved, editRequsicao, editValue, setEditValue } =
    useContext(AppContext);
  const { state } = useLocation();

  const { nameIcon, user, token } = useRequisicoes({});

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPublication(data));
    // os dados dps da promessa
  }, []);

  const bios = [
    {
      bio: Maps,
      description: editValue.location,
      id: "location",
    },
    {
      bio: Link,
      description: editValue.link,
      id: "link",
    },
    {
      bio: Calendar,
      description: `entrou em: ${new Date().toLocaleDateString("pt-br")}`,
      id: "calendar",
    },
  ];

  useEffect(() => {
    const getBookSave = async () => {

      try {
        setEbookSaved([]);

        const response = await fetch(
          `http://localhost:3000/api/books/saved/${profileId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Erro ao buscar livros");
        }

        setEbookSaved(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error.message);
        setEbookSaved([]);
      }
    };

    if (profileId) {
      getBookSave();
    }
  }, [profileId, token]);

  const [feedfilter, setFeedFilter] = useState(null);

  const filterFeed = (index) => {
    if (index === 1) {
      setFeedFilter(false);
    } else if (index === 0) {
      setFeedFilter(null);
    } else if (index === 2) {
      setFeedFilter(true);
    }
  };

  const [buttonFocus, setButtonFocus] = useState("Todos");

  useEffect(() => {

    const fetchProfile = async () => {
      if (!profileId || !token) return;

      try {
        const response = await fetch(
          `http://localhost:3000/profileEdit/${profileId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const data = await response.json();
      setEditValue(data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchProfile();
  }, [profileId, token, editRequsicao]);

  return (
    <section className="flex flex-col gap-3 border border-border p-1 rounded-xs bg-primary w-[70vw] mx-auto">
      <div className="bg-amber-300 w-full h-30 max-h-30 relative sm:h-50 sm:max-h-50 2xl:h-60  2xl:max-h-70">
        <div className="absolute w-20 h-20 sm:w-40 sm:h-40 bg-red-400 bottom-[-40px] sm:bottom-[-80px] 2xl:h-50 2xl:w-50 2xl:bottom-[-120px] left-5 rounded-full text-center     grid place-items-center">
          <span className="text-5xl absolute bottom-5.5 flex items-center justify-center">
            {nameIcon(editValue.name || state?.author)}
          </span>
        </div>
      </div>
      <div className="flex flex-col py-10 2xl:py-20 justify-end gap-5 text-black p-2">
        <div className="flex justify-end gap-2 text-black">
          <ContainerTags>
            <img src={notificationIcon} className="w-auto h-5"></img>
          </ContainerTags>
          <ContainerTags onClick={openOrCloseDialog}>
            <Pencil></Pencil>
            editar perfil
          </ContainerTags>
          <ContainerTags className="bg-wine text-white">
            <p>seguir</p>
          </ContainerTags>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">
              {editValue?.name || state?.author || user?.name}
            </h1>
            <span className="text-xs">
              @{editValue?.username || state?.author || user?.name}
            </span>
          </div>
          <p>{editValue.bios || "coloque uma descrição sobre você!"}</p>
        </div>
        <div className="md:flex gap-5">
          {bios
            .filter((b) => b.description)
            .map((b) => {
              const BioIcon = b.bio;
              return (
                <p
                  key={b.id}
                  className="grid grid-flow-col gap-1 items-center text-gray"
                >
                  {BioIcon && <BioIcon></BioIcon>}
                  {b.description}
                </p>
              );
            })}
        </div>

        <div className="flex gap-2 flex-wrap text-black/50">
          {tags.map((t, index) => {
            return (
              <p
                key={index}
                className="rounded-full border border-border  px-3 text-center bg-background flex items-center"
              >
                {t.description}
              </p>
            );
          })}
        </div>

        <div class="grid grid-cols-2 border border-border rounded-2xl bg-background /60 divide-x divide-y divide-border overflow-hidden text-center lg:grid-rows-1 lg:grid-cols-4 lg:divide-y-0">
          <ArrayTable></ArrayTable>
        </div>

        <nav className="flex gap-8 flex-nowrap overflow-auto  [scrollbar-width:none] [*::-webkit-scrollbar]:hidden px-5">
          {buttons.map((b, index) => {
            return (
              <button
                key={index}
                className="text-gray"
                onClick={() => {
                  filterFeed(index);
                  setButtonFocus(b.name);
                }}
              >
                {b.name}

                {buttonFocus === b.name && (
                  <span className="mt-1 block border-t-[2px] border-wine" />
                )}
              </button>
            );
          })}
        </nav>

        <Lines></Lines>

        {feedfilter === null ? (
          <Div>
            <ArrayBookSaved></ArrayBookSaved>
          </Div>
        ) : feedfilter === false ? null : (
          <Div>
            <ArrayBookSaved></ArrayBookSaved>
          </Div>
        )}

        {feedfilter === null ? (
          <ArrayPosts></ArrayPosts>
        ) : feedfilter === false ? (
          <ArrayPosts></ArrayPosts>
        ) : null}
      </div>

      <EditProfile></EditProfile>
    </section>
  );
}
