import React, { useRef, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [orangeActive, setOrangeActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOrangeActive(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.045), transparent 50%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const text = "Hi, I'm Suhas. I'm a designer and marketer focused on simplicity, utility, and high performance. I shape clean digital products, brand strategies, and interactive campaigns that work in real life. I believe that good design is quiet, deliberate, and always purposeful.";
  const words = text.split(" ");
  // Highlight: Hi, I'm Suhas (0,1,2), designer and marketer (5,6,7), work in real life (26,27,28,29), always purposeful (39,40)
  const orangeWords = new Set([0, 1, 2, 5, 6, 7, 26, 27, 28, 29, 39, 40]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.6 },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 6, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-8 overflow-hidden cursor-default">
      {/* Cursor glow — desktop only */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-10 hidden md:block"
        style={{ transition: 'none' }}
      />

      {/* Corner labels */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-5 md:top-8 md:left-6 text-[9px] md:text-[10px] uppercase tracking-[0.4em] select-none"
        style={{ opacity: 0.35 }}
      >
        Suhas Palukuri <span style={{ color: 'rgb(255,100,30)', opacity: 1 }}>.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-6 right-5 md:top-8 md:right-6 text-[9px] md:text-[10px] uppercase tracking-[0.4em] select-none"
        style={{ opacity: 0.35 }}
      >
        Est. 2024
      </motion.div>

      {/* Main description */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm sm:max-w-md md:max-w-xl relative z-10"
      >
        <p
          className="text-lg sm:text-xl md:text-3xl font-medium leading-[1.5] md:leading-[1.4] tracking-[-0.01em] text-justify text-justify-custom"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          {words.map((word, idx) => (
            <React.Fragment key={idx}>
              <motion.span
                variants={wordVariant}
                className="inline-block"
                animate={orangeWords.has(idx) && orangeActive ? { color: 'rgb(255,100,30)' } : { color: 'rgba(255,255,255,0.9)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {word}
              </motion.span>{" "}
            </React.Fragment>
          ))}
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 origin-top mx-auto"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,120,40,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  );
};
