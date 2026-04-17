## Overall Flow

```
QR Code → Landing Page → Service Selection → Branching Questions → Summary → WhatsApp
```

There are 5 stages total. The user never types anything until an optional free-text field at the very end of their branch.

---

## Stage 1 — Landing Page

This is the first impression. It should have your name/brand, a one-liner like _"Let's build something great together"_, and a single CTA button: **"Get a Quote"** or **"Start Here"**. No clutter. The goal is to get them to click.

---

## Stage 2 — Service Selection

**Question:** What are you looking for?

- 🎨 Graphic Design
- 💻 Web Development
- ✨ Both

This is the branch point. "Both" can either run them through both flows sequentially, or you can show a merged set of questions (I'd recommend sequential — cleaner and more thorough).

---

## Stage 3A — Graphic Design Branch

**Q1 — Project Type** _(what are we making?)_

- Logo & Brand Identity
- Social Media Content / Templates
- Print Materials (flyers, posters, brochures, business cards)
- Packaging Design
- Illustration / Custom Artwork
- Other _(free text — "What do you have in mind?")_

**Q2 — Project Status** _(where are they starting from?)_

- Starting from scratch — no brand yet
- I have a brand but need a refresh
- My brand is set, just need deliverables
- I'm not sure yet

**Q3 — Style Direction** _(helps you prepare a mood board)_

- Clean & Minimal
- Bold & Expressive
- Elegant & Luxury
- Playful & Fun
- Corporate & Professional
- I'll leave it to you

**Q4 — Timeline**

- Urgent — within 2 weeks
- About 1 month
- 2–3 months
- No rush, I'm flexible

**Q5 — Budget Range**

- Under 150 RON
- 150 – 500 RON
- 500 – 1,500 RON
- 1,500+ RON
- Not sure yet, open to suggestions

**Q6 — Anything else?** _(optional free text)_ Placeholder: _"Any references, links, or details you'd like me to know about..."_

---

## Stage 3B — Web Development Branch

**Q1 — Project Type** _(what are we building?)_

- Portfolio / Personal Website
- Business / Company Website
- Landing Page (single page, conversion-focused)
- E-commerce Store
- Blog or Content Site
- Web Application
- Other _(free text)_

**Q2 — Design Status** _(important for scoping)_

- I need design + development (full package)
- I have designs/mockups ready — just development
- I have a rough idea — need guidance
- Redesign of an existing website

**Q3 — Must-Have Features** _(multi-select)_

- Contact Form
- CMS / Ability to edit content myself
- Blog / News section
- Online Payments / Shop
- Booking / Appointment System
- Multilingual Support
- SEO Optimization
- Animation / Interactive effects
- None of these specifically

**Q4 — Timeline** _(same options as Design branch)_

**Q5 — Budget Range**

- Under 500 RON
- 500 – 1,500 RON
- 1,500 – 4,000 RON
- 4,000+ RON
- Not sure yet, open to suggestions

**Q6 — Anything else?** _(optional free text)_ Placeholder: _"Website references you like, current site URL, or anything else..."_

---

## Stage 3C — Both (sequential)

Run Design branch first, then Web branch. You can add a small progress indicator like _"Part 1 of 2 — Design"_ and _"Part 2 of 2 — Web"_ so the user knows what to expect. The free-text field only appears once at the very end.

---

## Stage 4 — Summary Screen

Before sending, show the user a recap of all their answers in a clean card layout. Something like:

> **Your Request Summary** Service: Web Development Project: Landing Page Design: Need design + development Features: Contact Form, SEO, Animations Timeline: ~1 month Budget: €1,500 – €4,000

Then a single CTA: **"Send via WhatsApp"**. Optionally a secondary link: **"Edit my answers"** that goes back.

---

## Stage 5 — WhatsApp Message Generation

When they tap Send, you construct a `wa.me` link:

```
https://wa.me/[YOUR_NUMBER]?text=[URL_ENCODED_MESSAGE]
```

**Message template — Web Dev example:**

```
👋 Hi Stefan! I got your business card and I'm interested in working together.

🛠 Service: Web Development
📌 Project Type: Landing Page
🎨 Design: I need design + development
⚙️ Features: Contact Form, SEO Optimization, Animations
📅 Timeline: ~1 month
💰 Budget: €1,500 – €4,000

📝 Notes: I run a small fitness coaching business and want a page to collect leads.
```

**Message template — Graphic Design example:**

```
👋 Hi Stefan! I got your business card and I'm interested in working together.

🎨 Service: Graphic Design
📌 Project Type: Logo & Brand Identity
📊 Status: Starting from scratch
✏️ Style: Clean & Minimal
📅 Timeline: About 1 month
💰 Budget: €800 – €2,000

📝 Notes: It's for a coffee shop opening in spring.
```

All of this is built dynamically in JS — you map each answer to its emoji + label and join them into the string, then `encodeURIComponent()` it into the URL.

---

## Implementation Notes

**Tech-wise, this is straightforward:**

- A single HTML/JS page (or a React/Next.js route on your existing portfolio)
- State object that holds all answers, updated as they progress
- A simple step counter + conditional rendering per branch
- The WhatsApp link is built from the state on the final screen

**UX rules to stick to:**

- One question per screen — never show a wall of fields
- Back button on every step
- Progress bar (e.g. "Step 3 of 6")
- No required fields except Q1 and Q2 — lower the friction
- The free-text "Other" option should reveal a small input inline, not navigate away

**QR Code:**

- Generate a static QR code pointing to the URL of this page
- Use a short, clean URL — ideally something like `yourname.com/quote` or a short link via Dub.co or Bit.ly
- Put that URL on the card too in small print as a fallback

---
    