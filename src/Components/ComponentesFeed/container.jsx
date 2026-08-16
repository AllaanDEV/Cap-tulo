export function Container({children, className, ...props}){
    return(
        <div className={`flex flex-col gap-5  ${className}`} {...props} >{children}</div>
    )
}