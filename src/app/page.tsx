import Image from "next/image";
import Link from "next/link";
import ApertureIcon from "./components/ApertureIcon";
import HalftoneBg from "./components/HalftoneBg";
import ProjectCard from "./components/ProjectCard";
import QuestionMarkIcon from "./components/QuestionMarkIcon";
import { photos } from "./data/photos";
import { projects } from "./data/projects";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="text-foreground relative min-h-screen pt-20"
        >
            <div className="hidden absolute md:block right-0 bg-[url(/halfton-90.svg)] bg-cover w-1/2 min-h-screen -z-50"></div>
            <div className="container md:flex-row mx-auto flex flex-col items-start md:items-center justify-center min-h-[calc(100vh-5rem)]">
                <div className="flex px-6 py-6 w-full gap-6 flex-col items-start justify-start">
                    <h1 className="text-5xl/14 md:text-7xl/20 font-italiana">
                        Hi, I am{" "}
                        <span className="text-brand-primary">Stefan</span>
                        <br />
                        Web Developer <br />& Designer
                    </h1>
                    <h2 className="font-sora text-xl mr-12 md:max-w-sm">
                        I build beautiful and intuitive web applications from
                        concept to deployment.
                    </h2>
                    <Link
                        href="#Projects"
                        className="font-sora hover:bg-background hover:text-brand-primary border-2 hover:border-brand-primary active:opacity-60 transition-all font-bold text-2xl px-6 py-4 bg-brand-primary text-background rounded-full"
                    >
                        View My Work
                    </Link>
                </div>
                <div className="px-4 w-full flex items-center justify-end bg-cover md:bg-none bg-[url(/halftone.svg)]">
                    <Image
                        width={500}
                        height={700}
                        src="/abominatie.svg"
                        alt="Why?"
                    ></Image>
                </div>
            </div>
        </section>
    );
};

const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="text-foreground bg-background relative min-h-screen pt-20"
        >
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <HalftoneBg color="var(--background-tertiary)" />
            </div>
            <div className="container mx-auto flex flex-col items-center md:items-center justify-evenly min-h-[calc(100vh-5rem)]">
                <div className="font-italiana z-10 text-9xl">
                    <h1 className="text-center pb-2 text-7xl/14 md:text-8xl/20">
                        Projects
                    </h1>
                    <h2 className="text-center text-3xl/10 pb-6 md:text-4xl/14">
                        My best Work
                    </h2>
                </div>
                <div className="flex flex-col items-start justify-center gap-6 md:gap-12 md:flex-row relative z-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${index}`}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PhotosSection = () => {
    return (
        <section
            id="photos"
            className="text-foreground overflow-clip relative min-h-screen pt-20"
        >
            <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                <div className="flex flex-col lg:flex-row items-start justify-center md:gap-18 gap-3 pb-6">
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
                                color: "var(--background-tertiary)",

                                // Keep all your original styles
                                left: "50%",
                                transform: "translateX(-50%) scale(220%)",
                                top: "60%", // tweak until it lines up under your button
                            }}
                        />

                        <div className="flex gap-3 flex-col">
                            <div>
                                <h1 className=" font-italiana text-6xl lg:text-7xl text-foreground mb-2">
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

                            <button className="font-sora bg-brand-primary hover:bg-background hover:text-brand-primary border-2 border-brand-primary hover:border-brand-primary active:opacity-60 transition-all font-bold text-xl px-6 py-3 text-background max-w-5/8 rounded-full">
                                Photo Gallery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section
            id="about"
            className="text-foreground overflow-clip relative min-h-screen pt-20"
        >
            <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                <div>
                    <h1 className="font-italiana text-7xl">About Me</h1>
                    <p className="font-sora text-base">
                        Hey, I’m Ștefan, a 22-year-old from Bacău, Romania. I’ve
                        been into computers since I was 4, when my dad first
                        introduced me to them — and I’ve been hooked ever since.
                        I started out learning how to fix problems, install
                        programs, and make Windows run smoother. Eventually, I
                        got curious about Linux and began using it as my daily
                        OS, which opened up a whole new world of learning. In
                        high school, I got into web development — starting with
                        the basics like HTML and CSS, then moving on to
                        JavaScript, React, Next.js, and TypeScript. I also spent
                        two years working in graphic design and desktop
                        publishing, where I got hands-on with tools like
                        Photoshop, Illustrator, InDesign, and CorelDRAW. I
                        learned how to turn creative ideas into high-quality
                        printed materials on all kinds of surfaces. I recently
                        finished my Computer Science degree, and right now I’m
                        focused on growing my skills, building cool stuff, and
                        staying curious about everything tech and
                        design-related.
                    </p>
                </div>
                <div>
                    <QuestionMarkIcon
                        width={200} // Example width, adjust as needed
                        height={290} // Example height, adjust to maintain aspect ratio
                        className="absolute pointer-events-none -z-10" // Add your classes for positioning
                        style={{
                            // Set the color for the SVG fill
                            color: "var(--background-tertiary)",

                            transform: "translate(-200%, -50%) scale(400%)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <ProjectsSection />
            <PhotosSection />
            <AboutSection />
        </div>
    );
}
