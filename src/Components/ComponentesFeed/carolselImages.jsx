
import { useEffect, useRef, useState } from "react";

export function CarouselImages({ images = [] }) {
  const imagesContainerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);

    imagesContainerRef.current?.scrollTo({
      left: 0,
      behavior: "instant",
    });
  }, [images]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  const changeImage = (index) => {
    const container = imagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });

    setCurrentImage(index);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden w-full">
      {/* Imagens */}
      <div
        ref={imagesContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(e) => {
          const container = e.currentTarget;

          if (!container.clientWidth) return;

          const index = Math.round(
            container.scrollLeft / container.clientWidth
          );

          setCurrentImage(
            Math.max(0, Math.min(index, images.length - 1))
          );
        }}
      >
        {images.map((url, index) => (
          <div
            key={`${url}-${index}`}
            className="w-full flex-none snap-start my-auto"
          >
            <img
              src={url}
              alt={`Imagem ${index + 1} do post`}
              className="block w-full h-auto max-h-[75vh] xl:max-h-[35vw] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Seta para a imagem anterior */}
      {currentImage > 0 && (
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={(e) => {
            e.stopPropagation();
            changeImage(currentImage - 1);
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2
            z-10 w-9 h-9 rounded-full bg-black/50 text-white
            flex items-center justify-center
            opacity-100 sm:opacity-0 sm:group-hover:opacity-100
            transition-opacity"
        >
          &#10094;
        </button>
      )}

      {/* Seta para a próxima imagem */}
      {currentImage < images.length - 1 && (
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={(e) => {
            e.stopPropagation();
            changeImage(currentImage + 1);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2
            z-10 w-9 h-9 rounded-full bg-black/50 text-white
            flex items-center justify-center
            opacity-100 sm:opacity-0 sm:group-hover:opacity-100
            transition-opacity"
        >
          &#10095;
        </button>
      )}

      {/* Contador de imagens */}
      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2
            z-10 rounded-full bg-black/60 text-white
            text-xs px-2.5 py-1 pointer-events-none"
        >
          {currentImage + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
