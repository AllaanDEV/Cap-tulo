export function Container({children, ...props}){
    return(
        <div className=" px-4 flex flex-col gap-5" {...props} >{children}</div>
    )
}