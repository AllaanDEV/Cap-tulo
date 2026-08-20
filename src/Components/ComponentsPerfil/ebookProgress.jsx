export function EbookProgress({children, book}){
    return(
        <div className="bg-background border border-border w-full h-auto flex items-center rounded-lg">
              <div className="p-3 flex gap-5 items-start">
                <div className="h-30 w-20 bg-bermuda rounded-lg"></div>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-lg">vasco silencioso</p>
                    <p className="text-sm text-black/70">Gama</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span className="text-xs text-black/70">Progresso</span>{" "}
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
            {children}</div>
    )
}