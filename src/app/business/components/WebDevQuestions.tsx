"use client";

import { QuestionCard, OptionGrid } from "./QuestionCard";
import { webDevLabelsEn, webDevLabelsRo, WebDevAnswers } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

interface WebDevQuestionProps {
  answers: WebDevAnswers;
  onUpdate: (answers: Partial<WebDevAnswers>) => void;
  onBack: () => void;
  onNext: () => void;
  currentStep: number;
  onLanguageChange?: () => void;
}

function useWebDevOptions() {
  const { t, language } = useTranslation();
  const labels = language === "ro" ? webDevLabelsRo : webDevLabelsEn;

  return {
    projectType: [
      { value: "portfolio", label: labels.portfolio, icon: "👤" },
      { value: "business", label: labels.business, icon: "🏢" },
      { value: "landing", label: labels.landing, icon: "🎯" },
      { value: "ecommerce", label: labels.ecommerce, icon: "🛒" },
      { value: "blog", label: labels.blog, icon: "📝" },
      { value: "webapp", label: labels.webapp, icon: "⚙️" },
      { value: "other", label: labels.other, icon: "✨" },
    ],
    designStatus: [
      { value: "full-package", label: labels.fullPackage, icon: "🎨" },
      { value: "dev-only", label: labels.devOnly, icon: "📐" },
      { value: "guidance", label: labels.guidance, icon: "💡" },
      { value: "redesign", label: labels.redesign, icon: "🔄" },
    ],
    features: [
      { value: "contact-form", label: labels.contactForm, icon: "📧" },
      { value: "cms", label: labels.cms, icon: "📝" },
      { value: "blog-section", label: labels.blogFeature, icon: "📰" },
      { value: "payments", label: labels.payments, icon: "💳" },
      { value: "booking", label: labels.booking, icon: "📅" },
      { value: "multilingual", label: labels.multilingual, icon: "🌍" },
      { value: "seo", label: labels.seo, icon: "🔍" },
      { value: "animations", label: labels.animations, icon: "✨" },
      { value: "none", label: labels.none, icon: "❌" },
    ],
    timeline: [
      { value: "urgent", label: labels.urgent, icon: "⚡" },
      { value: "1-month", label: labels.oneMonth, icon: "📅" },
      { value: "2-3-months", label: labels.twoThreeMonths, icon: "📆" },
      { value: "flexible", label: labels.flexible, icon: "🌿" },
    ],
    budget: [
      { value: "under-500", label: labels.under500, icon: "💰" },
      { value: "500-1500", label: labels.range5001500, icon: "💰💰" },
      { value: "1500-4000", label: labels.range15004000, icon: "💰💰💰" },
      { value: "4000+", label: labels.over4000, icon: "💎" },
      { value: "unsure", label: labels.unsure, icon: "🤷" },
    ],
  };
}

export function WebQ1Type({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: WebDevQuestionProps) {
  const { t } = useTranslation();
  const options = useWebDevOptions();

  return (
    <QuestionCard
      title={t("business.webDev.q1.title")}
      subtitle={t("business.webDev.q1.subtitle")}
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
            {t("business.webDev.q1.otherLabel")}
          </Label>
          <Textarea
            id="project-type-other"
            value={answers.projectTypeOther || ""}
            onChange={(e) => onUpdate({ projectTypeOther: e.target.value })}
            placeholder={t("business.webDev.q1.placeholder")}
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
  onLanguageChange,
}: WebDevQuestionProps) {
  const { t } = useTranslation();
  const options = useWebDevOptions();

  return (
    <QuestionCard
      title={t("business.webDev.q2.title")}
      subtitle={t("business.webDev.q2.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!answers.designStatus}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <OptionGrid
        options={options.designStatus}
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
  onLanguageChange,
}: WebDevQuestionProps) {
  const { t } = useTranslation();
  const options = useWebDevOptions();

  const toggleFeature = (feature: string) => {
    const currentFeatures = answers.features || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];
    onUpdate({ features: newFeatures });
  };

  return (
    <QuestionCard
      title={t("business.webDev.q3.title")}
      subtitle={t("business.webDev.q3.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <div className="grid grid-cols-1 gap-3">
        {options.features.map((feature, index) => (
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
                <span className="font-medium text-foreground">
                  {feature.label}
                </span>
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
  onLanguageChange,
}: WebDevQuestionProps) {
  const { t } = useTranslation();
  const options = useWebDevOptions();

  return (
    <QuestionCard
      title={t("business.webDev.q4.title")}
      subtitle={t("business.webDev.q4.subtitle")}
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

export function WebQ5Budget({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: WebDevQuestionProps) {
  const { t } = useTranslation();
  const options = useWebDevOptions();

  return (
    <QuestionCard
      title={t("business.webDev.q5.title")}
      subtitle={t("business.webDev.q5.subtitle")}
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

export function WebQ6Notes({
  answers,
  onUpdate,
  onBack,
  onNext,
  currentStep,
  onLanguageChange,
}: WebDevQuestionProps) {
  const { t } = useTranslation();

  return (
    <QuestionCard
      title={t("business.webDev.q6.title")}
      subtitle={t("business.webDev.q6.subtitle")}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={false}
      currentStep={currentStep}
      totalSteps={6}
      onLanguageChange={onLanguageChange}
    >
      <div className="space-y-2">
        <Label htmlFor="notes">{t("business.webDev.q6.descriptionLabel")}</Label>
        <Textarea
          id="notes"
          value={answers.notes || ""}
          onChange={(e) => onUpdate({ notes: e.target.value })}
          placeholder={t("business.webDev.q6.placeholder")}
          rows={5}
        />
      </div>
    </QuestionCard>
  );
}
