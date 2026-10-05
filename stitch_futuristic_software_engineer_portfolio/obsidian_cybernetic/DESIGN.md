---
name: Obsidian Cybernetic
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#23b2ec'
  on-tertiary-container: '#00415a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the precision, ambition, and technical craft of an elite software engineer. The aesthetic balances futuristic terminal ergonomics with sophisticated modern glassmorphism. It rejects raw brutalist retro-futurism in favor of an ultra-polished, refined, dark-mode-first developer workbench: razor-sharp typography, ambient luminescent gradients, and crystalline layered containers.

The visual style merges **Glassmorphism** with **Technical Minimalism**:
- **Surfaces**: Frosted obsidian and charcoal backdrops with soft blur, micro-borders, and internal radial glows that mimic light refraction across dark optics.
- **Lighting**: Focused luminescent accents—electric cyan and violet flares—used strictly to guide optical priority, indicate status, or denote active interaction.
- **Emotional Impact**: Hyper-competent, forward-thinking, immersive, and meticulous. It immediately communicates engineering rigor and modern taste to senior technical recruiters, engineering leaders, and open-source collaborators.

## Colors

The palette is engineered around an ultra-deep obsidian baseline, allowing neon spectral accents to emit vivid contrast without creating visual exhaustion.

- **Primary (`#06B6D4` / Electric Cyan)**: Core call-to-actions, active navigation highlights, primary metrics, and key focal points.
- **Secondary (`#8B5CF6` / Neon Violet)**: Secondary actions, code syntax structure, project category anchors, and ambient gradient blending.
- **Tertiary (`#38BDF8` / Soft Sky)**: Supplementary highlights, hover states, terminal badges, and subtle edge lighting.
- **Neutrals**:
  - `Canvas / Base`: `#0B0F17` (Deep Obsidian)
  - `Surface Level 1`: `#111827` (Charcoal Slate at varying opacities from 40% to 75%)
  - `Surface Level 2`: `#1E293B` (Elevated Panels & Code Blocks)
  - `Border / Strut`: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`
  - `Text High-Contrast`: `#F8FAFC` (Slate 50)
  - `Text Muted`: `#94A3B8` (Slate 400)
  - `Text Sub-Muted`: `#64748B` (Slate 500)

### Gradient Recipes
- **Electric Flare**: Linear `135deg`, `#06B6D4` (0%) to `#8B5CF6` (100%).
- **Obsidian Glass Fill**: Linear `180deg`, `rgba(17, 24, 39, 0.7)` (0%) to `rgba(11, 15, 23, 0.85)` (100%).
- **Luminescent Border**: Linear `135deg`, `rgba(6, 182, 212, 0.4)` (0%), `rgba(139, 92, 246, 0.2)` (50%), `rgba(255, 255, 255, 0.05)` (100%).

## Typography

The typographic hierarchy uses **Plus Jakarta Sans** for crisp, geometric, human-accessible readability across headings and body copy, paired with **JetBrains Mono** for developer metrics, architecture callouts, metadata tags, and code blocks.

- **Headlines**: Tight letter spacing (`-0.01em` to `-0.03em`) creates density and authority. Headlines may occasionally apply subtle linear gradient masks (Slate 50 to Slate 400).
- **Body Text**: Rendered strictly in high-contrast neutral tints (`#F8FAFC` for high priority, `#94A3B8` for standard narrative flow).
- **Code & Metadata**: `JetBrains Mono` is uppercase for badges and system pills, and mixed-case with standard monospace spacing for code references, git commit hashes, and telemetry data.

## Layout & Spacing

The layout is anchored on an 8pt base grid within a responsive 12-column fluid framework constrained to a maximum width of `1280px` (`80rem`).

### Breakpoints & Layout Rules
- **Desktop (`>= 1024px`)**: 12 columns, `1.5rem` (24px) gutters, `3rem` (48px) margins. Section stacking utilizes `space-xl` and higher structural separation (`5rem` to `7rem`).
- **Tablet (`768px - 1023px`)**: 8 columns, `1.25rem` (20px) gutters, `2rem` (32px) margins. Project grids collapse to 2 columns.
- **Mobile (`< 768px`)**: 4 columns, `1rem` (16px) gutters, `1.25rem` (20px) margins. Horizontal scrolling chip arrays or stacked single-column cards replace wide telemetry tables.

