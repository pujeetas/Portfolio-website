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
              Software Engineer - I
            </h3>
            <p className="text-zinc-400 mt-1">eGain Communications</p>
            <p className="text-zinc-500 text-sm mt-1">Mar 2022 – Jan 2024</p>
            <p className="text-zinc-400 text-sm mt-3 italic">
              Built enterprise CRMS platform serving Fortune 500 clients with
              125K+ daily active users
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "Redux",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Express",
              "REST APIs",
              "WebSockets",
              "MySQL",
              "JIRA",
              "Agile/Scrum",
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
          <div className="space-y-4 text-zinc-400">
            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Developed enterprise full-stack web applications using React and
                Express.js for CRMS platform serving Fortune 500 clients
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                <span className="text-white font-medium">
                  Email Routing & Agent Dashboard
                </span>{" "}
                (React, Node.js, REST APIs) - Built automated email routing
                workflows processing{" "}
                <span className="text-white font-medium">50K+ emails/day</span>,
                customer inquiry forms, and real-time agent dashboards with
                WebSocket integration supporting{" "}
                <span className="text-white font-medium">
                  500+ concurrent agents
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                <span className="text-white font-medium">
                  Performance & State Management
                </span>{" "}
                - Reduced page load times by{" "}
                <span className="text-white font-medium">35%</span> and
                increased user engagement by{" "}
                <span className="text-white font-medium">28%</span> across 10+
                dashboard modules through React optimization and Redux
                implementation for complex multi-step workflows
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                <span className="text-white font-medium">API Development</span>{" "}
                - Designed and deployed RESTful APIs for email classification,
                SLA triggers, and performance analytics processing{" "}
                <span className="text-white font-medium">1M+ requests/day</span>
                , reducing manual processing overhead by{" "}
                <span className="text-white font-medium">40%</span>
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Collaborated in Agile sprints with 5-8 cross-functional
                engineers to deliver{" "}
                <span className="text-white font-medium">15+ features</span> for
                contact center operations across 3 product releases
              </p>
            </div>
          </div>

          {/* Career Transition */}
          <div className="border-t border-zinc-800 mt-8 pt-6">
            <h4 className="text-zinc-300 font-medium mb-2">
              Career Break - Relocation to Singapore
            </h4>
            <p className="text-zinc-400 text-sm mb-2">Jan 2024 – Aug 2025</p>
            <div className="space-y-2 text-zinc-400">
              <div className="flex gap-3">
                <span className="text-zinc-500">•</span>
                <p>
                  Relocated to Singapore; obtained work authorization (Dependent
                  Pass)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-500">•</span>
                <p>
                  Developed production-grade full-stack portfolio projects to
                  strengthen technical expertise
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
