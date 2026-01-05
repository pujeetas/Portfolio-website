import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
];

export default function Header({ scrollToSection, activeSection }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-20 flex items-center justify-between">
          {/* LEFT - Click to Scroll Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="focus:outline-none"
            >
              <span className="text-white font-signature text-2xl tracking-wide hover:text-zinc-300 transition-colors cursor-pointer">
                Pujeeta Singh
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CONTACT BUTTON - Monochrome Theme */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-zinc-800 hover:bg-zinc-900 text-white px-5 py-2 rounded-lg transition-all text-sm font-medium border border-zinc-700 hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
