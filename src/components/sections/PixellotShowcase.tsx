"use client";
import {
  Zap, Bot, ChevronRight, Github, ArrowUpRight, Eye, Brain, Code,
} from "lucide-react";

/* ── Pixellot brand tokens ────────────────────────────────────────────────── */
const PX = {
  dark:        "#0a1a0f",
  darkGlass:   "rgba(0, 20, 10, 0.50)",
  green:       "#00E676",
  greenGlass:  "rgba(0, 230, 118, 0.10)",
  greenBorder: "rgba(0, 230, 118, 0.25)",
  redGlass:    "rgba(248,113,113,0.07)",
  redBorder:   "rgba(248,113,113,0.22)",
} as const;

/* ── CSS animations (scoped) ─────────────────────────────────────────────── */
const SHOWCASE_CSS = `
  @keyframes px-fade-up {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);     }
  }
  @keyframes px-glow-pulse {
    0%,100% { text-shadow: 0 0 10px rgba(0,230,118,0.55); }
    50%     { text-shadow: 0 0 22px rgba(0,230,118,0.95), 0 0 44px rgba(0,230,118,0.35); }
  }
  @keyframes px-arrow-pulse {
    from { transform: translateX(-2px); opacity: 0.55; }
    to   { transform: translateX(2px);  opacity: 1;    }
  }
  .px-a0  { animation: px-fade-up 0.55s ease both; }
  .px-a1  { animation: px-fade-up 0.55s 0.12s ease both; }
  .px-a2  { animation: px-fade-up 0.55s 0.22s ease both; }
  .px-a3  { animation: px-fade-up 0.55s 0.34s ease both; }
  .px-a4  { animation: px-fade-up 0.55s 0.44s ease both; }
  .px-glow-text { animation: px-glow-pulse 2.6s ease-in-out infinite; }
  .px-arr  { animation: px-arrow-pulse 0.65s ease-in-out infinite alternate; }
  .px-arr2 { animation: px-arrow-pulse 0.65s 0.18s ease-in-out infinite alternate; }
`;

