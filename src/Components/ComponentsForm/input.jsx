export function Input({ type, ...props }) {
  return (
    <div>
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <input
      name={type}
        type={type}
        className="bg-white w-full rounded-lg px-2 py-4 outline-white"
        required
        {...props}
      ></input>
    </div>
  );
}