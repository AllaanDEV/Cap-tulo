import { useContext, useEffect, useRef } from "react";
import { SubHeader } from "./subHeader";
import AppContext from "../context";
import { LeftArrow } from "../svgCode";
import { ButtonPostar } from "./buttonPostar";

export function DialogSubHeaderMobile() {
  const dialogSub = useRef(null);

  const { dialogSubHeader, setDialogSubHeader} = useContext(AppContext);

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
      className="bg-primary w-full h-full max-w-full max-h-full m-0 p-0 outline-none top-15 left-0 right-0 bottom-0 py-5 px-2 pb-15 flex flex-col gap-2"
    >
      <div className="flex items-center justify-between text-gray">
        <button onClick={() => setDialogSubHeader(false)}>
          <LeftArrow size={"2em"}></LeftArrow>
        </button>

        <ButtonPostar></ButtonPostar>
      </div>

      <SubHeader isMobile={true} className="block"></SubHeader>
    </dialog>
  );
}
