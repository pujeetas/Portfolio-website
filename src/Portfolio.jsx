import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import ProjectsSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import Contact from "./Contact";
import SkillsTicker from "./SkillsTicker";

const SECTIONS = ["home", "contact"];
const HEADER_OFFSET = 96;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  // Typewriter State
  const [typedCommand, setTypedCommand] = useState("");
  const command = "npx display-profile";
  const [showResults, setShowResults] = useState(false);
  const [nameGlitch, setNameGlitch] = useState(false);

  useEffect(() => {
    // Create a repeating timer
    const interval = setInterval(() => {
      setNameGlitch(true); // Turn glitch ON
      setTimeout(() => {
        setNameGlitch(false);
      }, 300);
    }, 3000); // Repeat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Typewriter Effect Logic
  useEffect(() => {
    const startDelay = setTimeout(() => {
      if (typedCommand.length < command.length) {
        const timeout = setTimeout(() => {
          setTypedCommand(command.slice(0, typedCommand.length + 1));
        }, 10);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setShowResults(true), 300);
      }
    }, 800);
    return () => clearTimeout(startDelay);
  }, [typedCommand]);

  // Terminal Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };
  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

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
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 relative"
      >
        {/* Background Grid */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-grid opacity-[0.15] pointer-events-none" />

        {/* Kinetic Text Background */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
          <div className="whitespace-nowrap animate-slide-left">
            <span className="text-[12rem] font-bold font-engineer">
              FULL-STACK DEVELOPER ENGINEER PROBLEM SOLVER&nbsp;
            </span>
            <span className="text-[12rem] font-bold font-engineer">
              FULL-STACK DEVELOPER ENGINEER PROBLEM SOLVER&nbsp;
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start pt-10 md:pt-0">
            <span
              className={`font-signature text-4xl text-zinc-400 mb-6 block glitch-hover w-max cursor-pointer ${
                nameGlitch ? "glitch-active text-white" : ""
              }`}
              data-text="Pujeeta Singh"
            >
              Pujeeta Singh
            </span>

            <h1 className="font-engineer text-4xl md:text-6xl leading-tight font-bold mb-6">
              Full-Stack Engineer building <br className="hidden md:block" />
              <span className="text-zinc-300">production-ready systems</span>
            </h1>

            <p className="text-zinc-500 text-lg max-w-lg mb-10 leading-relaxed">
              I build production-ready full-stack systems with a focus on
              reliability, scalability, and real-world impact.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition border border-zinc-700 font-medium text-sm"
              >
                Contact me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-transparent hover:bg-zinc-900 text-white rounded-lg transition font-medium text-sm border border-transparent hover:border-zinc-800"
              >
                View projects
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - TERMINAL */}
          <div className="relative hidden md:block">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-zinc-700/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-purple-900/10 rounded-full blur-2xl" />

            <div className="relative w-full max-w-lg mx-auto bg-[#0F0F11] rounded-xl border border-zinc-800/80 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <div className="ml-2 text-xs text-zinc-500 font-engineer">
                  pujeeta@portfolio:~/dev
                </div>
              </div>

              <div className="p-6 md:p-8 font-engineer text-sm md:text-base leading-relaxed h-[420px]">
                <div className="text-zinc-400 mb-4 flex items-center">
                  <span className="text-green-400 mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  {typedCommand}
                  {!showResults && (
                    <span className="w-2 h-4 bg-zinc-500 ml-1 animate-pulse" />
                  )}
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={showResults ? "visible" : "hidden"}
                  className="space-y-1"
                >
                  <motion.div variants={lineVariants}>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-200">developer</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-zinc-300">{`{`}</span>
                  </motion.div>
                  <motion.div variants={lineVariants} className="pl-6">
                    <span className="text-blue-300">name</span>:{" "}
                    <span className="text-green-400">"Pujeeta Singh"</span>,
                  </motion.div>
                  <motion.div variants={lineVariants} className="pl-6">
                    <span className="text-blue-300">location</span>:{" "}
                    <span className="text-green-400">"Singapore"</span>,
                  </motion.div>
                  <motion.div variants={lineVariants} className="pl-6">
                    <span className="text-blue-300">focus</span>:{" "}
                    <span className="text-green-400">"Full-Stack + RAG"</span>,
                  </motion.div>
                  <motion.div variants={lineVariants} className="pl-6">
                    <span className="text-blue-300">stack</span>:{" "}
                    <span className="text-zinc-300">[</span>
                    <span className="text-green-400">"React"</span>,{" "}
                    <span className="text-green-400">"Node.js"</span>
                    <span className="text-zinc-300">]</span>,
                  </motion.div>
                  <motion.div variants={lineVariants}>
                    <span className="text-zinc-300">{`}`}</span>;
                  </motion.div>
                  <motion.div
                    variants={lineVariants}
                    className="mt-4 flex items-center gap-2"
                  >
                    <span className="text-green-400">➜</span>
                    <span className="w-2.5 h-5 bg-zinc-500 animate-pulse" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <SkillsTicker />
      <ProjectsSection />
      <ExperienceSection />
      <Contact />
    </div>
  );
}
