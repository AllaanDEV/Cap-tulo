
export function EventButton({children, className, ...props}){

    return(
    <button
      className={`cursor-pointer absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto ${className}`}
      {...props} type="button"
    >
      <div className="w-8 h-8">
        {children}
      </div>
    </button>
    )
}