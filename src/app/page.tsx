import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
    return (
        <div className="">
            <section id="Hero" className="text-foreground min-h-screen pt-20">
                <div className="hidden md:block fixed right-0 bg-[url(/halfton-90.svg)] bg-cover w-1/2 min-h-screen -z-50"></div>
                <div className="container md:flex-row mx-auto flex flex-col items-start md:items-center justify-center min-h-[calc(100vh-5rem)]">
                    <div className="flex px-6 py-6 w-full gap-6 flex-col items-start justify-start">
                        <h1 className="text-5xl/14 md:text-7xl/20 font-italiana">
                            Hi, I am{" "}
                            <span className="text-brand-primary">Stefan</span>
                            <br />
                            Web Developer <br />& Designer
                        </h1>
                        <h2 className="font-sora text-xl mr-12 md:max-w-sm">
                            I build beautiful and intuitive web applications
                            from concept to deployment.
                        </h2>
                        <Link
                            href="#Projects"
                            className="font-sora font-bold text-2xl px-6 py-4 bg-brand-primary text-background rounded-full"
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
        </div>
    );
}
