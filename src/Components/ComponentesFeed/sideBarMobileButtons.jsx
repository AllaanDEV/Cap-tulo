import { Link } from "react-router";

export function SideBarMobileButtons({
  option,
  options,
  setOption,
  setOptionsDialog,
  children,
  ...props
}) {

  return (
    <Link
      className={`${options === option ? "text-wine" : "text-gray"} flex flex-col text-center items-center outline-none`}
      onClick={() => {
        setOption(option);
        setOptionsDialog(true);
      }}
      {...props}
    >
  
      {children}
    </Link>
  );
}
