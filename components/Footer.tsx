import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Giant wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="select-none pointer-events-none overflow-hidden pt-8 pb-2 flex justify-center"
      >
        <p
          className="font-black uppercase leading-none whitespace-nowrap text-center"
          style={{
            fontSize: 'clamp(48px, 16vw, 260px)',
            letterSpacing: '-0.03em',
            color: 'rgba(255,255,255,0.04)',
          }}
        >
          Suhas Palukuri
        </p>
      </motion.div>

      {/* Bottom bar */}
      <div
        className="px-5 md:px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-[11px] md:text-[12px]" style={{ opacity: 0.35 }}>© 2026 Suhas Palukuri</p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:contact@thehalfidea.in"
            className="text-[11px] md:text-[12px] no-underline transition-opacity duration-200 hover:opacity-60"
            style={{ opacity: 0.35, color: 'inherit' }}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/company/thehalfidea/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] md:text-[12px] no-underline transition-opacity duration-200 hover:opacity-60"
            style={{ opacity: 0.35, color: 'inherit' }}
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/thehalfidea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] md:text-[12px] no-underline transition-opacity duration-200 hover:opacity-60"
            style={{ opacity: 0.35, color: 'inherit' }}
          >
            Instagram
          </a>
        </div>

        <p className="text-[11px] md:text-[12px]" style={{ opacity: 0.35 }}>We Believe — Less is always more</p>
      </div>
    </footer>
  );
};
