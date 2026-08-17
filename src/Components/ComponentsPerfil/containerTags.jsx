export function ContainerTags({ children, className, ...props }) {
  return (
    <button
    {...props} 
    className={`rounded-full h-10 border border-border p-3.5 text-center flex items-center gap-1 ${className}`}
    >
      {children}
    </button>
  );
}
