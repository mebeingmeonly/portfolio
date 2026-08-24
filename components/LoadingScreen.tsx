
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'manifesting'>('counting');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');

    let current = 0;
    const interval = setInterval(() => {
      const remaining = 100 - current;
      const increment = Math.max(1, Math.floor(remaining / 8) + (Math.random() > 0.6 ? 2 : 1));
      
      current += increment;
      
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        
        setTimeout(() => {
          setPhase('manifesting');
          
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              document.body.classList.remove('is-loading');
              onLoadingComplete();
            }, 1200);
          }, 1600);
        }, 600);
      }
      setCount(current);
    }, 65);

    return () => {
      clearInterval(interval);
      document.body.classList.remove('is-loading');
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-auto overflow-hidden bg-black">
      {/* Split Panels Reveal */}
      <div 
        className={`absolute left-0 w-1/2 h-full bg-zinc-950 transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExiting ? '-translate-x-full' : 'translate-x-0'
        }`}
      />
      <div 
        className={`absolute right-0 w-1/2 h-full bg-zinc-950 transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] delay-[40ms] ${
          isExiting ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Main Text Container */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-4">
        <div 
          className={`flex flex-row flex-nowrap items-baseline whitespace-nowrap text-4xl md:text-7xl font-semibold text-white tracking-tighter transition-all duration-1000 ${
            isExiting ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          {/* Dynamic Slot: Perfect Alignment Anchor */}
          <div className="relative inline-block text-center mr-[0.08em]">
            {/* 
              This hidden span acts as a "layout anchor". 
              It ensures the container has the exact width of "Suhas" and 
              maintains the correct baseline for the parent flex container.
            */}
            <span className="invisible pointer-events-none select-none" aria-hidden="true">
              Suhas
            </span>

            {/* Counter Layer (No Percentage Symbol) */}
            <span
              className={`absolute inset-0 flex items-baseline justify-center tabular-nums transition-all duration-500 ease-in-out ${
                phase === 'counting' ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'
              }`}
              style={{ color: 'rgb(255,100,30)' }}
            >
              {count}
            </span>

            {/* Word Layer */}
            <span
              className={`absolute inset-0 flex items-baseline justify-center transition-all duration-700 ease-out ${
                phase === 'manifesting' ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-90'
              }`}
              style={{ color: 'rgb(255,100,30)' }}
            >
              Suhas
            </span>
          </div>

          {/* Suffix */}
          <span className="opacity-30 select-none ml-[0.08em]">Palukuri</span>
        </div>
      </div>

      <div className={`absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none transition-opacity duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};
