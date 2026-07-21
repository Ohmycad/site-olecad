/* ══════════════════════════════════════════════════════════
   OléCAD — Modern lead-gen site
   Design tokens, layout, components
   ══════════════════════════════════════════════════════════ */

/* ────────── TOKENS ────────── */
:root {
  /* palette: navy/red (default) */
  --c-bg: #FFFFFF;
  --c-bg-alt: #F7F8FB;
  --c-bg-dark: #0D1B3E;
  --c-bg-dark-2: #14245A;
  --c-ink: #0B1228;
  --c-ink-2: #2A3556;
  --c-muted: #5B6584;
  --c-muted-2: #9099B5;
  --c-line: #E6E9F2;
  --c-line-2: #EEF1F8;
  --c-accent: #C41E1E;
  --c-accent-dk: #A01818;
  --c-accent-lt: #FEF2F2;
  --c-accent-glow: rgba(196, 30, 30, 0.22);
  --c-accent-2: #14245A; /* secondary accent for charts/highlights */

  /* type */
  --ff-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --ff-display: 'Inter', system-ui, sans-serif;
  --ff-mono: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;

  /* radii */
  --r-sm: 8px;
  --r: 12px;
  --r-lg: 18px;
  --r-xl: 28px;

  /* shadows */
  --sh-sm: 0 2px 8px rgba(13, 27, 62, 0.06);
  --sh: 0 8px 28px rgba(13, 27, 62, 0.08);
  --sh-lg: 0 24px 60px -12px rgba(13, 27, 62, 0.16);
  --sh-red: 0 8px 24px rgba(196, 30, 30, 0.22);

  /* container */
  --container-w: 1240px;
  --container-pad: 32px;
}

/* dark theme override */
body[data-theme="dark"] {
  --c-bg: #07101F;
  --c-bg-alt: #0C1A33;
  --c-bg-dark: #050B17;
  --c-bg-dark-2: #0C1A33;
  --c-ink: #F4F6FB;
  --c-ink-2: #C5CCE0;
  --c-muted: #8993B0;
  --c-muted-2: #5F6A8A;
  --c-line: #1A2747;
  --c-line-2: #142037;
}

/* palette variants */
body[data-palette="midnight-coral"] {
  --c-bg-dark: #0A1430;
  --c-bg-dark-2: #1B2452;
  --c-accent: #FF5B5B;
  --c-accent-dk: #E04444;
  --c-accent-lt: #FFF2F2;
  --c-accent-glow: rgba(255, 91, 91, 0.25);
}
body[data-palette="graphite-electric"] {
  --c-bg-dark: #15171C;
  --c-bg-dark-2: #22252E;
  --c-accent: #2563EB;
  --c-accent-dk: #1D4ED8;
  --c-accent-lt: #EFF4FF;
  --c-accent-glow: rgba(37, 99, 235, 0.22);
  --c-accent-2: #C41E1E;
}

/* typography variants */
body[data-typo="serif"] {
  --ff-display: 'Newsreader', 'Source Serif Pro', Georgia, serif;
}
body[data-typo="mono"] {
  --ff-display: 'JetBrains Mono', ui-monospace, monospace;
}

