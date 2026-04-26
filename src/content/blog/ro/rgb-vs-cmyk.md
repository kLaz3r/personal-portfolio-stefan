---
# REQUIRED FIELDS
title: "RGB vs CMYK: Cum Alegi Modelul de Culoare Potrivit"
description: "Un ghid practic despre diferența dintre modelele de culoare RGB și CMYK — ce sunt, cum funcționează și când să le folosești pe fiecare."
date: "2026-04-26"
lang: "ro"
tags: ["design", "culoare", "rgb", "cmyk", "print", "digital"]

# OPTIONAL FIELDS
coverImage: "/images/blog/rgb-vs-cmyk-cover.jpg"
---

# RGB vs CMYK: Cum Alegi Modelul de Culoare Potrivit

Dacă ai trimis vreodată un design la tipărit și ai primit înapoi culori care nu seamănă deloc cu ce vedeai pe ecran, ai experimentat deja problema RGB vs CMYK. Aceste două modele de culoare stau la baza aproape oricărui flux de lucru în design, iar știind când să folosești fiecare, îți poți economisi mult timp și frustrare.

## Ce Este un Model de Culoare?

Un model de culoare este un sistem de descriere și reproducere a culorii folosind un set de componente primare. Dispozitivele și suprafețele diferite reproduc culoarea în moduri fundamental diferite — monitorul tău emite lumină, în timp ce o pagină tipărită o reflectă. Această diferență fizică este exact motivul pentru care există două modele separate.

<!-- IMAGE: O imagine curată, alăturată, cu un monitor luminos în stânga și o coală de hârtie tipărită în dreapta, cu o mostră de culoare între ele care arată ușor diferit pe fiecare parte, ilustrând cum poate arăta aceeași culoare diferit pe medii diferite. -->

![A clean side-by-side visual showing a glowing monitor on the left and a printed sheet of paper on the right, with a color swatch between them that looks slightly different on each side, illustrating how the same color can look different across media.](/images/blog/rgb-vs-cmyk-1.jpg)

## RGB: Culoare din Lumină

RGB vine de la **Red, Green, Blue** (Roșu, Verde, Albastru). Este un model de culoare _aditiv_, ceea ce înseamnă că în culoarea este creată prin adăugarea luminii. Când combini toate trei canalele la intensitate maximă, obții alb. Când toate trei sunt la zero, obții negru.

Acest model este nativ pentru orice emite lumină:

- Ecrane de calculator și telefon
- Televizoare și proiectoare
- Aparate foto digitale
- Design web și UI

Fiecare canal are o valoare de la 0 la 255, oferindu-ți peste 16 milioane de culori posibile. Această gamă enormă este unul dintre motivele pentru care imaginile de pe ecrane pot arăta atât de vii și vibrante.

<!-- IMAGE: O diagramă cu trei cercuri colorate suprapuse — roșu, verde și albastru — cu intersecțiile lor arătând cyan, magenta, galben și alb în centru, pe un fundal închis pentru a sublinia că este o mixare aditivă (bazată pe lumină). -->

![A diagram showing three overlapping colored circles — red, green, and blue — with their intersections showing cyan, magenta, yellow, and white in the center, on a dark background to emphasize that this is additive (light-based) mixing.](/images/blog/rgb-vs-cmyk-2.jpg)

### RGB în Practică

Când creezi un site web, editezi o fotografie sau realizezi un grafic pentru rețele sociale, lucrezi în RGB. Formatele de fișiere precum **JPEG**, **PNG**, **GIF** și **WebP** sunt toate RGB în mod implicit. Programul tău de design va folosi, de asemenea, RGB în mod implicit atunci când creezi un document nou destinat ecranului.

```
rgb(255, 0, 0)    → Roșu pur
rgb(0, 255, 0)    → Verde pur
rgb(0, 0, 255)    → Albastru pur
rgb(255, 255, 0)  → Galben (roșu + verde)
rgb(255, 255, 255)→ Alb (toate canalele la maxim)
rgb(0, 0, 0)      → Negru (toate canalele la zero)
```

