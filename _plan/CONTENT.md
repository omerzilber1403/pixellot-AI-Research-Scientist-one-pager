# Content Guide — AI Research Scientist Portfolio

## Role Context
This portfolio targets: **AI Research Scientist (Student)** at Pixellot  
JD keywords: computer vision, PyTorch, detection/tracking/event recognition, video AI,
temporal modeling, synthetic data, spatial logic, Python, research → production

## Where Each Text Lives

### Hero Section (`src/components/sections/Hero.tsx`)
- **Badge:** `"Applying — AI Research Scientist (Student) @ Pixellot"`
- **FlipWords:** `["detection-ready", "research-driven", "CV-powered", "PyTorch-ready", "pipeline-focused"]`
- **Sentence:** `"I build ___ AI systems."`
- **Bio:** "B.Sc. CS student (Data Science, BGU) with 3 years of production software development in the IDF Navy. I build spatial tracking simulators, multi-agent AI pipelines, and real-time event systems — and ship them. Looking to apply that engineering depth to Pixellot's sports AI research."
- **CTA:** View My Projects → #projects

### PixellotShowcase (`src/components/sections/PixellotShowcase.tsx`)
**Header:**
- Badge: "CV-Ready Engineering"
- Title: "Built for Sports AI Research"
- Sub: "Spatial tracking, real-time event systems, and AI pipelines — built for Pixellot's R&D team."

**Card 1 — AgentCard (full width):**
- Badge: "AI Pipeline + Backend Integration"
- Title: "Pixellot Knowledge & Sales Agent"
- Body: LangGraph scraping pipeline, FastAPI backend, multi-agent routing
- CTA: "Try the Pixellot Bot ↓" → scrolls to #salesbot

**Card 2 — SpatialCard:**
- Badge: "Spatial Tracking & Synthetic Data"
- Title: "Naval 3D Simulation & Spatial Engine (IDF)"
- Body: Unity3D/C# 3D tracking system, replaced vendor, synthetic data generation
- Metric: ₪500K/yr → ₪0

**Card 3 — StompCard:**
- Badge: "Real-Time Sports Event Systems"
- Title: "Real-Time Football Event Architecture"
- Body: C++ + Java Reactor pub/sub, zero-latency match event streaming
- CTA: "Explore Live Case Study ↓" → scrolls to #spl

**AlignPanels (bottom strip):**
1. Eye icon — "Spatial Tracking Foundation"
2. Brain icon — "AI Pipeline Engineering"
3. Code icon — "Research → Shipped System"

### JDAlignment (`src/components/sections/JDAlignment.tsx`)
Cards (const JD_CARDS array):
1. "Deep Learning Foundations" — grades 98/93, PyTorch motivation
2. "Spatial Tracking → CV Intuition" — 3D tracking = CV spatial reasoning
3. "Research to Production" — vendor replacement story + LangGraph from scratch

### Contact (`src/components/sections/Contact.tsx`)
- h2: "Let's build the future of sports AI."
- sub: "Open to the AI Research Scientist (Student) role at Pixellot."

### Navbar (`src/components/layout/Navbar.tsx`)
Links defined in `src/lib/data.ts` → `NAV_LINKS`
- "Projects" → #projects
- "Experience" → #skills
- "Pixellot Fit" → #security
- "Contact" → #contact

### OWNER constants (`src/lib/data.ts`)
```typescript
export const OWNER = {
  name: "Omer Zilbershtein",
  role: "AI Research Scientist Student",
  email: "omerzilber1403@gmail.com",
  phone: "+972-54-6970612",
  github: "https://github.com/omerzilber1403",
  linkedin: "https://www.linkedin.com/in/omer-zilbershtein",
  cvPdf: "/cv/Omer_Zilbershtein_CV.pdf",
  targetCompany: "Pixellot",
  targetRole: "AI Research Scientist Student",
}
```

### CV Data (`src/data/portfolio.ts`)
Three entries:
1. freelance — Freelance Web & AI Developer (2023–Present)
2. idf — Software Developer, Israeli Navy (2020–2023)
3. bgu — B.Sc. Computer Science, BGU (2024–2027)

To change text the next dev cares about, edit these arrays.
