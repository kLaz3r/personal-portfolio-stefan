"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  graphicDesignOptions,
  webDevOptions,
  QuoteFormState,
  ServiceType,
} from "../types";
import { ArrowLeft, Send, Pencil } from "lucide-react";

interface SummaryStageProps {
  formState: QuoteFormState;
  onBack: () => void;
  onEdit: () => void;
  onSend: () => void;
}

function getOptionLabel(
  options: { value: string; label: string }[],
  value: string | undefined
): string {
  if (!value) return "Not selected";
  const option = options.find((o) => o.value === value);
  return option?.label || value;
}

function getDesignSummary(formState: QuoteFormState) {
  const { graphicDesign } = formState;
  const projectTypeLabel =
    graphicDesign.projectType === "other" && graphicDesign.projectTypeOther
      ? graphicDesign.projectTypeOther
      : getOptionLabel(graphicDesignOptions.projectType, graphicDesign.projectType);

  return {
    service: "Graphic Design",
    items: [
      { emoji: "📌", label: "Project Type", value: projectTypeLabel },
      {
        emoji: "📊",
        label: "Status",
        value: getOptionLabel(
          graphicDesignOptions.projectStatus,
          graphicDesign.projectStatus
        ),
      },
      {
        emoji: "✏️",
        label: "Style",
        value: getOptionLabel(
          graphicDesignOptions.styleDirection,
          graphicDesign.styleDirection
        ),
      },
      {
        emoji: "📅",
        label: "Timeline",
        value: getOptionLabel(graphicDesignOptions.timeline, graphicDesign.timeline),
      },
      {
        emoji: "💰",
        label: "Budget",
        value: getOptionLabel(graphicDesignOptions.budget, graphicDesign.budget),
      },
      ...(graphicDesign.notes
        ? [{ emoji: "📝", label: "Notes", value: graphicDesign.notes }]
        : []),
    ],
  };
}

function getWebDevSummary(formState: QuoteFormState) {
  const { webDev } = formState;
  const projectTypeLabel =
    webDev.projectType === "other" && webDev.projectTypeOther
      ? webDev.projectTypeOther
      : getOptionLabel(webDevOptions.projectType, webDev.projectType);

  const featuresLabels = webDev.features
    ?.map((f) => {
      if (f === "none") return "None specifically";
      return getOptionLabel(webDevOptions.features, f);
    })
    .filter((f) => f !== "Not selected")
    .join(", ");

  return {
    service: "Web Development",
    items: [
      { emoji: "📌", label: "Project Type", value: projectTypeLabel },
      {
        emoji: "🎨",
        label: "Design",
        value: getOptionLabel(webDevOptions.designStatus, webDev.designStatus),
      },
      {
        emoji: "⚙️",
        label: "Features",
        value: featuresLabels || "None selected",
      },
      {
        emoji: "📅",
        label: "Timeline",
        value: getOptionLabel(webDevOptions.timeline, webDev.timeline),
      },
      {
        emoji: "💰",
        label: "Budget",
        value: getOptionLabel(webDevOptions.budget, webDev.budget),
      },
      ...(webDev.notes ? [{ emoji: "📝", label: "Notes", value: webDev.notes }] : []),
    ],
  };
}

export function SummaryStage({ formState, onBack, onEdit, onSend }: SummaryStageProps) {
  const summaries = [];

  if (formState.service === "design" || formState.service === "both") {
    summaries.push(getDesignSummary(formState));
  }

  if (formState.service === "web" || formState.service === "both") {
    summaries.push(getWebDevSummary(formState));
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-8"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="mb-2 text-center font-montserrat text-2xl font-bold text-foreground md:text-3xl">
            Your Request Summary
          </h2>
          <p className="text-center text-muted-foreground">
            Review your answers before sending
          </p>
        </motion.div>

        <div className="space-y-4">
          {summaries.map((summary, idx) => (
            <motion.div
              key={summary.service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-lg">
                    {formState.service === "both" && (
                      <span className="mr-2 text-brand-primary">
                        {idx === 0 ? "Part 1 of 2 —" : "Part 2 of 2 —"}
                      </span>
                    )}
                    {summary.service}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {summary.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {item.label}:
                        </span>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button variant="outline" onClick={onEdit} className="gap-2">
            <Pencil className="size-4" />
            Edit answers
          </Button>
          <Button
            onClick={onSend}
            className="gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white"
          >
            <Send className="size-4" />
            Send via WhatsApp
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