/* ────────── RESET ────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--ff-sans);
  color: var(--c-ink-2);
  background: var(--c-bg);
  line-height: 1.6;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }
img, svg { display: block; max-width: 100%; }
input, textarea, button, select { font: inherit; color: inherit; }
button { cursor: pointer; background: none; border: none; }

.container {
  max-width: var(--container-w);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

/* ────────── TYPOGRAPHY HELPERS ────────── */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--ff-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--c-accent);
}
.eyebrow::before {
  content: '';
  width: 20px;
  height: 1px;
  background: var(--c-accent);
}
.eyebrow.on-dark { color: #FF8A8A; }
.eyebrow.on-dark::before { background: #FF8A8A; }

h1, h2, h3, h4 {
  font-family: var(--ff-display);
  color: var(--c-ink);
  letter-spacing: -0.025em;
  line-height: 1.1;
  font-weight: 700;
  text-wrap: balance;
}
body[data-typo="serif"] h1,
body[data-typo="serif"] h2,
body[data-typo="serif"] h3 { font-weight: 500; letter-spacing: -0.02em; }
body[data-typo="mono"] h1,
body[data-typo="mono"] h2,
body[data-typo="mono"] h3 { font-weight: 600; letter-spacing: -0.04em; }

.h-display { font-size: clamp(40px, 5.6vw, 78px); line-height: 1.02; letter-spacing: -0.035em; }
.h-1 { font-size: clamp(32px, 4vw, 52px); }
.h-2 { font-size: clamp(26px, 3vw, 40px); }
.h-3 { font-size: clamp(20px, 2vw, 26px); }

.lead {
  font-size: 18px;
  line-height: 1.65;
  color: var(--c-muted);
  text-wrap: pretty;
}
.small { font-size: 13px; color: var(--c-muted); }
.kbd-num { font-family: var(--ff-sans); font-feature-settings: 'tnum'; }

/* ────────── BUTTONS ────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 13px 22px;
  border-radius: 99px;
  transition: transform 0.18s ease, background 0.18s, box-shadow 0.18s, color 0.18s, border-color 0.18s;
  white-space: nowrap;
  border: 1px solid transparent;
  line-height: 1;
}
.btn-primary {
  background: var(--c-accent);
  color: #fff;
  box-shadow: var(--sh-red);
}
.btn-primary:hover { background: var(--c-accent-dk); transform: translateY(-2px); box-shadow: 0 12px 32px var(--c-accent-glow); }
.btn-dark {
  background: var(--c-ink);
  color: #fff;
}
.btn-dark:hover { background: var(--c-bg-dark-2); transform: translateY(-2px); }
.btn-ghost {
  background: transparent;
  color: var(--c-ink);
  border-color: var(--c-line);
}
.btn-ghost:hover { background: var(--c-bg-alt); border-color: var(--c-muted-2); }
.btn-sm { padding: 9px 16px; font-size: 14px; }
.btn-outline-light {
  background: transparent;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.28);
}
.btn-outline-light:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.5); }
.btn-white {
  background: #fff;
  color: var(--c-ink);
}
.btn-white:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(255,255,255,0.18); }
.btn .arrow { transition: transform 0.18s; }
.btn:hover .arrow { transform: translateX(4px); }

/* ────────── SECTION HELPERS ────────── */
.sec { padding: 120px 0; position: relative; }
.sec-sm { padding: 80px 0; }
.sec-alt { background: var(--c-bg-alt); }
.sec-dark { background: var(--c-bg-dark); color: rgba(255, 255, 255, 0.85); }
.sec-dark h1, .sec-dark h2, .sec-dark h3 { color: #fff; }
.sec-dark .lead { color: rgba(255, 255, 255, 0.6); }

.sec-head { max-width: 760px; margin-bottom: 56px; }
.sec-head.center { margin-left: auto; margin-right: auto; text-align: center; }
.sec-head .eyebrow { margin-bottom: 18px; }
.sec-head h2 + .lead { margin-top: 18px; }

/* ────────── SCROLL REVEAL ────────── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.2, 0.6, 0.2, 1), transform 0.7s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.reveal.from-left { transform: translateX(-32px); }
.reveal.from-right { transform: translateX(32px); }
.reveal.in {
  opacity: 1;
  transform: none;
}
.r-d1 { transition-delay: 0.08s; }
.r-d2 { transition-delay: 0.16s; }
.r-d3 { transition-delay: 0.24s; }
.r-d4 { transition-delay: 0.32s; }
.r-d5 { transition-delay: 0.40s; }

/* ────────── HEADER ────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 200;
  background: color-mix(in oklab, var(--c-bg) 86%, transparent);
  backdrop-filter: blur(18px) saturate(1.2);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
  border-bottom: 1px solid var(--c-line);
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 28px;
  height: 72px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--ff-display);
  font-size: 20px;
  font-weight: 800;
  color: var(--c-ink);
  letter-spacing: -0.03em;
}
.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: var(--c-accent);
  color: #fff;
  font: 800 20px/1 var(--ff-display);
  border-radius: 10px;
  overflow: hidden;
}
.brand-mark img { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
.brand-name { color: var(--c-ink); }
.brand-name b { color: var(--c-accent); font-weight: 800; }
.brand-logo { height: 44px; width: 44px; border-radius: 11px; object-fit: cover; display: block; }
.brand-logo-chip { background: #fff; border-radius: 12px; padding: 6px 12px; display: inline-flex; }
.brand-logo-chip img { height: 40px; width: auto; display: block; }

.main-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 8px;
}
.main-nav a {
  font-size: 14px;
  font-weight: 500;
  color: var(--c-muted);
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.15s, background 0.15s;
}
.main-nav a:hover { color: var(--c-ink); background: var(--c-bg-alt); }
.header-spacer { flex: 1; }
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.lang-pill {
  display: inline-flex;
  border: 1px solid var(--c-line);
  border-radius: 99px;
  padding: 3px;
  gap: 2px;
  background: var(--c-bg-alt);
}
.lang-pill button {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--c-muted);
  padding: 6px 12px;
  border-radius: 99px;
  transition: background 0.15s, color 0.15s;
}
.lang-pill button.active {
  background: var(--c-bg);
  color: var(--c-ink);
  box-shadow: var(--sh-sm);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
}
.hamburger span { width: 22px; height: 2px; background: var(--c-ink); border-radius: 99px; transition: transform 0.2s; }

/* ════════════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════════════ */
.hero {
  position: relative;
  background: linear-gradient(160deg, #0A1430 0%, #0D1B3E 38%, #1A1530 72%, #2A0F1A 100%);
  color: rgba(255,255,255,0.85);
  overflow: hidden;
  padding: 96px 0 0;
  min-height: 880px;
  display: flex;
  flex-direction: column;
}
.hero-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 90% 60% at 50% 30%, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 90% 60% at 50% 30%, black 30%, transparent 75%);
  pointer-events: none;
}
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-glow.g1 {
  top: -160px;
  left: -180px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, var(--c-accent-glow) 0%, transparent 70%);
}
.hero-glow.g2 {
  bottom: -260px;
  right: -180px;
  width: 740px;
  height: 740px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 70%);
}

