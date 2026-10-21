import { Link } from "react-router";

export function SideBarMobileButtons({
  option,
  activeOption,
  setOption,
  setOptionsDialog,
  className,
  children,
  ...props
}) {

  return (
    <Link
      className={`${activeOption === option ? "text-wine" : "text-gray"} flex flex-col text-center items-center outline-none ${className}`}
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
