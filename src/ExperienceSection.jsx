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
          <div className="mb-8">
            <h3 className="font-engineer text-2xl font-semibold">
              Software Engineer
            </h3>
            <p className="text-zinc-400 mt-1">
              eGain Communications · Pune → Singapore
            </p>
            <p className="text-zinc-500 text-sm mt-1">Mar 2022 – Jan 2024</p>
          </div>
          <div className="mb-8">
            <h4 className="text-zinc-300 font-medium mb-3">What I worked on</h4>
            <ul className="space-y-2 text-zinc-400 list-disc list-inside">
              <li>
                Designed and maintained backend REST APIs for enterprise-scale
                systems.
              </li>
              <li>
                Wrote complex SQL queries for analytics and reporting workflows.
              </li>
              <li>
                Built YAML-based configuration systems for multi-tenant
                environments.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-zinc-300 font-medium mb-3">Impact</h4>
            <ul className="space-y-2 text-zinc-400 list-disc list-inside">
              <li>Improved query performance by ~30%.</li>
              <li>Reduced production incident resolution time (MTTR).</li>
              <li>Supported high-traffic, customer-facing workflows.</li>
            </ul>
          </div>
          <div className="border-t border-zinc-800 pt-6">
            <p className="text-zinc-400">
              Alongside my role, I independently built and shipped full-stack
              applications and RAG-based systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
