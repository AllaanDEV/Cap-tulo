export function  Form ({children, active, ...props}){
    return(
        <form className="text-start flex flex-col gap-3 py-4 justify-center" {...props} onSubmit={active}> {children}</form>
    )
}