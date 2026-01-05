import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 bg-black border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-engineer text-3xl md:text-5xl font-bold mb-6">
          Let’s build something meaningful
        </h2>

        {/* Subtext */}
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          I’m open to full-stack and AI-focused roles where I can work on
          real-world problems, scalable systems, and production-ready products.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:pujeeta@example.com"
            className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition border border-zinc-700 font-medium text-sm"
          >
            Email me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-transparent hover:bg-zinc-900 text-white rounded-lg transition border border-zinc-700 font-medium text-sm"
          >
            View resume
          </a>
        </div>

        {/* Secondary Links */}
        <div className="flex justify-center gap-8 text-zinc-500 text-sm">
          <a
            href="https://github.com/pujeetas"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/pujeetasingh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
