"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LandingStageProps {
  onStart: () => void;
}

export function LandingStage({ onStart }: LandingStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-6xl">👋</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4 font-montserrat text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
      >
        Let&apos;s build something{" "}
        <span className="text-brand-primary">great</span> together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 max-w-md text-lg text-muted-foreground"
      >
        Quick quotes for web development & graphic design projects. Answer a few
        questions and get connected via WhatsApp.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          onClick={onStart}
          size="lg"
          className="h-14 px-8 text-lg font-semibold bg-brand-primary hover:bg-brand-primary/90 text-white"
        >
          Get a Quote
          <ArrowRight className="ml-2 size-5" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-12 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <span className="size-2 rounded-full bg-green-500" />
        Usually responds within 24 hours
      </motion.div>
    </motion.div>
  );
}
