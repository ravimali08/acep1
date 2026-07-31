---
name: Apex Shuttle
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#161e00'
  on-tertiary-container: '#718e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#c3f400'
  tertiary-fixed-dim: '#abd600'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#3c4d00'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Anybody
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 120px
---

## Brand & Style

The brand personality is athletic, disciplined, and high-velocity. It targets competitive athletes and enthusiasts who value precision and performance. The visual language balances the stability of a professional institution with the kinetic energy of the sport.

The design style is **High-Contrast / Bold** mixed with **Corporate Modern**. It uses expansive whitespace to represent the clarity of the court, punctuated by aggressive typography and sharp accent colors that evoke the "snap" of a shuttlecock hit. Layouts should feel rhythmic and structured, mirroring the back-and-forth nature of a badminton match.

## Colors

The palette is anchored by **Deep Navy** (#0F172A) to provide a premium, professional foundation. **Shuttlecock White** (#F8FAFC) serves as the primary surface color, ensuring the interface remains light and energetic. 

**Electric Yellow** (#CCFF00) is the high-visibility "Action Color," reserved exclusively for primary calls-to-action and critical performance indicators. **Teal** (#0D9488) is used for secondary interactive elements, membership status, and success states, providing a cooling balance to the vibrant yellow.

## Typography

The typography strategy emphasizes speed and readability. **Anybody** is used for headlines; its variable width and bold weights suggest the agility and power of an athlete. For body copy, **Lexend** is utilized for its hyper-legibility and athletic, open character, ensuring that schedules and technical data are easily digestible.

Key headlines should use tight tracking and heavy weights to create a "locked-in" feel. Labels and small metadata should always be set in uppercase Lexend to maintain a functional, instructional tone.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px spacing scale ensures consistency across all components.

- **Desktop:** 1280px max-width container with 48px margins.
- **Tablet:** 24px margins, fluid columns.
- **Mobile:** 16px margins, stacking all multi-column content into a single vertical flow.

Large vertical gaps (120px) between homepage sections provide breathing room, reinforcing the "clean" athletic aesthetic. Information-dense areas, such as court schedules, should utilize condensed 4px padding within cells to maximize data visibility.

## Elevation & Depth

To maintain a crisp, athletic feel, this design system avoids heavy shadows. Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** The base layer is Shuttlecock White. Elevated cards use a pure white background with a 1px border in a very light grey or Navy at 10% opacity.
- **Active States:** Elements being interacted with may utilize a slight, high-diffusion "ambient shadow" (Navy at 8% opacity, 20px blur) to simulate the element lifting off the court.
- **Depth of Field:** Background images of the club should use a slight blur when overlaid with text to keep the focus on the "action" of the interface.

## Shapes

The shape language is **Soft** (Radius: 0.25rem). This choice reflects the precision of the sport—neither too aggressive (sharp) nor too casual (pill-shaped). 

- **Standard Elements:** Buttons, input fields, and small cards use a 4px radius.
- **Large Cards:** Trainer profiles and membership tier containers use `rounded-lg` (8px).
- **Icons:** Should follow a geometric, 2px stroke weight to match the technicality of the typography.

## Components

### Buttons
- **Primary:** Electric Yellow background, Deep Navy text. Bold uppercase Lexend. No shadow, 4px radius.
- **Secondary:** Deep Navy background, White text.
- **Ghost:** 1px Deep Navy border, Navy text, transparent background.

### Schedule Grid
The court schedule is a high-utility component. Use a "Time-Row" layout with Deep Navy headers. Available slots should be White, while booked slots are a subtle Navy tint (5%) to keep the focus on available "play" time.

### Trainer Profiles
Vertical cards featuring a high-action photography crop at the top. Use a Teal accent bar to indicate "Certified" status. Information (specialties, years of experience) is displayed using `label-md` for quick scanning.

### Membership Tiers
High-contrast cards. The "Pro" or "Most Popular" tier should feature a Deep Navy background with Electric Yellow text to distinguish it from the standard "Club" tier (White background).

### Input Fields & Controls
Clean, 1px Navy borders. On focus, the border weight increases to 2px and changes to Teal. Checkboxes and radio buttons use the Teal accent for the "checked" state to denote a successful selection.