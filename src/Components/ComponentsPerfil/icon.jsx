import { useContext, useEffect, useRef, useState } from "react";
import notificationIcon from "../../assets/svgIcons/notification-line.svg";
import { Div } from "../ComponentesFeed/div";
import { pencil, calendar, maps, link, x } from "../svgCode";
import { ContainerTags } from "./containerTags";
import Camera from "../../assets/camera-1-remix.png";

import { ArrayTable } from "./arrayTable";
import AppContext from "../context";
import { EditProfile } from "./editProfile";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Lines } from "../ComponentsForm/lines";
import { ArrayBookSaved } from "./arrayBookSaved";
import { ArrayPosts } from "./arrayPosts";
import { useLocation, useParams } from "react-router";
import { ImgPerfil } from "./imgPerfil";

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
  const theme = useRef(null);
  // const { id: paramsId } = useParams();
  const location = useLocation();
  const post = location.state;

  const { id: profileId } = useParams();
  const [midiaOn, setMidiaOn] = useState(false);
  const [midiaTheme, setMidiaTheme] = useState(null);

  const [following, setFollowing] = useState([]);

  const {
    setPublication,
    openOrCloseDialog,
    setEbookSaved,
    editRequisicao,
    editValue,
    setEditValue,
    followers,
  } = useContext(AppContext);

  const { nameIcon, user, token, fetchProfile, likesGet, allFollowers } =
    useRequisicoes({});

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPublication(data));
  }, []);

  // useEffect(() => {
  //   fetchProfile();
  //   likesGet();
  // }, [publication, editValue]);

  const bios = [
    {
      bio: Maps,
      description: editValue.dataPerfil?.location,
      id: "location",
    },
    {
      bio: Link,
      description: editValue.dataPerfil?.link,
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

        const dataPerfil = await response.json();
        setEditValue((prev) => ({ ...prev, dataPerfil }));
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchProfile();
  }, [profileId, token, editRequisicao]);

  const responseSrc = async () => {
    const responsePost = await fetch(
      `http://localhost:3000/profileTheme/${profileId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          midiaTheme: midiaTheme || null,
        }),
      },
    );

    if (responsePost.ok) {
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
    }
  };

  useEffect(() => {
    if (midiaTheme === null) {
      return;
    }
    const res = async () => {
      await responseSrc();
    };

    res();
  }, [midiaTheme]);

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

  const photoTheme = (evento) => {
    setMidiaOn(!midiaOn);
    const file = evento.target.files[0];

    if (file) {
      const content = new FileReader();

      content.onload = (e) => {
        theme.current.src = e.target.result;
        theme.current.style.display = "block";

        setMidiaTheme(content.result);
      };

      content.readAsDataURL(file);
    }
  };

  const bioNull =
    editValue?.dataPerfil?.userId == user.id
      ? "coloque uma descrição sobre você!"
      : null;

  const followersPost = async () => {
    const response = await fetch(
      `http://localhost:3000/user/followers/${profileId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: user.name,
          userId: user.id,
        }),
      },
    );

    if (response.ok) {
      userUP();
      allFollowers();
    }
  };

  const userUP = async () => {
    const response = await fetch(`http://localhost:3000/updateUser`);
    const data = await response.json();
    setFollowing(data);
  };

  useEffect(() => {
    allFollowers();
  }, [profileId]);

  const validationFollowers = followers.find(
    (follower) => follower.userId === user.id,
  );

  const seguindoProfileId = followers.filter((f) => f.following === profileId);

  const seguindo = followers.filter(
    (f) => f.userId === (post?.authorId ?? user.id),
  );

  return (
    <section className="flex flex-col gap-3 rounded-xs bg-primary sm:w-[70vw] mx-auto">
      <div className="bg-wine w-full h-[60vw] max-h-60 relative  sm:h-60 sm:max-h-60 2xl:h-70 2xl:max-h-70">
        {user.id === profileId ? (
          <label className="absolute cursor-pointer w-full h-full">
            {!editValue?.data?.midiaTheme && (
              <span className="w-full my-25 flex justify-center">
                <img src={Camera} className="h-20 w-20"></img>
              </span>
            )}
            <ImgPerfil
              ref={theme}
              className={editValue?.data?.midiaTheme ? "" : "hidden"}
              src={editValue?.data?.midiaTheme}
            />

            <input
              className="absolute inset-0 opacity-0 cursor-pointer bg-transparent"
              type="file"
              onChange={photoTheme}
            ></input>
          </label>
        ) : (
          <ImgPerfil
            ref={theme}
            className={editValue?.data?.midiaTheme ? "" : "hidden"}
            src={editValue?.data?.midiaTheme}
          />
        )}

        <div className="absolute w-[30vw] h-[30vw] sm:w-40 sm:h-40 bg-amber-700 bottom-[-15vw] sm:bottom-[-80px] 2xl:h-50 2xl:w-50 2xl:bottom-[-120px] left-5 rounded-full text-center  place-items-center overflow-hidden">
          {editValue.dataPerfil?.midiaIcon ? (
            <ImgPerfil
              src={editValue.dataPerfil.midiaIcon}
              alt="Foto de perfil"
            />
          ) : (
            <span className="text-5xl absolute bottom-[9vw] sm:bottom-13 flex items-center justify-center m-auto font-serif text-white">
              {nameIcon(editValue.dataPerfil?.name || post?.author || user.name)}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col py-10 2xl:py-20 justify-end gap-5 text-black p-2">
        <div className="flex justify-end gap-2 text-black mt-5">
          <ContainerTags>
            <img src={notificationIcon} className="w-auto h-5"></img>
          </ContainerTags>
          {profileId !== user.id ? null : (
            <ContainerTags onClick={openOrCloseDialog}>
              <Pencil></Pencil>
              editar perfil
            </ContainerTags>
          )}
          {profileId === user.id ? null : (
            <ContainerTags className="bg-wine text-white">
              <button onClick={followersPost}>
                {validationFollowers ? "Deixar de seguir" : "Seguir"}
              </button>
            </ContainerTags>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">
              {editValue.dataPerfil?.name || post?.author || user.name}
            </h1>
            <span className="text-xs">
              @{editValue.dataPerfil?.username || post?.author || user.username}
            </span>
          </div>
          <p>{editValue?.dataPerfil?.bios || bioNull}</p>
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
        <div className="flex gap-4">
          <span>seguindo: {seguindo?.length}</span>
          <span>seguidores: {seguindoProfileId?.length}</span>
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

        <div class="grid grid-cols-3 border border-border rounded-2xl bg-background /60 divide-x divide-y divide-border overflow-hidden text-center lg:grid-rows-1 lg:grid-cols-3 lg:divide-y-0">
          <ArrayTable post={post}></ArrayTable>
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

        {feedfilter === null || feedfilter !== false ? (
          <Div>
            <ArrayBookSaved></ArrayBookSaved>
          </Div>
        ) : null}

        {feedfilter === null || feedfilter === false ? (
          <ArrayPosts></ArrayPosts>
        ) : null}
      </div>

      <EditProfile></EditProfile>
    </section>
  );
}