## CMYK: Culoare din Cerneală

CMYK vine de la **Cyan, Magenta, Yellow, Key (Black)** (Cyan, Magenta, Galben, Negru). Este un model de culoare _substractiv_ — în loc să adauge lumină, cernelurile absorb (scad) anumite lungimi de undă ale luminii și le reflectă pe altele. Cu cât adaugi mai multă cerneală, cu atât rezultatul este mai închis. Teoretic, combinarea C, M și Y la 100% ar trebui să producă negru, dar în practică creează un maro închis murdar, motiv pentru care negrul (K) este adăugat ca un canal separat.

Acest model este utilizat oriunde se aplică cerneală sau pigment pe o suprafață:

- Broșuri, fluturași și postere
- Ambalaje și etichete
- Reviste și cărți
- Cărți de vizită și papetărie

Fiecare canal este exprimat ca procent de la 0% la 100%.

<!-- IMAGE: O diagramă cu trei cercuri colorate suprapuse — cyan, magenta și galben — cu intersecțiile lor arătând roșu, verde, albastru și un centru închis, pe un fundal alb pentru a sublinia că este o mixare substractivă (bazată pe cerneală). -->

![A diagram showing three overlapping ink-colored circles — cyan, magenta, and yellow — with their intersections showing red, green, blue, and a dark center, on a white background to emphasize that this is subtractive (ink-based) mixing.](/images/blog/rgb-vs-cmyk-3.jpg)

### CMYK în Practică

Când pregătești un fișier pentru o tipografie profesională, ar trebui întotdeauna să convertești documentul în CMYK înainte de export. Majoritatea serviciilor de tipărire acceptă fișiere PDF în CMYK. Dacă trimiți un fișier RGB, software-ul imprimantei îl va converti automat — iar acea conversie automată este rareori la fel de precisă ca atunci când o faci tu însuți.

| Canal       | Absoarbe        | Reflectă         |
| ----------- | --------------- | ---------------- |
| Cyan (C)    | Lumina roșie    | Verde + Albastru |
| Magenta (M) | Lumina verde    | Roșu + Albastru  |
| Galben (Y)  | Lumina albastră | Roșu + Verde     |
| Negru (K)   | Toată lumina    | Nimic            |

## Diferența Principală pe Scurt

|                    | RGB                     | CMYK                         |
| ------------------ | ----------------------- | ---------------------------- |
| **Înseamnă**       | Roșu, Verde, Albastru   | Cyan, Magenta, Galben, Negru |
| **Tip de model**   | Aditiv                  | Substractiv                  |
| **Mediu**          | Lumină (ecrane)         | Cerneală (tipărire)          |
| **Gamă de culori** | Foarte largă            | Mai îngustă                  |
| **Alb**            | Toate canalele la maxim | Fără cerneală aplicată       |
| **Negru**          | Toate canalele la zero  | Toate canalele la maxim      |
| **Folosit pentru** | Web, UI, video, foto    | Broșuri, ambalaje, presă     |

## De Ce Culorile Arată Diferit la Tipărit

Aceasta este marea concluzie practică. Spațiul de culoare RGB are o gamă semnificativ _mai largă_ decât CMYK — poate reprezenta culori care pur și simplu nu pot fi reproduse fizic cu cerneală. Albastrul electric viu, nuanțele neon și verdele saturat sunt exemple frecvente. Când aceste culori sunt convertite în CMYK pentru tipărire, sunt trase spre cel mai apropiat echivalent tipăribil, arătând adesea mai terne sau cu nuanța schimbată.

