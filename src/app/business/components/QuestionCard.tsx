"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface QuestionCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onBack: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  showNext?: boolean;
  currentStep: number;
  totalSteps: number;
}

export function QuestionCard({
  title,
  subtitle,
  children,
  onBack,
  onNext,
  nextDisabled = false,
  showNext = true,
  currentStep,
  totalSteps,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-6 py-8"
    >
      <div className="w-full max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-1 text-muted-foreground">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <span className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="mb-2 font-montserrat text-2xl font-bold text-foreground md:text-3xl">
            {title}
          </h2>
          {subtitle && <p className="mb-6 text-muted-foreground">{subtitle}</p>}
        </motion.div>

        <div className="space-y-4">
          {children}
        </div>

        {showNext && onNext && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-end"
          >
            <Button
              onClick={onNext}
              disabled={nextDisabled}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white"
            >
              Continue
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

interface Option {
  value: string;
  label: string;
  icon?: string;
}

interface OptionGridProps {
  options: Option[];
  selected: string | null;
  onSelect: (value: string) => void;
  columns?: 1 | 2 | 3;
}

export function OptionGrid({ options, selected, onSelect, columns = 1 }: OptionGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid gap-3 ${gridCols[columns]}`}>
      {options.map((option, index) => (
        <motion.div
          key={option.value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05 }}
        >
          <Card
            className={`cursor-pointer border-2 transition-all hover:shadow-md active:scale-[0.98] ${
              selected === option.value
                ? "border-brand-primary bg-brand-primary/5"
                : "border-transparent hover:border-brand-primary/30"
            }`}
            onClick={() => onSelect(option.value)}
          >
            <CardContent className="flex items-center gap-3 p-4">
              {option.icon && <span className="text-2xl">{option.icon}</span>}
              <span className="font-medium text-foreground">{option.label}</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
