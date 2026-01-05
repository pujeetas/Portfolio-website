const SKILLS = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "TypeScript",
  "Figma",
  "Git",
  "REST API",
  "OpenAI API",
  "Vector DB",
  "Embeddings",
  "Framer Motion",
];

const SkillsTicker = () => {
  return (
    <div className="w-full bg-[#0a0a0a] border-y border-zinc-800 py-4 overflow-hidden relative z-20">
      <div className="flex w-max animate-slide-left hover:pause">
        {/* Render list twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {SKILLS.map((skill, index) => (
              <div key={`${i}-${index}`} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500/50 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <span className="font-engineer text-zinc-400 text-sm md:text-base uppercase tracking-widest">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
