export function ImgPerfil({className, ...props}){
    return(
        <img className={`w-full h-full object-cover object-center ${className}`} {...props}></img>
    )
} 