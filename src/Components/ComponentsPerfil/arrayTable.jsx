const tableObj = [
  { name: "Lidos", number: 142 },
  { name: "Resenhas", number: 82 },
  { name: "Seguindo", number: 318 },
  { name: "Seguidores", number: "1,2k" },
];

export function ArrayTable() {
  return (
    <>
      {tableObj.map((t, index) => {
        return (
          <div
            className="p-4 flex flex-col justify-center items-center"
            key={index}
          >
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
              {t.name.toUpperCase()}
            </span>
            <span className="text-2xl font-serif text-stone-800 font-semibold mt-1">
              {t.number}
            </span>
          </div>
        );
      })}
    </>
  );
}