/* ── Pill tag ────────────────────────────────────────────────────────────── */
function PxPill({
  children,
  tier = "support",
}: {
  children: React.ReactNode;
  tier?: "core" | "support";
}) {
  if (tier === "core") {
    return (
      <span
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium"
        style={{ background: PX.greenGlass, borderColor: PX.greenBorder, color: PX.green }}
      >
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono font-medium text-slate-400">
      {children}
    </span>
  );
}

const CARD_STYLE = {
  background: PX.darkGlass,
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  borderColor: "rgba(0,230,118,0.18)",
  boxShadow: "0 8px 32px rgba(0,20,10,0.35)",
};

/* ── AI Agent card (full-width) ────────────────────────────────────────────── */
function AgentCard() {
  return (
    <div
      className="px-a1 relative flex flex-col rounded-2xl border p-5 gap-4"
      style={CARD_STYLE}
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-semibold"
          style={{ background: PX.greenGlass, borderColor: PX.greenBorder, color: PX.green }}
        >
          <Zap className="w-3 h-3" />
          AI Pipeline + Backend Integration
        </span>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-semibold"
            style={{ background: "rgba(251,191,36,0.10)", borderColor: "rgba(251,191,36,0.28)", color: "#fbbf24" }}
          >
            🔨 Currently Building
          </span>
          <a
            href="https://github.com/omerzilber1403/agent-sales-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono transition-opacity hover:opacity-100"
            style={{ color: PX.green, opacity: 0.7 }}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <h3 className="font-bold text-white text-lg leading-tight">
        Pixellot Knowledge &amp; Sales Agent
      </h3>

      <div
        className="flex items-center gap-3 rounded-xl px-4 py-3 border"
        style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="text-center">
          <div className="text-xs font-mono text-slate-500 mb-0.5">generic bot</div>
          <div className="text-sm font-bold font-mono text-slate-500 line-through">
            No domain knowledge
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          <ChevronRight className="px-arr  w-4 h-4" style={{ color: PX.green }} />
          <ChevronRight className="px-arr2 w-4 h-4" style={{ color: PX.green, opacity: 0.55 }} />
        </div>
        <div className="text-center">
          <div className="text-xs font-mono text-slate-500 mb-0.5">with this agent</div>
          <div className="text-sm font-bold font-mono px-glow-text" style={{ color: PX.green }}>
            Pixellot-native
          </div>
        </div>
        <span
          className="ms-auto rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold"
          style={{ background: PX.greenGlass, color: PX.green, border: `1px solid ${PX.greenBorder}` }}
        >
          Domain-aware
        </span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed">
        Built a dedicated AI agent grounded in Pixellot&apos;s documentation — scraped product data
        directly from pixellot.com and loaded it into a LangGraph multi-agent pipeline with a
        FastAPI backend. Demonstrates my ability to design data ingestion flows, structure
        multi-step reasoning pipelines, and connect AI models to real backend services — the same
        architecture Pixellot uses for automated content analysis.
      </p>

      <div
        className="rounded-xl px-4 py-3 border"
        style={{ background: "rgba(0,230,118,0.06)", borderColor: "rgba(0,230,118,0.22)" }}
      >
        <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
          <span style={{ color: PX.green, fontWeight: 600 }}>
            ✦ The demo below runs on real Pixellot data.
          </span>{" "}
          Product catalog, use cases, and positioning were scraped from{" "}
          <span style={{ fontFamily: "monospace", color: "#cbd5e1" }}>pixellot.com</span>{" "}
          using <span style={{ color: PX.green, fontWeight: 600 }}>Antigravity</span> and
          loaded as a dedicated tenant. Try it below.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          <PxPill tier="core">LangGraph</PxPill>
          <PxPill tier="core">Python</PxPill>
          <PxPill tier="core">FastAPI</PxPill>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <PxPill>Multi-Agent Pipeline</PxPill>
          <PxPill>Data Ingestion</PxPill>
          <PxPill>GPT-4o</PxPill>
        </div>
      </div>

      <div className="mt-auto pt-1">
        <button
          onClick={() => document.getElementById("salesbot")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85 active:opacity-70"
          style={{ background: PX.green, color: "#020617", boxShadow: `0 4px 18px rgba(0,230,118,0.35)` }}
        >
          <Zap className="w-3.5 h-3.5" />
          Try the Pixellot Bot ↓
        </button>
      </div>
    </div>
  );
}

/* ── Unity3D / Spatial Tracking card ──────────────────────────────────────── */
function SpatialCard() {
  const bullets = [
    "Full 3D spatial tracking — position, velocity, trajectory in real-time",
    "Replaced an external vendor — sole architect, full software lifecycle",
    "Generates synthetic scenarios for AI training — exact same need as CV data pipelines",
  ];

  return (
    <div
      className="px-a2 relative flex flex-col rounded-2xl border p-5 gap-4 h-full"
      style={CARD_STYLE}
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-semibold"
          style={{ background: PX.greenGlass, borderColor: PX.greenBorder, color: PX.green }}
        >
          <Eye className="w-3 h-3" />
          Spatial Tracking &amp; Synthetic Data
        </span>
      </div>

      <h3 className="font-bold text-white text-lg leading-tight">
        Naval 3D Simulation & Spatial Engine (IDF)
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        Built a full 3D spatial tracking system for the IDF Navy from scratch using Unity3D/C#.
        Real-time object tracking, coordinate transforms, physics simulation, and automated
        scenario generation — exactly the spatial logic that underpins object detection and
        tracking in computer vision pipelines.
      </p>

      <div className="flex items-stretch gap-2 w-full">
        <div
          className="flex-1 rounded-xl p-3 border flex flex-col items-center justify-center text-center gap-1"
          style={{ background: PX.redGlass, borderColor: PX.redBorder }}
        >
          <div className="text-xs font-mono text-red-400/55 uppercase tracking-widest">External vendor</div>
          <div className="text-xl font-bold font-mono text-red-300/60 line-through">₪500K/yr</div>
          <div className="text-xs text-red-300/45">outsourced system</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 flex-shrink-0">
          <ChevronRight className="px-arr  w-5 h-5" style={{ color: PX.green }} />
          <ChevronRight className="px-arr2 w-5 h-5" style={{ color: PX.green, opacity: 0.5 }} />
        </div>

        <div
          className="flex-1 rounded-xl p-3 border flex flex-col items-center justify-center text-center gap-1"
          style={{ background: PX.greenGlass, borderColor: PX.greenBorder, boxShadow: "0 0 24px rgba(0,230,118,0.15)" }}
        >
          <div className="text-xs font-mono uppercase tracking-widest" style={{ color: `${PX.green}99` }}>
            Solo built
          </div>
          <div className="text-xl font-bold font-mono px-glow-text" style={{ color: PX.green }}>
            ₪0 cost
          </div>
          <div className="text-xs" style={{ color: `${PX.green}70` }}>
            Military commendation
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-1.5">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-px" style={{ color: PX.green }} />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          <PxPill tier="core">C#</PxPill>
          <PxPill tier="core">Unity3D</PxPill>
          <PxPill tier="core">3D Spatial Logic</PxPill>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <PxPill>Python</PxPill>
          <PxPill>Synthetic Data Gen</PxPill>
          <PxPill>Real-Time Simulation</PxPill>
        </div>
      </div>
    </div>
  );
}

/* ── STOMP / Real-Time Events card ─────────────────────────────────────────── */
function StompCard() {
  const bullets = [
    "Real-time event streaming — goals, substitutions at match speed",
    "C++ multi-threading & Java Reactor — same performance demands as video inference",
    "STOMP 1.2 over raw TCP — no library, zero latency overhead",
  ];

  return (
    <div
      className="px-a3 relative flex flex-col rounded-2xl border p-5 gap-4 h-full"
      style={CARD_STYLE}
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-semibold"
          style={{ background: PX.greenGlass, borderColor: PX.greenBorder, color: PX.green }}
        >
          <Bot className="w-3 h-3" />
          Real-Time Sports Event Systems
        </span>
        <a
          href="https://github.com/omerzilber1403/assignment3-world-cup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono transition-opacity hover:opacity-100"
          style={{ color: PX.green, opacity: 0.7 }}
        >
          <Github className="w-3.5 h-3.5" />
          GitHub
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <h3 className="font-bold text-white text-lg leading-tight">
        Real-Time Football Event Architecture
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        Built a pub/sub system from scratch over raw TCP for live football match events.
        Reporters broadcast typed events (goals, cards, subs) through channels to subscribers
        in real time. The same throughput and latency demands as streaming video detection
        outputs from a live pitch camera.
      </p>

      <ul className="flex flex-col gap-1.5 flex-1">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-px" style={{ color: PX.green }} />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          <PxPill tier="core">C++</PxPill>
          <PxPill tier="core">Java Reactor</PxPill>
          <PxPill tier="core">TCP</PxPill>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <PxPill>Multi-threading</PxPill>
          <PxPill>Event Streaming</PxPill>
          <PxPill>STOMP Protocol</PxPill>
        </div>
      </div>

      <div className="mt-auto pt-1">
        <button
          onClick={() => document.getElementById("spl")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85 active:opacity-70"
          style={{ background: PX.green, color: "#020617", boxShadow: `0 4px 18px rgba(0,230,118,0.35)` }}
        >
          <Bot className="w-3.5 h-3.5" />
          Explore Live Case Study ↓
        </button>
      </div>
    </div>
  );
}

/* ── JD alignment panel ──────────────────────────────────────────────────── */
function AlignPanel({ icon, label, desc }: { icon: React.ReactNode; label: string; desc: string }) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl px-4 py-4 border"
      style={{
        borderLeftWidth: "2px",
        borderLeftColor: PX.green,
        borderColor: "rgba(0,230,118,0.14)",
        background: PX.darkGlass,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <span style={{ color: PX.green, flexShrink: 0, marginTop: "1px" }}>{icon}</span>
      <div>
        <div className="text-sm font-semibold text-white mb-1">{label}</div>
        <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────────────── */
export function PixellotShowcase() {
  const panels = [
    {
      icon: <Eye className="w-4 h-4" />,
      label: "Spatial Tracking Foundation",
      desc: "3 years building 3D object tracking in Unity3D. Real-time position, velocity, and trajectory logic — the spatial reasoning that underpins computer vision detection models.",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      label: "AI Pipeline Engineering",
      desc: "Built multi-agent LangGraph systems with data ingestion, structured inference, and FastAPI serving. Proven ability to connect AI models to real production infrastructure.",
    },
    {
      icon: <Code className="w-4 h-4" />,
      label: "Research → Shipped System",
      desc: "Self-learned complex algorithms from textbooks + papers during IDF service, then shipped them as production systems. Same mindset the JD asks for: R&D that reaches the field.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(0,20,10,0.12) 40%, rgba(0,20,10,0.12) 60%, transparent 100%)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: SHOWCASE_CSS }} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,20,10,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="px-a0 text-center mb-12">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-mono font-semibold mb-5"
            style={{ background: PX.greenGlass, borderColor: PX.greenBorder, color: PX.green }}
          >
            <Zap className="w-3.5 h-3.5" />
            CV-Ready Engineering
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-display, system-ui)" }}
          >
            Built for{" "}
            <span style={{ color: PX.green }}>Sports AI Research</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Spatial tracking, real-time event systems, and AI pipelines — built for Pixellot&apos;s R&D team.
          </p>
        </div>

        {/* Card 1 — full width */}
        <div className="mb-5">
          <AgentCard />
        </div>

        {/* Cards 2 + 3 — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 items-start">
          <SpatialCard />
          <StompCard />
        </div>

        {/* JD alignment strip */}
        <div className="px-a4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {panels.map((p) => (
            <AlignPanel key={p.label} icon={p.icon} label={p.label} desc={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
