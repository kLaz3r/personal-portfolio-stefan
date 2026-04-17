"use client";

import { QuestionCard, OptionGrid } from "./QuestionCard";
import { webDevOptions, WebDevAnswers } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

interface WebDevQuestionProps {
  answers: WebDevAnswers;
  onUpdate: (answers: Partial<WebDevAnswers>) => void;
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
}

export function WebQ1Type({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: WebDevQuestionProps) {
  return (
    <QuestionCard
      title="What are we building?"
      subtitle="Select the type of website or application you need"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.projectType}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={webDevOptions.projectType}
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

export function WebQ2DesignStatus({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: WebDevQuestionProps) {
  return (
    <QuestionCard
      title="What's your design situation?"
      subtitle="This is important for scoping the project"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.designStatus}
      currentStep={currentStep}
      totalSteps={6}
    >
      <OptionGrid
        options={webDevOptions.designStatus}
        selected={answers.designStatus}
        onSelect={(value) => onUpdate({ designStatus: value })}
      />
    </QuestionCard>
  );
}

export function WebQ3Features({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: WebDevQuestionProps) {
  const toggleFeature = (feature: string) => {
    const currentFeatures = answers.features || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];
    onUpdate({ features: newFeatures });
  };

  return (
    <QuestionCard
      title="Any must-have features?"
      subtitle="Select all that apply"
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
    >
      <div className="grid grid-cols-1 gap-3">
        {webDevOptions.features.map((feature, index) => (
          <motion.div
            key={feature.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card
              className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                answers.features?.includes(feature.value)
                  ? "border-brand-primary bg-brand-primary/5"
                  : "border-transparent hover:border-brand-primary/30"
              }`}
              onClick={() => toggleFeature(feature.value)}
            >
              <CardContent className="flex items-center gap-3 p-4">
                <Checkbox
                  checked={answers.features?.includes(feature.value)}
                  onCheckedChange={() => toggleFeature(feature.value)}
                  className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary"
                />
                {feature.icon && <span className="text-2xl">{feature.icon}</span>}
                <span className="font-medium text-foreground">{feature.label}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </QuestionCard>
  );
}

export function WebQ4Timeline({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: WebDevQuestionProps) {
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
        options={webDevOptions.timeline}
        selected={answers.timeline}
        onSelect={(value) => onUpdate({ timeline: value })}
      />
    </QuestionCard>
  );
}

export function WebQ5Budget({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: WebDevQuestionProps) {
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
        options={webDevOptions.budget}
        selected={answers.budget}
        onSelect={(value) => onUpdate({ budget: value })}
      />
    </QuestionCard>
  );
}

export function WebQ6Notes({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
}: WebDevQuestionProps) {
  return (
    <QuestionCard
      title="Anything else?"
      subtitle="Optional — add website references, your current site URL, or any other details"
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
          placeholder="Website references you like, current site URL, or anything else you'd like to share..."
          rows={5}
        />
      </div>
    </QuestionCard>
  );
}
