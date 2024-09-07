"use client";

import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import React from "react";

type TPhotoSwipeImage = {
  width: number;
  height: number;
  caption?: string;
  src: string;
  thumbnailURL?: string;
  thumbWidth?: number;
  thumbHeight?: number;
};

type TPhotoSwipeGallery = {
  id: string;
  col: number;
  images: TPhotoSwipeImage[];
};

const PhotoSwipeGallery: React.FC<TPhotoSwipeGallery> = ({
  id,
  images,
  col,
}) => {
  React.useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#" + id,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox?.destroy();

      lightbox = null;
    };
  }, []);

  return (
    <div
      className={"pswp-gallery grid gap-4"}
      style={{
        gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
      }}
      id={id}
    >
      {images.map((image, index) => (
        <a
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={id + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            loading="lazy"
            decoding="async"
            alt={image.src.split("/").pop()!.split(".")[0]}
            width={image.width}
            height={image.height}
            src={image.thumbnailURL ?? image.src}
          />
          {image.caption && (
            <span className="pswp-caption-content">{image.caption}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default PhotoSwipeGallery;
