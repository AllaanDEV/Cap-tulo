export function Lines ({children, className, ...props}){
    return(
        <div className={`grow border-t-[1px] border-border ${className}`} {...props}>{children}</div>
    )
}