<!-- IMAGE: O diagramă de gamă de culoare (de tipul potcoavei CIE) care arată triunghiul RGB mai mare suprapus peste un triunghi CMYK mai mic în interior, cu o zonă evidențiată care arată culorile care există în RGB dar cad în afara gamei CMYK — acestea sunt culorile care nu pot fi tipărite cu precizie. -->

![A color gamut diagram (like a horseshoe-shaped CIE chromaticity chart) showing the larger RGB triangle overlapping a smaller CMYK triangle inside it, with a highlighted region showing the colors that exist in RGB but fall outside the CMYK range — these are the colors that can't be printed accurately.](/images/blog/rgb-vs-cmyk-4.jpg)

> **Sfat:** Majoritatea programelor de design, precum Adobe Illustrator, Photoshop și Affinity Designer, îți permit să activezi o _simulare de tipărire_ sau un _avertisment de gamă_, care afișează un indicator vizual pentru orice culori din design-ul tău care nu se vor reproduce corect la tipărit. Activează această funcție din timp — nu chiar înainte de export.

## Când să Folosești Fiecare Model

### Folosește RGB când:

- Creezi design pentru site-uri web, aplicații sau rețele sociale
- Editezi fotografii pentru distribuție digitală
- Creezi videoclipuri sau animații
- Rezultatul final va fi vizualizat doar pe ecran

### Folosește CMYK când:

- Pregătești fișiere pentru o tipografie profesională
- Creezi cărți de vizită, broșuri sau ambalaje
- Lucrezi cu o tipografie care specifică livrarea în CMYK
- Acuratețea culorilor între ecran și tipărit este esențială

### Zona gri: tipărirea acasă

Imprimantele inkjet de consum folosesc tehnic propriul lor model de cerneală (adesea CMYK plus culori suplimentare precum cyan deschis și magenta deschis), dar acceptă input RGB și gestionează conversia intern. Pentru tipărirea acasă obișnuită, fișierele RGB sunt perfect acceptabile. Contează pregătirea în CMYK la tipărirea profesională offset și digitală.

## Cum să Convertești între Ele

Conversia RGB → CMYK este ceva ce ar trebui să faci _în aplicația ta de design_, nu lăsând imprimanta să o facă. Iată de ce: poți revizui rezultatul înainte de tipărire și poți ajusta manual orice culori care s-au schimbat semnificativ.

În **Adobe Photoshop**: `Image → Mode → CMYK Color`

În **Adobe Illustrator**: `File → Document Color Mode → CMYK Color`

În **Affinity Designer**: `File → Document Setup → Color Format → CMYK`

După conversie, parcurge design-ul și caută culorile care s-au schimbat vizibil. Ajustează-le pentru a găsi cel mai apropiat echivalent CMYK care arată bine pe ecran și se va tipări corect.

<!-- IMAGE: Un mockup înainte-și-după (fără UI software real) care arată un gradient albastru viu în stânga, etichetat „Original RGB", și o versiune ușor mai întunecat în dreapta, etichetată „După conversia CMYK", cu o săgeată între ele pentru a ilustra schimbarea de culoare. -->

![A before-and-after screenshot mockup (no real software UI needed) showing a vibrant blue gradient on the left labeled "RGB original" and a slightly muted version on the right labeled "After CMYK conversion," with an arrow between them to illustrate the color shift.](/images/blog/rgb-vs-cmyk-5.jpg)

## O Listă Rapidă de Referință

- **Construiești un site web?** → RGB
- **Trimiți la o tipografie?** → CMYK
- **Postezi pe Instagram?** → RGB
- **Creezi ambalaje?** → CMYK
- **Nu ești sigur?** → Întreabă tipografia. Ei vor ști întotdeauna.

---

Înțelegerea diferenței dintre RGB și CMYK este unul dintre acele lucruri fundamentale care îți aduc beneficii de fiecare dată când lucrezi la un proiect care trece de la ecran la tipărit. Alege modelul de culoare corect de la început și vei petrece mult mai puțin timp corectând surprize la final.
