export function Info({ children, ...props }) {
  return (
    <div className="bg-background border border-border w-full h-auto flex items-center justify-center" {...props}>{children}</div>
  );
}
 