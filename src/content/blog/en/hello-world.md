---
title: "Welcome to My Blog"
description: "An introduction to my technical blog where I share insights on web development, design, and my experiences as a digital craftsman."
date: "2026-04-25"
lang: "en"
tags: ["introduction", "web development", "next.js"]
---

Hello there! I'm **Stefan Nasturas**, a web developer and designer from Romania. Welcome to my corner of the internet where I share my thoughts on web development, graphic design, photography, and technology.

## What You'll Find Here

This blog will cover various topics including:

- **Web Development** - React, Next.js, TypeScript, and modern web technologies
- **Graphic Design** - Design principles, tools, and project showcases
- **Photography** - Behind the scenes of my photo shoots and editing techniques
- **Tech Insights** - Tutorials, tips, and lessons learned from real projects

### Why Markdown?

I chose to build this blog using markdown files and Next.js static site generation for several reasons:

1. **Simplicity** - Writing in markdown is fast and distraction-free
2. **Version Control** - All posts are tracked in git
3. **Performance** - Static generation means lightning-fast page loads
4. **Portability** - Content is decoupled from the presentation layer

Here's a simple code example from a recent project:

```tsx
import { motion } from "motion/react";

export const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
```

> "The best way to learn is by building things and sharing what you've learned along the way."

I'm excited to start this journey and share my knowledge with the community. Stay tuned for more articles!

---

Feel free to reach out if you have any questions or suggestions for topics you'd like me to cover.
