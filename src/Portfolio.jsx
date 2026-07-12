import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "./Header";
import ProjectsSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import Contact from "./Contact";
import SkillsTicker from "./SkillsTicker";

const SECTIONS = ["home", "contact"];
const HEADER_OFFSET = 96;
const HeroScene = lazy(() => import("./three/HeroScene"));

const CODE_MOTIF = `const engineer = {
  name: "Pujeeta Singh",
  location: "Singapore",
  focus: "Full-Stack + RAG",
  stack: ["React", "Node.js", "MongoDB"],
  status: "shipping"
};`;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [nameGlitch, setNameGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameGlitch(true);
      setTimeout(() => setNameGlitch(false), 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* Scroll Logic */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + HEADER_OFFSET + 10;
      const current = SECTIONS.find((id) => {
        const el = document.getElementById(id);
        return (
          el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight
        );
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-zinc-800 font-sans overflow-x-hidden">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* ================= HERO SECTION ================= */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-24 pb-16 relative overflow-hidden"
      >
        {/* Aurora Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-[26rem] h-[26rem] bg-indigo-600/10 rounded-full blur-[130px] animate-aurora" />
          <div className="absolute bottom-[5%] right-[10%] w-[24rem] h-[24rem] bg-purple-600/10 rounded-full blur-[130px] animate-aurora [animation-delay:-6s]" />
          <div className="absolute top-[40%] right-[35%] w-[20rem] h-[20rem] bg-cyan-500/[0.06] rounded-full blur-[110px] animate-aurora [animation-delay:-3s]" />
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        {/* Ambient Code Motif */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none overflow-hidden">
          <pre className="font-engineer text-sm md:text-lg text-zinc-400 leading-loose whitespace-pre">
            {CODE_MOTIF}
          </pre>
        </div>

        {/* 3D Particle Scene */}
        <div className="absolute inset-0 z-[5]">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pointer-events-none [&_button]:pointer-events-auto">
          {/* Credibility Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-engineer text-xs text-zinc-400 tracking-wide">
              Open to Work &middot; Based in Singapore
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`font-signature text-3xl md:text-4xl text-zinc-400 mb-4 block glitch-hover w-max cursor-pointer ${
              nameGlitch ? "glitch-active text-white" : ""
            }`}
            data-text="Pujeeta Singh"
          >
            Pujeeta Singh
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-engineer font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-8xl mb-8"
          >
            Full-Stack Engineer
            <br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              building systems that ship
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-zinc-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            I build production-ready full-stack systems with a focus on
            reliability, scalability, and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 px-8 py-3 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg transition-all font-medium text-sm shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              Contact me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-transparent hover:bg-zinc-900 text-white rounded-lg transition font-medium text-sm border border-zinc-800 hover:border-zinc-700"
            >
              View projects
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-zinc-600 font-engineer text-xs uppercase tracking-widest"
          >
            <span>Full-Stack</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>AI &amp; RAG Systems</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>Shipped to Production</span>
          </motion.div>
        </div>
      </motion.section>

      <SkillsTicker />
      <ProjectsSection />
      <ExperienceSection />
      <Contact />
    </div>
  );
}
