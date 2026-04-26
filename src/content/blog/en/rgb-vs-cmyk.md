---
# REQUIRED FIELDS
title: "RGB vs CMYK: Choosing the Right Color Model for Your Work"
description: "A practical guide to understanding the difference between RGB and CMYK color models — what they are, how they work, and when to use each one."
date: "2026-04-26"
lang: "en"
tags: ["design", "color", "rgb", "cmyk", "print", "digital"]

# OPTIONAL FIELDS
coverImage: "/images/blog/rgb-vs-cmyk-cover.jpg"
---

# RGB vs CMYK: Choosing the Right Color Model for Your Work

If you've ever sent a design to print and gotten back colors that look nothing like what you saw on your screen, you've already experienced the RGB vs CMYK problem firsthand. These two color models are at the heart of almost every design workflow, and knowing when to use each one can save you a lot of frustration.

## What Is a Color Model?

A color model is a system for describing and reproducing color using a set of primary components. Different devices and surfaces reproduce color in fundamentally different ways — your monitor emits light, while a printed page reflects it. That physical difference is exactly why two separate models exist.

<!-- IMAGE: A clean side-by-side visual showing a glowing monitor on the left and a printed sheet of paper on the right, with a color swatch between them that looks slightly different on each side, illustrating how the same color can look different across media. -->

![A clean side-by-side visual showing a glowing monitor on the left and a printed sheet of paper on the right, with a color swatch between them that looks slightly different on each side, illustrating how the same color can look different across media.](/images/blog/rgb-vs-cmyk-1.jpg)

## RGB: Color Made of Light

RGB stands for **Red, Green, Blue**. It's an _additive_ color model, meaning colors are created by adding light together. When you combine all three channels at full intensity, you get white. When all three are at zero, you get black.

This model is native to anything that emits light:

- Computer and phone screens
- Televisions and projectors
- Digital cameras
- Web and UI design

Each channel has a value from 0 to 255, giving you over 16 million possible colors. That enormous range is one reason why images on screens can look so vivid and vibrant.

<!-- IMAGE: A diagram showing three overlapping colored circles — red, green, and blue — with their intersections showing cyan, magenta, yellow, and white in the center, on a dark background to emphasize that this is additive (light-based) mixing. -->

![A diagram showing three overlapping colored circles — red, green, and blue — with their intersections showing cyan, magenta, yellow, and white in the center, on a dark background to emphasize that this is additive (light-based) mixing.](/images/blog/rgb-vs-cmyk-2.jpg)

### RGB in Practice

When you design a website, edit a photo, or create a social media graphic, you're working in RGB. File formats like **JPEG**, **PNG**, **GIF**, and **WebP** are all RGB by default. Your design software will also default to RGB when you create a new document intended for screen.

```
rgb(255, 0, 0)    → Pure red
rgb(0, 255, 0)    → Pure green
rgb(0, 0, 255)    → Pure blue
rgb(255, 255, 0)  → Yellow (red + green)
rgb(255, 255, 255)→ White (all channels at max)
rgb(0, 0, 0)      → Black (all channels at zero)
```

## CMYK: Color Made of Ink

CMYK stands for **Cyan, Magenta, Yellow, Key (Black)**. It's a _subtractive_ color model — instead of adding light, inks absorb (subtract) certain wavelengths of light and reflect others. The more ink you add, the darker the result. Theoretically, combining C, M, and Y at 100% should produce black, but in practice it creates a muddy dark brown, which is why black (K) is added as a separate channel.

This model is used wherever ink or pigment is applied to a surface:

- Brochures, flyers, and posters
- Packaging and labels
- Magazines and books
- Business cards and stationery

Each channel is expressed as a percentage from 0% to 100%.

<!-- IMAGE: A diagram showing three overlapping ink-colored circles — cyan, magenta, and yellow — with their intersections showing red, green, blue, and a dark center, on a white background to emphasize that this is subtractive (ink-based) mixing. -->

![A diagram showing three overlapping ink-colored circles — cyan, magenta, and yellow — with their intersections showing red, green, blue, and a dark center, on a white background to emphasize that this is subtractive (ink-based) mixing.](/images/blog/rgb-vs-cmyk-3.jpg)

### CMYK in Practice

When preparing a file for a professional print shop, you should always convert your document to CMYK before exporting. Most print services will accept CMYK PDFs. If you send an RGB file, the printer's software will convert it automatically — and that automatic conversion is rarely as accurate as doing it yourself.

