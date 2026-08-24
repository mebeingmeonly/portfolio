import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 'p01',
    title: 'Iro Zukan',
    category: 'A curated library of traditional Japanese palettes for modern digital design.',
    url: 'https://iro-zukan.vercel.app/',
  },
  {
    id: 'p02',
    title: 'The Blueprint Base',
    category: 'Essential assets and foundations to help designers build better, faster.',
    url: 'https://www.theblueprintbase.space/',
  },
  {
    id: 'p03',
    title: 'Gray Matter',
    category: 'Deep dives into the psychology and logic behind world-class user experiences.',
    url: 'https://graymatterux.vercel.app/',
  },
];

export const Products: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-5 md:px-6 py-20 md:py-32 bg-black cursor-default">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-[10px] uppercase tracking-[0.5em]" style={{ opacity: 0.35 }}>Selected Products</h2>
      </motion.div>

      <div>
        {products.map((product, idx) => (
          <motion.a
            key={product.id}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            className="block border-b no-underline"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              opacity: active !== null && active !== idx ? 0.25 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            <div className="flex items-start gap-4 md:gap-14 py-6 md:py-7">
              {/* Number */}
              <span
                className="text-[10px] md:text-xs font-mono w-6 md:w-7 shrink-0 mt-1 tabular-nums"
                style={{
                  opacity: active === idx ? 1 : 0.3,
                  color: active === idx ? 'rgb(255,100,30)' : 'inherit',
                  transition: 'color 0.3s ease, opacity 0.3s ease',
                }}
              >
                {product.id}
              </span>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight leading-none"
                  style={{
                    transform: active === idx ? 'translateX(6px)' : 'translateX(0)',
                    color: active === idx ? 'rgb(255,100,30)' : 'inherit',
                    transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), color 0.3s ease',
                  }}
                >
                  {product.title}
                </h3>

                <AnimatePresence initial={false}>
                  {active === idx && (
                    <motion.p
                      key="desc"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden text-sm md:text-base leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '36rem' }}
                    >
                      {product.category}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Arrow */}
              <motion.span
                animate={{
                  opacity: active === idx ? 0.7 : 0.15,
                  x: active === idx ? 0 : -4,
                }}
                transition={{ duration: 0.25 }}
                className="text-base md:text-lg self-start mt-0.5 shrink-0"
              >
                ↗
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
