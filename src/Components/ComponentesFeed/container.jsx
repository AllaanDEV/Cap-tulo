export function Container({children, ...props}){
    return(
        <div className="flex flex-col gap-5" {...props} >{children}</div>
    )
}