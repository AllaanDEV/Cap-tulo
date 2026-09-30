export function Container({children, className, ...props}){
    return(
        <section className={`flex flex-col gap-5  ${className}`} {...props} >{children}</section>
    )
}