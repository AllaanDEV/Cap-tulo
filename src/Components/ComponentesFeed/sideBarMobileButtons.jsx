export function SideBarMobileButtons({
  option,
  options,
  setOption,
  navigate,
  to,
  setOptionsDialog,
  children,
}) {

  return (
    <button
      className={`${options === option ? "text-wine" : "text-gray"} flex flex-col text-center items-center outline-none`}
      onClick={() => {
        setOption(option);
        navigate(to);
        setOptionsDialog(true);
      }}
    >
  
      {children}
    </button>
  );
}
