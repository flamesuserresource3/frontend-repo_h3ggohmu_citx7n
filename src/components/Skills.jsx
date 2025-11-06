import { motion } from 'framer-motion';
import { Code2, Database, Palette, Cpu } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Database, title: 'Backend', items: ['FastAPI', 'MongoDB', 'REST'] },
  { icon: Cpu, title: 'Core', items: ['Algorithms', 'DSA', 'Systems Basics'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'Spline', 'Accessibility'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-2">Technologies and tools I enjoy using.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                  <Icon size={18} />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                {items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
