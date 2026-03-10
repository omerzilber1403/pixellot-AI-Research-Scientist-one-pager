import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omer-zilbershtein-ai.vercel.app"),
  title: "Omer Zilbershtein — AI Research Scientist Student | Pixellot",
  description:
    "BGU CS student (Data Science specialization) & IDF Navy software veteran applying for the AI Research Scientist Student role at Pixellot. Computer vision, PyTorch, LangGraph AI pipelines, real-time 3D simulation.",
  keywords: [
    "AI research scientist", "computer vision", "PyTorch", "deep learning",
    "Pixellot", "sports AI", "object tracking", "event detection",
    "Omer Zilbershtein", "LangGraph", "Python", "synthetic data",
  ],
  authors: [{ name: "Omer Zilbershtein" }],
  openGraph: {
    title: "Omer Zilbershtein — AI Research Scientist Student | Pixellot",
    description: "IDF Navy 3D simulation engineer → sports AI researcher. Unity3D spatial tracking, LangGraph AI pipelines, C++ real-time systems, Python data science.",
    url: "https://omer-zilbershtein-ai.vercel.app",
    siteName: "Omer Zilbershtein Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Omer Zilbershtein — AI Research Scientist Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omer Zilbershtein — AI Research Scientist Student | Pixellot",
    description: "AI Research Scientist applicant at Pixellot. 3D spatial tracking, LangGraph multi-agent systems, real-time C++ pub/sub.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased bg-bg text-text-primary overflow-x-hidden`}
      >
        {/* Fixed background orb layer — enables glassmorphism across all sections */}
        <div className="orb-field" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
