# Design Brief

**Tone**: Luxury sports brand — cinematic, premium, warm, athletic. Refined confidence without corporate sterility.

**Differentiation**: Premium earth-tone palette with generous rounded geometry, elevating a local sports shop to world-class visual standards. Every interaction feels intentional and smooth.

## Palette

| Token | OKLCH | Intent |
|-------|-------|--------|
| primary | 0.52 0.15 60 | Warm bronze/gold — premium focal point |
| secondary | 0.35 0.13 150 | Deep forest green — trustworthiness, depth |
| accent | 0.58 0.18 40 | Burnt orange — energy, CTAs |
| background | 0.97 0.02 90 | Warm cream — inviting neutrality |
| muted | 0.85 0.03 90 | Warm grey — subtle depth layers |
| foreground | 0.15 0 0 | Near-black text |

## Typography

| Layer | Font | Use |
|-------|------|-----|
| Display | Bricolage Grotesque | Hero, section titles — bold geometric premium |
| Body | DM Sans | Paragraphs, labels — clean modern legible |
| Mono | Geist Mono | Code, technical — consistent technical detail |

**Type Scale**: 12/14/16/18/24/32/48/64px. Hierarchy through size + weight.

## Structural Zones

| Zone | Background | Treatment |
|------|------------|-----------|
| Header/Nav | card | Sticky, semi-transparent, elevated |
| Hero | primary gradient | Full-viewport, parallax image layer |
| Content sections | background/muted alternating | Rhythm through color variation |
| Cards/Products | card | Rounded corners, shadow-elevated, hover-lift |
| CTAs | accent | Sticky/floating, persistent visibility |
| Footer | muted | Subtle elevation, reduced opacity |

## Shape Language

- **Border Radius**: 14px (cards), 8px (inputs), full (badges/floating buttons)
- **Shadows**: Luxury-grade elevation (0 20px 25px with primary tint at 0.1 opacity)
- **Spacing**: 1rem grid, generous vertical rhythm, breathing room

## Motion & Animation

- **Transitions**: All 0.3s cubic-bezier(0.4, 0, 0.2, 1) — smooth, intentional
- **Entrance**: Fade-in + translate-up (staggered by delay per element)
- **Hover**: Lift (+translate-y-[-4px]) + shadow-elevated
- **Scroll**: Parallax background layers, subtle fade on content reveal
- **Float**: Subtle floating animation (±8px) on accent elements (badges, CTAs)

## Component Patterns

- **Buttons**: Primary (bronze/gold background, white text), Secondary (outline, muted stroke), Accent (orange, floating)
- **Cards**: Rounded, shadow-elevated, hover-lift, image + text stacked
- **Forms**: Muted input fields, accent focus ring, smooth transition
- **Images**: High-contrast, AI-generated realism, no placeholder patterns

## Special Effects

- **Parallax Hero**: Background moves slower than foreground during scroll
- **Sticky Navigation**: Header stays visible, semi-transparent with slight blur
- **Floating CTAs**: Mobile sticky footer, desktop floating button group (WhatsApp, Call, Visit)
- **Scroll Triggers**: USP icons animate in on intersection, product cards fade/slide

## Constraints

- No dark mode initially (warm light palette preferred for luxury sports aesthetic)
- Maximum 2 color families per section (primary + secondary OR accent + muted)
- Animations must not exceed 0.6s — premium refinement over flashiness
- All images AI-generated or stock photography — no placeholder graphics
- Mobile-first responsive (sm/md/lg breakpoints)

## Signature Detail

Premium warm earth tones (bronze, gold, deep green, burnt orange) create athletic authenticity. Generous rounded geometry + smooth animations signal premium polish. Every sticky CTA ensures zero-friction conversion path.
