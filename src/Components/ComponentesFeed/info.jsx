export function Info({ children, className, ...props }) {
  return (
    <div className={`bg-background border border-border w-full h-auto flex items-center justify-center ${className}`} {...props}>{children}</div>
  );
}
 