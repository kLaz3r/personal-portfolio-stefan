"use client";

import { motion } from 'motion/react';
import { GraphicsProject } from '@/data/graphics-projects';
import GraphicsProjectCard from './GraphicsProjectCard';

interface GraphicsGalleryGridProps {
  projects: GraphicsProject[];
  onProjectClick: (project: GraphicsProject) => void;
}

export default function GraphicsGalleryGrid({ projects, onProjectClick }: GraphicsGalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: index * 0.1
          }}
        >
          <GraphicsProjectCard
            project={project}
            onClick={() => onProjectClick(project)}
          />
        </motion.div>
      ))}
    </div>
  );
}
