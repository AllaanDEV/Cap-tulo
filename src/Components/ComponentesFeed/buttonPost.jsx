export function ButtonPost ({children, ...props}){
    return(
        <button className="flex gap-1 items-center hover:text-wine" {...props}>{children}</button>
    )
}