.hero-inner {
  position: relative;
  z-index: 2;
  flex: 1;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: center;
  padding-bottom: 60px;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.85);
  font-family: var(--ff-sans);
  font-size: 13px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 99px;
  margin-bottom: 24px;
}
.hero-eyebrow .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #43E97B;
  box-shadow: 0 0 12px rgba(67, 233, 123, 0.6);
}

.hero h1 {
  color: #fff;
  font-size: clamp(40px, 5vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.035em;
  margin-bottom: 24px;
}
.hero h1 em {
  font-style: normal;
  background: linear-gradient(180deg, #FF5B5B 0%, var(--c-accent) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero h1 .ink-underline {
  position: relative;
  display: inline-block;
  white-space: nowrap;
}
.hero h1 .ink-underline::after {
  content: '';
  position: absolute;
  left: -4%;
  right: -4%;
  bottom: -4px;
  height: 8px;
  background: var(--c-accent);
  opacity: 0.85;
  border-radius: 99px;
  transform: scaleX(0);
  transform-origin: left;
  animation: underline-in 0.9s 0.6s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
}
@keyframes underline-in { to { transform: scaleX(1); } }

.hero-sub {
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
  max-width: 520px;
  margin-bottom: 32px;
}
.hero-meta {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.hero-meta-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: rgba(255,255,255,0.7);
}
.hero-meta-item svg { color: #FFD166; }

.hero-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }

/* hero right: booking card mockup */
.booking-card {
  position: relative;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 22px;
  padding: 6px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
}
.booking-card-inner {
  background: rgba(8, 14, 33, 0.85);
  border-radius: 18px;
  padding: 26px 26px 22px;
}
.booking-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.booking-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}
.booking-title-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--c-accent);
  box-shadow: 0 0 12px var(--c-accent-glow);
}
.booking-step {
  font-family: var(--ff-sans);
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.04em;
}
.booking-progress {
  display: flex;
  gap: 4px;
  margin-bottom: 22px;
}
.booking-progress span {
  flex: 1;
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 99px;
  position: relative;
  overflow: hidden;
}
.booking-progress span.on { background: var(--c-accent); }
.booking-progress span.cur::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 1.8s infinite;
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.booking-question {
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 14px;
}
.booking-options { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 18px; }
.booking-opt {
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 12px 14px;
  text-align: left;
  font-size: 13px;
  color: rgba(255,255,255,0.8);
  transition: all 0.18s;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.booking-opt:hover, .booking-opt.sel {
  border-color: var(--c-accent);
  background: rgba(196, 30, 30, 0.12);
  color: #fff;
}
.booking-opt .opt-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.45);
  font-family: var(--ff-sans);
}

.booking-field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}
.booking-input {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  color: #fff;
  padding: 11px 14px;
  border-radius: 10px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.18s, background 0.18s;
}
.booking-input::placeholder { color: rgba(255,255,255,0.4); }
.booking-input:focus { border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.08); }

.booking-cta {
  width: 100%;
  margin-top: 4px;
  background: var(--c-accent);
  color: #fff;
  padding: 13px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.18s, transform 0.18s;
  box-shadow: 0 8px 24px var(--c-accent-glow);
}
.booking-cta:hover { background: var(--c-accent-dk); transform: translateY(-1px); }
.booking-foot {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: rgba(255,255,255,0.45);
  font-family: var(--ff-sans);
}

/* floating chips around booking card */
.float-chip {
  position: absolute;
  background: rgba(255,255,255,0.95);
  color: var(--c-ink);
  border-radius: 99px;
  padding: 8px 14px 8px 8px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
  z-index: 3;
  animation: float-y 4s ease-in-out infinite;
}
.float-chip-dot {
  width: 24px; height: 24px; border-radius: 50%;
  display: grid; place-items: center;
  color: #fff;
  font-size: 12px;
  flex-shrink: 0;
}
.float-chip.c1 { top: -18px; right: -22px; left: auto; animation-delay: 0s; }
.float-chip.c1 .float-chip-dot { background: #16A34A; }
.float-chip.c2 { bottom: 60px; right: -34px; animation-delay: 1.5s; }
.float-chip.c2 .float-chip-dot { background: var(--c-accent); }
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* hero stats strip */
.hero-strip {
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  padding: 24px 0;
}
.hero-strip-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}
.hero-stat + .hero-stat::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.08);
}
.hero-stat-num {
  font-family: var(--ff-display);
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: #fff;
  line-height: 1;
  font-feature-settings: 'tnum';
}
.hero-stat-num em { font-style: normal; color: var(--c-accent); }
.hero-stat-num em.warm { color: #FF8A8A; }
.hero-stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.55);
  font-family: var(--ff-sans);
  letter-spacing: 0.02em;
}

/* ════════════════════════════════════════════════════════
   LOGOS MARQUEE
   ════════════════════════════════════════════════════════ */
