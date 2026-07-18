import { Link } from "react-router"

export function QuestionButton ({children, ...props}){
    return(
        <Link className="text-wine font-medium" {...props}>{children}</Link>
    )
}