Margins and empty vertical space provide room for glowing ambient backdrops to breathe without visual collisions.

## Elevation & Depth

Depth is established through translucent optical layers, surface blurs, and neon back-projection rather than conventional drop shadows.

- **Base Layer (Level 0)**: `#0B0F17` canvas with faint, stationary SVG grid/dot mesh pattern (`opacity: 0.15`).
- **Surface Layer (Level 1 - Cards & Trays)**:
  - Background: `rgba(17, 24, 39, 0.65)`
  - Backdrop Filter: `blur(16px)` saturate(180%)
  - Border: `1px solid rgba(255, 255, 255, 0.08)`
  - Inset Highlight: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`
- **Hover & Focus Layer (Level 2)**:
  - Surface: `rgba(30, 41, 59, 0.75)`
  - Border: `1px solid rgba(6, 182, 212, 0.4)`
  - Luminescent Glow: `box-shadow: 0 0 25px -5px rgba(6, 182, 212, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`
- **Overlay Layer (Level 3 - Modals, Command Menus, Tooltips)**:
  - Surface: `rgba(15, 23, 42, 0.9)` with `blur(24px)`
  - Border: `1px solid rgba(139, 92, 246, 0.35)`
  - Projection: `0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(139, 92, 246, 0.2)`

## Shapes

The design system employs a **Rounded** shape language (`roundedness: 2` = `0.5rem` base border radius). This balances modern software elegance with structural geometry:

- **Buttons & Form Controls**: `0.5rem` (8px) for balanced ergonomics; fully pill-shaped (`9999px`) exclusively for inline technical tags, status indicators, and micro-badges.
- **Cards & Modal Containers**: `1rem` (`rounded-lg`, 16px) to provide cohesive corner buffers for frosted glass surfaces.
- **Nested Inner Surfaces (Code viewports, terminal panes)**: `0.5rem` (8px), maintaining clean concentricity with outer `1rem` card wrappers.

## Components

### Buttons
- **Primary Action**: Electric cyan background (`#06B6D4`) transitioning to deep cyan hover (`#0891B2`), text in obsidian `#0B0F17` (bold `Plus Jakarta Sans`), subtle outer glow `0 0 16px rgba(6, 182, 212, 0.35)`.
- **Secondary (Glass)**: Frosted surface `rgba(255, 255, 255, 0.04)`, `1px` border `rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover: border tints to `#8B5CF6`, background becomes `rgba(139, 92, 246, 0.1)`.
- **Ghost / Link**: Unfilled, text `#94A3B8`, leading or trailing monospace glyph (`->`), hover color `#22D3EE`.

### Cards & Project Showcases
- Frosted glass body with internal padding of `space-lg` (24px).
- **Header Slot**: Project title with an integrated terminal pill tag (e.g., `v2.4.0` or `TypeScript`).
- **Footer Slot**: Tech-stack chip collection and live demo / GitHub icon anchors.
- **Interactive State**: Translates `-2px` on the Y-axis with a cyan or violet edge illumination bloom.

### Status Indicators & Badges
- **Status Dot**: `8px` circle with a ping animation ring.
  - Active / Open to Work: Neon emerald (`#10B981`) or cyan (`#06B6D4`) with `box-shadow: 0 0 8px currentColor`.
- **Pill Tag**: Monospaced font (`JetBrains Mono`), padding `2px 10px`, radius `9999px`, background `rgba(6, 182, 212, 0.08)`, border `1px solid rgba(6, 182, 212, 0.25)`, text color `#22D3EE`.

### Inputs & Terminal Fields
- Background: `rgba(11, 15, 23, 0.8)`.
- Border: `1px solid rgba(255, 255, 255, 0.1)`.
- Focus State: Border color `#06B6D4`, ring `0 0 0 2px rgba(6, 182, 212, 0.2)`.
- Typography: `JetBrains Mono` for search queries or command inputs; standard body font for contact forms.

### Code Snippets & Terminal Panes
- Embedded top bar featuring three macOS-style window dots (`#EF4444`, `#F59E0B`, `#10B981`) at `10px` diameter.
- Body surface in `#0B0F17` with syntax-highlighted tokens in cyan (`#22D3EE`), purple (`#A855F7`), slate (`#64748B`), and green (`#34D399`).
- Integrated one-click copy button with subtle tooltip indicator.