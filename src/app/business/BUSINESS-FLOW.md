# Business Quote Wizard — Flow Documentation

## Overview

Multi-step quote wizard for business card QR codes at `/business`. Collects project details then opens WhatsApp with a pre-formatted message.

```
Landing → Service Select → Questions (6 per branch) → Summary → WhatsApp
```

---

## Stages

| Stage | Component | Description |
|-------|-----------|-------------|
| `landing` | `LandingStage` | Language picker then hero CTA |
| `service-select` | `ServiceSelectStage` | Pick Design / Web / Both |
| `design-q1`..`design-q6` | `DesignQuestions` | 6 design questions |
| `web-q1`..`web-q6` | `WebDevQuestions` | 6 web dev questions |
| `summary` | `SummaryStage` | Review all answers & send |

State managed in `page.tsx` via `useState<Stage>`.

---

## Service Selection

Three options on `ServiceSelectStage`:

| Service | Key | Next stage |
|---------|-----|------------|
| Graphic Design | `design` | `design-q1` |
| Web Development | `web` | `web-q1` |
| Both | `both` | `design-q1` (part 1), then `web-q1` (part 2) |

---

## Design Branch — 6 Questions

### Q1 — Project Type (`projectType`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `logo-brand` | Logo & Brand Identity | 🎨 |
| `social-media` | Social Media Content / Templates | 📱 |
| `print` | Print Materials (flyers, posters, brochures, business cards) | 🖨️ |
| `packaging` | Packaging Design | 📦 |
| `illustration` | Illustration / Custom Artwork | ✏️ |
| `other` | Other (textarea for custom) | ✨ |

If `other`, stores free text in `projectTypeOther`.

### Q2 — Project Status (`projectStatus`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `scratch` | Starting from scratch — no brand yet | 🆕 |
| `refresh` | I have a brand but need a refresh | 🔄 |
| `deliverables` | My brand is set, just need deliverables | ✅ |
| `unsure` | I'm not sure yet | 🤔 |

### Q3 — Style Direction (`styleDirection`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `minimal` | Clean & Minimal | ◻️ |
| `bold` | Bold & Expressive | 🔥 |
| `elegant` | Elegant & Luxury | 💎 |
| `playful` | Playful & Fun | 🎈 |
| `corporate` | Corporate & Professional | 🏢 |
| `flexible` | I'll leave it to you | 🎭 |

### Q4 — Timeline (`timeline`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `urgent` | Urgent — within 2 weeks | ⚡ |
| `1-month` | About 1 month | 📅 |
| `2-3-months` | 2-3 months | 📆 |
| `flexible` | No rush, I'm flexible | 🌿 |

### Q5 — Budget (`budget`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `under-150` | Under 150 RON | 💰 |
| `150-500` | 150 – 500 RON | 💰💰 |
| `500-1500` | 500 – 1,500 RON | 💰💰💰 |
| `1500+` | 1,500+ RON | 💎 |
| `unsure` | Not sure yet, open to suggestions | 🤷 |

### Q6 — Notes (`notes`)

Free text textarea. Optional.

---

## Web Dev Branch — 6 Questions

### Q1 — Project Type (`projectType`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `portfolio` | Portfolio / Personal Website | 👤 |
| `business` | Business / Company Website | 🏢 |
| `landing` | Landing Page (single page, conversion-focused) | 🎯 |
| `ecommerce` | E-commerce Store | 🛒 |
| `blog` | Blog or Content Site | 📝 |
| `webapp` | Web Application | ⚙️ |
| `other` | Other (textarea for custom) | ✨ |

If `other`, stores free text in `projectTypeOther`.

### Q2 — Design Status (`designStatus`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `full-package` | I need design + development (full package) | 🎨 |
| `dev-only` | I have designs/mockups ready — just development | 📐 |
| `guidance` | I have a rough idea — need guidance | 💡 |
| `redesign` | Redesign of an existing website | 🔄 |

### Q3 — Features (`features`) — Multi-select

| Value | Label (EN) | Icon |
|-------|------------|------|
| `contact-form` | Contact Form | 📧 |
| `cms` | CMS / Ability to edit content myself | 📝 |
| `blog-section` | Blog / News section | 📰 |
| `payments` | Online Payments / Shop | 💳 |
| `booking` | Booking / Appointment System | 📅 |
| `multilingual` | Multilingual Support | 🌍 |
| `seo` | SEO Optimization | 🔍 |
| `animations` | Animation / Interactive effects | ✨ |
| `none` | None of these specifically | ❌ |

Stored as `string[]` in `formState.webDev.features`. Toggled via `toggleFeature`.

### Q4 — Timeline (`timeline`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `urgent` | Urgent — within 2 weeks | ⚡ |
| `1-month` | About 1 month | 📅 |
| `2-3-months` | 2-3 months | 📆 |
| `flexible` | No rush, I'm flexible | 🌿 |

### Q5 — Budget (`budget`)

