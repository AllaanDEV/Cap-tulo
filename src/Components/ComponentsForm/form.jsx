export function Form ({children, ...props}){
    return(
        <form className="text-start flex flex-col justify-center" {...props}> {children}</form>
    )
}