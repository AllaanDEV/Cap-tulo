export function ButtonLogin({children, ...props}){
    return(
        <button className="bg-white p-2 rounded-sm flex font-medium items-center gap-1" {...props}>
            {children}
        </button>
    )
}