"use client";

import { QuestionCard, OptionGrid } from "./QuestionCard";
import {
  designLabelsEn,
  designLabelsRo,
  GraphicDesignAnswers,
} from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

interface DesignQuestionProps {
  answers: GraphicDesignAnswers;
  onUpdate: (answers: Partial<GraphicDesignAnswers>) => void;
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  isPart2?: boolean;
  onLanguageChange?: () => void;
}

function useDesignOptions() {
  const { t, language } = useTranslation();
  const labels = language === "ro" ? designLabelsRo : designLabelsEn;

  return {
    projectType: [
      { value: "logo-brand", label: labels.logoBrand, icon: "🎨" },
      { value: "social-media", label: labels.socialMedia, icon: "📱" },
      { value: "print", label: labels.print, icon: "🖨️" },
      { value: "packaging", label: labels.packaging, icon: "📦" },
      { value: "illustration", label: labels.illustration, icon: "✏️" },
      { value: "other", label: labels.other, icon: "✨" },
    ],
    projectStatus: [
      { value: "scratch", label: labels.scratch, icon: "🆕" },
      { value: "refresh", label: labels.refresh, icon: "🔄" },
      { value: "deliverables", label: labels.deliverables, icon: "✅" },
      { value: "unsure", label: labels.unsure, icon: "🤔" },
    ],
    styleDirection: [
      { value: "minimal", label: labels.minimal, icon: "◻️" },
      { value: "bold", label: labels.bold, icon: "🔥" },
      { value: "elegant", label: labels.elegant, icon: "💎" },
      { value: "playful", label: labels.playful, icon: "🎈" },
      { value: "corporate", label: labels.corporate, icon: "🏢" },
      { value: "flexible", label: labels.flexible, icon: "🎭" },
    ],
    timeline: [
      { value: "urgent", label: labels.urgent, icon: "⚡" },
      { value: "1-month", label: labels.oneMonth, icon: "📅" },
      { value: "2-3-months", label: labels.twoThreeMonths, icon: "📆" },
      { value: "flexible", label: labels.flexibleTimeline, icon: "🌿" },
    ],
    budget: [
      { value: "under-150", label: labels.under150, icon: "💰" },
      { value: "150-500", label: labels.range150500, icon: "💰💰" },
      { value: "500-1500", label: labels.range5001500, icon: "💰💰💰" },
      { value: "1500+", label: labels.over1500, icon: "💎" },
      { value: "unsure", label: labels.unsureBudget, icon: "🤷" },
    ],
  };
}

export function DesignQ1Type({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  isPart2 = false,
  onLanguageChange,
}: DesignQuestionProps) {
  const { t } = useTranslation();
  const options = useDesignOptions();

  return (
    <QuestionCard
      title={t("business.graphicDesign.q1.title")}
      subtitle={t("business.graphicDesign.q1.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.projectType}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.projectType}
        selected={answers.projectType}
        onSelect={(value) =>
          onUpdate({
            projectType: value,
            projectTypeOther: value === "other" ? "" : undefined,
          })
        }
      />
      {answers.projectType === "other" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4"
        >
          <Label htmlFor="project-type-other">
            {t("business.graphicDesign.q1.otherLabel")}
          </Label>
          <Textarea
            id="project-type-other"
            value={answers.projectTypeOther || ""}
            onChange={(e) =>
              onUpdate({ projectTypeOther: e.target.value })
            }
            placeholder={t("business.graphicDesign.q1.placeholder")}
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
  onLanguageChange,
}: DesignQuestionProps) {
  const { t } = useTranslation();
  const options = useDesignOptions();

  return (
    <QuestionCard
      title={t("business.graphicDesign.q2.title")}
      subtitle={t("business.graphicDesign.q2.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.projectStatus}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.projectStatus}
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
  onLanguageChange,
}: DesignQuestionProps) {
  const { t } = useTranslation();
  const options = useDesignOptions();

  return (
    <QuestionCard
      title={t("business.graphicDesign.q3.title")}
      subtitle={t("business.graphicDesign.q3.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.styleDirection}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.styleDirection}
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
  onLanguageChange,
}: DesignQuestionProps) {
  const { t } = useTranslation();
  const options = useDesignOptions();

  return (
    <QuestionCard
      title={t("business.graphicDesign.q4.title")}
      subtitle={t("business.graphicDesign.q4.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.timeline}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.timeline}
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
  onLanguageChange,
}: DesignQuestionProps) {
  const { t } = useTranslation();
  const options = useDesignOptions();

  return (
    <QuestionCard
      title={t("business.graphicDesign.q5.title")}
      subtitle={t("business.graphicDesign.q5.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.budget}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.budget}
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
  onLanguageChange,
}: DesignQuestionProps) {
  const { t } = useTranslation();

  return (
    <QuestionCard
      title={t("business.graphicDesign.q6.title")}
      subtitle={t("business.graphicDesign.q6.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <div className="space-y-2">
        <Label htmlFor="notes">
          {t("business.graphicDesign.q6.descriptionLabel")}
        </Label>
        <Textarea
          id="notes"
          value={answers.notes || ""}
          onChange={(e) => onUpdate({ notes: e.target.value })}
          placeholder={t("business.graphicDesign.q6.placeholder")}
          rows={5}
        />
      </div>
    </QuestionCard>
  );
}
