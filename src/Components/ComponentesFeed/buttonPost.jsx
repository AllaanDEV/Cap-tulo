export function ButtonPost ({children, ...props}){
    return(
        <div className="flex gap-1 items-center hover:text-wine" {...props}>{children}</div>
    )
}