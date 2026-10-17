import { useContext, useEffect, useRef, useState, useLayoutEffect } from "react";
import { PencilIcon, Calendar, Maps, LinkIcon, Notification } from "../svgCode";
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
import { ButtonFlow } from "./buttonFlow";
import { ReadingPace } from "./readingPace";
import { Evaluated } from "./evaluated";
import { Container } from "../ComponentesFeed/container";
import { FollowersList } from "./followersList";
import { Interactions } from "./interactions";

import gsap from "gsap";

const Pencil = PencilIcon;

const CalendarIcon = Calendar;
const MapsIcon = Maps;
const LinkIconComp = LinkIcon;

const buttons = [
  { name: "Todos" },
  { name: "Publicações" },
  { name: "Estantes" },
  { name: "Interações" },
];

export function Icon() {
  const theme = useRef(null);

  const location = useLocation();

  const profile = location.state?.profile;

  const { id: profileId } = useParams();

  const [midiaOn, setMidiaOn] = useState(false);
  const [midiaTheme, setMidiaTheme] = useState(null);
  const [buttonFocus, setButtonFocus] = useState("Todos");

  const {
    setPublication,
    openOrCloseDialog,
    editRequisicao,
    editValue,
    setEditValue,
    followers,
    publication,
    setListFollowersPerfil,
    listFollowersPerfil,
    setStyleButtonFollowersList,
    setLike,
    feedFilter,
    setFeedFilter,
    themeOn,
  } = useContext(AppContext);

  const {
    nameIcon,
    user,
    token,
    fetchProfile,
    allFollowers,
    getBookSave,
    getPostsProfile,
    getProfileEditData,
    saveProfileTheme,
    getProfileTheme,
  } = useRequisicoes({ setLike });

  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const buttonRefs = useRef([]);

  useLayoutEffect(() => {
    const index = buttons.findIndex((b) => b.name === buttonFocus);
    const button = buttonRefs.current[index];
    const underline = underlineRef.current;

    if (!button || !underline) return;

    gsap.to(underline, {
      x: button.offsetLeft,
      width: button.offsetWidth,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  }, [buttonFocus]);

  useEffect(() => {
    getPostsProfile()
      .then((data) => setPublication(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchProfile();

    // likesGet();
  }, [publication, editValue]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const bios = [
    {
      bio: MapsIcon,
      description: editValue.dataPerfil?.location,
      id: "location",
    },
    {
      bio: LinkIconComp,
      description: editValue.dataPerfil?.link,
      id: "link",
    },
    {
      bio: CalendarIcon,
      description: `entrou em: ${new Date().toLocaleDateString("pt-br")}`,
      id: "calendar",
    },
  ];

  useEffect(() => {
    getBookSave(profileId);
  }, [profileId, token, editRequisicao]);

  const filterFeed = (index) => {
    if (index === 0) {
      setFeedFilter("todos");
    } else if (index === 1) {
      setFeedFilter("posts");
    } else if (index === 2) {
      setFeedFilter("livros");
    } else if (index === 3) {
      setFeedFilter("interacoes");
    }
  };

  useEffect(() => {
    const fetchPerfil = async () => {
      if (!profileId || !token) return;

      try {
        const dataPerfil = await getProfileEditData(profileId);
        setEditValue((prev) => ({ ...prev, dataPerfil }));
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchPerfil();
  }, [profileId, token, editRequisicao, profile]);

  const responseSrc = async () => {
    const responsePost = await saveProfileTheme(profileId, midiaTheme);

    if (responsePost.ok) {
      const data = await getProfileTheme(profileId);
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
      const data = await getProfileTheme(profileId);
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

  console.log("bioNUL", editValue);
  const bioNull =
    editValue && profileId == user.id
      ? "coloque uma descrição sobre você!"
      : null;

  useEffect(() => {
    allFollowers();
  }, [profileId]);


  const seguindoProfileId = followers.filter((f) => f.following === profileId);

  const seguindo = followers.filter(
    (f) => f.userId === (profile?.authorId || profile?.id || user.id),
  );


  return (
    <Container className="border border-border">
      {!listFollowersPerfil ? (
        <section
          className={`rounded-xs bg-primary w-[100vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw] ${themeOn ? "text-black" : "text-white"}`}
        >
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

            <div className="absolute w-[45vw] h-[45vw] max-h-60 max-w-60  sm:w-40 sm:h-40 bg-amber-700 bottom-[-20vw] sm:bottom-[-80px] 2xl:h-50 2xl:w-50 2xl:bottom-[-120px] left-5 rounded-full flex items-center justify-center overflow-hidden">
              {editValue.dataPerfil?.midiaIcon ? (
                <ImgPerfil
                  src={editValue.dataPerfil.midiaIcon}
                  alt="Foto de perfil"
                />
              ) : (
                <span className="text-5xl font-serif text-white">
                  {nameIcon(
                    editValue.dataPerfil?.name ||
                      profile?.author ||
                      profile?.name ||
                      user.name,
                  )}
                </span>
              )}
            </div>
          </div>

          <div
            className={`flex flex-col py-10 2xl:py-20 justify-end gap-5 text-black p-2 ${themeOn ? "text-black" : "text-white"}`}
          >
            <div
              className={`flex justify-end gap-2  mt-5 ${themeOn ? "text-black" : "text-white"}`}
            >
              <ContainerTags>
              <Notification ></Notification>
              </ContainerTags>
              {profileId !== user.id ? null : (
                <ContainerTags onClick={openOrCloseDialog}>
                  <Pencil></Pencil>
                  editar perfil
                </ContainerTags>
              )}
              {profileId === user.id ? null : (
                // <ContainerTags>
                <ButtonFlow profileId={profileId} />
                // </ContainerTags>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl">
                  {editValue.dataPerfil?.name ||
                    profile?.author ||
                    profile?.name ||
                    user.name}
                </h1>
                <span className="text-xs">
                  @
                  {editValue.dataPerfil?.username ||
                    profile?.author ||
                    profile?.name ||
                    user.userName}
                </span>
              </div>
              <p>{editValue?.dataPerfil?.bios || bioNull}</p>
            </div>
            <div className="flex gap-5">
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
              <button
                onClick={() => {
                  (setListFollowersPerfil(true),
                    setStyleButtonFollowersList("following"));
                }}
              >
                seguindo: {seguindo?.length}
              </button>
              <button
                onClick={() => {
                  (setListFollowersPerfil(true),
                    setStyleButtonFollowersList("followers"));
                }}
              >
                seguidores: {seguindoProfileId?.length}
              </button>
            </div>
            {/* <div className="flex gap-2 flex-wrap text-black/50">
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
            </div> */}
            <div class="grid grid-cols-3 border border-border rounded-2xl bg-background /60 divide-x divide-y divide-border overflow-hidden text-center lg:grid-rows-1 lg:grid-cols-3 lg:divide-y-0">
              <ArrayTable profile={profile}></ArrayTable>
            </div>
            <nav
              ref={navRef}
              className="relative flex gap-8 flex-nowrap overflow-auto [scrollbar-width:none] [*::-webkit-scrollbar]:hidden px-5"
            >
              {buttons.map((b, index) => (
                <button
                  key={b.name}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  className="text-gray whitespace-nowrap pb-2"
                  onClick={() => {
                    filterFeed(index);
                    setButtonFocus(b.name);
                  }}
                >
                  {b.name}
                </button>
              ))}

              <span
                ref={underlineRef}
                className="absolute bottom-0 left-0 block border-t-2 border-wine pointer-events-none"
              />
            </nav>

            <Lines></Lines>
            {feedFilter === "todos" || feedFilter === "livros" ? (
              <>
                <ReadingPace />
                <ArrayBookSaved profile={profile} />
                <Evaluated />
              </>
            ) : null}
            {feedFilter === "todos" || feedFilter === "posts" ? (
              <ArrayPosts />
            ) : null}
            {feedFilter === "interacoes" ? <Interactions /> : null}
          </div>

          <EditProfile></EditProfile>
        </section>
      ) : (
        <FollowersList></FollowersList>
      )}
    </Container>
  );
}
