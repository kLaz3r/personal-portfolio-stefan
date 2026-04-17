"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Progress } from "@/components/ui/progress";
import { LandingStage } from "./components/LandingStage";
import { ServiceSelectStage } from "./components/ServiceSelectStage";
import {
  DesignQ1Type,
  DesignQ2Status,
  DesignQ3Style,
  DesignQ4Timeline,
  DesignQ5Budget,
  DesignQ6Notes,
} from "./components/DesignQuestions";
import {
  WebQ1Type,
  WebQ2DesignStatus,
  WebQ3Features,
  WebQ4Timeline,
  WebQ5Budget,
  WebQ6Notes,
} from "./components/WebDevQuestions";
import { SummaryStage } from "./components/SummaryStage";
import {
  Stage,
  ServiceType,
  QuoteFormState,
  GraphicDesignAnswers,
  WebDevAnswers,
} from "./types";
import { getStageProgress } from "./types";
import { openWhatsApp } from "./lib/whatsapp";

const initialDesignAnswers: GraphicDesignAnswers = {
  projectType: "",
  projectStatus: "",
  styleDirection: "",
  timeline: "",
  budget: "",
  notes: "",
};

const initialWebDevAnswers: WebDevAnswers = {
  projectType: "",
  designStatus: "",
  features: [],
  timeline: "",
  budget: "",
  notes: "",
};

const initialFormState: QuoteFormState = {
  service: null,
  graphicDesign: { ...initialDesignAnswers },
  webDev: { ...initialWebDevAnswers },
};

