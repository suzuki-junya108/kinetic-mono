# KINETIC MONO v2.0

## Design System Specification

> **"What must not change and what may change are clearly separated."**
>
> The Clinical Curator — Brutalism x Luxury Precision

**Live Demo**: [https://suzuki-junya108.github.io/kinetic-mono/](https://suzuki-junya108.github.io/kinetic-mono/)

[Japanese / 日本語](README.ja.md)

---

## Table of Contents

1. [Concept](#1-concept)
2. [Pages](#pages)
3. [Color System](#2-color-system)
4. [Typography](#3-typography)
5. [Spacing](#4-spacing)
6. [Motion](#5-motion)
7. [Layout](#6-layout)
8. [Elevation & Shadows](#7-elevation--shadows)
9. [Components](#8-components)
10. [Accent Mode System](#9-accent-mode-system)
11. [Accessibility Rules](#10-accessibility-rules)
12. [DO / DON'T](#12-do--dont)
13. [File Structure & Implementation](#13-implementation)

---

## 1. Concept

### Name Origin

```
KINETIC  x  MONO
  |            |
Motion/Force   Single/Pure
```

- **KINETIC** — What should move, moves with physical weight. Inertia and braking. Not floaty — a heavy object that moves and stops.
- **MONO** — One typeface, Yellow-anchored accent structure, monospace for data separation. A declaration of immutable principles.

### The Clinical Curator (subtitle)

| Word | Meaning |
|---|---|
| **Clinical** | Emotion-free precision, sterile cleanliness, diagnostic objectivity |
| **Curator** | Subjective selection, aesthetic judgment, editorial intent |

This paradoxical combination supports the coexistence of brutalism (exposed structure) and luxury (refined selection).

### Immutable vs Mutable

| Immutable (Mono) | Mutable (Kinetic) |
|---|---|
| `border-radius: 0px` (absolute) | Accent color |
| Plus Jakarta Sans only | Hover color & position |
| 8px spacing grid | Accent Mode (4 types) |
| sqrt(2) type scale | Section backgrounds |
| White-base surface structure | Tag & border colors |

---

## Pages

| # | Page | Description |
|---|------|-------------|
| 01 | `index.html` | Landing — hero, core principles bento, accent showcase |
| 02 | `dashboard.html` | Dashboard — stats, bar chart, activity feed, data table |
| 03 | `gallery.html` | Gallery — filterable grid of generative works |
| 04 | `gallery-detail.html` | Item Detail — single work with metadata sidebar |
| 05 | `docs.html` | Design Docs — colors, typography, motion, components |
| 06 | `settings.html` | Settings — accent mode configuration with live preview |

---

## 2. Color System

### Layer 1 — Primary Palette (immutable)

| Name | HEX | CSS Variable | Role |
|---|---|---|---|
| Kinetic Yellow | `#FFEA00` | `--palette-yellow` | Primary accent. Always the anchor. |
| Kinetic Blue | `#0057FF` | `--palette-blue` | Information / Secondary |
| Kinetic Red | `#FF2D2D` | `--palette-red` | Warning / Alert |
| Kinetic Green | `#00C853` | `--palette-green` | Success / Organic |
| Kinetic Purple | `#8B00FF` | `--palette-purple` | Typographic |
| Kinetic Orange | `#FF6B00` | `--palette-orange` | Landscape / Energy |
| Black | `#000000` | `--palette-black` | Highest priority text & UI |
| White | `#FFFFFF` | `--palette-white` | Cards / Foreground |

### Layer 2 — Surface Scale (white-base depth)

```
Deep  <-------------------------------------->  Shallow (front)

#0A0A0A   #EBEBEB   #F3F3F3   #F9F9F9   #FFFFFF
DARK      SURFACE-3  SURFACE-2  SURFACE-1  SURFACE-0
Inverted   Input      Nav/Side   Main       Card/Content
```

| Variable | HEX | Usage |
|---|---|---|
| `--surface-0` | `#FFFFFF` | Cards, content (frontmost) |
| `--surface-1` | `#F9F9F9` | Main canvas (`<body>` background) |
| `--surface-2` | `#F3F3F3` | Navigation, sidebar |
| `--surface-3` | `#EBEBEB` | Input fields, sunken elements |
| `--surface-4` | `#DEDEDE` | Dividers, minimal lines |
| `--surface-dark` | `#0A0A0A` | Inverted sections (Manifesto, etc.) |

**Principle**: Depth is expressed via background shift. No 1px borders for layout separation.

### Layer 3 — Text Scale

| Variable | HEX | Usage |
|---|---|---|
| `--text-1` | `#000000` | Primary text |
| `--text-2` | `#3A3A3A` | Secondary text |
| `--text-3` | `#777777` | Metadata, tertiary |
| `--text-4` | `#BBBBBB` | Disabled, placeholder |
| `--text-inv` | `#FFFFFF` | Text on dark backgrounds |

### Layer 4 — Semantic Accent Tokens

Components reference only these tokens. Never reference the palette directly.

```css
--a1 to --a6   : Accent color values
--on-a1 to --on-a6 : Text color on that accent (black or white)
```

---

## 3. Typography

### Font Families

```
Display / UI: Plus Jakarta Sans (Google Fonts)
             weights: 300, 400, 500, 600, 700, 800

Data / Code:  JetBrains Mono (Google Fonts)
             weights: 400, 700
```

**Principle**: Only 2 fonts. Font type distinguishes information type (UI copy vs technical data).

### Type Scale — sqrt(2) ratio (1.414)

Derived from the A-series paper ratio (sqrt(2)). A uniquely Japanese-origin scale.

| Variable | Size | Weight | Tracking | Leading | Usage |
|---|---|---|---|---|---|
| `--t-hero` | `80px` | 800 | `-0.05em` | `0.9` | Hero display |
| `--t-3xl` | `57px` | 800 | `-0.04em` | `1.0` | H1 / Display |
| `--t-2xl` | `40px` | 800 | `-0.03em` | `1.05` | H2 / Section heading |
| `--t-xl` | `28px` | 700-800 | `-0.02em` | `1.1` | H3 / Card title |
| `--t-lg` | `20px` | 600 | `0` | `1.4` | Subtitle / Callout |
| `--t-base` | `16px` | 400 | `0` | `1.6` | Body copy |
| `--t-sm` | `14px` | 400-500 | `0` | `1.6` | Caption, metadata |
| `--t-xs` | `10px` | 700 | `+0.2em` | - | **Micro-Label** (always UPPERCASE) |

### Micro-Label (signature element)

The most distinctive unit of this system.

```
- Size: 10px
- Weight: 700 (Bold)
- Tracking: +0.2em
- Display: Always UPPERCASE
- Color: --text-3 (#777777) by default
- Accent variant: background: --a1; color: --on-a1; padding: 2px 6px;
```

### Monospace Text Rules

All numeric data, code, IDs, and timestamps use JetBrains Mono.

---

## 4. Spacing

Multiples of 8px. No fractional values.

| Variable | Value | Primary Usage |
|---|---|---|
| `--sp-1` | `8px` | Icon-text gap, tag padding |
| `--sp-2` | `16px` | Standard element gap, button padding |
| `--sp-3` | `24px` | Card padding, section gap |
| `--sp-4` | `32px` | Card gap, page header padding |
| `--sp-5` | `48px` | Section horizontal padding |
| `--sp-6` | `64px` | Section vertical padding |
| `--sp-7` | `96px` | Large sections (Manifesto, etc.) |
| `--sp-8` | `128px` | Maximum spacing |

---

## 5. Motion

### 3 Named Easing Curves

| Name | CSS Value | Feel | Primary Usage |
|---|---|---|---|
| **Kinetic** | `cubic-bezier(0.22, 1, 0.36, 1)` | Quick acceleration -> smooth landing | Hover, active state toggle |
| **Editorial** | `cubic-bezier(0.76, 0, 0.24, 1)` | Heavy -> hard stop | Modal, large transitions |
| **Snap** | `cubic-bezier(1, 0, 0.5, 1.5)` | Overshoot -> bounce | Popups, notifications |

### Duration

| Variable | Value | Usage |
|---|---|---|
| `--dur-instant` | `80ms` | Color switch, instant feedback |
| `--dur-quick` | `200ms` | Hover translate, normal transitions |
| `--dur-moderate` | `400ms` | Panel open/close, filter toggle |
| `--dur-slow` | `700ms` | Page enter, large layout changes |

### Kinetic Hover — Signature Interaction

Unified rule applied to all interactive elements.

```
Rest state:
  background: --palette-black
  color: --palette-white
  transform: translateX(0)

Hover (80ms, ease-kinetic):
  background: --a1        <- Instant switch to accent
  color: --on-a1          <- Text color on accent
  transform: translateX(4px)  <- Shift right 4px
```

---

## 6. Layout

### Shell Structure

```
+--------------------------------------------------+
|  .km-nav (240px, fixed, left)                     |
|  +----------------------------------------------+ |
|  | Header: Logo Mark (36x36 black) + Brand Name | |
|  | Section: PAGES (01-04)                        | |
|  | Section: SYSTEM (05-06)                       | |
|  | Accent Panel (bottom): Mode Switcher          | |
|  | Footer: "THE CLINICAL CURATOR"                | |
|  +----------------------------------------------+ |
|                                                    |
|  .km-main (margin-left: 240px, flex: 1)           |
+--------------------------------------------------+
```

| Variable | Value |
|---|---|
| `--nav-w` | `240px` |
| `--radius` | `0px` (all elements) |

### Bento Grid

```css
.km-bento { display: grid; gap: 24px; }
.km-bento--2col { grid-template-columns: repeat(2, 1fr); }
.km-bento--3col { grid-template-columns: repeat(3, 1fr); }
.km-bento--4col { grid-template-columns: repeat(4, 1fr); }
.km-cell--wide  { grid-column: span 2; }
.km-cell--full  { grid-column: 1 / -1; }
```

**Zero radius enforced**: All cells and cards use `border-radius: 0`.

### Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| 1200px | Tablet landscape / small desktop |
| 900px | Tablet portrait |
| 768px | Navigation collapses to hamburger menu |
| 600px | Smartphone landscape |
| 480px | Smartphone portrait |

---

## 7. Elevation & Shadows

No-shadow principle. Only **floating elements** get minimal shadows.

| Variable | Value | Usage |
|---|---|---|
| `--shadow-card` | `0px 2px 8px rgba(0,0,0,0.04)` | Card (minimal) |
| `--shadow-raised` | `0px 8px 24px rgba(0,0,0,0.06)` | Hover lift |
| `--shadow-float` | `0px 24px 48px rgba(0,0,0,0.04)` | Sticky topbar |

**Forbidden**: Gradient shadows, color shadows. Depth is expressed via surface color shifts.

---

## 8. Components

### Button (3 variants)

```
Primary:  bg #000 / color #fff -> hover: bg --a1 / translateX(4px)
Outline:  bg transparent / border #000 -> hover: bg #000 / color #fff
Accent:   bg --a1 / color --on-a1 -> hover: bg #000 / color #fff

Common: 10px / weight 700 / +0.2em / UPPERCASE / border-radius: 0px
```

### Tag / Badge

```
9px / weight 700 / +0.15em / UPPERCASE / padding: 3px 8px
Variants: .km-tag--a1 to a6 (accent bg), .km-tag--outline
```

### Stat Card / Bar Chart / Data Table / Gallery Card

See [DESIGN.md](DESIGN.md) for detailed specifications.

---

## 9. Accent Mode System

### Architecture

```
html[data-accent="single|dual|tri|full"]
  -> CSS variables: --a1 to --a6, --on-a1 to --on-a6 are overridden
  -> All components auto-update (via var() references)
```

### 4 Mode Definitions

| Mode | Colors | Use Case |
|------|--------|----------|
| **SINGLE** (default) | All `#FFEA00` | Authority, unity, maximum brand assertion |
| **DUAL** | Yellow + Blue | Action vs Information functional split |
| **TRI** | Yellow + Blue + Red | Action / Information / Alert |
| **FULL** | All 6 colors | Editorial, gallery, category classification |

### JavaScript API

```javascript
window.KineticMono.setAccent('dual')   // 'single' | 'dual' | 'tri' | 'full'
window.KineticMono.getAccent()         // returns current mode string
```

---

## 10. Accessibility Rules

### Color Usage on White Backgrounds

| Color | Contrast on White | Use as Text |
|---|---|---|
| Yellow `#FFEA00` | 1.07:1 | **Forbidden** (color field only) |
| Green `#00C853` | 2.9:1 | **Forbidden** (color field only) |
| Orange `#FF6B00` | 3.0:1 | **Forbidden** (color field only) |
| Red `#FF2D2D` | 4.8:1 | Allowed (uppercase recommended) |
| Blue `#0057FF` | 8.2:1 | Allowed |
| Purple `#8B00FF` | 7.5:1 | Allowed |

---

## 12. DO / DON'T

### DO

- Micro-Labels must always be UPPERCASE
- Heading max-width: 70% (asymmetric layout)
- Yellow/Green as color fields only, with black text on top
- Section separation via background color shifts
- Kinetic Hover: color snap + translateX(4px) always paired
- Numbers/IDs in JetBrains Mono
- Status indicators as 6x6px square dots

### DON'T

- Use border-radius (0px strictly enforced)
- Yellow/Green as text on white/gray backgrounds
- 1px borders for layout separation
- Gradients for depth (use Surface Shift)
- Mix in other display fonts besides Plus Jakarta Sans
- Non-8px-multiple spacing

---

## 13. Implementation

### File Structure

```
kinetic-mono/
+-- index.html
+-- dashboard.html
+-- gallery.html
+-- gallery-detail.html
+-- docs.html
+-- settings.html
+-- 404.html
+-- .nojekyll
+-- DESIGN.md           <- Complete design specification
+-- README.md           <- English (default)
+-- README.ja.md        <- Japanese
+-- css/
|   +-- tokens.css      <- Design tokens (all variables)
|   +-- base.css        <- Reset + Layout Shell + Nav
|   +-- components.css  <- All UI components
+-- js/
    +-- nav.js          <- Shared nav injection + Accent Mode system
```

### CSS Load Order (required)

```html
<link rel="stylesheet" href="css/tokens.css">     <!-- 1st: Variables -->
<link rel="stylesheet" href="css/base.css">       <!-- 2nd: Structure -->
<link rel="stylesheet" href="css/components.css"> <!-- 3rd: UI -->
```

### CSS Variable Naming

```
--palette-{color}   : Raw palette (don't reference directly)
--surface-{0-4}     : Background surfaces
--a{1-6}            : Semantic accents (components reference these)
--on-a{1-6}         : Text color on accent
--sp-{1-8}          : Spacing
--t-{xs..hero}      : Type scale
--ease-{kinetic,editorial,snap} : Easing
--dur-{instant,quick,moderate,slow} : Duration
--shadow-{card,raised,float} : Shadows
```

### Deploy

Published on GitHub Pages: [https://suzuki-junya108.github.io/kinetic-mono/](https://suzuki-junya108.github.io/kinetic-mono/)

---

*Kinetic Mono v2.0 — The Clinical Curator*
*What must not change and what may change are clearly separated.*
