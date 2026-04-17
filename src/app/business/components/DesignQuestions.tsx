"use client";

import { QuestionCard, OptionGrid } from "./QuestionCard";
import { graphicDesignOptions, GraphicDesignAnswers } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

interface DesignQuestionProps {
  answers: GraphicDesignAnswers;
  onUpdate: (answers: Partial<GraphicDesignAnswers>) => void;
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  isPart2?: boolean;
}

export function DesignQ1Type({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  isPart2 = false,
}: DesignQuestionProps) {
  return (
    <QuestionCard
      title="What are we making?"
      subtitle="Select the type of project you need"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.projectType}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={graphicDesignOptions.projectType}
        selected={answers.projectType}
        onSelect={(value) => onUpdate({ projectType: value, projectTypeOther: value === "other" ? "" : undefined })}
      />
      {answers.projectType === "other" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4"
        >
          <Label htmlFor="project-type-other">What do you have in mind?</Label>
          <Textarea
            id="project-type-other"
            value={answers.projectTypeOther || ""}
            onChange={(e) => onUpdate({ projectTypeOther: e.target.value })}
            placeholder="Describe your project..."
            className="mt-2"
          />
        </motion.div>
      )}
    </QuestionCard>
  );
}

export function DesignQ2Status({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: DesignQuestionProps) {
  return (
    <QuestionCard
      title="Where are you starting from?"
      subtitle="This helps me understand the scope of work"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.projectStatus}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={graphicDesignOptions.projectStatus}
        selected={answers.projectStatus}
        onSelect={(value) => onUpdate({ projectStatus: value })}
      />
    </QuestionCard>
  );
}

export function DesignQ3Style({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: DesignQuestionProps) {
  return (
    <QuestionCard
      title="What's your style direction?"
      subtitle="This helps me prepare a mood board for your project"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.styleDirection}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={graphicDesignOptions.styleDirection}
        selected={answers.styleDirection}
        onSelect={(value) => onUpdate({ styleDirection: value })}
      />
    </QuestionCard>
  );
}

export function DesignQ4Timeline({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: DesignQuestionProps) {
  return (
    <QuestionCard
      title="What's your timeline?"
      subtitle="When do you need this completed?"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.timeline}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={graphicDesignOptions.timeline}
        selected={answers.timeline}
        onSelect={(value) => onUpdate({ timeline: value })}
      />
    </QuestionCard>
  );
}

export function DesignQ5Budget({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: DesignQuestionProps) {
  return (
    <QuestionCard
      title="What's your budget range?"
      subtitle="This helps me suggest the best approach for your project"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.budget}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={graphicDesignOptions.budget}
        selected={answers.budget}
        onSelect={(value) => onUpdate({ budget: value })}
      />
    </QuestionCard>
  );
}

export function DesignQ6Notes({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: DesignQuestionProps) {
  return (
    <QuestionCard
      title="Anything else?"
      subtitle="Optional — add any references, links, or details you'd like me to know"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
    >
      <div className="space-y-2">
        <Label htmlFor="notes">Additional details</Label>
        <Textarea
          id="notes"
          value={answers.notes || ""}
          onChange={(e) => onUpdate({ notes: e.target.value })}
          placeholder="Any references, links, or details you'd like me to know about..."
          rows={5}
        />
      </div>
    </QuestionCard>
  );
}
