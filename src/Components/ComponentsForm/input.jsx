export function Input({ type, ...props }) {
  return (
    <div className="">
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <input
        type={type}
        className="bg-white w-full rounded-sm p-1"
        required
        {...props}
      ></input>
    </div>
  );
}