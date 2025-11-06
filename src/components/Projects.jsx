import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Campus Navigator',
    desc: 'Mobile-friendly web app that maps campus buildings and shortest walking paths using Dijkstra and Leaflet.',
    tags: ['React', 'Leaflet', 'Algorithms'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Study Buddy AI',
    desc: 'Chat-based study assistant that generates quizzes and summaries from lecture PDFs.',
    tags: ['FastAPI', 'OpenAI', 'Pinecone'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Starter',
    desc: 'Animated portfolio scaffold with Spline hero, Framer Motion, and Tailwind components.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/50 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-2">A selection of things I’ve built recently.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group relative rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5 hover:shadow-xl transition"
            >
              <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200 dark:from-indigo-900/40 dark:via-sky-900/40 dark:to-emerald-900/40 mb-4 overflow-hidden">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-medium hover:text-indigo-600">
                  <Github size={16} /> Code
                </a>
                <a href={p.link} className="inline-flex items-center gap-1 text-sm font-medium hover:text-indigo-600">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
