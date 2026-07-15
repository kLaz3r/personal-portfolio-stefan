"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
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
import {
  PhotoQ1Type,
  PhotoQ2Location,
  PhotoQ3Purpose,
  PhotoQ4Timeline,
  PhotoQ5Budget,
  PhotoQ6Notes,
} from "./components/PhotographyQuestions";
import {
  VideoQ1Type,
  VideoQ2Footage,
  VideoQ3Style,
  VideoQ4Timeline,
  VideoQ5Budget,
  VideoQ6Notes,
} from "./components/VideoEditingQuestions";
import { SummaryStage } from "./components/SummaryStage";
import { LanguageSelector } from "./components/LanguageSelector";
import {
  Stage,
  ServiceType,
  QuoteFormState,
  GraphicDesignAnswers,
  WebDevAnswers,
  PhotographyAnswers,
  VideoEditingAnswers,
  getNextStage,
  getPrevStage,
  getQuestionNumber,
  SERVICE_TO_PREFIX,
} from "./types";
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

const initialPhotographyAnswers: PhotographyAnswers = {
  projectType: "",
  location: "",
  purpose: "",
  timeline: "",
  budget: "",
  notes: "",
};

const initialVideoEditingAnswers: VideoEditingAnswers = {
  projectType: "",
  footageStatus: "",
  editingStyle: "",
  timeline: "",
  budget: "",
  notes: "",
};

const initialFormState: QuoteFormState = {
  selectedServices: [],
  graphicDesign: { ...initialDesignAnswers },
  webDev: { ...initialWebDevAnswers },
  photography: { ...initialPhotographyAnswers },
  videoEditing: { ...initialVideoEditingAnswers },
};

