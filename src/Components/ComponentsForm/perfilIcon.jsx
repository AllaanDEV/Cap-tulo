import { Link } from "react-router";
export function PerfilIcon({ children, ...props }) {

  return (
    <Link {...props}>
      <div className="bg-amber-800 rounded-4xl p-4 relative" {...props}>
        <p className="absolute top-1 right-1 left-1 bottom-1 text-white font-medium">{children}</p>
      </div>
    </Link>
  );
}
