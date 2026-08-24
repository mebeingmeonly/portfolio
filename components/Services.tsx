import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Product Design',
    description: 'I design intuitive, user-centric interfaces and digital products that solve real problems, balancing clean aesthetics with functional ease.',
  },
  {
    id: '02',
    title: 'Design Systems',
    description: 'I build comprehensive, scalable component libraries and design tokens that bridge the gap between design and engineering.',
  },
  {
    id: '03',
    title: 'Frontend Development',
    description: 'I develop responsive, high-performance web applications using modern tools like TypeScript, React, and Tailwind CSS.',
  },
  {
    id: '04',
    title: 'Brand Identity',
    description: 'I shape unique and cohesive brand assets, logos, and visual stories that convey clarity, trust, and professional value.',
  },
  {
    id: '05',
    title: 'Interaction & Motion',
    description: 'I bring static designs to life with micro-interactions, custom transitions, and purposeful motion design that enhances usability.',
  },
  {
    id: '06',
    title: 'Consultation & Strategy',
    description: 'I collaborate with startups and founders to define product roadmaps, evaluate usability, and build design-led solutions.',
  },
];

export const Services: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (idx: number) => setActive(active === idx ? null : idx);

  return (
    <section className="px-5 md:px-6 py-20 md:py-32 cursor-default" style={{ backgroundColor: 'rgb(10,10,10)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-[10px] uppercase tracking-[0.5em]" style={{ opacity: 0.35 }}>Services</h2>
      </motion.div>

      <div>
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            /* On mobile: tap to toggle. On desktop: hover */
            onMouseEnter={() => { if (window.innerWidth >= 768) setActive(idx); }}
            onMouseLeave={() => { if (window.innerWidth >= 768) setActive(null); }}
            onClick={() => { if (window.innerWidth < 768) toggle(idx); }}
            className="border-b py-6 md:py-7"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              opacity: active !== null && active !== idx ? 0.25 : 1,
              transition: 'opacity 0.3s ease',
              cursor: 'default',
            }}
          >
            <div className="flex items-start gap-4 md:gap-14">
              {/* Number */}
              <span
                className="text-[10px] md:text-xs font-mono w-6 md:w-7 shrink-0 mt-1 tabular-nums"
                style={{
                  opacity: active === idx ? 1 : 0.3,
                  color: active === idx ? 'rgb(255,100,30)' : 'inherit',
                  transition: 'color 0.3s ease, opacity 0.3s ease',
                }}
              >
                {service.id}
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
                  {service.title}
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
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Arrow / expand indicator */}
              <motion.span
                animate={{
                  opacity: active === idx ? 0.7 : 0.15,
                  rotate: active === idx ? 45 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="text-base md:text-lg self-start mt-0.5 shrink-0"
              >
                +
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
