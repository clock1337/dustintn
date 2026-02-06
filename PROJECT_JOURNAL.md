# DUSTTN Project Journal

## Project Overview
- **Project Name**: DUSTTN - Web Development & Digital Services Portfolio
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, ShadCN UI
- **Color Scheme**: Dark theme with orange accent (#FF6B00)
- **Fonts**: Figtree (Google Fonts) - weights 300-900

## Current Design Reference
- **Live Reference**: https://miller.bslthemes.com/ashley-demo/home-1.html
- **Design Style**: Dark, sophisticated, minimalist agency aesthetic
- **Key Elements**: Pill buttons, subtle animations, high contrast, generous spacing

## Previous Design References
- **PDF**: `/Users/dustinsmith/Downloads/screencapture-askit-dextheme-net-creat-2026-01-07-18_07_47.pdf`
- **Style**: Bold typography, outline text effects, asterisk decorative elements

## Session 1 - January 7, 2026

### Initial Setup
- Reviewed existing Next.js project structure
- Project already has basic landing page with:
  - Navigation header
  - Hero section with "Creating Stories, Capturing Attention"
  - Services grid (4 cards)
  - About section
  - Statistics section
  - Portfolio grid
  - Contact form
  - Footer

### Features to Implement (Based on PDF Reference)
1. **Client Testimonials Section** - Slider with client quotes and logos
2. **Skills/Progress Bars** - "We Work Smart, Effort That Counts" section
3. **Team Members Section** - "The Minds Behind The Magic" with photos and social links
4. **FAQ Section** - Accordion style "Everything You Need to Know"
5. **Blog Posts Section** - Recent posts/articles grid
6. **Brand Logos Showcase** - Client/partner logos grid
7. **Enhanced Footer** - Multi-column layout with company info, resources, contact
8. **Improved Navigation** - Sticky header with dropdowns
9. **CTA Buttons** - Add asterisk icons to all CTAs
10. **Portfolio Categories** - Filterable portfolio items

### Current Status
- Dev server running on http://localhost:3000
- All planned features implemented:
  - ✅ Skills/Progress Bars
  - ✅ Blog Posts section
  - ✅ Portfolio filters
  - ✅ Sticky nav with dropdowns
  - ✅ Team section (placeholders)
  - ✅ FAQ accordion
  - ✅ Client testimonials
  - ✅ Brand logos showcase

### Notes
- User mentioned "features we spoke about" but this is first session - implementing all features visible in PDF
- Tennessee colors already configured in globals.css
- Asterisk decorative element needs to be added throughout

---

## Change Log

### 2026-01-07 - Initial Session
- Created project journal for session persistence
- Analyzed PDF design reference
- Created implementation todo list

### 2026-01-20 - Feature Implementation
- Confirmed UT Volunteers color scheme (#FF8200 orange, white, smoky gray)
- Added Skills/Progress Bars to "We Work Smart" section (Web Dev 95%, Brand Identity 88%, Digital Marketing 92%, Content Strategy 85%)
- Added Blog Posts section with 3 article cards (Design, Branding, Marketing categories)
- Added Portfolio filter categories (All, Branding, Web, Marketing, Video) with hover effects
- Updated navigation with dropdown menus for Services and Pages
- Rebranded CREATO to DUSTTN throughout (nav, footer, copyright)

### 2026-01-20 - Design Refinements (Session 2)
- Fixed memory leak issues in page.tsx (added useCallback/useMemo for event handlers)
- Cleared .next cache (210MB accumulated)
- **CTA Buttons with Asterisks**: Added ✱ icons to all CTA buttons:
  - "Get Started ✱" (hero & Work Smart sections)
  - "Early Access ✱" (navigation)
  - "View All ✱" (portfolio section)
  - "Read All Blog ✱" (blog section)
  - "Get in Touch ✱" (Let's Work Together CTA)
- **Progress Bars Updated**: Changed to match PDF design:
  - Creative Problem-Solving: 90✱
  - Effective Communication: 96✱
  - Strategic Thinking: 88✱
  - Labels now in orange, thin progress bars
- **Footer Redesigned**:
  - Added asterisk bullets before all links (✱ About Us, ✱ Portfolio, etc.)
  - Added decorative SVG asterisk in background
  - Added social media icon boxes
  - Updated contact info
- **Team Section Updated**:
  - Changed to white background
  - Added "OUR TEAM" label with asterisk
  - Added team member names: Nathan Dioe (Creative Director), Lisa Rodriguez (Art Director), Jason Hubner (Copywriter), Leyla Gimanov (Account Manager)
  - Added social media link boxes for each member
- **Blog Section Updated**:
  - Added card styling with borders
  - Added author/date info (Arkhan, November 18, 2024)
  - Added orange "Learn More" links
  - Updated titles: Building Engaging Campaigns, The Power of Design, Crafting a Standout Brand

### 2026-01-20 - Color & Font Update (Session 3)
- **Font Changed**: Replaced Space Mono + Bebas Neue with **Figtree** from Google Fonts
  - Weights: 300-900 for flexibility
  - Modern, clean sans-serif for both body and headings
  - Removed uppercase transform from headings for more refined look
- **Color Palette Softened**: Changed from bright UT Orange (#FF8200) to softer burnt orange (#D35400)
  - Less "in your face" while still Tennessee-inspired
  - Updated all color variables in globals.css and tailwind.config.ts
  - New palette:
    - Primary: #D35400 (burnt orange)
    - Light: #FDF6F0 (warm cream)
    - Dark: #1C1C1C (near black)
    - Smoky Gray: #4A4A4A

### 2026-01-23 - Frontend Design Skill & Ashley Theme Redesign (Session 4)

#### Skills & Tools Installed
- **Frontend-Design Skill**: Installed from Anthropic's Claude Code repository
  - Location: `~/.claude/skills/frontend-design/SKILL.md`
  - Purpose: Guides creation of distinctive, production-grade interfaces
  - Avoids generic "AI slop" aesthetics
- **ShadCN UI**: Already configured (New York style, Lucide icons)

#### Complete Site Redesign - Ashley Theme
Redesigned entire site to match the Ashley theme (https://miller.bslthemes.com/ashley-demo/home-1.html)

**New Color Palette (Dark Theme):**
- Background: #000000 (black), #0D0D0D (dark), #1A1A1A (dark-gray)
- Accent: #FF6B00 (vibrant orange)
- Text: #FFFFFF with opacity variations (100%, 60%, 50%, 40%, 30%)

**Typography:**
- Font: Figtree (Google Fonts)
- Display: clamp(2.5rem, 8vw, 6rem), weight 500
- Headline: clamp(2rem, 5vw, 3.5rem), weight 500
- Letter-spacing: -0.02em to -0.03em

**Button Styles:**
- Pill-shaped (border-radius: 9999px)
- Primary: Orange background, white text
- Outline: Transparent with white/30 border
- Uppercase text, letter-spacing 0.05em

**Animations:**
- fadeInUp: 0.8s cubic-bezier entrance
- Staggered delays (0.1s - 0.5s)
- Card hover: translateY(-8px)
- Image zoom: scale(1.05) on hover
- Scroll indicator: bounce animation

**Section Structure:**
1. **Navigation**: Fixed, backdrop-blur, border-b border-white/5
2. **Hero**: Full-height, gradient background, scroll indicator
3. **About**: Two-column with stats overlay card
4. **Stats**: Border-y divider, accent-colored symbols
5. **Services**: 2x2 grid cards with icon boxes
6. **Portfolio**: Project cards with category labels
7. **CTA**: Centered text with gradient background
8. **Contact**: Split layout with form
9. **Footer**: 4-column grid with divider

**Files Modified:**
- `src/app/globals.css` - Complete rewrite with dark theme utilities
- `src/app/page.tsx` - Complete rewrite with new component structure
- `tailwind.config.ts` - Updated color palette
- `src/app/layout.tsx` - Figtree font configuration

**Key Design Principles Applied:**
- High contrast (dark backgrounds, light text)
- Generous whitespace (py-32 sections)
- Subtle hover states and transitions
- Consistent border-white/5 for dividers
- Orange accent used sparingly for emphasis

### 2026-01-24 - Scroll Animations & Placeholder Images (Session 5)

#### Scroll-Triggered Animations
Implemented custom scroll animations using Intersection Observer API:

**Custom React Hooks & Components:**
- `useScrollAnimation(threshold)` - Custom hook that tracks element visibility
- `AnimatedSection` - Wrapper component for fade-up animations on scroll
- `StaggeredContainer` - Container for staggered child animations
- `AnimatedCounter` - Animated number counting for statistics

**Animation Effects:**
- Fade-up on scroll (translateY 60px → 0, opacity 0 → 1)
- Staggered delays for grouped elements (100ms increments)
- Stats counter animation (counts up when section enters viewport)
- Hero text reveal with staggered timing
- Floating badge animation (continuous subtle movement)
- Image zoom on hover (scale 1 → 1.05)
- Card lift on hover (translateY -8px)

**Testimonials Section:**
- Auto-rotating carousel (5 second intervals)
- Fade transitions between testimonials
- Navigation dots with active state
- Client quotes with author attribution

#### Placeholder Images
Added Unsplash placeholder images throughout the site:

**Image Locations:**
- Hero section background
- About section imagery
- Portfolio project cards (4 projects)
- Team member photos (4 members)
- Blog post featured images (3 posts)

**Configuration:**
- Updated `next.config.ts` to allow remote images from `images.unsplash.com`
- Used Next.js Image component with proper width/height for optimization
- Images use Unsplash URL parameters for sizing (?w=800&h=600&fit=crop)

**Files Modified:**
- `src/app/page.tsx` - Added animation hooks, components, and Unsplash images
- `src/app/globals.css` - Added animation keyframes and utility classes
- `next.config.ts` - Added images.remotePatterns for Unsplash

**CSS Animations Added to globals.css:**
```css
@keyframes fadeInUp { ... }
@keyframes fadeIn { ... }
@keyframes slideIn { ... }
@keyframes bounce { ... }
```

**Animation Utility Classes:**
- `.animate-in` - fadeInUp with cubic-bezier easing
- `.animate-fade` - Simple fade entrance
- `.delay-1` through `.delay-5` - Animation delays
- `.card-hover` - Lift effect on hover
- `.img-zoom` - Image scale effect on hover
- `.scroll-indicator` - Bouncing arrow animation
