import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 4,
    title: "Sports Converge",
    category: "Freelance — Custom Booking Engine & E-Commerce Platform",
    description:
      "Built a custom booking system from scratch for a Singapore-based fitness studio — comparable to commercial solutions like Amelia — handling trainer availability and scheduling with conflict prevention, Stripe payment collection at time of booking, an admin dashboard for managing trainers and appointments, and a customer-facing account area with booking confirmations and reminders.",
    tech: [
      "Custom Plugin Architecture",
      "Booking Engine",
      "Payment Integration",
      "Admin Dashboard",
    ],
    links: {
      demo: "https://sportsconverge.com",
    },
  },
  {
    id: 1,
    title: "DailyDeck",
    category: "Full-Stack Productivity SaaS",
    description:
      "Built and operated production SaaS with authentication, AI-powered search, and cloud deployment—handling end-to-end architecture decisions and technical tradeoffs. Designed RAG pipeline using MongoDB Vector Search after evaluating Pinecone and Weaviate, prioritizing sub-200ms query latency and operational simplicity. Features Smart Notes with semantic search across 1000+ embedded documents, advanced Task Manager with Kanban boards and GitHub integration, and PayloadLab for API prototyping.",
    tech: [
      "React 19",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Vector Search",
      "Vercel",
      "Anthropic Claude API",
      "Cohere",
      "TailwindCSS",
      "Zustand",
    ],
    links: {
      demo: "https://daily-deck-ten.vercel.app/",
      github: "https://github.com/pujeetas/DailyDeck",
    },
    video: "/RAG_DEMO.mp4",
    image: "/dailydeck-screenshot.png",
    features: [
      {
        icon: "📝",
        title: "Smart Notes with AI Search",
        description:
          "Block-based editor with RAG-driven semantic search using MongoDB Vector Search and Anthropic Claude API. Ask questions about your notes and get intelligent AI-generated answers from 1000+ embedded documents.",
      },
      {
        icon: "✅",
        title: "Advanced Task Management",
        description:
          "Full-featured Kanban boards with drag-and-drop, calendar view for deadlines, productivity analytics, and seamless GitHub issue import for developer workflows.",
      },
      {
        icon: "🔧",
        title: "PayloadLab - JSON Generator",
        description:
          "Professional JSON toolkit with mock data generation, custom schemas, nested objects, 15+ data types, and full JSON parser for validation and formatting.",
      },
      {
        icon: "🐳",
        title: "Containerized with Docker",
        description:
          "Full-stack app containerized using Docker and Docker Compose with multi-stage builds. Frontend served via nginx reducing image size to 101MB. Single command startup with docker-compose up.",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Engineering",
    description:
      "Modern, performance-optimized portfolio with smooth animations and responsive design showcasing projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    links: {
      demo: "https://pujeeta.dev",
      github: "https://github.com/pujeetas/portfolio",
    },
  },
];

function ProjectsSection() {
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
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all"
            >
              <div className="relative aspect-video bg-zinc-950 border-b border-zinc-800 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-zinc-900 to-zinc-950">
                    <span className="font-engineer text-sm text-zinc-700 tracking-widest uppercase">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <span className="text-xs text-zinc-500 mb-1">
                  {project.category}
                </span>

                <h3 className="font-engineer text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm mt-auto pt-4 border-t border-zinc-800/60">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
