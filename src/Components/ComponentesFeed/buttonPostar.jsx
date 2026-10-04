import { useContext } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ButtonPostar({ className, editorValue, ...props }) {
  const {
    setValuePostCitation,
    setContainerModified,
    setDialogSubHeader,
    canPost,
  } = useContext(AppContext);
  const { newPost } = useRequisicoes({});

  return (
    <button
      className={`w-20 h-10 p-1 ml-auto bg-wine text-white rounded-2xl  sticky mt-auto ${!canPost ? "bg-wine/40 text-white/40" : "cursor-pointer"} ${className}`}
      disabled={!canPost}
      onClick={() => {
        (newPost(),
          editorValue(),
          setValuePostCitation(),
          setContainerModified(false));
        setDialogSubHeader(false);
      }}
      {...props}
    >
      Postar
    </button>
  );
}
