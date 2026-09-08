export function Div({children, className, ...props}){
    return(
        <div className={`flex flex-col gap-3 border border-border p-3 rounded-2xl bg-primary ${className}`} {...props}>{children}</div>
    )
}