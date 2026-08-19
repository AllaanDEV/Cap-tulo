export function SelectBookCase({children, ...props}){
    return(
        <select className="h-11 rounded-md border border-[#dfcfb8] bg-[#fffaf3] px-4 text-sm outline-none" {...props}>{children}</select>
    )
}