export default function BusinessPage() {
  const [stage, setStage] = useState<Stage>("landing");
  const [formState, setFormState] = useState<QuoteFormState>(initialFormState);
  const [showLangSelector, setShowLangSelector] = useState(false);

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

  const updatePhotographyAnswers = useCallback(
    (answers: Partial<PhotographyAnswers>) => {
      setFormState((prev) => ({
        ...prev,
        photography: { ...prev.photography, ...answers },
      }));
    },
    []
  );

  const updateVideoEditingAnswers = useCallback(
    (answers: Partial<VideoEditingAnswers>) => {
      setFormState((prev) => ({
        ...prev,
        videoEditing: { ...prev.videoEditing, ...answers },
      }));
    },
    []
  );

  const handleServiceSelect = useCallback(
    (services: ServiceType[]) => {
      updateFormState({ selectedServices: services });
      setStage(`${SERVICE_TO_PREFIX[services[0]]}-q1` as Stage);
    },
    [updateFormState]
  );

  const handleNext = useCallback(() => {
    setStage((prev) => getNextStage(formState.selectedServices, prev));
  }, [formState.selectedServices]);

  const handleBack = useCallback(() => {
    setStage((prev) => getPrevStage(formState.selectedServices, prev));
  }, [formState.selectedServices]);

  const handleBackFromSummary = useCallback(() => {
    if (formState.selectedServices.length === 0) {
      setStage("service-select");
      return;
    }
    const lastService =
      formState.selectedServices[formState.selectedServices.length - 1];
    setStage(`${SERVICE_TO_PREFIX[lastService]}-q6` as Stage);
  }, [formState.selectedServices]);

  const handleEdit = useCallback(() => {
    if (formState.selectedServices.length > 0) {
      setStage(
        `${SERVICE_TO_PREFIX[formState.selectedServices[0]]}-q1` as Stage
      );
    }
  }, [formState.selectedServices]);

  const handleStartOver = useCallback(() => {
    setFormState(initialFormState);
    setStage("landing");
  }, []);

  const handleSend = useCallback(() => {
    openWhatsApp(formState);
  }, [formState]);

  const handleOpenLanguageSelector = useCallback(() => {
    setShowLangSelector(true);
  }, []);

  const handleCloseLanguageSelector = useCallback(() => {
    setShowLangSelector(false);
  }, []);

  const renderQuestionStage = () => {
    const match = stage.match(
      /^(design|web|photo|video)-q([1-6])$/
    );
    if (!match) return null;

    const servicePrefix = match[1];
    const qNum = parseInt(match[2]);
    const step = getQuestionNumber(stage);

    const props = {
      currentStep: step,
      onNext: handleNext,
      onLanguageChange: handleOpenLanguageSelector,
    };

    const backHandler = () => {
      const prevStage = getPrevStage(formState.selectedServices, stage);
      setStage(prevStage);
    };

    // Design questions
    if (servicePrefix === "design") {
      const answers = formState.graphicDesign;
      const onUpdate = updateDesignAnswers;
      switch (qNum) {
        case 1:
          return (
            <DesignQ1Type
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 2:
          return (
            <DesignQ2Status
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 3:
          return (
            <DesignQ3Style
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 4:
          return (
            <DesignQ4Timeline
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 5:
          return (
            <DesignQ5Budget
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 6:
          return (
            <DesignQ6Notes
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
      }
    }

    // Web dev questions
    if (servicePrefix === "web") {
      const answers = formState.webDev;
      const onUpdate = updateWebDevAnswers;
      switch (qNum) {
        case 1:
          return (
            <WebQ1Type
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 2:
          return (
            <WebQ2DesignStatus
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 3:
          return (
            <WebQ3Features
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 4:
          return (
            <WebQ4Timeline
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 5:
          return (
            <WebQ5Budget
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 6:
          return (
            <WebQ6Notes
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
      }
    }

    // Photography questions
    if (servicePrefix === "photo") {
      const answers = formState.photography;
      const onUpdate = updatePhotographyAnswers;
      switch (qNum) {
        case 1:
          return (
            <PhotoQ1Type
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 2:
          return (
            <PhotoQ2Location
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 3:
          return (
            <PhotoQ3Purpose
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 4:
          return (
            <PhotoQ4Timeline
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 5:
          return (
            <PhotoQ5Budget
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 6:
          return (
            <PhotoQ6Notes
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
      }
    }

    // Video editing questions
    if (servicePrefix === "video") {
      const answers = formState.videoEditing;
      const onUpdate = updateVideoEditingAnswers;
      switch (qNum) {
        case 1:
          return (
            <VideoQ1Type
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 2:
          return (
            <VideoQ2Footage
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 3:
          return (
            <VideoQ3Style
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 4:
          return (
            <VideoQ4Timeline
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 5:
          return (
            <VideoQ5Budget
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
        case 6:
          return (
            <VideoQ6Notes
              answers={answers}
              onUpdate={onUpdate}
              onBack={backHandler}
              {...props}
            />
          );
      }
    }

    return null;
  };

  const renderStage = () => {
    if (stage === "landing") {
      return (
        <LandingStage
          onStart={() => {
            setStage("service-select");
          }}
        />
      );
    }

    if (stage === "service-select") {
      return (
        <ServiceSelectStage
          onSelect={handleServiceSelect}
          onBack={() => setStage("landing")}
          onLanguageChange={handleOpenLanguageSelector}
        />
      );
    }

    if (stage === "summary") {
      return (
        <SummaryStage
          formState={formState}
          onBack={handleBackFromSummary}
          onEdit={handleEdit}
          onSend={handleSend}
          onLanguageChange={handleOpenLanguageSelector}
        />
      );
    }

    return renderQuestionStage();
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <img
        src="/Logo-light.svg"
        alt=""
        className="absolute top-1/2 right-0 opacity-10 grayscale pointer-events-none select-none"
        style={{
          transform: "translate(30%, -50%) scale(1)",
          transformOrigin: "center",
        }}
      />

      <LanguageSelector
        isOpen={showLangSelector}
        onClose={handleCloseLanguageSelector}
      />

      <main className="mt-16 relative z-10">
        <AnimatePresence mode="wait">{renderStage()}</AnimatePresence>
      </main>
    </div>
  );
}