export default function BusinessPage() {
  const [stage, setStage] = useState<Stage>("landing");
  const [formState, setFormState] = useState<QuoteFormState>(initialFormState);
  const [isBothPart2, setIsBothPart2] = useState(false);

  const progress = getStageProgress(stage);

  const updateFormState = useCallback(
    (updates: Partial<QuoteFormState>) => {
      setFormState((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  const updateDesignAnswers = useCallback(
    (answers: Partial<GraphicDesignAnswers>) => {
      setFormState((prev) => ({
        ...prev,
        graphicDesign: { ...prev.graphicDesign, ...answers },
      }));
    },
    []
  );

  const updateWebDevAnswers = useCallback(
    (answers: Partial<WebDevAnswers>) => {
      setFormState((prev) => ({
        ...prev,
        webDev: { ...prev.webDev, ...answers },
      }));
    },
    []
  );

  const handleServiceSelect = useCallback(
    (service: ServiceType) => {
      updateFormState({ service });
      if (service === "design") {
        setStage("design-q1");
      } else if (service === "web") {
        setStage("web-q1");
      } else {
        setIsBothPart2(false);
        setStage("design-q1");
      }
    },
    [updateFormState]
  );

  const handleDesignNext = useCallback(
    (currentStep: number) => {
      const nextStep = currentStep + 1;
      if (nextStep <= 6) {
        setStage(`design-q${nextStep}` as Stage);
      } else if (formState.service === "both" && !isBothPart2) {
        setIsBothPart2(true);
        setStage("web-q1");
      } else {
        setStage("summary");
      }
    },
    [formState.service, isBothPart2]
  );

  const handleDesignBack = useCallback(
    (currentStep: number) => {
      const prevStep = currentStep - 1;
      if (prevStep >= 1) {
        setStage(`design-q${prevStep}` as Stage);
      } else {
        setStage("service-select");
      }
    },
    []
  );

  const handleWebNext = useCallback(
    (currentStep: number) => {
      const nextStep = currentStep + 1;
      if (nextStep <= 6) {
        setStage(`web-q${nextStep}` as Stage);
      } else {
        setStage("summary");
      }
    },
    []
  );

  const handleWebBack = useCallback(
    () => {
      const currentStep = parseInt(stage.replace("web-q", ""));
      const prevStep = currentStep - 1;
      if (prevStep >= 1) {
        setStage(`web-q${prevStep}` as Stage);
      } else if (formState.service === "both" && isBothPart2) {
        setIsBothPart2(false);
        setStage("design-q6");
      } else {
        setStage("service-select");
      }
    },
    [stage, formState.service, isBothPart2]
  );

  const handleBackFromSummary = useCallback(() => {
    if (formState.service === "design") {
      setStage("design-q6");
    } else {
      setStage("web-q6");
    }
  }, [formState.service]);

  const handleEdit = useCallback(() => {
    if (formState.service === "design") {
      setStage("design-q1");
    } else if (formState.service === "web") {
      setStage("web-q1");
    } else {
      setIsBothPart2(false);
      setStage("design-q1");
    }
  }, [formState.service]);

  const handleStartOver = useCallback(() => {
    setFormState(initialFormState);
    setIsBothPart2(false);
    setStage("landing");
  }, []);

  const handleSend = useCallback(() => {
    openWhatsApp(formState);
  }, [formState]);

  const renderStage = () => {
    switch (stage) {
      case "landing":
        return (
          <LandingStage
            onStart={() => {
              setStage("service-select");
            }}
          />
        );

      case "service-select":
        return (
          <ServiceSelectStage
            onSelect={handleServiceSelect}
            onBack={() => setStage("landing")}
          />
        );

      case "design-q1":
        return (
          <DesignQ1Type
            answers={formState.graphicDesign}
            onUpdate={updateDesignAnswers}
            onBack={() => setStage("service-select")}
            onNext={() => handleDesignNext(1)}
            currentStep={1}
            isPart2={isBothPart2}
          />
        );

      case "design-q2":
        return (
          <DesignQ2Status
            answers={formState.graphicDesign}
            onUpdate={updateDesignAnswers}
            onBack={() => handleDesignBack(2)}
            onNext={() => handleDesignNext(2)}
            currentStep={2}
          />
        );

      case "design-q3":
        return (
          <DesignQ3Style
            answers={formState.graphicDesign}
            onUpdate={updateDesignAnswers}
            onBack={() => handleDesignBack(3)}
            onNext={() => handleDesignNext(3)}
            currentStep={3}
          />
        );

      case "design-q4":
        return (
          <DesignQ4Timeline
            answers={formState.graphicDesign}
            onUpdate={updateDesignAnswers}
            onBack={() => handleDesignBack(4)}
            onNext={() => handleDesignNext(4)}
            currentStep={4}
          />
        );

      case "design-q5":
        return (
          <DesignQ5Budget
            answers={formState.graphicDesign}
            onUpdate={updateDesignAnswers}
            onBack={() => handleDesignBack(5)}
            onNext={() => handleDesignNext(5)}
            currentStep={5}
          />
        );

      case "design-q6":
        return (
          <DesignQ6Notes
            answers={formState.graphicDesign}
            onUpdate={updateDesignAnswers}
            onBack={() => handleDesignBack(6)}
            onNext={() => handleDesignNext(6)}
            currentStep={6}
          />
        );

      case "web-q1":
        return (
          <WebQ1Type
            answers={formState.webDev}
            onUpdate={updateWebDevAnswers}
            onBack={handleWebBack}
            onNext={() => handleWebNext(1)}
            currentStep={1}
          />
        );

      case "web-q2":
        return (
          <WebQ2DesignStatus
            answers={formState.webDev}
            onUpdate={updateWebDevAnswers}
            onBack={handleWebBack}
            onNext={() => handleWebNext(2)}
            currentStep={2}
          />
        );

      case "web-q3":
        return (
          <WebQ3Features
            answers={formState.webDev}
            onUpdate={updateWebDevAnswers}
            onBack={handleWebBack}
            onNext={() => handleWebNext(3)}
            currentStep={3}
          />
        );

      case "web-q4":
        return (
          <WebQ4Timeline
            answers={formState.webDev}
            onUpdate={updateWebDevAnswers}
            onBack={handleWebBack}
            onNext={() => handleWebNext(4)}
            currentStep={4}
          />
        );

      case "web-q5":
        return (
          <WebQ5Budget
            answers={formState.webDev}
            onUpdate={updateWebDevAnswers}
            onBack={handleWebBack}
            onNext={() => handleWebNext(5)}
            currentStep={5}
          />
        );

      case "web-q6":
        return (
          <WebQ6Notes
            answers={formState.webDev}
            onUpdate={updateWebDevAnswers}
            onBack={handleWebBack}
            onNext={() => handleWebNext(6)}
            currentStep={6}
          />
        );

      case "summary":
        return (
          <SummaryStage
            formState={formState}
            onBack={handleBackFromSummary}
            onEdit={handleEdit}
            onSend={handleSend}
          />
        );

      default:
        return <LandingStage onStart={() => setStage("service-select")} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress bar */}
      {stage !== "landing" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span
                onClick={handleStartOver}
                className="font-montserrat font-bold text-lg text-brand-primary cursor-pointer"
              >
                Stefan Nasturas
              </span>
              <span className="text-sm text-muted-foreground">
                {progress > 0 && progress < 100 && `${progress}%`}
              </span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        </motion.div>
      )}

      {/* Main content */}
      <main
        className={
          stage === "landing" ? "" : "pt-16"
        }
      >
        <AnimatePresence mode="wait">{renderStage()}</AnimatePresence>
      </main>
    </div>
  );
}
