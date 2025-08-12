// FUCK CSS GRID AND CSS IN GENERAL

import Image from "next/image";
import { photos } from "../data/photos";
import ApertureIcon from "./ApertureIcon";

const PhotosSection = () => {
    return (
        <section
            id="photos"
            className="text-foreground overflow-clip relative min-h-screen pt-20"
        >
            <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                {/* Photo Grid */}
                <div className="flex flex-col gap-3 w-full max-w-[700px]">
                    <div className="flex flex-row gap-3 h-full w-full">
                        <div className="md:w-1/3">
                            <Image
                                className="rounded-md object-cover h-full w-full"
                                src={photos[21].src}
                                alt={photos[21].alt}
                                width={photos[21].width}
                                height={photos[21].height}
                            ></Image>
                        </div>
                        <div className="flex flex-col gap-3 relative md:w-1/3">
                            <div className="h-full">
                                <Image
                                    className="rounded-md object-cover h-full w-full"
                                    src={photos[20].src}
                                    alt={photos[20].alt}
                                    width={photos[20].width}
                                    height={photos[20].height}
                                ></Image>
                            </div>
                            <div className="h-full">
                                <Image
                                    className="rounded-md object-cover h-full w-full"
                                    src={photos[17].src}
                                    alt={photos[17].alt}
                                    width={photos[17].width}
                                    height={photos[17].height}
                                ></Image>
                            </div>
                        </div>
                        <div className="md:block hidden md:w-1/3">
                            <Image
                                className="rounded-md object-cover h-full w-full"
                                src={photos[15].src}
                                alt={photos[15].alt}
                                width={photos[15].width}
                                height={photos[15].height}
                            ></Image>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="md:w-2/3 w-full">
                            <Image
                                className="rounded-md object-cover h-full w-full"
                                src={photos[5].src}
                                alt={photos[5].alt}
                                width={photos[5].width}
                                height={photos[5].height}
                            ></Image>
                        </div>
                        <div className="md:block hidden md:w-1/3">
                            <Image
                                className="rounded-md object-cover h-full w-full"
                                src={photos[3].src}
                                alt={photos[3].alt}
                                width={photos[3].width}
                                height={photos[3].height}
                            ></Image>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-row gap-3">
                        <div className="w-1/2">
                            <Image
                                className="rounded-md object-cover h-full w-full"
                                src={photos[15].src}
                                alt={photos[15].alt}
                                width={photos[15].width}
                                height={photos[15].height}
                            ></Image>
                        </div>
                        <div className="w-1/2">
                            <Image
                                className="rounded-md object-cover h-full w-full"
                                src={photos[3].src}
                                alt={photos[3].alt}
                                width={photos[3].width}
                                height={photos[3].height}
                            ></Image>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 flex flex-col items-start justify-center flex-grow space-y-6 relative">
                    {/* Background image - only visible on desktop */}
                    <ApertureIcon
                        width={800} // adjust as needed
                        height={800}
                        className="block -z-10 opacity-100 pointer-events-none absolute"
                        style={{
                            // Add this line to set the color
                            color: "var(--background-secondary)",

                            // Keep all your original styles
                            left: "50%",
                            transform: "translateX(-50%) scale(300%)",
                            top: "60%", // tweak until it lines up under your button
                        }}
                    />

                    <div>
                        <h1 className="font-italiana text-6xl lg:text-7xl text-foreground mb-2">
                            Photography
                        </h1>
                        <h2 className="font-sora text-2xl lg:text-3xl text-text-secondary">
                            My passion
                        </h2>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                            <ApertureIcon
                                width={50}
                                height={50}
                                color={"var(--brand-primary)"}
                                className={undefined}
                                style={undefined}
                            />
                        </div>
                        <div>
                            <p className="font-sora font-semibold text-foreground">
                                Sony A6000
                            </p>
                            <p className="font-sora text-sm text-text-secondary">
                                w/ Various Lenses
                            </p>
                        </div>
                    </div>

                    <button className="font-sora bg-brand-primary hover:bg-background hover:text-brand-primary border-2 border-brand-primary hover:border-brand-primary active:opacity-60 transition-all font-bold text-xl px-6 py-3 text-background rounded-full">
                        Photo Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PhotosSection;
