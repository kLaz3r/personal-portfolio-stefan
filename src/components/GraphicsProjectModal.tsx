"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TranslatedGraphicsProject } from "@/lib/get-translated-project";
import ImageCarousel from "./ImageCarousel";
import { HiX } from "react-icons/hi";
import ToolIcon from "./ToolIcon";
import { useTranslation } from "../hooks/useTranslation";

interface GraphicsProjectModalProps {
  project: TranslatedGraphicsProject | null;
  onClose: () => void;
}

export default function GraphicsProjectModal({
  project,
  onClose,
}: GraphicsProjectModalProps) {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  useEffect(() => {
    if (project && modalRef.current) {
      modalRef.current.focus();
    }
  }, [project]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm p-4 pt-4 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
          aria-modal="true"
          aria-labelledby="modal-title"
          role="dialog"
        >
          <motion.div
            ref={modalRef}
            className="relative bg-background rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            tabIndex={-1}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-background-secondary/80 hover:bg-background-secondary text-foreground p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label={t("graphicsModal.close")}
            >
              <HiX className="w-6 h-6" />
            </button>

            <div className="md:w-1/2 bg-background-secondary/30 flex items-center justify-center p-8">
              <ImageCarousel
                images={project.images}
                autoPlay={true}
                interval={4000}
                variant="modal"
              />
            </div>

            <div className="md:w-1/2 p-8 md:overflow-y-auto">
              <motion.h2
                id="modal-title"
                className="text-3xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.translatedTitle}
              </motion.h2>

              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.client && (
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      {t("graphicsModal.client")}
                    </p>
                    <p className="font-semibold text-foreground">
                      {project.client}
                    </p>
                  </div>
                )}
                {project.type && (
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      {t("graphicsModal.type")}
                    </p>
                    <p className="font-semibold text-foreground">
                      {project.translatedType}
                    </p>
                  </div>
                )}
                {project.dimensions && (
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      {t("graphicsModal.dimensions")}
                    </p>
                    <p className="font-semibold text-foreground">
                      {project.dimensions}
                    </p>
                  </div>
                )}
                {project.finish && (
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      {t("graphicsModal.finish")}
                    </p>
                    <p className="font-semibold text-foreground">
                      {project.translatedFinish}
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-semibold text-foreground-secondary uppercase mb-2">
                  {t("graphicsModal.description")}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {project.translatedDescription}
                </p>
              </motion.div>

              {project.tools && project.tools.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-sm font-semibold text-foreground-secondary uppercase mb-2">
                    {t("graphicsModal.toolsUsed")}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-brand-primary/10 rounded-lg"
                        title={tool}
                      >
                        <ToolIcon
                          toolName={tool}
                          className="w-5 h-5 text-brand-primary"
                        />
                        <span className="text-sm text-brand-primary">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
