import { useContext, useEffect, useRef } from "react";
import { SubHeader } from "./subHeader";
import AppContext from "../context";

export function DialogSubHeaderMobile() {
  const dialogSub = useRef(null);

  const { dialogSubHeader, setDialogSubHeader } = useContext(AppContext);

  useEffect(() => {
    if (dialogSubHeader) {
      dialogSub?.current.showModal();
    } else {
      dialogSub?.current.close();
    }
  }, [dialogSubHeader]);

  return (
    <dialog
      ref={dialogSub}
      onCancel={() => setDialogSubHeader(false)}
      className="bg-primary w-full h-full max-w-full max-h-full m-0 p-0 fixed outline-none top-15 left-0 right-0 bottom-0"
    >
      <SubHeader isMobile={true} className="block"></SubHeader>
    </dialog>
  );
}