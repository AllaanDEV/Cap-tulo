import { useContext, useEffect, useRef } from "react";
import AppContext from "../context";
import { UsersInfo } from "./usersInfo";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Info } from "./info";
import { XSavedEbook } from "../svgCode";

export function DialogOptionsMobile() {
  const optionsRef = useRef(null);
  const { optionsDialog, setOptionsDialog } = useContext(AppContext);
  const { user } = useRequisicoes({});

  useEffect(() => {
    if (optionsDialog) {
      optionsRef?.current.showModal();
    } else {
      optionsRef?.current.close();
    }
  }, [optionsDialog]);

  return (
    <dialog
      ref={optionsRef}
      onCancel={() => setOptionsDialog(false)}
      className="bg-primary rounded-t-3xl outline-none h-80 w-full max-w-full fixed mt-auto p-0  bottom-0 left-0 right-0 backdrop:bg-black/50 px-5 py-2"
    >
      <section>
        <div>
          <Info className="rounded-2xl py-3 px-4 flex">
            <div className="w-full flex items-start">
              <UsersInfo users={user}></UsersInfo>
            </div>
            <button onClick={() => setOptionsDialog(false)}>
                < XSavedEbook size={"1.2em"}></XSavedEbook>
            </button>
          </Info>
        </div>

      </section>
    </dialog>
  );
}
