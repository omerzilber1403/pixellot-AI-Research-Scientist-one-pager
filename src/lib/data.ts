import type { NavLink } from "@/types";

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
} as const;

export const HERO_TAGLINES = [
  "I build AI pipelines that detect real events.",
  "I ship spatial tracking systems, fast.",
  "I translate research into production code.",
  "I apply an engineering-first research mindset.",
];

export const NAV_LINKS: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#skills" },
  { label: "Pixellot Fit", href: "#security" },
  { label: "Contact", href: "#contact" },
];
