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

        {/* eGain */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8"
        >
          <div className="mb-6">
            <h3 className="font-engineer text-2xl font-semibold">
              Software Engineer
            </h3>
            <p className="text-zinc-400 mt-1">eGain Communications</p>
            <p className="text-zinc-500 text-sm mt-1">Mar 2022 – Jan 2024</p>
            <p className="text-zinc-400 text-sm mt-3 italic">
              Built and scaled enterprise CRM systems serving 125K+ daily active
              users across Fortune 500 clients
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "TypeScript",
              "Redux",
              "Node.js",
              "Express",
              "REST APIs",
              "PostgreSQL",
              "MongoDB",
              "AWS",
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

          <div className="space-y-4 text-zinc-400">
            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built a role-based article retrieval feature in React with
                admin-controlled visibility — cut agent search time by{" "}
                <span className="text-white font-medium">~80%</span> and
                eliminated a fully manual lookup process across a{" "}
                <span className="text-white font-medium">125K+ user</span> CRM
                platform
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Improved page load speed by{" "}
                <span className="text-white font-medium">35%</span> through
                lazy loading, state management refactoring, and component
                restructuring — engagement went up{" "}
                <span className="text-white font-medium">28%</span> after the
                rollout
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Diagnosed and fixed critical bugs in the email routing and SLA
                trigger system across Fortune 500 client deployments,
                resolving incorrect queue assignments, misfiring timers, and
                workflow failures
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Owned and extended the core Node.js APIs consumed by email,
                knowledge hub, and professional services teams — fixed broken
                endpoints, corrected bad data responses, and shipped new APIs
                to unblock dependent teams
              </p>
            </div>
          </div>
        </motion.div>

        {/* Freelance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
        >
          <div className="mb-6">
            <h3 className="font-engineer text-2xl font-semibold">
              Freelance Full-Stack Developer
            </h3>
            <p className="text-zinc-500 text-sm mt-1">Jan 2025 – Present</p>
            <p className="text-zinc-400 text-sm mt-3 italic">
              Full-stack and React Native projects for Singapore-based clients
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React 19",
              "React Native",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Row-Level Security",
              "Stripe",
              "Firebase",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-zinc-400">
            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built a custom booking and session management plugin from
                scratch for a Singapore-based fitness business — class
                scheduling, member management, Stripe payments, and automated
                email reminders; delivered solo from requirements through
                deployment
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built a maritime SaaS platform from scratch — React 19 +
                TypeScript, with a 4-role permission system (super admin,
                admin, user, client) enforced through custom row-level
                security policies and a self-escalation-blocking trigger
                written in Postgres
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built a column-level access control system — admins can toggle
                which fields each client group can see or edit, down to
                individual columns, with masking for restricted fields
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built out core business modules (list/detail/edit views) with
                section-by-section saving instead of one big form save
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}