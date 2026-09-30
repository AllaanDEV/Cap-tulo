export function Progress({ book, progress, goal,className}) {
  console.log("BOOK", book);
  const currentProgress = book?.progress ?? progress?.progress ?? goal ?? 0;

  return (
    <div className={`flex flex-col gap-1 mt-auto ${className}`}>
      <div className="flex justify-between">
        <span className="text-xs text-black/70">Progresso</span>

        <span className="text-xs text-wine">{currentProgress}%</span>
      </div>

      <div className="w-full rounded-2xl bg-gray/30 transition-all duration-500">
        <div
          className={`${currentProgress >= 100 ? "bg-green-700" : "bg-wine"} py-1 rounded-2xl `}
          style={{
            width: `${Math.min(currentProgress, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}
