export function Form({ children, className, active, ...props }) {
  return (
    <form
      className={`text-start flex flex-col gap-3 py-4 justify-center, ${className}`}
      {...props}
      onSubmit={active}
    >
      {" "}
      {children}
    </form>
  );
}
