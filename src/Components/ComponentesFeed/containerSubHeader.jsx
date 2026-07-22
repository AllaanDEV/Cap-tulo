export function ContainerSubHeader ({children, ...props}){
    return(
        <div className="pt-7 pb-5 flex  min-w-full" {...props}>{children}</div>
    )
}