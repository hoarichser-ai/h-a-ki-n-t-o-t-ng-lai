## Hòa — Premium Personal Brand Website

A calm, editorial multi-page site in Vietnamese for a recruitment strategist & human development mentor. Dark cinematic aesthetic, quiet luxury, no SaaS/HR-marketplace feeling.

### Design System (src/styles.css)
- **Colors (oklch tokens):** background = Deep Navy `#081526`, surface = Midnight Blue `#0B1D33`, foreground = Soft Ivory `#F5F1E8`, primary/accent = Warm Gold `#C89A46`, muted = Warm Gray `#7D7D7D`, charcoal `#2A2A2A`. Gold used only for thin accents, signatures, and one primary CTA per section.
- **Fonts:** Playfair Display (headings, large display sizes, generous tracking) + Manrope (body). Loaded via Google Fonts in `__root.tsx` head.
- **Tokens:** soft elevation shadows, 1px hairline gold borders, `--gradient-overlay` for hero image vignette, slow transition curves (cubic-bezier ease-out, 600–900ms for reveals).

### Routes (TanStack file-based, each with own `head()` meta)
```
/                  Trang chủ        (index.tsx)
/goc-nhin          Reflections list
/goc-nhin/$slug    Reflection article (optional, static sample)
/doanh-nghiep      Business page
/ung-vien          Candidate page
/cau-chuyen        Case stories
```
Each route gets unique title, description, og:title, og:description in Vietnamese.

### Shared Components (src/components/)
- `SiteHeader.tsx` — sticky nav, transparent → backdrop-blur on scroll, gold "Đồng hành cùng Hòa" CTA, mobile sheet menu.
- `SiteFooter.tsx` — minimal dark footer: short closing line, email, LinkedIn, copyright.
- `SectionHeading.tsx` — eyebrow (uppercase gold tracking) + large Playfair heading.
- `RevealOnScroll.tsx` — IntersectionObserver-based fade/translate-up wrapper (no framer-motion dependency; pure CSS + observer).
- `PathwayCard.tsx`, `ReflectionCard.tsx`, `StoryCard.tsx`, `OpportunityCard.tsx`, `PhilosophyCard.tsx`, `LogoStrip.tsx`, `QuoteBlock.tsx`.

### Homepage Sections (per brief)
1. **Hero** — full-viewport, dark portrait photo right, large Playfair statement left ("Con người đúng trong môi trường đúng sẽ tạo nên kết quả phi thường."), eyebrow "KẾT NỐI CON NGƯỜI — KIẾN TẠO TỔ CHỨC BỀN VỮNG", signature "Hòa" + role line. Subtle fade-in + slow image scale reveal.
2. **Entry Paths** — two equal pathway cards (Tổ chức & Lãnh đạo / Người tìm kiếm sự phát triển) with hairline gold border, hover lift + glow.
3. **Trust strip** — minimal text-mark logos on navy.
4. **Góc nhìn nổi bật** — 4 large editorial reflection cards with cinematic thumbnails, category tag, date, hover zoom.
5. **Philosophy quote** — full-bleed dark, large Playfair italic quote, single gold CTA "Bắt đầu kết nối".

### Business Page (/doanh-nghiep)
Hero statement → Pain points (refined, no icon clutter) → Hòa's perspective cards → "Những cách Hòa thường đồng hành" (5 collaboration ways, no pricing) → Real stories (3 narrative cards) → Curated talent preview (minimal profile cards: strengths/mindset/direction) → Soft CTA "Kết nối cùng Hòa".

### Candidate Page (/ung-vien)
Hero growth statement → "Bạn sẽ nhận được gì" (4 refined value cards) → Development journey (3 numbered steps) → Curated opportunities (3 premium minimal job cards) → Community section (warm photo + copy) → Mentorship soft block → CTA "Chia sẻ hành trình của bạn".

### Reflections Page (/goc-nhin)
Editorial list: featured large article on top, then grid of cards. Category filter chips (Lãnh đạo / Tuyển dụng / Phát triển con người / Tổ chức / Sự nghiệp). Static sample content array.

### Case Stories Page (/cau-chuyen)
Narrative-led story cards with large imagery and prose excerpts. No KPI dashboards.

### Imagery
Generate cinematic premium photos (warm-lit office, thoughtful portrait, leadership scenes, mountain figure, community workshop) saved to `src/assets/` and imported as ES6 modules. All use the dark cinematic mood specified.

### Interactions
- Sticky header with scroll-state blur.
- IntersectionObserver reveals (opacity + 16px translate-y, 700ms ease-out).
- Card hover: 1px gold border, slight lift (translate-y -2px), image scale 1.03, smooth 500ms.
- Smooth scroll, no flashy motion.

### Responsive
Mobile: stacked hero (portrait below text), larger line-height, single-column cards, hamburger sheet nav, preserved generous spacing.

### Technical Notes
- Pure Tailwind + CSS tokens; no new heavy deps. Use existing shadcn `button`, `card`, `sheet` where helpful but restyle with tokens (no default radius/shadow).
- All Vietnamese strings preserved exactly as provided in brief.
- Per-route SEO meta in Vietnamese; og:image set per-route to the hero asset for that route.
- Replace placeholder `src/routes/index.tsx`.

### Out of scope (this build)
- No backend, no Lovable Cloud, no contact form submission (CTA buttons scroll/link only).
- No CMS for reflections (static sample data in `src/content/reflections.ts`).
