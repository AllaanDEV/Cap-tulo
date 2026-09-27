export function Progress({ book, progress, goal }) {
  console.log("BOOK", progress);
  return (
    <div className="flex flex-col gap-1 mt-auto">
      <div className="flex justify-between">
        <span className="text-xs text-black/70">Progresso</span>
        <span className="text-xs text-wine">
          {book?.progress || progress?.progress || goal}%
        </span>
      </div>
      <div className="w-full rounded-2xl bg-gray/30">
        <div
          className="w-full py-1 rounded-2xl"
          style={{
            width: `${book?.progress >= 100 || progress?.progress >= 100 || goal === 100 ? "100" : book?.progress || progress?.progress || goal}%`,
            backgroundColor: `${book?.progress === 100 || progress?.progress || goal ? "green" : "bg-wine"}`,
          }}
        ></div>
      </div>
    </div>
  );
}
