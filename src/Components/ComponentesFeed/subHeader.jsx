import { Lines } from "../ComponentsForm/lines";

import {
  faceHappy,
  Star,
  // XSavedEbook,
  // quotation,
  // CitationIcon,
} from "../svgCode";
// import { ebook } from "../svgCode"
import { GifIcon } from "../svgCode";
import { gallery } from "../svgCode";
import { Div } from "./div";

// import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { useContext, useEffect, useRef } from "react";
import { TipTapEditor } from "./tiptapEditor";
import AppContext from "../context";

import { DialogGif } from "./dialogGif";

import { DialogImoji } from "./dialogEmoji";
import { ComplexPost } from "./complexPost";
import { useLocation } from "react-router";
// const Ebook = ebook;

// const navigation = [
//   { name: "Para você" },
//   { name: "Seguindo" },
//   { name: "Clubes" },
// ];

// const iconsCitationOpen = [
//   { icon: quotation, name: "quotation" },
//   { icon: Star, name: "star", size: "18" },
//   { icon: ebook, name: "ebook" },
// ];

const buttons = [
  { icon: Star, name: "Resenha", size: "18" },
  { icon: GifIcon, name: "Gif" },
  { icon: faceHappy, name: "Emojis" },
  { icon: gallery, name: "Foto" },
  // { icon: faceHappy, name: "imojis" },
];

export function SubHeader({ className, onEditorReady, isMobile = false }) {
  const emojiContainerRef = useRef(null);
  const location = useLocation();

  const {
    midia,
    styleCardActive,
    setDialogGif,
    imgIdUrl,
    setGifData,
    setPostModified,
    postCitation,
    setPostCitation,
    setDialogEmoji,
    dialogEmoji,
    setStyleCardActive,
    postModified,
    ebookSaved, themeOn 
  } = useContext(AppContext);

  // const { getBookSave, user, newPost, stylePatchFeed, stylePatchProfile } =
  //   useRequisicoes({});

  const citationOpen = (index) => {
    if (index === 0) {
      setPostCitation((prev) => !prev);
      setPostModified("citation");
      setStyleCardActive(ebookSaved[0] || null);
    } else if (index === 1) {
      setDialogGif((prev) => !prev);
    } else if (index === 2) {
      setDialogEmoji((prev) => !prev);
    }
  };

  // useEffect(() => {
  //   getBookSave(profileId);
  // }, []);

  // useEffect(() => {
  //   setStyleCardActive(ebookSaved[0]);
  // }, [ebookSaved, postCitation]);

  // const modified = (index) => {
  //   if (index === 1) {
  //     setPostModified("feedback");
  //   } else if (index === 0) {
  //     setPostModified("citation");
  //     setDisabledCardActive(false);
  //   } else if (index === 2) {
  //     setPostModified("resenha");
  //   }
  // };

  // const citationPublication = (e) => {
  //   setValuePostCitation(e.target.value);
  // };

  // const [styleButton, setStyleButton] = useState("quotation");

  useEffect(() => {
    // setPostModified();
    setPostCitation(false);
    setStyleCardActive();
  }, [location]);

  // useEffect(() => {
  //   setStyleCardActive(ebookSaved[0] || null);
  // }, [postModified]);

  return (
    <>
      <section
        className={`pb-5 flex flex-col gap-5 w-full  ${!isMobile ? "hidden xl:block" : "block"} ${className}`}
      >
        <Div className="w-full">
          {!postCitation ? (
            <>
              <TipTapEditor onEditorReady={onEditorReady}></TipTapEditor>
              <Lines></Lines>

              <nav className="flex justify-around">
                {buttons.map((p, index) => {
                  const Icon = p.icon;

                  if (index === 3) {
                    return (
                      <label
                        key={index}
                        className={`py-2  px-3 sm:px-6  rounded-xl group flex gap-2 items-center  ${
                          imgIdUrl?.length === 4
                            ? "text-gray pointer-events-none"
                            : "hover:bg-border focus:bg-border"
                        }`}
                        onClick={() => setGifData()}
                      >
                        <Icon imgIdUrl={imgIdUrl} />

                        <input
                          type="file"
                          className="hidden"
                          onChange={midia}
                          disabled={imgIdUrl?.length === 4}
                        />

                        <span className="hidden sm:block">{p.name}</span>
                      </label>
                    );
                  } else if (index === 2) {
                    return (
                      <div key={index} className="relative hidden sm:block">
                        <button
                            ref={emojiContainerRef}
                          onClick={() => citationOpen(index)}
                          className="hover:bg-border focus:bg-border py-2 px-3 sm:px-6 rounded-xl group transition-colors flex gap-2 items-center"
                        >
                          <Icon size={p.size} />
                          <span className="hidden sm:block">{p.name}</span>
                        </button>

                        {dialogEmoji && (
                          <div
                            ref={emojiContainerRef}
                            className="absolute top-full right-0 z-50 mt-2 bg-white overflow-y-scroll  h-80 border border-border rounded-lg scrollbar-none "
                          >
                            <DialogImoji
                              emojiContainerRef={emojiContainerRef}
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => citationOpen(index)}
                      className={`hover:bg-border focus:bg-border py-2 px-3 sm:px-6 rounded-xl group transition-colors flex gap-2 items-center ${themeOn ? "text-black" : "text-white"}`}
                    >
                      <Icon size={p.size} />
                      <span className=" hidden sm:block">{p.name}</span>
                    </button>
                  );
                })}
              </nav>
            </>
          ) : (
            <ComplexPost></ComplexPost>
          )}
        </Div>
      </section>
    </>
  );
}
