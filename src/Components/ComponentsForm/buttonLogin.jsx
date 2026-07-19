import { Link } from "react-router"

export function ButtonLogin({children, ...props}){
    return(
        <Link className="bg-white p-2 rounded-sm flex font-medium items-center gap-1" {...props}>
            {children}
        </Link>
    )
}