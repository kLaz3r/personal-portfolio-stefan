"use client";

import { QuestionCard, OptionGrid } from "./QuestionCard";
import { videoEditingLabelsEn, videoEditingLabelsRo, VideoEditingAnswers } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

interface VideoEditingQuestionProps {
  answers: VideoEditingAnswers;
  onUpdate: (answers: Partial<VideoEditingAnswers>) => void;
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  onLanguageChange?: () => void;
}

function useVideoEditingOptions() {
  const { language } = useTranslation();
  const labels = language === "ro" ? videoEditingLabelsRo : videoEditingLabelsEn;

  return {
    projectType: [
      { value: "social-reels", label: labels.socialReels, icon: "📱" },
      { value: "youtube", label: labels.youtubeVideo, icon: "▶️" },
      { value: "promo", label: labels.promoVideo, icon: "🎬" },
      { value: "event", label: labels.eventHighlights, icon: "🎉" },
      { value: "podcast", label: labels.podcast, icon: "🎙️" },
      { value: "short-film", label: labels.shortFilm, icon: "🎥" },
      { value: "other", label: labels.other, icon: "✨" },
    ],
    footageStatus: [
      { value: "have-all", label: labels.haveAll, icon: "✅" },
      { value: "have-some", label: labels.haveSome, icon: "📁" },
      { value: "need-filming", label: labels.needFilming, icon: "🎥" },
      { value: "not-sure", label: labels.notSure, icon: "🤔" },
    ],
    editingStyle: [
      { value: "clean", label: labels.cleanProfessional, icon: "✨" },
      { value: "cinematic", label: labels.cinematic, icon: "🎬" },
      { value: "fast-paced", label: labels.fastPacedSocial, icon: "⚡" },
      { value: "minimal", label: labels.minimal, icon: "◻️" },
      { value: "flexible", label: labels.flexible, icon: "🎭" },
    ],
    timeline: [
      { value: "urgent", label: labels.urgent, icon: "⚡" },
      { value: "1-month", label: labels.oneMonth, icon: "📅" },
      { value: "2-3-months", label: labels.twoThreeMonths, icon: "📆" },
      { value: "flexible", label: labels.flexibleTimeline, icon: "🌿" },
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

export function VideoQ1Type({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: VideoEditingQuestionProps) {
  const { t } = useTranslation();
  const options = useVideoEditingOptions();

  return (
    <QuestionCard
      title={t("business.video.q1.title")}
      subtitle={t("business.video.q1.subtitle")}
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
          <Label htmlFor="video-project-type-other">
            {t("business.video.q1.otherLabel")}
          </Label>
          <Textarea
            id="video-project-type-other"
            value={answers.projectTypeOther || ""}
            onChange={(e) => onUpdate({ projectTypeOther: e.target.value })}
            placeholder={t("business.video.q1.placeholder")}
            className="mt-2"
          />
        </motion.div>
      )}
    </QuestionCard>
  );
}

export function VideoQ2Footage({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: VideoEditingQuestionProps) {
  const { t } = useTranslation();
  const options = useVideoEditingOptions();

  return (
    <QuestionCard
      title={t("business.video.q2.title")}
      subtitle={t("business.video.q2.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.footageStatus}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.footageStatus}
        selected={answers.footageStatus}
        onSelect={(value) => onUpdate({ footageStatus: value })}
      />
    </QuestionCard>
  );
}

export function VideoQ3Style({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: VideoEditingQuestionProps) {
  const { t } = useTranslation();
  const options = useVideoEditingOptions();

  return (
    <QuestionCard
      title={t("business.video.q3.title")}
      subtitle={t("business.video.q3.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.editingStyle}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.editingStyle}
        selected={answers.editingStyle}
        onSelect={(value) => onUpdate({ editingStyle: value })}
      />
    </QuestionCard>
  );
}

export function VideoQ4Timeline({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: VideoEditingQuestionProps) {
  const { t } = useTranslation();
  const options = useVideoEditingOptions();

  return (
    <QuestionCard
      title={t("business.video.q4.title")}
      subtitle={t("business.video.q4.subtitle")}
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

export function VideoQ5Budget({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: VideoEditingQuestionProps) {
  const { t } = useTranslation();
  const options = useVideoEditingOptions();

  return (
    <QuestionCard
      title={t("business.video.q5.title")}
      subtitle={t("business.video.q5.subtitle")}
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

export function VideoQ6Notes({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: VideoEditingQuestionProps) {
  const { t } = useTranslation();

  return (
    <QuestionCard
      title={t("business.video.q6.title")}
      subtitle={t("business.video.q6.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <div className="space-y-2">
        <Label htmlFor="video-notes">
          {t("business.video.q6.descriptionLabel")}
        </Label>
        <Textarea
          id="video-notes"
          value={answers.notes || ""}
          onChange={(e) => onUpdate({ notes: e.target.value })}
          placeholder={t("business.video.q6.placeholder")}
          rows={5}
        />
      </div>
    </QuestionCard>
  );
}
