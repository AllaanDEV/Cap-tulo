export function ButtonBook({ children, className, ...props }) {
  return (
    <button
      className={`rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-5 py-3 text-sm hover:bg-[#dfcfb8] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
