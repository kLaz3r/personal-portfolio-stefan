"use client";

import Image from "next/image";
import {
    MasonryPhotoAlbum,
    RenderImageContext,
    RenderImageProps,
} from "react-photo-album";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

import { photos } from "../../data/photos";

import Lightbox from "yet-another-react-lightbox";

import NextJsImageLightbox from "@/components/NextJsImageLightbox";
import React from "react";

function renderNextImage(
    { alt = "", title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext
) {
    return (
        <div
            style={{
                width: "100%",
                position: "relative",
                aspectRatio: `${width} / ${height}`,
            }}
        >
            <Image
                fill
                className="rounded-md"
                src={photo}
                alt={alt}
                title={title}
                sizes={sizes}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
            />
        </div>
    );
}

const GalleryPage = () => {
    const [index, setIndex] = React.useState(-1);
    return (
        <>
            <section id="about" className="min-h-screen pt-20 pb-12">
                <div className="container mx-auto w-full min-h-[calc(100vh-5rem)] px-6 py-6">
                    <MasonryPhotoAlbum
                        photos={photos}
                        render={{ image: renderNextImage }}
                        defaultContainerWidth={1200}
                        onClick={({ index: current }) => setIndex(current)}
                        sizes={{
                            size: "1168px",
                            sizes: [
                                {
                                    viewport: "(max-width: 1200px)",
                                    size: "calc(100vw - 32px)",
                                },
                            ],
                        }}
                    />
                </div>
                <Lightbox
                    index={index}
                    slides={photos}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    render={{ slide: NextJsImageLightbox }}
                />
            </section>
        </>
    );
};
export default GalleryPage;
