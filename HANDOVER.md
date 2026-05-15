# MIAA Project Handover

## What This Project Is

A React rebuild of [miaaustralia.org](https://www.miaaustralia.org/) (originally built in Webflow). We're recreating it as a React + Vite app with Framer Motion and GSAP animations, Tailwind CSS v4, and React Router v7.

## Current State

### Completed
- **Project scaffolding**: Vite + React 19, all dependencies installed, Tailwind v4 configured
- **Routing**: 14 routes wired up in `App.jsx` under a `Layout` wrapper
- **Design tokens**: Full color palette in `index.css` `@theme` block matching Figma
- **Layout shell**: Navbar (hamburger overlay), Footer (MIAA watermark, links, newsletter), fixed logo
- **Page loader**: 5-scene GSAP animation (gallery frames → logo color reveal L→R → logo scales → flies to navbar position)
- **Homepage sections** (all in `src/components/sections/homepage/`):
  - `HeroSection` — teal bg, split text layout, full-width image, floating ornaments, parallax
  - `AboutUsSection` — cream bg, ISRA initiative text, LEARN MORE ABOUT US button
  - `IslamicArtSection` — scattered art frames with teal borders, center text, hover credits, scroll-triggered mount animation
  - `OffsiteEventsSection` — teal bg, 3 event cards with dates, Previous Events text list with hover image reveal
  - `SMWFSection` — SMWF logo, stacked overlapping photos with date labels, green pattern bg
  - `EducationSection` — image + accordion (Teachers/Students, Children/Families)
  - `TimelineSection` — left/right split with divider, 4 milestone cards with year overlay
  - `InsightsSection` — 3 blog cards, flat design
  - `ContactSection` — dark teal bg, underline-style form fields, geometric icon
- **SectionDivider**: Reusable component with quatrefoil icon, light/dark variants, dotted line
- **Custom skills**: 7 Framer Motion slash commands in `.claude/commands/`

### NOT Yet Started (placeholder `return null` pages)
These pages have route entries but no content:
- About (`/about`)
- Islamic Art (`/islamic-art`)
- Offsite Events (`/offsite-events`)
- Events / SMWF (`/events`)
- Community Engagement (`/community-engagement`)
- Timeline & Construction (`/timeline`)
- Contact (`/contact`)
- Blog (`/blog`)
- Blog Detail (`/blog/:slug`)
- Volunteer (`/volunteer`)
- Support Us (`/support-us`)
- Gala Dinner (`/gala-dinner`)
- Gala Dinner Ticketing (`/gala-dinner/tickets`)

## Figma Designs

Screenshots are in `figma/Homepage/` (desktop, widescreen, mobile). The user will share Figma designs for additional pages — they may try the Figma MCP again (previous access issue was permissions). The authenticated Figma account is `calcitetechnologies@gmail.com` on a Pro/Full seat.

## Reference Site

[https://www.miaaustralia.org/](https://www.miaaustralia.org/) — the live Webflow site. Use `WebFetch` to pull text content and analyze animations for any section.

## Key Design Decisions Made

### Fonts
- Primary font is **Avenir** (licensed). Declared in Tailwind theme as `--font-sans`. Font files (`.woff2`) need to be added to `src/assets/fonts/` and `@font-face` declarations wired up.

### Color System
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#214952` | Teal — nav, borders, dark sections |
| `secondary-terra` | `#C15C45` | CTA buttons, loader frame borders |
| `accent-cream` | `#F3EFEB` | Light section backgrounds, hero text |
| `accent-wheat` | `#D7B893` | Dark section text, divider dots |
| `bg-deep` | `#214952` | Events, Contact section bg |
| `bg-dark` | `#1B1E1E` | Footer bg |

### Navbar
- NOT a traditional visible nav — it's a full-screen overlay triggered by hamburger button
- Fixed logo (top-left) + "FOLLOW OUR JOURNEY" CTA (top-right) + hamburger are always visible
- Logo comes from `src/assets/images/Homepage/smalllogo.png`

### Loader Behavior
- Plays once on first home visit only (controlled by `loading` state in `Layout.jsx`)
- Gallery frames use `#C15C45` border with `bg-[#C15C45]`, `object-cover`, `scale-[1.15]` to crop past white matting in PNGs
- Logo has two layers: tinted (blends with bg) underneath, white on top revealed via `clip-path` L→R
- Acknowledgment text is always visible (no fade-in), first line bold italic, rest italic
- Final scene: logo flies to top-left where the small logo takes over

### Image Handling
- Source PNGs have white matting baked in
- Islamic Art section: white mat is part of the design — single `border-primary` frame, no cropping
- Loader: crop past white mat with `scale` + `object-cover` + matching `bg` color
- All homepage images are in `src/assets/images/Homepage/` with subfolders for multi-image sections

### Section Dividers
- Quatrefoil icon (`#DD613E`) + label + dotted line below
- `variant="light"`: text `#7A3A42`, dots `#38717A` (for cream/white bg sections)
- `variant="dark"`: text `#D7B893`, dots `#D7B893` (for teal bg sections)
- Pass `bg` class to match the section's background

### Animation Strategy
- **GSAP** for: loader timeline, scroll parallax (hero image), ornament floating
- **Framer Motion** for: page transitions, section reveals (`whileInView`), accordion expand/collapse, hover effects, staggered mounts
- Motion presets in `src/lib/motion.js` — spread as props: `<motion.div {...fadeInUp}>`

## What to Work on Next

1. **Refine homepage sections** to pixel-match Figma designs (the user iterates visually and provides screenshots)
2. **Build remaining pages** — user will share Figma designs page by page. Follow the pattern: create `src/components/sections/{pagename}/` folder, build section components, compose in the page file
3. **Mobile responsiveness** — Figma has mobile designs in `figma/Homepage/Homepage (mobile).png`
4. **Font setup** — add Avenir `.woff2` files and `@font-face` declarations when available
5. **Swiper carousels** — installed but not yet used in homepage sections (SMWF marquee, events)

## Dev Server

```
npm run dev
```
Runs on `localhost:5173` (or next available port). Build with `npm run build` — currently shows chunk size warning (>500KB) which can be addressed with code splitting via lazy routes later.
