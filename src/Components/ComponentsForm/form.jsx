export function  Form ({children, active, ...props}){
    return(
        <form className="text-start flex flex-col justify-center" {...props} onSubmit={active}> {children}</form>
    )
}