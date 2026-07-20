export function Div({children, ...props}){
    return(
        <div className="flex flex-col gap-3 border border-border p-3 rounded-2xl bg-primary" {...props}>{children}</div>
    )
}