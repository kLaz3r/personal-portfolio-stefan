# Business Quote Wizard — Expansion Specification

## Objective

Expand the existing Business Quote Wizard to support two additional services:

1. Photography Services
2. Video Editing & Montage

At the same time, replace the current fixed **"Both"** option with a scalable **Multiple Services** flow that supports any combination of services.

---

# Goals

Current services:

- Graphic Design
- Web Development
- Both (Design + Web)

New services:

- Graphic Design
- Web Development
- Photography Services
- Video Editing & Montage
- Multiple Services (user can select any combination)

This change should make the wizard future-proof and allow additional services to be added without changing the navigation logic.

---

# Updated Flow

```
Landing
    ↓
Service Selection
    ├── Graphic Design
    ├── Web Development
    ├── Photography Services
    ├── Video Editing & Montage
    └── Multiple Services
            ↓
Questions for each selected service
            ↓
Summary
            ↓
WhatsApp
```

---

# Service Selection

Replace the current three options:

- Graphic Design
- Web Development
- Both

with:

- Graphic Design
- Web Development
- Photography Services
- Video Editing & Montage
- Multiple Services

If the user chooses **Multiple Services**, they should be able to select any combination of the available services.

Example combinations:

- Design + Photography
- Photography + Video Editing
- Web + Video
- Design + Web + Photography
- All four services

---

# Photography Services

## Q1 — Photography Type

Options:

- Business / Corporate
- Product Photography
- Event Photography
- Portrait Session
- Real Estate
- Food Photography
- Other

If "Other", store custom value.

---

## Q2 — Shoot Location

Options:

- At your location
- Outdoor
- Studio
- Need recommendations
- Other

---

## Q3 — Purpose

Options:

- Website
- Social Media
- Marketing Campaign
- Print Materials
- Personal Use
- Other

---

## Q4 — Timeline

Reuse existing timeline component.

Options:

- Urgent (within 2 weeks)
- About 1 month
- 2–3 months
- Flexible

---

## Q5 — Budget

Options:

- Under 300 RON
- 300–800 RON
- 800–2,000 RON
- 2,000+ RON
- Not sure

---

## Q6 — Additional Notes

Optional textarea.

---

# Video Editing & Montage

## Q1 — Project Type

Options:

- Social Media Reels
- YouTube Video
- Promotional Video
- Event Highlights
- Podcast
- Short Film
- Other

If "Other", store custom value.

---

## Q2 — Footage Status

Options:

- I already have all footage
- I have some footage
- I need filming too
- Not sure

---

## Q3 — Editing Style

Options:

- Clean & Professional
- Cinematic
- Fast-paced Social Media
- Minimal
- I'll leave it to you

---

## Q4 — Timeline

Reuse existing timeline component.

Options:

- Urgent
- About 1 month
- 2–3 months
- Flexible

---

## Q5 — Budget

Options:

- Under 300 RON
- 300–800 RON
- 800–2,000 RON
- 2,000+ RON
- Not sure

---

## Q6 — Additional Notes

Optional textarea.

---

# Updated State

Current:

```ts
service: "design" | "web" | "both"
```

Replace with:

```ts
selectedServices: ServiceType[]
```

Where:

```ts
type ServiceType =
    | "design"
    | "web"
    | "photography"
    | "video";
```

Update form state:

```ts
interface QuoteFormState {
    selectedServices: ServiceType[];

    graphicDesign: GraphicDesignAnswers;

    webDev: WebDevAnswers;

    photography: PhotographyAnswers;

    videoEditing: VideoEditingAnswers;
}
```

---

# Navigation

Current implementation contains special logic for:

```
isBothPart2
```

This should be removed.

Instead, navigation should be generated dynamically from the selected services.

Example:

Selected services:

```
Design
Photography
Video
```

Navigation:

```
design-q1
...
design-q6

↓

photo-q1
...
photo-q6

↓

video-q1
...
video-q6

↓

Summary
```

No service-specific navigation logic should exist.

The wizard should simply iterate through the selected services in order.

---

# Summary Screen

Instead of displaying one or two hardcoded cards, render one summary card for every selected service.

Example:

```
Project Summary

Graphic Design
-------------------
Logo & Brand Identity
Minimal
500–1500 RON

Photography
-------------------
Product Photography
Studio
Website & Marketing

Video Editing
-------------------
Promotional Video
Cinematic
Footage already available
```

---

# WhatsApp Message

The generated WhatsApp message should include one section per selected service.

Example:

```
Hello!

I'd like to request a quote.

--------------------

GRAPHIC DESIGN

Project:
Logo & Brand Identity

Style:
Minimal

Budget:
500–1500 RON

--------------------

PHOTOGRAPHY

Type:
Product Photography

Location:
Studio

Purpose:
Website & Marketing

--------------------

VIDEO EDITING

Project:
Promotional Video

Footage:
Already recorded

Style:
Cinematic

Budget:
800–2,000 RON

Notes:
...
```

---

# Translation

Add all new labels to both translation files:

- `src/translations/en.ts`
- `src/translations/ro.ts`

Including:

- Photography Services
- Video Editing & Montage
- All question titles
- All answer labels
- Summary labels
- WhatsApp labels

Maintain the existing `business.*` namespace structure.

---

# Components

Create new question components following the existing architecture:

```
PhotographyQuestions.tsx

VideoEditingQuestions.tsx
```

Reuse existing shared components:

- QuestionCard
- OptionCard
- Progress
- Navigation buttons

Maintain visual consistency with the current Design and Web flows.

---

# Deliverables

- Add Photography Services flow (6 questions)
- Add Video Editing & Montage flow (6 questions)
- Replace "Both" with scalable "Multiple Services"
- Refactor navigation to support dynamic service sequences
- Extend form state for new services
- Update summary screen
- Update WhatsApp message generation
- Add EN/RO translations
- Maintain current UI/UX and styling

---

# Future Scalability

The new architecture should allow additional services (e.g., Drone Videography, SEO, Branding, Marketing, Copywriting, etc.) to be added by registering a new service definition rather than modifying the navigation flow.