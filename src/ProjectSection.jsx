import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "DailyDeck",
    category: "Productivity Platform",
    description:
      "Full-stack productivity SaaS application with Kanban boards, block-based note editor, and analytics. Features RAG-powered semantic search using MongoDB Vector Search and AI responses via Anthropic Claude API.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
      "Anthropic Claude API",
      "RAG/Vector Search",
    ],
    links: {
      demo: "https://daily-deck-ten.vercel.app/",
      github: "https://github.com/pujeetas/DailyDeck",
    },
    video: "/RAG_DEMO.mp4",
    image: "/dailydeck-screenshot.png",
    featured: true,
  },
  {
    id: 2,
    title: "DocuChat RAG",
    category: "AI Integration",
    description:
      "AI-powered documentation assistant leveraging Retrieval-Augmented Generation for real-time PDF interaction.",
    tech: ["Node.js", "OpenAI", "Vector DB"],
    links: {
      demo: "https://github.com/pujeetas/docuchat",
      github: "https://github.com/pujeetas/docuchat",
    },
    featured: false,
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Engineering",
    description:
      "Modern, performance-optimized portfolio with smooth animations and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    links: {
      demo: "https://pujeeta.dev",
      github: "https://github.com/pujeetas/portfolio",
    },
    featured: false,
  },
];

function ProjectsSection() {
  const featuredProject = PROJECTS.find((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-engineer text-3xl md:text-5xl font-bold mb-16"
        >
          Featured Work
        </motion.h2>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 mb-20 hover:border-zinc-700 transition-all"
          >
            <div className="flex flex-col justify-center">
              <span className="text-sm text-zinc-500 mb-2">
                {featuredProject.category}
              </span>

              <h3 className="font-engineer text-2xl md:text-3xl font-semibold mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={featuredProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm border border-zinc-700 transition"
                >
                  View Demo
                </a>

                <a
                  href={featuredProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-transparent hover:bg-zinc-800 rounded-lg text-sm border border-zinc-700 transition"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* Video */}
            <div className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 min-h-[300px]">
              {featuredProject.video ? (
                <video
                  src={featuredProject.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => console.error("Video failed to load:", e)}
                >
                  Your browser does not support the video tag.
                </video>
              ) : featuredProject.image ? (
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} Screenshot`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="font-engineer text-zinc-600">
                    Project Preview
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition"
            >
              <span className="text-xs text-zinc-500 block mb-1">
                {project.category}
              </span>

              <h4 className="font-engineer text-xl font-semibold mb-2">
                {project.title}
              </h4>

              <p className="text-zinc-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs text-zinc-500">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition"
                  >
                    Demo →
                  </a>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition"
                  >
                    Code →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
