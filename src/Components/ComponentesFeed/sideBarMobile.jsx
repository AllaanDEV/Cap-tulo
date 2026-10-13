import { useContext, useEffect } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { House, Person, Menu, Compass, More } from "../svgCode";
import { Link, useLocation, useNavigate } from "react-router";
import { SideBarMobileButtons } from "./sideBarMobileButtons";
import { DialogOptionsMobile } from "./dialogOptionsMobile";
import { DialogSubHeaderMobile } from "./DialogSubHeaderMobile";

export function SideBarMobile() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    options,
    setOption,
    setOptionsDialog,
    focusEditor,
    setDialogSubHeader,
  } = useContext(AppContext);
  const { user } = useRequisicoes({});

  useEffect(() => {
    if (location.pathname === `/feed/${user.id}`) {
      setOption("Feed");
    } else if (location.pathname === "/ebooks") {
      setOption("Explorar");
    } else if (location.pathname === `/perfil/${user.id}`) {
      setOption("Perfil");
    }
  }, [location.pathname, user.id]);

  return (
    <aside className="w-full bg-primary border-t border-border z-10 fixed bottom-0 xl:hidden flex justify-center ">
      <div className="flex items-center justify-between py-5 px-4 gap-30 lg:ml-auto">
        <div className="flex gap-8 lg:hidden">
          <SideBarMobileButtons
            option="Feed"
            options={options}
            setOption={setOption}
            to={`/feed/${user.id}`}
          >
            <House size="2em" />
          </SideBarMobileButtons>

          <SideBarMobileButtons
            option="Explorar"
            options={options}
            setOption={setOption}
            navigate={navigate}
            to="/ebooks"
          >
            <Compass size="2em" />
          </SideBarMobileButtons>
        </div>

        <Link
          onClick={() => {
            setOptionsDialog(false);
            setDialogSubHeader(true);
            focusEditor();
          }}
          className="rounded-full p-7 bg-amber-700 absolute left-1/2 -translate-x-1/2 outline-none top-[-15px] text-white cursor-pointer"
          to={location.pathname !== "/feed/" ? `/feed/${user.id}` : "/feed/"}
        >
          <More />
        </Link>

        <div className="flex gap-8">
          <SideBarMobileButtons
            option="Perfil"
            options={options}
            setOption={setOption}
            navigate={navigate}
            to={`/perfil/${user.id}`}
            className={"lg:hidden"}
          >
            <Person size="2em" />
          </SideBarMobileButtons>

          <SideBarMobileButtons
            option="Menu"
            options={options}
            setOption={setOption}
            navigate={navigate}
            setOptionsDialog={setOptionsDialog}
          >
            <Menu />
          </SideBarMobileButtons>
        </div>
      </div>
      <DialogOptionsMobile />
      <DialogSubHeaderMobile></DialogSubHeaderMobile>
    </aside>
  );
}
