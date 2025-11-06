import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to improve text contrast (does not block interaction) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-neutral-900/60 dark:via-neutral-900/20 dark:to-neutral-900/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Intro copy */}
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
            Hi, I’m <span className="text-indigo-600">Viral Jain</span>
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            A college student crafting delightful web experiences with React, design systems, and interactive 3D. Explore my projects, skills, and what I’m learning next.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:shadow-md hover:bg-indigo-500 transition"
            >
              See Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#skills"
              className="px-5 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur font-medium hover:border-indigo-400 transition"
            >
              My Skills
            </motion.a>
          </div>
        </motion.div>

        {/* Interactive social dock (replaces the old tip box) */}
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
            <div className="grid gap-4">
              <motion.a
                whileHover={{ x: 6 }}
                href="#projects"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/80 dark:bg-neutral-800/60 border border-black/10 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium">Open to internships & collabs</span>
                </div>
                <span className="text-xs text-neutral-500">Explore</span>
              </motion.a>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="GitHub"
                  href="#"
                  className="p-3 rounded-full bg-white/80 dark:bg-neutral-800/60 border border-black/10 dark:border-white/10 shadow"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="LinkedIn"
                  href="#"
                  className="p-3 rounded-full bg-white/80 dark:bg-neutral-800/60 border border-black/10 dark:border-white/10 shadow"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Email"
                  href="#contact"
                  className="p-3 rounded-full bg-white/80 dark:bg-neutral-800/60 border border-black/10 dark:border-white/10 shadow"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden md:flex items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-neutral-700 dark:text-neutral-300"
      >
        <span className="inline-block h-6 w-3 rounded-full border border-neutral-400 dark:border-neutral-600 relative">
          <span className="absolute left-1/2 -translate-x-1/2 top-1 h-1.5 w-1 rounded-full bg-neutral-500 animate-bounce" />
        </span>
        Scroll
      </motion.a>
    </section>
  );
}
