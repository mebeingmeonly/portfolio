import React from 'react';
import { motion } from 'framer-motion';

export const QuoteBreak: React.FC = () => {
  return (
    <section
      className="px-5 md:px-6 py-20 md:py-32 flex flex-col items-center text-center cursor-default"
      style={{ backgroundColor: 'rgb(0,0,0)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p
          className="font-light leading-relaxed mb-6"
          style={{ fontSize: 'clamp(15px, 2.2vw, 20px)', color: 'rgb(255, 255, 255)'}}
        >
          "Minimal design is not the absence of thought. It is the discipline of keeping only what earns its place."
        </p>
        <footer>
          <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Suhas Palukuri
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] ml-4" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Founder
          </span>
        </footer>
      </motion.blockquote>
    </section>
  );
};
