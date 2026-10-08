export function ContainerForm ({children, className}){
    return(
        <div  className={`flex flex-col text-center min-h-screen bg-red-50 ${className}`}>{children}</div>
    )
}

