export function Lines ({children, efe7dd, className, ...props}){
    return(
        <div className={`grow border-t-[1px] ${efe7dd ? "border-[#efe7dd]" : "border-border"}  ${className}`} {...props}>{children}</div>
    )
}