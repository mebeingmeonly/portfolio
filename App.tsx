import React, { useState, useCallback } from 'react';
import { Hero } from './components/Hero';
import { ImageGrid } from './components/ImageGrid';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black cursor-default">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            key="loader"
            onLoadingComplete={handleLoadingComplete}
          />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <ImageGrid />
            <Services />
            <Products />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
