import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-engineer text-3xl md:text-5xl font-bold mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
        >
          {/* Header */}
          <div className="mb-6">
            <h3 className="font-engineer text-2xl font-semibold">
              Software Engineer - Full Stack
            </h3>
            <p className="text-zinc-400 mt-1">
              eGain Communications · Pune → Singapore
            </p>
            <p className="text-zinc-500 text-sm mt-1">Mar 2022 – Jan 2024</p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "Redux",
              "JavaScript",
              "Node.js",
              "Express",
              "REST APIs",
              "MySQL",
              "JIRA",
              "Agile",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Responsibilities & Achievements */}
          <div className="space-y-3 text-zinc-400">
            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Developed and maintained production-grade frontend features
                using React and modern JavaScript frameworks, improving page
                load times by{" "}
                <span className="text-white font-medium">35%</span> and user
                engagement by{" "}
                <span className="text-white font-medium">28%</span>.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Designed and maintained backend REST APIs for enterprise CRMS
                systems, supporting high-traffic production workloads serving{" "}
                <span className="text-white font-medium">125K+ users</span>.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Implemented state management and client-side data handling
                patterns using Redux to support complex user workflows in
                enterprise applications.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Debugged and resolved production incidents, contributing to{" "}
                <span className="text-white font-medium">99.5%+ uptime</span>{" "}
                and reduced mean time to resolution (MTTR).
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Collaborated with QA teams to ensure{" "}
                <span className="text-white font-medium">
                  ~95% test coverage
                </span>{" "}
                on critical modules through comprehensive testing strategies.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Worked in Agile/Scrum environments using JIRA, collaborating
                with 5-8 cross-functional teams for sprint planning, delivery,
                and release cycles.
              </p>
            </div>
          </div>

          {/* Gap Explanation */}
          <div className="border-t border-zinc-800 mt-8 pt-6">
            <p className="text-zinc-400">
              Following my time at eGain, I focused on building production-grade
              applications independently, including{" "}
              <span className="text-white">DailyDeck</span>—a full-stack
              productivity platform with AI-powered RAG search serving the
              developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
