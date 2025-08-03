import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div className="max-w-screen">
            <Navbar />
            <div className="flex items-center justify-center mt-20 min-h-[calc(100vh-5rem)] text-foreground color-background">
                <h1 className="font-italiana text-9xl text-center">
                    Nimic Aici
                </h1>
            </div>
            <Footer />
        </div>
    );
}
