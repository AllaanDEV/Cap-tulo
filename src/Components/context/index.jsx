import { useContext, useEffect, useRef, useState } from "react";
import AppContext from ".";

import { useComments } from "./hooks/useComments";
import { AnimationTransiton, Star } from "../svgCode";
import { House, Circle } from "../svgCode";
import { Compass } from "../svgCode";
import { book, logout, Group, save, spiral, Person } from "../svgCode";
import { useRequisicoes } from "./hooks/useRequisicoes";
import { useLocation, useNavigate } from "react-router";


import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function Context({ children }) {
  const navigate = useNavigate();

const transitionRef = useRef(null);
const [loadingLogin, setLoadingLogin] = useState(false);


  const [dialog, setDialog] = useState(false);
  const [publication, setPublication] = useState([]);

  const openOrCloseDialog = () => {
    setDialog(!dialog);
  };

  const Register = async ({ name, email, password, userName }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, userName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      alert("Email ou senha já cadastrados");
      return { success: false, error: error.message };
    }
  };

  const Login = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const responseJson = await response.json();

      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(responseJson.token));
        localStorage.setItem("user", JSON.stringify(responseJson.user));
      }

      return { success: true, userId: responseJson.user.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const dialogRef = useRef(null);

  const [editComments, setEditComments] = useState(false);

  const [EDIT, SETEDIT] = useState();
  const [postEdit, setPostEdit] = useState();

  const toggleComments = () => {
    setEditComments(!editComments);
  };

  useEffect(() => {
    if (editComments) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [editComments]);

  const stars = [
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
    { Star: Star, size: "20" },
  ];

  const [search, setSearch] = useState([]);
  const [post, setPost] = useState([]);
  const [edit, setEdit] = useState({});
  const [atualizar, setAtualizar] = useState(false);
  const [iconsProfile, setIconsProfile] = useState({});
  const [ebookSaved, setEbookSaved] = useState([]);
  const [styleCardActive, setStyleCardActive] = useState(null);
  const [ebooks, setEbooks] = useState([]);
  const [bookSearch, setBookSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [editRequisicao, setEditRequisicao] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [midiaIcon, setMidiaIcon] = useState();
  const [postId, setPostId] = useState();
  const [progressEbook, setProgressEbook] = useState([]);
  const [read, setRead] = useState(0);
  const [followers, setFollowers] = useState([]);
  const [dialogGif, setDialogGif] = useState(false);
  const [gifData, setGifData] = useState();
  const [hasText, setHasText] = useState(false);
  const [valuePostsCitation, setValuePostCitation] = useState();
  const [postModified, setPostModified] = useState();
  const [containerModified, setContainerModified] = useState(false);
  const [starFilled, setStarFilled] = useState(0);
  const [postCitation, setPostCitation] = useState(false);
  const [disabledCardActive, setDisabledCardActive] = useState(false);
  const [contentHtml, setContentHtml] = useState();
  const [dialogEmoji, setDialogEmoji] = useState(false);
  const [contentEmoji, setContentEmoji] = useState();
  const [feedbacksArray, setFeedbacksArray] = useState();
  const [postFocus, setPostFocus] = useState(false);
  const [dataPostFocus, setDataPostFocus] = useState();
  const [goal, setGoal] = useState({ number: 0 });
const [goalUser, setGoalUser]=useState()

  const [likesCommentList, setLikesCommentList] = useState([]);

  useEffect(() => {
    setAtualizar(atualizar);
  }, [atualizar]);

  useEffect(() => {
    setIconsProfile(iconsProfile);
  }, [iconsProfile]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPublication(data));
  }, [editRequisicao]);

  //    useEffect(()=>{
  //     const allFollowers= async() =>{
  //       const response = await fetch ("/allFollowers")
  //       const data= await response.json()
  // setFollowers(data)
  // console.log("ALLflow", data)
  //     }
  //     allFollowers()
  //    },[])

  const imgId = document.getElementById("post-midia");

  const [imgIdUrl, setImgIdUrl] = useState([]);

  const midia = (evento) => {
    const file = evento?.target.files[0];

    if (file) {
      const content = new FileReader();
      content.onload = (e) => {
        const urlObj = e.target.result;

        // imgId.src = e.target.result;
        // imgId.style.display = "block";
        setImgIdUrl((prev) => [...prev, urlObj]);
      };

      content.readAsDataURL(file);
    }
  };

  const [usersList, setUsersList] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [like, setLike] = useState([]);

  const progressAllEbooks =
    goal?.number > 0
      ? Math.min(
          (ebookSaved.reduce((acc, ebook) => acc + ebook.progress / 100, 0) /
            goal.number) *
            100,
          100,
        )
      : 0;

  const [followerPost, setFollowerPost] = useState(false);
  const textareaRef = document.getElementById("textearea");

  const [postSaved, setPostSaved] = useState([]);
  const [option, setOption] = useState("Feed");

  const ebooksFeedbacksObj = (feedbacksArray || []).reduce((acc, item) => {
    const key = item.ebook?.ebook?.id || item.ebook?.ebook?.volumeInfo?.title;

    if (!key) return acc;

    if (!acc[key]) {
      acc[key] = {
        data: item,
        number: 0,
        totalStars: 0,
        average: 0,
      };
    }

    acc[key].number += 1;
    acc[key].totalStars += item.stars || 0;
    acc[key].average = acc[key].totalStars / acc[key].number;

    return acc;
  }, {});

  const ebooksFeedbacks = Object.values(ebooksFeedbacksObj || {});
  const order = ebooksFeedbacks
    .sort((a, b) => b.average - a.average)
    .slice(0, 3);

  const [listFollowersPerfil, setListFollowersPerfil] = useState(false);
  const [styleButtonFollowersList, setStyleButtonFollowersList] = useState();

  const filterFollowers = (paramsId) => {
    return followers.filter((follower) => follower.userId === paramsId);
  };

  const isLiked = (postId, userId) => {
    return (
      like?.some(
        (p) =>
          p.postId === postId && p.userId === userId && p.validation === true,
      ) ?? false
    );
  };

  const likeLock = useRef({});
  const [liking, setLiking] = useState([]);

  const handleLike = async (postId, LikeButton) => {
    if (likeLock.current[postId]) return;

    likeLock.current[postId] = true;
    setLiking((prev) => [...prev, postId]);

    try {
      await LikeButton();
    } catch (error) {
      console.error(error);
    } finally {
      likeLock.current[postId] = false;
      setLiking((prev) => prev.filter((id) => id !== postId));
    }
  };

  const options = [
    { icon: House, name: "Feed" },
    { icon: Compass, name: "Explorar" },
    { icon: book, name: "Minha estante" },
    { icon: Person, name: "Perfil" },
    { icon: save, name: "Quero ler" },
    { icon: logout, name: "sair" },
  ];

  const canPost = Boolean(
    hasText ||
    imgIdUrl?.length > 0 ||
    gifData ||
    valuePostsCitation ||
    containerModified,
  );

  const [optionsDialog, setOptionsDialog] = useState(false);
  const [dialogSubHeader, setDialogSubHeader] = useState(false);

  const [focusEditorTrigger, setFocusEditorTrigger] = useState(false);

  const focusEditor = () => setFocusEditorTrigger((prev) => !prev);

  const clickOutside = (ref, callback) => {
    function handleClick(event) {
      const element = ref.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();

      const clickedBackdrop =
        element instanceof HTMLDialogElement &&
        event.target === element &&
        (event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom);

      if (!element.contains(event.target) || clickedBackdrop) {
        callback();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  };

  const toggleDialog = (e) => {
    if (e.target !== e.currentTarget) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const outside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (outside) {
      setOptionsDialog(false);
    }
  };

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const comments = useComments({ setHasText, setContentHtml });
  const [clearEditor, setClearEditor] = useState(() => () => {});

  const [formsOn, setFormsOn]=useState(false)


  const iniciarTransicao = (userId) => {
  if (loadingLogin) return;

  setLoadingLogin(true);

  const paths = transitionRef.current?.querySelectorAll("path");

  if (!paths?.length) {
    navigate(`/feed/${userId}`);
    setLoadingLogin(false);
    return;
  }

  gsap.killTweensOf(paths);

  const tl = gsap.timeline({
    onComplete: () => {
      setLoadingLogin(false);
    },
  });

  tl.set(paths, { visibility: "visible" });

tl.to(paths, {
  drawSVG: "100%",
  // strokeWidth: 2500,
  duration: 1.5,
  stagger: 0.08,
  ease: "power1.inOut",
});

tl.call(() => {
  navigate(`/feed/${userId}`);
});

tl.to(paths, {
  drawSVG: "100% 100%",
  duration: 1,
  stagger: 0.08,
  ease: "power1.inOut",
});

tl.set(paths, {
  clearProps: "strokeWidth,visibility",
});

tl.set(paths, {
  drawSVG: "0%",
});

  tl.set(paths, { visibility: "hidden" });
};

const [deletePhoto, setDeletePhoto] = useState(false);
const [feedFilter, setFeedFilter] = useState("todos");


const [themeOn, setThemeOn]=useState()

const themes = [
  {
    name: "",
    primary: "#fffbf7",
    background: "#f5efe6",
    text: "#000000",
    gray: "#a28f7a",
  },
  {
    name: "cocoa",
    primary: "#342721",
    background: "#342721",
    text: "#ffffff",
    gray: "#a28f7a",
  },
  {
    name: "cocoaNoir",
    primary: "#2c1e25",
    background: "#2c1e25",
    text: "#ffffff",
    gray: "#a28f7a",
  },
  {
    name: "noir",
    primary: "#000000",
    background: "#000000",
    text: "#ffffff",
    gray: "#a28f7a",
  },
  {
    name: "imperal",
    primary: "#000f08",
    background: "#000f08",
    text: "#ffffff",
    gray: "#a28f7a",
  },
];

  return (
    <AppContext.Provider
      value={{
        ...comments,
        openOrCloseDialog,
        dialog,
        Register,
        Login,
        publication,
        setPublication,
        toggleComments,
        dialogRef,
        EDIT,
        SETEDIT,
        postEdit,
        setPostEdit,
        search,
        setSearch,
        setPost,
        post,
        edit,
        setEdit,
        atualizar,
        setAtualizar,
        iconsProfile,
        setIconsProfile,
        ebooks,
        setEbooks,
        bookSearch,
        setBookSearch,
        searchValue,
        setSearchValue,
        ebookSaved,
        styleCardActive,
        setStyleCardActive,
        setEbookSaved,
        editRequisicao,
        setEditRequisicao,
        editValue,
        setEditValue,
        midiaIcon,
        setMidiaIcon,
        postId,
        setPostId,
        progressEbook,
        setProgressEbook,
        read,
        setRead,
        followers,
        setFollowers,
        midia,
        imgId,
        imgIdUrl,
        setImgIdUrl,
        dialogGif,
        setDialogGif,
        gifData,
        setGifData,
        hasText,
        setHasText,
        valuePostsCitation,
        setValuePostCitation,
        postModified,
        setPostModified,
        containerModified,
        setContainerModified,
        starFilled,
        setStarFilled,
        stars,
        postCitation,
        setPostCitation,
        disabledCardActive,
        setDisabledCardActive,
        contentHtml,
        setContentHtml,
        dialogEmoji,
        setDialogEmoji,
        contentEmoji,
        setContentEmoji,
        feedbacksArray,
        setFeedbacksArray,
        usersList,
        setUsersList,
        filterUsers,
        setFilterUsers,
        postFocus,
        setPostFocus,
        dataPostFocus,
        setDataPostFocus,
        like,
        setLike,
        goal,
        setGoal,
        progressAllEbooks,
        followerPost,
        setFollowerPost,
        postSaved,
        setPostSaved,
        option,
        setOption,
        order,
        listFollowersPerfil,
        setListFollowersPerfil,
        styleButtonFollowersList,
        setStyleButtonFollowersList,
        filterFollowers,
        isLiked,
        handleLike,
        liking,
        likesCommentList,
        setLikesCommentList,
        options,
        logout,
        canPost,
        optionsDialog,
        setOptionsDialog,
        focusEditor,
        focusEditorTrigger,
        dialogSubHeader,
        setDialogSubHeader,
        clickOutside,
        toggleDialog,
        ScrollToTop,
        clearEditor,
        setClearEditor, formsOn, setFormsOn, iniciarTransicao, loadingLogin, setLoadingLogin, deletePhoto, setDeletePhoto, feedFilter, setFeedFilter, goalUser, setGoalUser, themeOn, setThemeOn, themes
      }}
    >
         <div
        ref={transitionRef}
        className={`fixed inset-0 z-[300] pointer-events-none w-[100dvh] sm:w-[100vw] scale-240 scale-170 ${
          loadingLogin ? "visible" : "invisible"
        }`}
      >
        <AnimationTransiton />
      </div>
      {children}
    </AppContext.Provider>
  );
}
