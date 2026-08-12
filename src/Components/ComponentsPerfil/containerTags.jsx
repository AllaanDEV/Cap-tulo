export function ContainerTags({children, className}){
    return(
         <button className={`rounded-full h-10 border border-border p-3.5 text-center flex items-center gap-1 ${className}`}>
                    {children}
                </button>
    )
}