| Channel     | Absorbs     | Reflects     |
| ----------- | ----------- | ------------ |
| Cyan (C)    | Red light   | Green + Blue |
| Magenta (M) | Green light | Red + Blue   |
| Yellow (Y)  | Blue light  | Red + Green  |
| Black (K)   | All light   | Nothing      |

## The Core Difference at a Glance

|                 | RGB                   | CMYK                        |
| --------------- | --------------------- | --------------------------- |
| **Stands for**  | Red, Green, Blue      | Cyan, Magenta, Yellow, Key  |
| **Model type**  | Additive              | Subtractive                 |
| **Medium**      | Light (screens)       | Ink (print)                 |
| **Color range** | Very wide (gamut)     | Narrower gamut              |
| **White**       | All channels at max   | No ink applied              |
| **Black**       | All channels at zero  | All channels at max         |
| **Use for**     | Web, UI, video, photo | Brochures, packaging, press |

## Why Colors Look Different When You Print

This is the big practical takeaway. The RGB color space has a significantly _wider gamut_ than CMYK — it can represent colors that simply cannot be physically reproduced with ink. Bright electric blues, vivid neons, and saturated greens are common culprits. When those colors are converted to CMYK for printing, they get pulled toward the nearest printable equivalent, often looking duller or shifted in hue.

<!-- IMAGE: A color gamut diagram (like a horseshoe-shaped CIE chromaticity chart) showing the larger RGB triangle overlapping a smaller CMYK triangle inside it, with a highlighted region showing the colors that exist in RGB but fall outside the CMYK range — these are the colors that can't be printed accurately. -->

![A color gamut diagram (like a horseshoe-shaped CIE chromaticity chart) showing the larger RGB triangle overlapping a smaller CMYK triangle inside it, with a highlighted region showing the colors that exist in RGB but fall outside the CMYK range — these are the colors that can't be printed accurately.](/images/blog/rgb-vs-cmyk-4.jpg)

> **Tip:** Most design tools like Adobe Illustrator, Photoshop, and Affinity Designer let you enable a _soft proof_ or _gamut warning_, which overlays a visual indicator on any colors in your design that won't reproduce accurately in print. Turn this on early — not right before export.

## When to Use Each One

### Use RGB when:

- Designing for websites, apps, or social media
- Editing photos for digital distribution
- Creating videos or animations
- The final output will only ever be viewed on a screen

### Use CMYK when:

- Preparing files for a commercial print shop
- Designing business cards, brochures, or packaging
- Working with a printer who specifies CMYK delivery
- Color accuracy between screen and print is critical

### The grey area: home printing

Consumer inkjet printers technically use their own ink model (often CMYK plus additional colors like light cyan and light magenta), but they accept RGB input and handle the conversion internally. For everyday home printing, RGB files are perfectly fine. It's professional offset and digital printing where CMYK preparation matters.

## How to Convert Between Them

Converting RGB → CMYK is something you should do _in your design application_, not by letting the printer do it. Here's why: you get to review the result before it goes to print, and you can manually adjust any colors that shifted badly.

In **Adobe Photoshop**: `Image → Mode → CMYK Color`

In **Adobe Illustrator**: `File → Document Color Mode → CMYK Color`

In **Affinity Designer**: `File → Document Setup → Color Format → CMYK`

After converting, go through your design and look for any colors that shifted noticeably. Adjust them to find the closest CMYK equivalent that still looks good on screen and will print well.

<!-- IMAGE: A before-and-after screenshot mockup (no real software UI needed) showing a vibrant blue gradient on the left labeled "RGB original" and a slightly muted version on the right labeled "After CMYK conversion," with an arrow between them to illustrate the color shift. -->

![A before-and-after screenshot mockup (no real software UI needed) showing a vibrant blue gradient on the left labeled "RGB original" and a slightly muted version on the right labeled "After CMYK conversion," with an arrow between them to illustrate the color shift.](/images/blog/rgb-vs-cmyk-5.jpg)

## A Quick Cheat Sheet

- **Building a website?** → RGB
- **Sending to a print shop?** → CMYK
- **Posting on Instagram?** → RGB
- **Designing packaging?** → CMYK
- **Not sure?** → Ask your printer. They will always know.

---

Understanding the difference between RGB and CMYK is one of those foundational things that pays off every single time you work on a project that crosses between screen and print. Get the color model right from the start, and you'll spend a lot less time fixing surprises at the end.
