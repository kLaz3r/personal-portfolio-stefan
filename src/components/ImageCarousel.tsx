import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface CarouselImage {
src: string;
alt: string;
width: number;
height: number;
}

interface ImageCarouselProps {
images: CarouselImage[];
autoPlay?: boolean;
interval?: number;
}

export default function ImageCarousel({
images,
autoPlay = true,
interval = 5000,
}: ImageCarouselProps) {
const [currentIndex, setCurrentIndex] = useState(0);
const [isHovered, setIsHovered] = useState(false);
const intervalRef = useRef<NodeJS.Timeout | null>(null);

const nextImage = () => {
setCurrentIndex((prev) => (prev + 1) % images.length);
};

const previousImage = () => {
setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
};

const goToImage = (index: number) => {
setCurrentIndex(index);
};

// Auto-advance effect
useEffect(() => {
if (autoPlay && !isHovered) {
intervalRef.current = setInterval(nextImage, interval);
}

return () => {
if (intervalRef.current) {
clearInterval(intervalRef.current);
}
};
}, [autoPlay, isHovered, interval, images.length]);

// Touch/swipe support
const touchStartX = useRef(0);
const touchEndX = useRef(0);

const handleTouchStart = (e: React.TouchEvent) => {
touchStartX.current = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e: React.TouchEvent) => {
touchEndX.current = e.changedTouches[0].screenX;
handleSwipe();
};

const handleSwipe = () => {
if (touchEndX.current < touchStartX.current - 50) {
nextImage();
}
if (touchEndX.current > touchStartX.current + 50) {
previousImage();
}
};

// Keyboard navigation
const handleKeyDown = (e: React.KeyboardEvent) => {
switch (e.key) {
case "ArrowLeft":
previousImage();
break;
case "ArrowRight":
nextImage();
break;
case "Home":
e.preventDefault();
goToImage(0);
break;
case "End":
e.preventDefault();
goToImage(images.length - 1);
break;
}
};

return (
<div
role="region"
aria-roledescription="carousel"
aria-label="Image gallery carousel"
tabIndex={0}
onKeyDown={handleKeyDown}
className="relative w-[85vh] h-[85vh] max-w-[630px] max-h-[630px] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary rounded-lg"
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
onTouchStart={handleTouchStart}
onTouchEnd={handleTouchEnd}
>
{/* Image Container */}
<div
className="relative w-full h-full overflow-hidden rounded-lg"
aria-live="polite"
aria-atomic="true"
>
<AnimatePresence mode="wait">
<motion.div
key={currentIndex}
role="group"
aria-roledescription="slide"
aria-label={`Slide ${currentIndex + 1} of ${images.length}: ${images[currentIndex].alt}`}
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
transition={{
duration: 0.3,
ease: "easeInOut",
type: "spring",
stiffness: 300,
damping: 30,
}}
className="absolute inset-0"
>
<Image
src={images[currentIndex].src}
alt={images[currentIndex].alt}
fill
loading="lazy"
quality={75}
className="object-cover"
sizes="(max-width: 768px) 80vw, 600px"
/>
</motion.div>
</AnimatePresence>
</div>

{/* Navigation Buttons */}
<button
onClick={previousImage}
className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
aria-label="Previous image"
>
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M15 19l-7-7 7-7"
/>
</svg>
</button>
<button
onClick={nextImage}
className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
aria-label="Next image"
>
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M9 5l7 7-7 7"
/>
</svg>
</button>

{/* Dots Indicator */}
<div
className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10"
role="tablist"
aria-label="Carousel navigation"
>
{images.map((_, index) => (
<button
key={index}
onClick={() => goToImage(index)}
role="tab"
aria-selected={index === currentIndex}
aria-label={`Go to slide ${index + 1}`}
className={`w-3 h-3 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
index === currentIndex
? "bg-white scale-110"
: "bg-white/50 hover:bg-white/70"
}`}
/>
))}
</div>
</div>
);
}
