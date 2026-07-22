export function Info({ children, ...props }) {
  return (
    <div className="bg-background border border-border rounded-3xl w-full h-auto flex items-center" {...props}>{children}</div>
  );
}
 