.marquee-wrap {
  padding: 56px 0;
  border-bottom: 1px solid var(--c-line);
  background: var(--c-bg);
}
.marquee-label {
  text-align: center;
  font-family: var(--ff-sans);
  font-size: 12px;
  color: var(--c-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 28px;
}
.marquee {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
}
.marquee-track {
  display: flex;
  gap: 56px;
  align-items: center;
  animation: marquee 32s linear infinite;
  width: max-content;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-item {
  flex-shrink: 0;
  font-family: var(--ff-display);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: var(--c-muted-2);
  opacity: 0.75;
  transition: opacity 0.2s, color 0.2s;
  white-space: nowrap;
}
.marquee-item:hover { opacity: 1; color: var(--c-ink); }

/* ════════════════════════════════════════════════════════
   3 PILIERS
   ════════════════════════════════════════════════════════ */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.pillar {
  position: relative;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.pillar:hover {
  transform: translateY(-4px);
  border-color: color-mix(in oklab, var(--c-accent) 30%, var(--c-line));
  box-shadow: var(--sh-lg);
}
.pillar-num {
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 2;
  font-family: var(--ff-sans);
  font-size: 11px;
  color: rgba(255,255,255,0.85);
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  padding: 5px 10px;
  border-radius: 99px;
  letter-spacing: 0.04em;
}
.pillar-img {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(135deg, #E2E8F0, #CBD5E1);
}
.pillar-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.pillar:hover .pillar-img img { transform: scale(1.05); }
.pillar-body { padding: 30px 28px 32px; flex: 1; display: flex; flex-direction: column; }
.pillar-body h3 { font-size: 22px; margin-bottom: 12px; }
.pillar-body p { font-size: 15px; color: var(--c-muted); line-height: 1.65; flex: 1; }
.pillar-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-family: var(--ff-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--c-accent);
}
.pillar-link svg { transition: transform 0.18s; }
.pillar:hover .pillar-link svg { transform: translateX(4px); }

/* ════════════════════════════════════════════════════════
   APPS / SUITE GRID
   ════════════════════════════════════════════════════════ */
.apps-section { background: var(--c-bg-alt); }
.apps-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 18px;
}
.app {
  position: relative;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  padding: 28px;
  transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.app:hover {
  transform: translateY(-3px);
  box-shadow: var(--sh-lg);
  border-color: color-mix(in oklab, var(--c-accent) 25%, var(--c-line));
}
.app-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.app-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.app-icon img { width: 100%; height: 100%; object-fit: contain; }
.app-name { font-size: 13px; font-family: var(--ff-sans); letter-spacing: 0.05em; color: var(--c-muted); text-transform: uppercase; }
.app-title { font-size: 18px; font-weight: 700; color: var(--c-ink); margin-bottom: 8px; }
.app-desc { font-size: 14px; color: var(--c-muted); line-height: 1.6; }

.app.featured {
  grid-row: span 2;
  background: linear-gradient(160deg, #0D1B3E 0%, #1A2F5A 70%);
  color: #fff;
  border: none;
}
.app.featured .app-title { color: #fff; font-size: 26px; line-height: 1.15; margin-bottom: 12px; }
.app.featured .app-desc { color: rgba(255,255,255,0.7); font-size: 15px; }
.app.featured .app-name { color: rgba(255,255,255,0.6); }
.app.featured-screen {
  margin-top: 22px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  aspect-ratio: 16 / 9;
  background: rgba(255,255,255,0.04);
}
.app.featured-screen img { width: 100%; height: 100%; object-fit: cover; }

.app-mini {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-all {
  background: linear-gradient(160deg, var(--c-accent) 0%, var(--c-accent-dk) 100%);
  color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}
.app-all h3 { color: #fff; font-size: 22px; line-height: 1.15; }
.app-all .btn { background: #fff; color: var(--c-accent); align-self: flex-start; margin-top: 16px; }
.app-all .btn:hover { background: #fff; transform: translateY(-2px); }

/* ════════════════════════════════════════════════════════
   SPLIT (OhMyCad network & nouveau SW)
   ════════════════════════════════════════════════════════ */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 540px;
}
.split.alt { background: var(--c-bg-dark); color: #fff; }
.split-media {
  position: relative;
  overflow: hidden;
  background: var(--c-bg-alt);
}
.split-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.split:hover .split-media img { transform: scale(1.04); }
.split-media-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 24px 28px;
  background: linear-gradient(0deg, rgba(0,0,0,0.6), transparent);
  color: #fff;
  font-family: var(--ff-sans);
  font-size: 12px;
  letter-spacing: 0.05em;
}
.split-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 88px 72px;
}
.split-text h2 { margin-bottom: 20px; }
.split-text p { font-size: 16px; line-height: 1.7; margin-bottom: 14px; }
.split-text.dark p { color: rgba(255,255,255,0.75); }
.split.dark .split-text { background: var(--c-bg-dark); }
.split.dark .split-text h2 { color: #fff; }
.split.dark .split-text p { color: rgba(255,255,255,0.75); }
.split-text .btn { margin-top: 28px; align-self: flex-start; }

.bullets { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
.bullets li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.55;
}
.bullets li svg {
  flex-shrink: 0;
  margin-top: 4px;
  color: var(--c-accent);
}
.split-text.dark .bullets li svg { color: #FF8A8A; }

/* ════════════════════════════════════════════════════════
   OHMYCARE highlight
   ════════════════════════════════════════════════════════ */
.care {
  position: relative;
  background: var(--c-bg-dark);
  color: #fff;
  border-radius: 28px;
  padding: 72px 72px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 56px;
  align-items: center;
}
.care::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 85% 20%, var(--c-accent-glow) 0%, transparent 50%),
    radial-gradient(circle at 10% 90%, rgba(20, 36, 90, 0.6) 0%, transparent 60%);
  pointer-events: none;
}
.care > * { position: relative; z-index: 1; }
.care h2 { color: #fff; font-size: clamp(28px, 3vw, 42px); margin-bottom: 18px; }
.care p { color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.65; margin-bottom: 22px; max-width: 520px; }
.care-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--ff-sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #FF8A8A;
  background: rgba(196,30,30,0.15);
  border: 1px solid rgba(196,30,30,0.25);
  padding: 7px 14px;
  border-radius: 99px;
  margin-bottom: 22px;
}

.care-price-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 22px;
  padding: 34px 30px;
  backdrop-filter: blur(20px);
}
.care-price-label {
  font-family: var(--ff-sans);
  font-size: 12px;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.care-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 6px;
}
.care-price-num {
  font-family: var(--ff-display);
  font-size: 64px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 1;
}
.care-price-unit { font-size: 16px; color: rgba(255,255,255,0.6); }
.care-price-sub { font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 22px; }
.care-features { display: flex; flex-direction: column; gap: 12px; }
.care-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}
.care-features svg { color: #43E97B; flex-shrink: 0; }

/* ════════════════════════════════════════════════════════
   CASE STUDY
   ════════════════════════════════════════════════════════ */
.case-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 28px;
  margin-top: 32px;
}
.case {
  position: relative;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.22s, box-shadow 0.22s;
}
.case:hover { transform: translateY(-3px); box-shadow: var(--sh-lg); }
.case-media { aspect-ratio: 16 / 10; overflow: hidden; background: var(--c-bg-alt); }
.case-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
.case:hover .case-media img { transform: scale(1.04); }
.case-body { padding: 28px 30px; }
.case-tag {
  font-family: var(--ff-sans);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 12px;
}
.case-body h3 { font-size: 22px; margin-bottom: 10px; }
.case-body p { font-size: 14px; color: var(--c-muted); line-height: 1.65; }
.case-stats {
  display: flex;
  gap: 32px;
  padding: 24px 30px;
  border-top: 1px solid var(--c-line);
}
.case-stat-num {
  font-family: var(--ff-display);
  font-size: 24px;
  font-weight: 800;
  color: var(--c-ink);
  letter-spacing: -0.025em;
}
.case-stat-label { font-size: 11px; color: var(--c-muted); font-family: var(--ff-sans); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; }

/* ════════════════════════════════════════════════════════
   TEAM
   ════════════════════════════════════════════════════════ */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.team-card {
  position: relative;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: transform 0.22s, box-shadow 0.22s;
}
.team-card:hover { transform: translateY(-3px); box-shadow: var(--sh); }
.team-photo { aspect-ratio: 1 / 1; overflow: hidden; }
.team-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.6s; }
.team-card:hover .team-photo img { transform: scale(1.04); }
.team-info { padding: 22px 24px 24px; }
.team-name { font-size: 18px; font-weight: 700; color: var(--c-ink); }
.team-role { font-size: 13px; color: var(--c-accent); font-family: var(--ff-sans); margin-top: 4px; letter-spacing: 0.03em; }
.team-bio { font-size: 14px; color: var(--c-muted); margin-top: 10px; line-height: 1.6; }
.team-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--c-ink);
}
.team-card.collective {
  background: var(--c-bg-dark);
  color: #fff;
  border: none;
  grid-column: span 1;
  display: flex;
  flex-direction: column;
}
.team-card.collective .team-info {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.team-card.collective .team-name { color: #fff; font-size: 22px; }
.team-card.collective .team-bio { color: rgba(255,255,255,0.7); margin-top: 14px; }
.team-card.collective .team-role { color: #FF8A8A; }

/* ════════════════════════════════════════════════════════
   PRICING
   ════════════════════════════════════════════════════════ */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.price {
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  padding: 36px 32px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
}
.price:hover { transform: translateY(-3px); box-shadow: var(--sh); }
.price.featured {
  background: var(--c-bg-dark);
  border-color: var(--c-bg-dark);
  color: #fff;
  transform: translateY(-8px);
  box-shadow: var(--sh-lg);
}
.price.featured:hover { transform: translateY(-12px); }
.price-tag {
  position: absolute;
  top: -12px;
  right: 24px;
  background: var(--c-accent);
  color: #fff;
  font-family: var(--ff-sans);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 99px;
  font-weight: 600;
}
.price-name { font-family: var(--ff-sans); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); margin-bottom: 8px; }
.price.featured .price-name { color: rgba(255,255,255,0.55); }
.price-title { font-size: 22px; font-weight: 700; color: var(--c-ink); margin-bottom: 6px; }
.price.featured .price-title { color: #fff; }
.price-desc { font-size: 14px; color: var(--c-muted); line-height: 1.55; margin-bottom: 24px; }
.price.featured .price-desc { color: rgba(255,255,255,0.65); }
.price-cost { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
.price-cost-num { font-family: var(--ff-display); font-size: 44px; font-weight: 800; color: var(--c-ink); letter-spacing: -0.04em; }
.price.featured .price-cost-num { color: #fff; }
.price-cost-unit { font-size: 14px; color: var(--c-muted); }
.price.featured .price-cost-unit { color: rgba(255,255,255,0.6); }
.price-foot { font-size: 12px; color: var(--c-muted); margin-bottom: 24px; font-family: var(--ff-sans); }
.price.featured .price-foot { color: rgba(255,255,255,0.5); }
.price-features { flex: 1; display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
.price-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-ink-2);
}
.price-features svg { flex-shrink: 0; margin-top: 3px; color: var(--c-accent); }
.price.featured .price-features li { color: rgba(255,255,255,0.85); }
.price.featured .price-features svg { color: #FF8A8A; }
.price .btn { width: 100%; justify-content: center; }
.price.featured .btn-ghost { color: #fff; border-color: rgba(255,255,255,0.25); background: transparent; }
.price.featured .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.5); }

/* ════════════════════════════════════════════════════════
   TESTIMONIALS
   ════════════════════════════════════════════════════════ */
.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.testi {
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  padding: 30px 28px;
  display: flex;
  flex-direction: column;
}
.testi-stars { display: flex; gap: 2px; color: #FFB400; margin-bottom: 16px; }
.testi-quote { font-size: 15px; line-height: 1.65; color: var(--c-ink); flex: 1; }
.testi-quote::before { content: '"'; font-family: var(--ff-display); font-size: 36px; line-height: 0; color: var(--c-accent); margin-right: 4px; vertical-align: -8px; }
.testi-author { display: flex; align-items: center; gap: 12px; margin-top: 22px; padding-top: 20px; border-top: 1px solid var(--c-line); }
.testi-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--c-bg-dark-2), var(--c-bg-dark));
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.testi-name { font-size: 14px; font-weight: 700; color: var(--c-ink); }
.testi-role { font-size: 12px; color: var(--c-muted); }

.review-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  padding: 24px;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  margin-top: 32px;
}

.proof-widget {
  background: var(--c-bg);
  border: 1px dashed color-mix(in oklab, var(--c-muted-2) 60%, transparent);
  border-radius: var(--r-lg);
  padding: 56px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.proof-widget-icon { margin-bottom: 4px; }
.proof-widget-stars { display: flex; gap: 4px; }
.proof-widget-num {
  font-family: var(--ff-display);
  font-size: 56px;
  font-weight: 800;
  color: var(--c-ink);
  letter-spacing: -0.04em;
  line-height: 1;
  font-feature-settings: 'tnum';
  margin-top: 8px;
}
.proof-widget-sub { font-size: 16px; color: var(--c-muted); }
.proof-widget-tag {
  margin-top: 14px;
  font-family: var(--ff-sans);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-muted-2);
}
.review-strip-item { display: flex; align-items: center; gap: 12px; }
.review-strip-num {
  font-family: var(--ff-display);
  font-size: 28px;
  font-weight: 800;
  color: var(--c-ink);
  letter-spacing: -0.03em;
}
.review-strip-label { font-size: 13px; color: var(--c-muted); line-height: 1.3; }
.review-strip-stars { display: flex; gap: 2px; color: #FFB400; }
.review-strip-div { width: 1px; height: 40px; background: var(--c-line); }

/* ════════════════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════════════════ */
.faq-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 64px;
  align-items: start;
}
.faq-list { display: flex; flex-direction: column; gap: 4px; }
.faq-item {
  border-bottom: 1px solid var(--c-line);
  padding: 22px 4px;
}
.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  list-style: none;
  font-size: 17px;
  font-weight: 600;
  color: var(--c-ink);
  font-family: var(--ff-display);
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--c-bg-alt);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition: background 0.2s, transform 0.3s;
}
.faq-icon svg { color: var(--c-ink); transition: transform 0.3s; }
.faq-item[open] .faq-icon { background: var(--c-accent); }
.faq-item[open] .faq-icon svg { color: #fff; transform: rotate(45deg); }
.faq-item p {
  margin-top: 14px;
  font-size: 15px;
  color: var(--c-muted);
  line-height: 1.7;
  max-width: 720px;
}

/* ════════════════════════════════════════════════════════
   FINAL CTA
   ════════════════════════════════════════════════════════ */
.final-cta {
  position: relative;
  background: var(--c-bg-dark);
  color: #fff;
  overflow: hidden;
  padding: 120px 0;
}
.final-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 0%, var(--c-accent-glow) 0%, transparent 40%),
    radial-gradient(circle at 80% 100%, rgba(37, 99, 235, 0.18) 0%, transparent 50%);
}
.final-cta-inner { position: relative; z-index: 1; text-align: center; max-width: 720px; margin: 0 auto; }
.final-cta h2 { color: #fff; font-size: clamp(36px, 5vw, 60px); margin-bottom: 22px; }
.final-cta p { font-size: 18px; color: rgba(255,255,255,0.7); margin-bottom: 32px; line-height: 1.6; }
.final-cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* ── Real review card ── */
.real-review {
  max-width: 760px;
  margin: 0 auto 40px;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: var(--r-lg);
  padding: 36px 40px;
  box-shadow: var(--sh);
}
.real-review-stars { display: flex; gap: 3px; margin-bottom: 16px; }
.real-review-text {
  font-size: 20px;
  line-height: 1.6;
  color: var(--c-ink);
  font-weight: 500;
  letter-spacing: -0.01em;
  text-wrap: pretty;
}
.real-review-author {
  display: flex; align-items: center; gap: 14px; margin-top: 24px;
}
.real-review-avatar {
  width: 46px; height: 46px; border-radius: 50%;
  display: grid; place-items: center;
  background: var(--c-accent); color: #fff;
  font: 700 18px/1 var(--ff-display);
  flex-shrink: 0;
}
.real-review-author strong { display: block; color: var(--c-ink); font-size: 15px; }
.real-review-meta { font-size: 13px; color: var(--c-muted); }

/* ── Legal section ── */
.legal-dl { display: grid; gap: 0; }
.legal-dl > div {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--c-line);
}
.legal-dl dt { font-weight: 700; color: var(--c-ink); font-size: 14px; }
.legal-dl dd { color: var(--c-muted); font-size: 15px; }
.legal-note { margin-top: 24px; font-size: 14px; line-height: 1.7; color: var(--c-muted); text-wrap: pretty; }
@media (max-width: 640px) {
  .legal-dl > div { grid-template-columns: 1fr; gap: 4px; }
  .real-review { padding: 28px 24px; }
  .real-review-text { font-size: 17px; }
}

/* ════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════ */
.site-footer {
  background: #060B17;
  color: rgba(255,255,255,0.6);
  padding: 72px 0 32px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 56px;
  margin-bottom: 56px;
}
.footer-brand .brand-name { color: #fff; }
.footer-brand .brand-mark { background: #fff; color: var(--c-accent); }
.footer-blurb { margin-top: 16px; font-size: 14px; line-height: 1.6; max-width: 320px; }
.footer-col h5 {
  font-family: var(--ff-sans);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-bottom: 18px;
}
.footer-col ul { display: flex; flex-direction: column; gap: 10px; }
.footer-col a { font-size: 14px; color: rgba(255,255,255,0.7); transition: color 0.15s; }
.footer-col a:hover { color: #fff; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.footer-bottom p { font-size: 12px; color: rgba(255,255,255,0.4); }
.footer-bottom .lang-pill { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
.footer-bottom .lang-pill button { color: rgba(255,255,255,0.5); }
.footer-bottom .lang-pill button.active { background: rgba(255,255,255,0.1); color: #fff; box-shadow: none; }

/* ════════════════════════════════════════════════════════
   RESPONSIVE
   ════════════════════════════════════════════════════════ */
@media (max-width: 1080px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .apps-grid { grid-template-columns: 1fr 1fr; }
  .app.featured { grid-row: span 1; grid-column: span 2; }
  .pricing-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; }
  .testi-grid { grid-template-columns: 1fr 1fr; }
  .faq-grid { grid-template-columns: 1fr; gap: 32px; }
  .split { grid-template-columns: 1fr; }
  .split-media { aspect-ratio: 16 / 9; }
  .split-text { padding: 56px 40px; }
  .care { grid-template-columns: 1fr; padding: 48px; }
  .pillars-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 720px) {
  :root { --container-pad: 20px; }
  .main-nav, .header-actions .btn-ghost { display: none; }
  .hamburger { display: flex; }
  .sec { padding: 80px 0; }
  .hero { padding-top: 56px; min-height: 0; }
  .pillars-grid, .team-grid, .testi-grid, .apps-grid { grid-template-columns: 1fr; }
  .app.featured { grid-column: span 1; }
  .hero-strip-inner { grid-template-columns: 1fr 1fr; gap: 28px 16px; }
  .hero-stat + .hero-stat::before { display: none; }
  .split-text { padding: 48px 24px; }
  .care { padding: 36px 24px; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .case-grid { grid-template-columns: 1fr; }
  .float-chip.c1, .float-chip.c2 { display: none; }
}

/* ============================================================================
   OléCAD — Blog (Eleventy)  ·  usa los tokens de marca navy/red
   ========================================================================== */
.blog-section{ padding:120px 0 80px; background:var(--c-bg); }
.blog-head{ max-width:760px; margin-bottom:40px; }
.blog-eyebrow{ display:inline-flex; align-items:center; gap:8px; font-family:var(--ff-mono); font-size:12px; text-transform:uppercase; letter-spacing:.14em; color:var(--c-accent); font-weight:600; }
.blog-eyebrow .dot{ width:7px; height:7px; border-radius:50%; background:var(--c-accent); display:inline-block; }
.blog-h1{ font-family:var(--ff-display); font-weight:800; font-size:clamp(32px,4.5vw,48px); line-height:1.08; letter-spacing:-0.02em; color:var(--c-ink); margin:14px 0 12px; }
.blog-lede{ font-size:18px; line-height:1.6; color:var(--c-muted); margin:0; }
.blog-cats{ display:flex; flex-wrap:wrap; gap:10px; margin-top:26px; }
.blog-cat{ font-family:var(--ff-mono); font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:var(--c-muted); border:1px solid var(--c-line); border-radius:999px; padding:8px 15px; text-decoration:none; background:#fff; }
.blog-cat:hover{ border-color:var(--c-accent); color:var(--c-accent); }
.blog-cat.is-active{ background:var(--c-accent); border-color:var(--c-accent); color:#fff; }

.blog-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:26px; }
@media(max-width:900px){ .blog-grid{ grid-template-columns:1fr 1fr; } }
@media(max-width:600px){ .blog-grid{ grid-template-columns:1fr; } }
.blog-card{ display:flex; flex-direction:column; background:#fff; border:1px solid var(--c-line); border-radius:var(--r-lg); overflow:hidden; text-decoration:none; color:inherit; box-shadow:var(--sh-sm); transition:box-shadow .2s, border-color .2s, transform .2s; }
.blog-card:hover{ border-color:var(--c-accent); box-shadow:var(--sh); transform:translateY(-3px); }
.blog-card__img{ aspect-ratio:16/9; background:var(--c-bg-alt); overflow:hidden; }
.blog-card__img img{ width:100%; height:100%; object-fit:cover; }
.blog-card__body{ padding:24px 24px 26px; display:flex; flex-direction:column; gap:10px; flex:1; }
.blog-card__cat{ font-family:var(--ff-mono); font-size:11px; text-transform:uppercase; letter-spacing:.12em; color:var(--c-accent); }
.blog-card__title{ font-family:var(--ff-display); font-weight:700; font-size:20px; line-height:1.25; letter-spacing:-0.01em; margin:0; color:var(--c-ink); }
.blog-card__excerpt{ font-size:14.5px; line-height:1.55; color:var(--c-muted); margin:0; }
.blog-card__meta{ margin-top:auto; font-family:var(--ff-mono); font-size:11px; letter-spacing:.05em; color:var(--c-muted-2); }

/* Artículo */
.post{ padding:120px 0 80px; background:var(--c-bg); }
.post__wrap{ max-width:760px; }
.post__back{ margin-bottom:22px; }
.post__back a{ font-family:var(--ff-mono); font-size:12px; text-transform:uppercase; letter-spacing:.1em; color:var(--c-muted); text-decoration:none; }
.post__back a:hover{ color:var(--c-accent); }
.post__kicker{ font-family:var(--ff-mono); font-size:11px; text-transform:uppercase; letter-spacing:.14em; color:var(--c-accent); font-weight:600; }
.post__title{ font-family:var(--ff-display); font-weight:800; font-size:clamp(30px,4.5vw,46px); line-height:1.1; letter-spacing:-0.025em; color:var(--c-ink); margin:10px 0 16px; }
.post__meta{ display:flex; gap:10px; font-family:var(--ff-mono); font-size:12px; text-transform:uppercase; letter-spacing:.06em; color:var(--c-muted); margin-bottom:28px; }
.post__cover{ width:100%; border-radius:var(--r-lg); border:1px solid var(--c-line); margin-bottom:32px; }
.post__body{ font-size:17px; line-height:1.75; color:var(--c-ink-2); }
.post__body h2{ font-family:var(--ff-display); font-weight:700; font-size:26px; letter-spacing:-0.02em; color:var(--c-ink); margin:40px 0 14px; }
.post__body h3{ font-family:var(--ff-display); font-weight:700; font-size:20px; color:var(--c-ink); margin:30px 0 10px; }
.post__body p{ margin:0 0 18px; }
.post__body ul,.post__body ol{ margin:0 0 18px; padding-left:22px; }
.post__body li{ margin-bottom:8px; }
.post__body a{ color:var(--c-accent-dk); text-decoration:underline; }
.post__body blockquote{ border-left:3px solid var(--c-accent); margin:24px 0; padding:4px 0 4px 20px; color:var(--c-muted); font-family:'Newsreader',Georgia,serif; font-size:20px; }
.post__body code{ font-family:var(--ff-mono); font-size:.9em; background:var(--c-bg-alt); padding:2px 6px; border-radius:6px; }
.post__body img{ max-width:100%; border-radius:var(--r); margin:20px 0; }
.post__foot{ display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:16px; margin-top:44px; padding-top:28px; border-top:1px solid var(--c-line); }
.post__more{ font-family:var(--ff-mono); font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:var(--c-accent); text-decoration:none; }
