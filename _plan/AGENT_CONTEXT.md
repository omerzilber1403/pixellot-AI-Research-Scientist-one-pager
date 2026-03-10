# LLM Agent Context — AI Research Scientist Portfolio

This file gives the next AI coding agent full context to continue working on this project.

## What Was Built and When
This project was built in March 2026 as a targeted one-pager for the AI Research Scientist
(Student) position at Pixellot. It was built by fully copying the UX/UI from the sibling
Backend Developer portfolio (same repo owner) and rewriting all content for the AI role.

## Key Design Decisions

### 1. Identical UX/UI between both portfolios
Both the AI Research Scientist and the Backend Developer portfolios have **identical**
component structure, design tokens, and animations. Only the *content* (text, project
descriptions, FlipWords) differs. This was intentional. If you change design/layout in one,
sync it to the other.

### 2. Section ID conventions (don't change these)
| id | Who uses it |
|---|---|
| `#salesbot` | PixellotShowcase "Try the Bot" button scrolls to this |
| `#spl` | StompCard "Explore Live Case Study" button scrolls to this |
| `#projects` | Navbar "Projects" link |
| `#skills` | Navbar "Experience" link |
| `#security` | Navbar "Pixellot Fit" link |
| `#contact` | Navbar "Contact" link |

### 3. PixellotAgent component
- File: `src/components/sections/PixellotAgent.tsx`
- Lazy-loaded in page.tsx with `dynamic(..., { ssr: false })`
- Reads `NEXT_PUBLIC_AGENT_API_URL` env var
- On mount: fires health probe (4s timeout AbortController)
- If health fails → `mode = "mock"` → uses 17+ keyword-matched offline responses
- RTL auto-detect: checks for Hebrew chars `/[\u0590-\u05FF]/`
- `lastMsgRef` + `container.scrollTo` → scrolls to TOP of last message (not bottom)
- Chips hidden via `setChipsVisible(false)` when user sends first message
- Prop: `defaultLang="en"` (English always for this portfolio)

### 4. SPL Case Study
- File: `src/components/spl-case-study/index.tsx`
- Uses `/api/terminal/[scenario]` route for terminal simulation
- Scenarios defined in `src/data/terminal-scenarios.ts`
- Pass `lang="en"` always for this portfolio

### 5. FlipWords animation
- File: `src/components/ui/flip-words.tsx` 
- Props: `words` (string[]), `duration` (number, ms), `className`
- Does NOT accept `style` prop — use `className` only
- Uses Framer Motion `AnimatePresence`

### 6. FadeIn wrapper
- File: `src/components/ui/fade-in.tsx`
- Props: `delay` (number, seconds), `className`, `children`
- Wraps Framer Motion `motion.div` with fade+translateY

### 7. CardSpotlight
- File: `src/components/ui/card-spotlight.tsx`
- Props: `color` (hex string), `radius` (number), `className`, `children`
- Mouse-tracking spotlight effect on hover

## Known Issues / Cleanup Remaining
- `src/components/agent-showcase/index.tsx` is copied but NOT used in page.tsx
  (it was replaced by the inline agent section). Safe to delete if cleaning up.
- `public/` contains default Next.js SVGs (file.svg, globe.svg etc.) — safe to replace
  with actual Pixellot or portfolio branding

## How to Modify Content Quickly
1. **Hero badge/words**: Edit `Hero.tsx` — change `HERO_ROTATING_WORDS` array and badge text
2. **Project cards**: Edit `PixellotShowcase.tsx` — `AgentCard`, `SpatialCard`, `StompCard` functions
3. **JD alignment cards**: Edit `JDAlignment.tsx` — `JD_CARDS` array
4. **Nav links**: Edit `src/lib/data.ts` — `NAV_LINKS`
5. **Owner info**: Edit `src/lib/data.ts` — `OWNER`
6. **CV data / Experience**: Edit `src/data/portfolio.ts`
7. **Contact text**: Edit `Contact.tsx` — h2 and subtitle paragraph
8. **Design accent color**: Edit `src/app/globals.css` — `--color-accent: #00E676`

## Common Commands
```bash
npm run dev -- --port 3002    # start dev server on port 3002
npm run build                  # production build (check for TS errors)
npm run lint                   # ESLint
```

## Companion Backend
The FastAPI + LangGraph backend that powers the AI demo is at:
`C:/Users/omerz/Documents/projectsz/ForcePoint submission/pixellot-agent-backend/`

Key files:
- `app.py` — FastAPI entry, /health and /chat endpoints
- `agent/graph.py` — LangGraph 4-node state machine
- `agent/kb.py` — knowledge base retriever (keyword-intent matching)
- `pixellot_kb.json` — scraped Pixellot product data
- `render.yaml` — Render.com deployment config
- `.env.example` — shows required env vars (OPENAI_API_KEY, ALLOWED_ORIGINS)
