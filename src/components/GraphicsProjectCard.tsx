"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { GraphicsProject } from '@/data/graphics-projects';
import ImageCarousel from './ImageCarousel';

interface GraphicsProjectCardProps {
 project: GraphicsProject;
 onClick: () => void;
}

export default function GraphicsProjectCard({ project, onClick }: GraphicsProjectCardProps) {
 const [isHovered, setIsHovered] = useState(false);

 const handleKeyDown = (e: React.KeyboardEvent) => {
 if (e.key === 'Enter' || e.key === ' ') {
 e.preventDefault();
 onClick();
 }
 };

 return (
 <motion.article
 className="group relative h-[28rem] bg-background-secondary/30 rounded-lg overflow-hidden border border-brand-primary/20 backdrop-blur-md cursor-pointer focus-visible:ring-4 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
 whileHover={{ scale: 1.02 }}
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}
 onClick={onClick}
 onKeyDown={handleKeyDown}
 tabIndex={0}
 role="button"
 aria-label={`View ${project.title} project`}
 >
 {/* Image Carousel */}
 <div className="relative w-full h-full">
 <ImageCarousel
 images={project.images}
 autoPlay={isHovered}
 interval={3000}
 variant="card"
 />

 {/* Title Overlay with Gradient */}
 <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
 <div className="bg-gradient-to-t from-black/60 to-transparent pt-8 pb-4 px-4">
 <h3 className="text-white font-semibold text-lg line-clamp-2">
 {project.title}
 </h3>
 </div>
 </div>

 {/* Hover Effect Overlay */}
 <motion.div
 className="absolute inset-0 bg-brand-primary/10 pointer-events-none"
 initial={{ opacity: 0 }}
 animate={{ opacity: isHovered ? 1 : 0 }}
 transition={{ duration: 0.2 }}
 />
 </div>
 </motion.article>
 );
}
