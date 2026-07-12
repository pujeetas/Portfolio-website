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

        {/* Freelance Full-Stack Developer */}
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
              Freelance Full-Stack Developer
            </h3>
            <p className="text-zinc-400 mt-1">Self-Employed</p>
            <p className="text-zinc-500 text-sm mt-1">Jan 2025 – Present</p>
            <p className="text-zinc-400 text-sm mt-3 italic">
              Delivering custom full-stack systems for independent clients
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Custom Plugin Architecture",
              "Booking Engine",
              "Payment Integration",
              "Admin Dashboard",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Impact & Achievements */}
          <div className="space-y-4 text-zinc-400">
            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built a{" "}
                <span className="text-white font-medium">
                  custom booking engine from scratch
                </span>{" "}
                for a Singapore-based fitness studio client — handling trainer
                availability, scheduling, and conflict prevention
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Integrated{" "}
                <span className="text-white font-medium">Stripe</span> for
                payment collection at time of booking
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built an admin dashboard for staff to manage trainers and
                appointments
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Delivered a customer-facing account area with booking
                confirmations and reminders
              </p>
            </div>
          </div>

          {/* Relocation */}
          <div className="border-t border-zinc-800 mt-8 pt-6">
            <div className="flex gap-3 text-zinc-400">
              <span className="text-zinc-500">•</span>
              <p>
                Relocated to Singapore in{" "}
                <span className="text-white font-medium">Jan 2024</span> and
                obtained work authorization
              </p>
            </div>
          </div>
        </motion.div>

        {/* Software Engineer - I */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mt-8"
        >
          {/* Header */}
          <div className="mb-6">
            <h3 className="font-engineer text-2xl font-semibold">
              Software Engineer – I
            </h3>
            <p className="text-zinc-400 mt-1">eGain Communications</p>
            <p className="text-zinc-500 text-sm mt-1">Mar 2022 – Jan 2024</p>
            <p className="text-zinc-400 text-sm mt-3 italic">
              Built and scaled enterprise CRM systems serving 125K+ daily active
              users
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "TypeScript",
              "Redux",
              "Node.js",
              "Express",
              "REST APIs",
              "WebSockets",
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

          {/* Impact & Achievements */}
          <div className="space-y-4 text-zinc-400">
            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Built and scaled core CRM features used by{" "}
                <span className="text-white font-medium">
                  125K+ daily active users
                </span>{" "}
                across customer support operations
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Improved frontend performance by{" "}
                <span className="text-white font-medium">35%</span>, increasing
                user engagement by{" "}
                <span className="text-white font-medium">28%</span> through
                React optimization and state refactoring in high-traffic
                environments
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Designed API services for automated email classification and SLA
                triggers, reducing manual support workload across enterprise
                clients
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Delivered real-time agent dashboards using{" "}
                <span className="text-white font-medium">WebSockets</span> to
                improve response visibility and resolution speed
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Stabilized high-traffic Node.js services, reducing production
                incidents and improving system uptime
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-zinc-500 mt-1">•</span>
              <p>
                Collaborated with product and QA in Agile sprints to ship
                features used daily by{" "}
                <span className="text-white font-medium">100K+ users</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
