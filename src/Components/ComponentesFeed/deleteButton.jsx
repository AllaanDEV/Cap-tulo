import { useContext } from "react";
import { XSavedEbook } from "../svgCode";
import AppContext from "../context";

export function DeleteButton(className) {
  const { setStyleCardActive, setPostModified, setContainerModified } =
    useContext(AppContext);
  return (
    <button
      className={`cursor-pointer flex items-start ${className}`}
      onClick={() => {
        (setStyleCardActive(), setPostModified(), setContainerModified(false));
      }}
    >
      <XSavedEbook size="1em"></XSavedEbook>
    </button>
  );
}
