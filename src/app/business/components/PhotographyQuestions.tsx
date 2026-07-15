"use client";

import { QuestionCard, OptionGrid } from "./QuestionCard";
import { photographyLabelsEn, photographyLabelsRo, PhotographyAnswers } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

interface PhotographyQuestionProps {
  answers: PhotographyAnswers;
  onUpdate: (answers: Partial<PhotographyAnswers>) => void;
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  onLanguageChange?: () => void;
}

function usePhotographyOptions() {
  const { language } = useTranslation();
  const labels = language === "ro" ? photographyLabelsRo : photographyLabelsEn;

  return {
    projectType: [
      { value: "business-corporate", label: labels.businessCorporate, icon: "🏢" },
      { value: "product", label: labels.productPhotography, icon: "📦" },
      { value: "event", label: labels.eventPhotography, icon: "🎉" },
      { value: "portrait", label: labels.portraitSession, icon: "📸" },
      { value: "real-estate", label: labels.realEstate, icon: "🏠" },
      { value: "food", label: labels.foodPhotography, icon: "🍽️" },
      { value: "other", label: labels.other, icon: "✨" },
    ],
    location: [
      { value: "your-location", label: labels.yourLocation, icon: "📍" },
      { value: "outdoor", label: labels.outdoor, icon: "🌳" },
      { value: "studio", label: labels.studio, icon: "🏬" },
      { value: "recommendations", label: labels.needRecommendations, icon: "💡" },
      { value: "other", label: labels.otherLocation, icon: "✨" },
    ],
    purpose: [
      { value: "website", label: labels.website, icon: "🌐" },
      { value: "social-media", label: labels.socialMedia, icon: "📱" },
      { value: "marketing", label: labels.marketingCampaign, icon: "📢" },
      { value: "print", label: labels.printMaterials, icon: "🖨️" },
      { value: "personal", label: labels.personalUse, icon: "👤" },
      { value: "other", label: labels.otherPurpose, icon: "✨" },
    ],
    timeline: [
      { value: "urgent", label: labels.urgent, icon: "⚡" },
      { value: "1-month", label: labels.oneMonth, icon: "📅" },
      { value: "2-3-months", label: labels.twoThreeMonths, icon: "📆" },
      { value: "flexible", label: labels.flexible, icon: "🌿" },
    ],
    budget: [
      { value: "under-300", label: labels.under300, icon: "💰" },
      { value: "300-800", label: labels.range300800, icon: "💰💰" },
      { value: "800-2000", label: labels.range8002000, icon: "💰💰💰" },
      { value: "2000+", label: labels.over2000, icon: "💎" },
      { value: "unsure", label: labels.unsure, icon: "🤷" },
    ],
  };
}

export function PhotoQ1Type({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: PhotographyQuestionProps) {
  const { t } = useTranslation();
  const options = usePhotographyOptions();

  return (
    <QuestionCard
      title={t("business.photography.q1.title")}
      subtitle={t("business.photography.q1.subtitle")}
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
          <Label htmlFor="photo-project-type-other">
            {t("business.photography.q1.otherLabel")}
          </Label>
          <Textarea
            id="photo-project-type-other"
            value={answers.projectTypeOther || ""}
            onChange={(e) => onUpdate({ projectTypeOther: e.target.value })}
            placeholder={t("business.photography.q1.placeholder")}
            className="mt-2"
          />
        </motion.div>
      )}
    </QuestionCard>
  );
}

export function PhotoQ2Location({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: PhotographyQuestionProps) {
  const { t } = useTranslation();
  const options = usePhotographyOptions();

  return (
    <QuestionCard
      title={t("business.photography.q2.title")}
      subtitle={t("business.photography.q2.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.location}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.location}
        selected={answers.location}
        onSelect={(value) =>
          onUpdate({
            location: value,
            locationOther: value === "other" ? "" : undefined,
          })
        }
      />
      {answers.location === "other" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4"
        >
          <Label htmlFor="photo-location-other">
            {t("business.photography.q2.otherLabel")}
          </Label>
          <Textarea
            id="photo-location-other"
            value={answers.locationOther || ""}
            onChange={(e) => onUpdate({ locationOther: e.target.value })}
            placeholder={t("business.photography.q2.placeholder")}
            className="mt-2"
          />
        </motion.div>
      )}
    </QuestionCard>
  );
}

export function PhotoQ3Purpose({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: PhotographyQuestionProps) {
  const { t } = useTranslation();
  const options = usePhotographyOptions();

  return (
    <QuestionCard
      title={t("business.photography.q3.title")}
      subtitle={t("business.photography.q3.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.purpose}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.purpose}
        selected={answers.purpose}
        onSelect={(value) =>
          onUpdate({
            purpose: value,
            purposeOther: value === "other" ? "" : undefined,
          })
        }
      />
      {answers.purpose === "other" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4"
        >
          <Label htmlFor="photo-purpose-other">
            {t("business.photography.q3.otherLabel")}
          </Label>
          <Textarea
            id="photo-purpose-other"
            value={answers.purposeOther || ""}
            onChange={(e) => onUpdate({ purposeOther: e.target.value })}
            placeholder={t("business.photography.q3.placeholder")}
            className="mt-2"
          />
        </motion.div>
      )}
    </QuestionCard>
  );
}

export function PhotoQ4Timeline({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: PhotographyQuestionProps) {
  const { t } = useTranslation();
  const options = usePhotographyOptions();

  return (
    <QuestionCard
      title={t("business.photography.q4.title")}
      subtitle={t("business.photography.q4.subtitle")}
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

export function PhotoQ5Budget({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: PhotographyQuestionProps) {
  const { t } = useTranslation();
  const options = usePhotographyOptions();

  return (
    <QuestionCard
      title={t("business.photography.q5.title")}
      subtitle={t("business.photography.q5.subtitle")}
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

export function PhotoQ6Notes({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: PhotographyQuestionProps) {
  const { t } = useTranslation();

  return (
    <QuestionCard
      title={t("business.photography.q6.title")}
      subtitle={t("business.photography.q6.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <div className="space-y-2">
        <Label htmlFor="photo-notes">
          {t("business.photography.q6.descriptionLabel")}
        </Label>
        <Textarea
          id="photo-notes"
          value={answers.notes || ""}
          onChange={(e) => onUpdate({ notes: e.target.value })}
          placeholder={t("business.photography.q6.placeholder")}
          rows={5}
        />
      </div>
    </QuestionCard>
  );
}
