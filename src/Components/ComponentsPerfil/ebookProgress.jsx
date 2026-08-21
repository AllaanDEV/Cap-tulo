export function EbookProgress({ children, book }) {
  return (
    <div className="bg-background border border-border w-full h-auto flex items-center rounded-lg transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="p-3 flex gap-5 w-full">
        <div className="h-30 min-h-30 w-20 rounded-lg aspect-[3/4] ">
          <img
            src={book.ebook.volumeInfo.imageLinks?.thumbnail}
            alt={book.ebook.volumeInfo.title}
            className="rounded-lg"
          ></img>
        </div>
        <div className="flex flex-col gap-5  w-[100%]">
          <div>
            <p className="text-sm">{book.ebook.volumeInfo.title}</p>
            <p className="text-xs text-black/70">{book.ebook.volumeInfo.subtitle}</p>
          </div>

          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between">
              <span className="text-xs text-black/70">Progresso</span>
              <span className="text-xs text-wine">40%</span>
            </div>
            <div className="w-full rounded-2xl bg-gray/30">
              <div
                className="w-full py-1 bg-wine rounded-2xl"
                style={{
                  width: "40%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