| Value | Label (EN) | Icon |
|-------|------------|------|
| `under-500` | Under 500 RON | 💰 |
| `500-1500` | 500 – 1,500 RON | 💰💰 |
| `1500-4000` | 1,500 – 4,000 RON | 💰💰💰 |
| `4000+` | 4,000+ RON | 💎 |
| `unsure` | Not sure yet, open to suggestions | 🤷 |

### Q6 — Notes (`notes`)

Free text textarea. Optional.

---

## "Both" Flow

1. Select **Both** → starts design questions (part 1 of 2)
2. Completes `design-q1..q6`
3. After `design-q6` next → starts web questions (part 2 of 2, `isBothPart2 = true`)
4. Completes `web-q1..q6`
5. After `web-q6` next → summary
6. Summary shows two cards: **Part 1 of 2 — Graphic Design** and **Part 2 of 2 — Web Development**

**Back navigation during part 2:**
- `web-q1` back → jumps to `design-q6`, sets `isBothPart2 = false`
- `web-q2..q6` back → previous web question

**From summary:**
- Back → `design-q6`
- Edit → `design-q1` (`isBothPart2` reset to `false`)

---

## State Management

### Form State (`page.tsx`)

```typescript
interface QuoteFormState {
  service: ServiceType | null;    // "design" | "web" | "both"
  graphicDesign: GraphicDesignAnswers;
  webDev: WebDevAnswers;
}

interface GraphicDesignAnswers {
  projectType: string;
  projectTypeOther?: string;
  projectStatus: string;
  styleDirection: string;
  timeline: string;
  budget: string;
  notes?: string;
}

interface WebDevAnswers {
  projectType: string;
  projectTypeOther?: string;
  designStatus: string;
  features: string[];
  timeline: string;
  budget: string;
  notes?: string;
}
```

### State Variables

| Variable | Type | Initial | Purpose |
|----------|------|---------|---------|
| `stage` | `Stage` | `"landing"` | Current wizard step |
| `formState` | `QuoteFormState` | defaults | All answers |
| `isBothPart2` | `boolean` | `false` | Tracks Both flow phase |
| `showLangSelector` | `boolean` | `false` | Language dialog toggle |

---

## WhatsApp Integration

**File:** `src/app/business/lib/whatsapp.ts`

- **Number:** `40770892084`
- **Link format:** `https://wa.me/40770892084?text={encodedMessage}`
- **Opens in new tab** via `window.open()`

Generated message structure:
1. Greeting line (translated)
2. For each selected service: icon + label lines for each answer
3. For "both": both sections separated by `---`

---

## Stage Progression Map

```
                    ┌──────────────────────────────┐
                    │          LANDING              │
                    │  (language picker → hero CTA) │
                    └──────────┬───────────────────┘
                               │ onStart()
                               ▼
                    ┌──────────────────────────────┐
                    │       SERVICE SELECT          │
                    │   design / web / both         │
                    └──┬──────────┬───────────────┘
              design   │   web    │   both
              ┌────────┘   ┌──────┘   └──────────────────┐
              ▼            ▼                             ▼
    ┌─────────────────┐ ┌─────────────────┐   ┌──────────────────────┐
    │   design-q1     │ │    web-q1       │   │   design-q1 (part 1) │
    │   design-q2     │ │    web-q2       │   │   design-q2..q6      │
    │   design-q3     │ │    web-q3       │   │        │             │
    │   design-q4     │ │    web-q4       │   │        ▼             │
    │   design-q5     │ │    web-q5       │   │   web-q1 (part 2)    │
    │   design-q6     │ │    web-q6       │   │   web-q2..q6         │
    └────────┬────────┘ └────────┬────────┘   └────────┬─────────────┘
             │                   │                      │
             └───────┬───────────┘                      │
                     │                                  │
                     ▼                                  ▼
          ┌──────────────────────┐          ┌──────────────────────┐
          │       SUMMARY        │          │       SUMMARY        │
          │  (one service card)  │          │  (two service cards) │
          └──────────┬───────────┘          └──────────┬───────────┘
                     │                                 │
                     ▼                                 ▼
          ┌──────────────────────┐          ┌──────────────────────┐
          │    WhatsApp (wa.me)  │          │    WhatsApp (wa.me)  │
          └──────────────────────┘          └──────────────────────┘
```

---

## Translation Keys

All business text is under the `business.` namespace in `src/translations/en.ts` / `ro.ts`. Labels for option values are resolved at render time in each question component, not through the translation system.

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/business/page.tsx` | Main page: state, routing, handlers |
| `src/app/business/types.ts` | Types, enums, option definitions |
| `src/app/business/layout.tsx` | Layout + metadata ("Get a Quote") |
| `src/app/business/components/LandingStage.tsx` | Landing screen |
| `src/app/business/components/ServiceSelectStage.tsx` | Service selection |
| `src/app/business/components/DesignQuestions.tsx` | All 6 design question components |
| `src/app/business/components/WebDevQuestions.tsx` | All 6 web dev question components |
| `src/app/business/components/QuestionCard.tsx` | Shared question wrapper |
| `src/app/business/components/SummaryStage.tsx` | Review screen |
| `src/app/business/components/LanguageSelector.tsx` | Language modal |
| `src/app/business/lib/whatsapp.ts` | WhatsApp message generation |
