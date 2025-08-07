import Image from "next/image";
import { photos } from "../data/photos";

const PhotosSection = () => {
    // Select first 6 photos for the grid display
    const displayPhotos = photos.slice(0, 6);

    return (
        <section
            id="photos"
            className="text-foreground bg-background relative min-h-screen pt-20"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                {/* Photo Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4 max-w-lg">
                    {/* First row - 2 photos */}
                    <div className="col-span-1">
                        <Image
                            src={
                                displayPhotos[0]?.src ||
                                "/images/20140121-DSC07657.jpg"
                            }
                            alt="Photography sample"
                            width={150}
                            height={200}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src={
                                displayPhotos[1]?.src ||
                                "/images/20231224-DSC06719.jpg"
                            }
                            alt="Photography sample"
                            width={150}
                            height={150}
                            className="w-full h-36 object-cover rounded-lg mb-4"
                        />
                        <Image
                            src={
                                displayPhotos[2]?.src ||
                                "/images/20240320-DSC08061.jpg"
                            }
                            alt="Photography sample"
                            width={150}
                            height={100}
                            className="w-full h-24 object-cover rounded-lg"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src={
                                displayPhotos[3]?.src ||
                                "/images/20240323-DSC08494.jpg"
                            }
                            alt="Photography sample"
                            width={150}
                            height={200}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>

                    {/* Second row - 2 photos spanning different widths */}
                    <div className="col-span-2">
                        <Image
                            src={
                                displayPhotos[4]?.src ||
                                "/images/20240328-DSC08942-Edit.jpg"
                            }
                            alt="Photography sample"
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src={
                                displayPhotos[5]?.src ||
                                "/images/20240329-DSC09067.jpg"
                            }
                            alt="Photography sample"
                            width={150}
                            height={200}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-6">
                    <div>
                        <h1 className="font-italiana text-6xl lg:text-7xl text-foreground mb-2">
                            Photography
                        </h1>
                        <h2 className="font-sora text-2xl lg:text-3xl text-text-secondary">
                            My passion
                        </h2>
                    </div>

                    {/* Camera Info */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-background"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zM17.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.47.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                            </svg>
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

                    {/* Photo Gallery Button */}
                    <button className="font-sora bg-brand-primary hover:bg-background hover:text-brand-primary border-2 border-brand-primary hover:border-brand-primary active:opacity-60 transition-all font-bold text-xl px-8 py-4 text-background rounded-full">
                        Photo Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PhotosSection;
