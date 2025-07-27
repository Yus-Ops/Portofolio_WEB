import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [rocketLaunched, setRocketLaunched] = useState(false);
  const hasLaunched = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const increment = Math.min(5 + Math.random() * 10, 100 - prev);
        const newProgress = prev + increment;

        if (newProgress >= 100 && !hasLaunched.current) {
          hasLaunched.current = true;
          setTimeout(() => {
            setRocketLaunched(true);
          }, 500);
          return 100;
        }

        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const rocketVariants = {
    idle: { y: 0, opacity: 1, scale: 1 },
    launch: {
      y: -1000,
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  const handleRocketAnimationComplete = () => {
    if (rocketLaunched) {
      onLoadingComplete?.();
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center min-h-screen p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        >
          {/* Main content container */}
          <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
            {/* Rocket Animation */}
            <motion.div
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 relative flex-shrink-0"
              variants={rocketVariants}
              animate={rocketLaunched ? 'launch' : 'idle'}
              onAnimationComplete={handleRocketAnimationComplete}
            >
              <iframe
                src="https://lottie.host/embed/a0538f06-8774-4822-bea1-34a0f640898e/huX3BOH9m9.lottie"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: 'transparent'
                }}
                allowFullScreen
              />
            </motion.div>

            {/* Text with exit animation */}
            <motion.div
              className="text-center mt-4 sm:mt-6"
              animate={rocketLaunched ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-800 mb-2">
                Machine Learning
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                {loadingProgress >= 100 ? 'Ready to Launch!' : 'Preparing Innovative Solutions'}
              </p>
            </motion.div>

            {/* Progress Bar with exit animation */}
            <motion.div
              className="w-full px-2 sm:px-4 mt-6 sm:mt-8"
              animate={rocketLaunched ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {loadingProgress < 100 && (
                    <motion.div
                      className="absolute right-0 top-0 h-full w-1 bg-white"
                      animate={{
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
              </div>
              <div className="flex justify-between mt-2 text-xs sm:text-sm text-slate-500">
                <span>
                  {loadingProgress >= 100 ? 'Launch Ready!' : 'Loading...'}
                </span>
                <span>{Math.min(100, Math.round(loadingProgress))}%</span>
              </div>
            </motion.div>

            {/* Sparkles - Only while loading */}
            <AnimatePresence>
              {loadingProgress < 100 && (
                <motion.div
                  className="mt-6 sm:mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading complete indicator */}
            {loadingProgress >= 100 && !rocketLaunched && (
              <motion.div
                className="mt-6 sm:mt-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  System Ready
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;