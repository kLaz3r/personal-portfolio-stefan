"use client";
import { BLUR_DATA_URL } from "@/lib/blur-data-url";

import CodeIcon from "@/components/CodeIcon";
import SwatchIcon from "@/components/SwatchIcon";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import ApertureIcon from "../components/ApertureIcon";
import HalftoneBg from "../components/HalftoneBg";
import ImageCarousel from "../components/ImageCarousel";
import ProjectCard from "../components/ProjectCard";
import QuestionMarkIcon from "../components/QuestionMarkIcon";
import ToolIcon from "../components/ToolIcon";
import { photos } from "../data/photos";
import { projects } from "../data/projects";

const HeroSection = () => {
    return (
        <section aria-labelledby="home-heading"
            id="home"
            className="text-foreground overflow-clip relative min-h-screen pt-20 border-b-2 border-background-tertiary"
        >
            <div className="hidden absolute md:block right-0 bg-[url(/illustration.svg)] saturate-0 brightness-20 blur-md bg-cover w-1/2 min-h-screen -z-50"></div>
            <div className="container md:flex-row mx-auto flex flex-col items-start md:items-center justify-center min-h-[calc(100vh-5rem)]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.6, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        ease: "anticipate",
                        duration: 0.7,
                    }}
                    className="will-change-transform will-change-opacity flex px-6 py-6 w-full gap-6 flex-col items-start justify-start"
                >
                    <h1 id="home-heading" className="text-5xl/14 md:text-7xl/20 font-bold font-montserrat">
                        Hi, I am{" "}
                        <span className="text-brand-primary">Stefan,</span>
                        <br />A Digital{" "}
                        <span className="text-brand-primary underline">
                            Craftsman
                        </span>
                    </h1>
                    <h2 className="font-montserrat text-xl mr-12 md:max-w-md">
                        I solve <span className="font-bold">complex</span>{" "}
                        problems, create{" "}
                        <span className="font-bold">beautiful</span> graphics,
                        and capture the <span className="font-bold">best</span>{" "}
                        moments of life.
                    </h2>
                    <Link
                        href="#webdev"
                        className="font-montserrat hover:bg-background hover:text-brand-primary border-2 hover:border-brand-primary active:scale-90 active:opacity-60 transition-all font-bold text-2xl px-6 py-4 bg-brand-primary text-background rounded-full"
                    >
                        View My Work
                    </Link>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.6, x: 200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        ease: "easeInOut",
                        duration: 1.5,
                    }}
                    className="will-change-transform will-change-opacity px-4 w-full flex items-center justify-end bg-cover md:bg-none bg-[url(/halftone.svg)]"
                >
                    <Image
                        width={700}
                        height={900}
                        src="/illustration.svg"
                        alt="Creative illustration representing innovative web development and design solutions by Stefan Nasturas"
                        priority={true}
                        quality={75}
                        className="select-none"
                    ></Image>
                </motion.div>
            </div>
        </section>
    );
};

