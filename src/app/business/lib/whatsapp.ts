import {
  graphicDesignOptions,
  webDevOptions,
  QuoteFormState,
  GraphicDesignAnswers,
  WebDevAnswers,
} from "../types";

const WHATSAPP_NUMBER = "40744305417"; // Romanian number format

function getOptionLabel(
  options: { value: string; label: string }[],
  value: string | undefined
): string {
  if (!value) return "Not selected";
  const option = options.find((o) => o.value === value);
  return option?.label || value;
}

function formatGraphicDesignMessage(answers: GraphicDesignAnswers): string {
  const projectTypeLabel =
    answers.projectType === "other" && answers.projectTypeOther
      ? answers.projectTypeOther
      : getOptionLabel(graphicDesignOptions.projectType, answers.projectType);

  const lines = [
    "🎨 Service: Graphic Design",
    `📌 Project Type: ${projectTypeLabel}`,
    `📊 Status: ${getOptionLabel(graphicDesignOptions.projectStatus, answers.projectStatus)}`,
    `✏️ Style: ${getOptionLabel(graphicDesignOptions.styleDirection, answers.styleDirection)}`,
    `📅 Timeline: ${getOptionLabel(graphicDesignOptions.timeline, answers.timeline)}`,
    `💰 Budget: ${getOptionLabel(graphicDesignOptions.budget, answers.budget)}`,
  ];

  if (answers.notes) {
    lines.push(`\n📝 Notes: ${answers.notes}`);
  }

  return lines.join("\n");
}

function formatWebDevMessage(answers: WebDevAnswers): string {
  const projectTypeLabel =
    answers.projectType === "other" && answers.projectTypeOther
      ? answers.projectTypeOther
      : getOptionLabel(webDevOptions.projectType, answers.projectType);

  const featuresLabels = answers.features
    ?.map((f) => {
      if (f === "none") return "None specifically";
      return getOptionLabel(webDevOptions.features, f);
    })
    .filter((f) => f !== "None selected" && f !== "Not selected")
    .join(", ") || "None selected";

  const lines = [
    "💻 Service: Web Development",
    `📌 Project Type: ${projectTypeLabel}`,
    `🎨 Design: ${getOptionLabel(webDevOptions.designStatus, answers.designStatus)}`,
    `⚙️ Features: ${featuresLabels}`,
    `📅 Timeline: ${getOptionLabel(webDevOptions.timeline, answers.timeline)}`,
    `💰 Budget: ${getOptionLabel(webDevOptions.budget, answers.budget)}`,
  ];

  if (answers.notes) {
    lines.push(`\n📝 Notes: ${answers.notes}`);
  }

  return lines.join("\n");
}

export function generateWhatsAppMessage(formState: QuoteFormState): string {
  const intro = "👋 Hi Stefan! I got your business card and I'm interested in working together.";
  const sections: string[] = [];

  if (formState.service === "design" || formState.service === "both") {
    sections.push(formatGraphicDesignMessage(formState.graphicDesign));
  }

  if (formState.service === "web" || formState.service === "both") {
    sections.push(formatWebDevMessage(formState.webDev));
  }

  const message = [intro, ""];

  // Add spacing between sections if both services
  if (formState.service === "both") {
    sections.forEach((section, index) => {
      if (index > 0) {
        message.push("---");
      }
      message.push(section);
    });
  } else {
    message.push(sections[0]);
  }

  return message.join("\n");
}

export function generateWhatsAppLink(formState: QuoteFormState): string {
  const message = generateWhatsAppMessage(formState);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(formState: QuoteFormState): void {
  const link = generateWhatsAppLink(formState);
  window.open(link, "_blank");
}
