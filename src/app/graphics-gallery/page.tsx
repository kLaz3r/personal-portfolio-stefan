"use client";

import { useState } from 'react';
import { getGraphicsProjects, TranslatedGraphicsProject } from '@/lib/get-translated-project';
import GraphicsGalleryGrid from '@/components/GraphicsGalleryGrid';
import GraphicsProjectModal from '@/components/GraphicsProjectModal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GraphicsGalleryPage() {
  const [selectedProject, setSelectedProject] = useState<TranslatedGraphicsProject | null>(null);
  const { language } = useLanguage();
  const projects = getGraphicsProjects(language);

  return (
    <section className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6 py-12">
        <GraphicsGalleryGrid
          projects={projects}
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
