export function InputDefault({ ...props }) {
 

  return (
    <input
      className=" rounded-xl
                    border border-[#ded2c1]
                    bg-primary
                    px-4 py-3
                    outline-none
                    focus:border-wine
                    focus:ring-2 focus:ring-[#ba613e]/10"
      {...props}
    ></input>
  );
}
