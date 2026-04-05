"use client";

import { useState } from 'react';
import { graphicsProjects, GraphicsProject } from '@/data/graphics-projects';
import GraphicsGalleryGrid from '@/components/GraphicsGalleryGrid';
import GraphicsProjectModal from '@/components/GraphicsProjectModal';

export default function GraphicsGalleryPage() {
 const [selectedProject, setSelectedProject] = useState<GraphicsProject | null>(null);

 return (
 <section className="min-h-screen pt-20 pb-12">
 <div className="container mx-auto px-6 py-12">
 <GraphicsGalleryGrid
 projects={graphicsProjects}
 onProjectClick={setSelectedProject}
 />
 </div>

 <GraphicsProjectModal
 project={selectedProject}
 onClose={() => setSelectedProject(null)}
 />
 </section>
 );
}
