# Dofollo Design System

This document serves as the single source of truth for the visual language of the Dofollo application.

## 1. Color Palette

The Dofollo brand uses a high-contrast, premium palette combining deep forest tones with vibrant electric lime accents.

### Primary Colors
| Name | Hex | Tailwind Example | Usage |
| :--- | :--- | :--- | :--- |
| **Deep Forest** | `#0A2E22` | `bg-[#0A2E22]` | Main backgrounds, Primary text, Strong borders |
| **Electronic Lime** | `#E1F28F` | `text-[#E1F28F]` | Calls to action, Accents, Highlights, Dark mode text |
| **Teal** | `#045C4E` | `bg-[#045C4E]` | Secondary buttons, Active states, Gradients |
| **Mint Cream** | `#f5ffef` | `bg-[#f5ffef]` | Light mode backgrounds, Subtle panels |

### Grayscale & Opacity
- **White**: `#FFFFFF` - Used for text on dark backgrounds and card backgrounds.
- **Glass White**: `rgba(255, 255, 255, 0.05)` - Used for `glass-card` effects.
- **Forest Opacity**: `#0A2E22` with opacity (e.g., `/10`, `/60`) is used for borders and secondary text instead of pure gray.

---

## 2. Typography

We use the default Tailwind sans-serif font stack (Inter/System UI).

### Hierarchy
- **Display Heading**: `text-4xl lg:text-5xl font-extrabold tracking-tight`
    - Used for: Hero titles, Section main headers.
- **Section Heading**: `text-3xl font-bold`
    - Used for: Feature titles.
- **Body Large**: `text-lg lg:text-xl leading-relaxed`
    - Used for: Hero subtitles, Lead paragraphs.
- **Body**: `text-base text-[#0A2E22]/70` (Light Mode) or `text-[#f5ffef]/70` (Dark Mode)
    - Used for: General content.
- **Caption/Label**: `text-xs font-bold uppercase tracking-wider`
    - Used for: Badges, Overlines.

---

## 3. UI Components

### Buttons
**Primary Action**
```tsx
<button className="bg-[#0A2E22] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#045C4E] transition-all shadow-lg hover:translate-y-[-2px]">
  Get Started
</button>
```

**Secondary / Ghost**
```tsx
<button className="text-[#0A2E22] font-bold hover:text-[#045C4E] transition-colors">
  Learn More
</button>
```

**Accent (Dark Mode)**
```tsx
<button className="bg-[#E1F28F] text-[#0A2E22] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors">
  Start Free
</button>
```

### Cards
Cards often use a subtle border and rounded corners.
```tsx
<div className="bg-white p-8 rounded-3xl border border-[#0A2E22]/5 shadow-sm hover:shadow-md transition-all">
  {/* Content */}
</div>
```

---

## 4. Effects & Texture

### CSS Utilities (`index.css`)

**Noise Texture**
Adds a subtle film grain to backgrounds for a premium feel.
```css
.bg-noise { /* ... matches index.css ... */ }
```

**Glass Card**
Used for overlays on dark backgrounds.
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Background Blurs
We use large, colorful blur orbs to create depth.
```tsx
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1F28F]/20 rounded-full blur-[100px] pointer-events-none" />
```

---

## 5. Iconography
We use **Lucide React** for all icons.
- **Stroke Width**: Default or `strokeWidth={1.5}` for larger icons.
- **Color**: Typically matches text color or Accent Lime in dark mode.

---

## 6. Spacing
- **Section Padding**: `py-24` (96px) is standard for major sections.
- **Container**: `container mx-auto px-6` is standard.
