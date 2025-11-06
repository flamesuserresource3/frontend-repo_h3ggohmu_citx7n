import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-3"
        >
          Let’s build something together
        </motion.h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          I’m open to internships, freelance work, and collaborative projects.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6"
        >
          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <input className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2 grid gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={5} className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70" placeholder="Tell me about your idea..." />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full sm:w-auto px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:shadow-md hover:bg-indigo-500 transition">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