const GraphicsSection = () => {
    return (
        <section aria-labelledby="graphics-heading"
            id="graphics"
            className="text-foreground overflow-clip relative min-h-screen pt-20 pb-6 border-b-2 border-background-tertiary"
        >
            <div className="absolute flex -z-10 items-center justify-center inset-0 w-full h-full pointer-events-none">
                <SwatchIcon
                    width={200}
                    height={290}
                    className="absolute pointer-events-none"
                    style={{
                        color: "var(--background-tertiary)",
                        transform: "scale(500%) translate(40%, -10%)",
                    }}
                />
            </div>
            <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                <div className="flex flex-col lg:flex-row items-start justify-center md:gap-18 gap-3 pb-6">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: -200,
                            rotate: 90,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            rotate: 0,
                        }}
                        transition={{
                            type: "spring",
                            ease: "anticipate",
                            duration: 1,
                            staggerChildren: 0.5,
                            delayChildren: 1,
                        }}
                        viewport={{ margin: "0px 0px 200px 0px" }}
                        className="flex flex-col gap-3 w-full min-w-[350px] md:min-w-[550px] lg:max-w-[700px]"
                    >
        <ImageCarousel images={[{ src: "/mockups/carousel/agricola poster salam de sibiu premii.png", alt: "Agricola Poster Design", width: 2000, height: 2828 }, { src: "/mockups/carousel/billboard kaufland gogosi.png", alt: "Kaufland Gogosi Billboard", width: 2000, height: 2828 }, { src: "/mockups/carousel/calendar agricola 2025 3.png", alt: "Agricola 2025 Calendar", width: 2000, height: 2828 }, { src: "/mockups/carousel/flyer salam sibiu germania 1.png", alt: "Germania Salam Flyer", width: 2000, height: 2828 }, { src: "/mockups/carousel/Mockup Snack2go Produse.png", alt: "Snack2Go Products", width: 2000, height: 2828 }, { src: "/mockups/carousel/Promo reducere pui fericit grill selgros sorin.png", alt: "Selgros Promo Banner", width: 2000, height: 2828 }, { src: "/mockups/carousel/Raport de sustenabilitate Agricola.png", alt: "Agricola Sustainability Report", width: 2000, height: 2828 }, { src: "/mockups/carousel/rollup aeroport enescu business lounge 2.png", alt: "Business Lounge Rollup", width: 2000, height: 2828 }, { src: "/mockups/carousel/Rollup AGR 1.png", alt: "Agricola Rollup", width: 2000, height: 2828 }, { src: "/mockups/carousel/rollup seby sax.png", alt: "Seby Sax Rollup", width: 2000, height: 2828 }, { src: "/mockups/carousel/spune nu obezitatii.png", alt: "Health Campaign Banner", width: 2000, height: 2828 }]} autoPlay={true} interval={5000} />
                    </motion.div>

                    <div className="lg:w-1/2 flex flex-col items-start justify-center flex-grow space-y-6 relative">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: 200,
                                rotate: -90,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                                rotate: 0,
                            }}
                            transition={{
                                type: "spring",
                                ease: "anticipate",
                                duration: 0.7,
                                staggerChildren: 0.5,
                                delayChildren: 1,
                            }}
                            viewport={{ margin: "0px 0px 200px 0px" }}
                            className="flex gap-3 flex-col"
                        >
                            <div>
                                <h2 id="graphics-heading" className="font-montserrat font-bold pt-4 md:pt-0 text-5xl md:text-6xl lg:text-7xl text-foreground mb-2">
                                    Graphics
                                </h2>
                                <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl text-text-secondary">
                                    Branding and Design
                                </h3>
                            </div>

                            <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px 200px 0px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 md:gap-4 lg:gap-5 items-center justify-center lg:justify-start py-4"
          role="list"
          aria-label="Design tools used"
        >
          {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW'].map((tool) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ margin: "0px 0px 200px 0px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.3 + ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW'].indexOf(tool) * 0.1
              }}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-[72px] lg:h-[72px] bg-brand-primary/10 rounded-full flex items-center justify-center border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-primary/15 transition-colors duration-200 flex-shrink-0"
              role="listitem"
              aria-label={tool}
            >
              <ToolIcon toolName={tool} className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-brand-primary" />
            </motion.div>
          ))}
        </motion.div>

                            <Link
                                href="/graphics-gallery"
                                className="font-montserrat bg-brand-primary hover:bg-background hover:text-brand-primary text-center border-2 border-brand-primary hover:border-brand-primary active:opacity-60 transition-all active:scale-90 font-bold text-xl md:text-2xl px-4 py-3 text-background rounded-full"
                            >
                                See More
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WebDevSection = () => {
    return (
        <section aria-labelledby="webdev-heading"
            id="webdev"
            className="text-foreground overflow-clip bg-background relative min-h-screen pt-20 pb-6 border-b-2 border-background-tertiary"
        >
            <div className="absolute flex items-center justify-center inset-0 w-full h-full pointer-events-none">
                <CodeIcon
                    width={200}
                    height={290}
                    className="absolute pointer-events-none"
                    style={{
                        color: "var(--background-tertiary)",
                        transform: "scale(1200%)",
                    }}
                />
            </div>
            <div className="container mx-auto flex flex-col items-center md:items-center justify-center min-h-[calc(100vh-5rem)]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: -200 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        ease: "anticipate",
                        duration: 1,
                    }}
                    className="font-montserrat pb-10 z-10 text-9xl"
                >
                    <h2 id="webdev-heading" className="text-center font-bold pb-2 text-7xl/14 md:text-8xl/20">
                        Web Dev
                    </h2>
                    <h3 className="text-center text-3xl/10 pb-6 md:text-4xl/14">
                        Online Presence
                    </h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: 200 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        ease: "anticipate",
                        duration: 1,
                    }}
                    viewport={{ margin: "0px 0px 200px 0px" }}
                    className="flex flex-col items-start justify-center gap-6 md:gap-12 md:flex-row relative z-10"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${index}`}
                            {...project}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const PhotosSection = () => {
    return (
        <section aria-labelledby="photos-heading"
            id="photos"
            className="text-foreground overflow-clip relative min-h-screen pt-20 border-b-2 border-background-tertiary"
        >
            <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 gap-12">
                <div className="flex flex-col lg:flex-row items-start justify-center md:gap-18 gap-3 pb-6">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: -200,
                            rotate: 90,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            rotate: 0,
                        }}
                        transition={{
                            type: "spring",
                            ease: "anticipate",
                            duration: 1,
                            staggerChildren: 0.5,
                            delayChildren: 1,
                        }}
                        viewport={{ margin: "0px 0px 200px 0px" }}
                        className="flex flex-col gap-3 w-full max-w-[700px]"
                    >
                        <div className="flex flex-row gap-3 h-full w-full">
                            <div className="md:w-1/3">
                                <Image
                                    className="rounded-md object-cover h-full w-full"
                                    src={photos[21].src}
                                    alt={photos[21].alt}
                                    width={photos[21].width}
                                    height={photos[21].height}
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="(max-width: 768px) 100vw, 33vw"
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
                                        loading="lazy"
                                        quality={75}
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    ></Image>
                                </div>
                                <div className="h-full">
                                    <Image
                                        className="rounded-md object-cover h-full w-full"
                                        src={photos[17].src}
                                        alt={photos[17].alt}
                                        width={photos[17].width}
                                        height={photos[17].height}
                                        loading="lazy"
                                        quality={75}
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
                                        sizes="(max-width: 768px) 100vw, 50vw"
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
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="(max-width: 768px) 100vw, 33vw"
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
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="(max-width: 768px) 100vw, 67vw"
                                ></Image>
                            </div>
                            <div className="md:block hidden md:w-1/3">
                                <Image
                                    className="rounded-md object-cover h-full w-full"
                                    src={photos[3].src}
                                    alt={photos[3].alt}
                                    width={photos[3].width}
                                    height={photos[3].height}
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="(max-width: 768px) 100vw, 33vw"
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
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="50vw"
                                ></Image>
                            </div>
                            <div className="w-1/2">
                                <Image
                                    className="rounded-md object-cover h-full w-full"
                                    src={photos[3].src}
                                    alt={photos[3].alt}
                                    width={photos[3].width}
                                    height={photos[3].height}
                                    loading="lazy"
                                    quality={75}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    sizes="50vw"
                                ></Image>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 flex flex-col items-start justify-center flex-grow space-y-6 relative">
                        <ApertureIcon
                            width={800}
                            height={800}
                            className="block -z-10 opacity-100 pointer-events-none absolute"
                            style={{
                                color: "var(--background-tertiary)",
                                left: "50%",
                                transform: "translateX(-50%) scale(220%)",
                                top: "60%",
                            }}
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: 200,
                                rotate: -90,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                                rotate: 0,
                            }}
                            transition={{
                                type: "spring",
                                ease: "anticipate",
                                duration: 0.7,
                                staggerChildren: 0.5,
                                delayChildren: 1,
                            }}
                            viewport={{ margin: "0px 0px 200px 0px" }}
                            className="flex gap-3 flex-col"
                        >
                            <div>
                                <h2 id="photos-heading" className="font-montserrat font-bold text-5xl lg:text-7xl text-foreground mb-2">
                                    Photography
                                </h2>
                                <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl text-text-secondary">
                                    Capturing Life-shaped Light
                                </h3>
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
                                    <p className="font-montserrat font-semibold text-foreground">
                                        Sony A6000
                                    </p>
                                    <p className="font-montserrat text-sm text-text-secondary">
                                        w/ Various Lenses
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/gallery"
                                className="font-montserrat bg-brand-primary hover:bg-background hover:text-brand-primary text-center border-2 border-brand-primary hover:border-brand-primary active:opacity-60 transition-all active:scale-90 font-bold text-xl px-4 py-3 text-background md:max-w-1/2 md:text-2xl rounded-full"
                            >
                                Photo Gallery
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section aria-labelledby="about-heading"
            id="about"
            className="text-foreground overflow-clip relative min-h-screen pt-20 pb-12 border-b-2 border-background-tertiary"
        >
            <div className="container mx-auto flex w-full flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] px-6 gap-12">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: 200,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                    }}
                    transition={{
                        type: "spring",
                        ease: "anticipate",
                        duration: 0.8,
                        staggerChildren: 0.5,
                        delayChildren: 1,
                    }}
                    viewport={{ margin: "0px 0px 200px 0px" }}
                    className="xl:max-w-1/2"
                >
                    <h2 id="about-heading" className="font-montserrat text-7xl pb-8 font-bold">
                        About Me
                    </h2>
                    <p className="font-montserrat text-base text-justify">
                        Hey, I’m{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            Ștefan
                        </span>
                        , a 22-year-old from{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            Bacău
                        </span>
                        , Romania. I’ve been into computers since I was 4, when
                        my dad first introduced me to them — and I’ve been
                        hooked ever since. I started out learning how to fix
                        problems, install programs, and make{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            Windows
                        </span>{" "}
                        run smoother. <br />
                        <br /> Eventually, I got curious about{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            Linux
                        </span>{" "}
                        and began using it as my daily OS, which opened up a
                        whole new world of learning. In high school, I got into
                        web development — starting with the basics like{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            HTML
                        </span>{" "}
                        and{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            CSS
                        </span>
                        , then moving on to{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            JavaScript
                        </span>
                        , React, Next.js, and TypeScript. <br />
                        <br /> I also spent two years working in{" "}
                        <span className="font-montserrat font-bold">
                            graphic design and desktop publishing
                        </span>
                        , where I got hands-on with tools like{" "}
                        <span className="font-montserrat font-bold">Photoshop</span>,{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            Illustrator
                        </span>
                        , <span className="font-montserrat font-bold">InDesign</span>,
                        and{" "}
                        <span className="font-montserrat font-bold">CorelDRAW</span>.
                        I learned how to turn creative ideas into high-quality
                        printed materials on all kinds of surfaces. <br />
                        <br /> I recently finished my{" "}
                        <span className="font-montserrat font-bold text-foreground">
                            Computer Science
                        </span>{" "}
                        degree, and right now I’m focused on growing my skills,
                        building cool stuff, and staying curious about
                        everything tech and design-related.
                    </p>
                </motion.div>
                <div>
                    <QuestionMarkIcon
                        width={200}
                        height={290}
                        className="absolute pointer-events-none -z-10"
                        style={{
                            color: "var(--background-tertiary)",

                            transform: "translate(-20%, 20%) scale(500%)",
                        }}
                    />
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: -200,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            type: "spring",
                            ease: "anticipate",
                            duration: 1,
                            staggerChildren: 0.5,
                            delayChildren: 1,
                        }}
                        viewport={{ margin: "0px 0px 200px 0px" }}
                        className="relative w-[300px] h-[350px] md:w-[500px] md:h-[550px]"
                    >
                        <Image
                            src="/helo.jpg"
                            alt="Portrait of Stefan Nasturas"
                            fill
                            loading="lazy"
                            quality={75}
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover rounded-2xl shadow-md shadow-brand-primary border-1 border-brand-primary"
                        ></Image>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <GraphicsSection />
            <WebDevSection />
            <PhotosSection />
            <AboutSection />
        </div>
    );
}
