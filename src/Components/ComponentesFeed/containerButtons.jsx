export function ContainerButtons({children, className, ...props}){
    return(

        <div className={`bg-primary rounded-4xl h-12 border border-border
              w-full flex justify-around py-1 px-1  ${className}`} {...props}>{children}</div>
    )
}