import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-neutral-900/60 dark:via-neutral-900/20 dark:to-neutral-900/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
            Interactive • Modern • Playful
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I’m <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            A college student building delightful experiences with web, design, and 3D interactions. Explore my projects, skills, and the things I’m learning.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:shadow-md hover:bg-indigo-500 transition">
              See Projects
            </a>
            <a href="#skills" className="px-5 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur font-medium hover:border-indigo-400 transition">
              My Skills
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-indigo-400/30 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-cyan-400/30 blur-3xl rounded-full pointer-events-none" />
          <div className="relative rounded-2xl border border-white/40 shadow-xl backdrop-blur bg-white/40 dark:bg-neutral-900/40 p-6">
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              Tip: You can click and drag the 3D object in the background.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
