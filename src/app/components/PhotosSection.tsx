import Image from "next/image";
import { photos } from "../data/photos";
import ApertureIcon from "./ApertureIcon";

const PhotosSection = () => {
    return (
        <section
            id="photos"
            className="text-foreground overflow-clip relative min-h-screen pt-20"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                {/* Photo Grid */}
                <div
                    className="
                        w-full lg:w-1/2 
                        grid grid-cols-3  gap-4 max-w-lg
                        auto-rows-[128px] /* each row is 96px tall */
                    "
                >
                    {/* Left tall image */}
                    <div className="col-span-1 row-span-2 relative">
                        <Image
                            src={photos[21].src}
                            alt={photos[21].alt}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Two stacked images */}
                    <div className="col-span-1">
                        <div className="relative w-full h-[128px] mb-4">
                            <Image
                                src={photos[20].src}
                                alt={photos[20].alt}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="relative w-full h-[128px]">
                            <Image
                                src={photos[17].src}
                                alt={photos[17].alt}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right tall image */}
                    <div className="col-span-1 row-span-2 relative">
                        <Image
                            src={photos[15].src}
                            alt={photos[15].alt}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Bottom wide image */}
                    <div className="col-span-2 relative h-[256px]">
                        <Image
                            src={photos[5].src}
                            alt={photos[5].alt}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Bottom single image */}
                    <div className="col-span-1 relative h-[256px]">
                        <Image
                            src={photos[3].src}
                            alt={photos[3].alt}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-6 relative">
                    {/* Background image - only visible on desktop */}
                    <Image
                        src="/aperture.svg"
                        alt=""
                        width={1600} // adjust as needed
                        height={1600}
                        className="block -z-10 opacity-100 pointer-events-none absolute"
                        style={{
                            left: "50%",
                            transform: "translateX(-50%) scale(300%)",
                            top: "60%", // tweak until it lines up under your button
                        }}
                    />

                    <div>
                        <h1 className="font-italiana text-6xl drop-shadow-background shadow-md lg:text-7xl text-foreground mb-2">
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

                    <button className="font-sora bg-brand-primary hover:bg-background hover:text-brand-primary border-2 border-brand-primary hover:border-brand-primary active:opacity-60 transition-all font-bold text-xl px-8 py-4 text-background rounded-full">
                        Photo Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PhotosSection;
