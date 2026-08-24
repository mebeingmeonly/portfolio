import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  as?: string;
  href?: string;
  target?: string;
  rel?: string;
  baseDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  as = 'div',
  baseDelay = 0,
  className,
  style,
  ...rest
}) => {
  const chars = text.split('');
  const Tag = as as React.ElementType;
  return (
    <Tag className={className} style={{ ...style, display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }} {...rest}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: baseDelay + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal', display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};

export const Contact: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setTimeout(() => setVisible(true), 400);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center cursor-default overflow-hidden"
      style={{
        minHeight: '80vh',
        backgroundColor: 'rgb(10,10,10)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {visible && (
        <div className="flex flex-col items-center gap-2 px-5 text-center">
          <BlurText
            text="Got something worth building?"
            className="font-semibold tracking-tight leading-[1.08]"
            style={{ fontSize: 'clamp(28px, 5.5vw, 72px)' }}
          />
          <div className="relative inline-block">
            <BlurText
              text="Let's talk."
              as="a"
              href="https://cal.com/thesuhaspal/website-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              baseDelay={1.4}
              className="font-semibold tracking-tight leading-[1.08] no-underline transition-opacity duration-200 hover:opacity-60"
              style={{ fontSize: 'clamp(28px, 5.5vw, 72px)', color: 'rgb(255,100,30)' }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformOrigin: 'left',
                height: '2px',
                backgroundColor: 'rgb(255,100,30)',
                marginTop: '2px',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
