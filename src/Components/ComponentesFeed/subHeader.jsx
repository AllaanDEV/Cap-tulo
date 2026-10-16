import { Lines } from "../ComponentsForm/lines";

import { FaceHappy, Star } from "../svgCode";
import { GifIcon } from "../svgCode";
import { Gallery } from "../svgCode";
import { Div } from "./div";

import { useContext, useEffect, useRef } from "react";
import { TipTapEditor } from "./tiptapEditor";
import AppContext from "../context";

import { DialogEmoji } from "./dialogEmoji";
import { ComplexPost } from "./complexPost";
import { useLocation } from "react-router";

const buttons = [
  { icon: Star, name: "Resenha", size: "18" },
  { icon: GifIcon, name: "GIFs" },
  { icon: FaceHappy, name: "Emojis" },
  { icon: Gallery, name: "Foto" },
];

export function SubHeader({ className, onEditorReady, isMobile = false }) {
  const emojiContainerRef = useRef(null);
  const location = useLocation();

  const {
    midia,
    setDialogGif,
    imgIdUrl,
    setGifData,
    setPostModified,
    postCitation,
    setPostCitation,
    setDialogEmoji,
    dialogEmoji,
    setStyleCardActive,
    ebookSaved,
    themeOn,
  } = useContext(AppContext);

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

  useEffect(() => {
    setPostCitation(false);
    setStyleCardActive();
  }, [location]);

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
                            <DialogEmoji
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
