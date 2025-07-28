import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [rocketLaunched, setRocketLaunched] = useState(false);
  const [rocketVisible, setRocketVisible] = useState(true);
  const hasLaunched = useRef(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    const totalDuration = 5000;
    const steps = 100;
    const intervalTime = totalDuration / steps;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + increment;

        if (newProgress >= 100 && !hasLaunched.current) {
          hasLaunched.current = true;
          setTimeout(() => {
            setRocketLaunched(true);
            setTimeout(() => {
              setRocketVisible(false);
            }, 1200);
          }, 500);
          return 100;
        }

        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);

    const container = lottieRef.current;
    const player = document.createElement("lottie-player");
    player.setAttribute("src", ""); // ganti link JSON kamu
    player.setAttribute("background", "transparent");
    player.setAttribute("speed", "1");
    player.setAttribute("loop", "");
    player.setAttribute("autoplay", "");
    player.setAttribute("mode", "segments");
    player.setAttribute("segments", "[50,175]");
    player.style.width = "100%";
    player.style.height = "100%";

    container.appendChild(player);

    return () => {
      container.removeChild(player);
      document.body.removeChild(script);
    };
  }, []);

  const getRocketY = () => {
    if (rocketLaunched) return -1000;
    return -(loadingProgress * 0.5);
  };

  const getRocketScale = () => {
    if (rocketLaunched) return 1.2;
    return 1 + (loadingProgress * 0.001);
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
          <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
            <motion.div
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 relative flex-shrink-0"
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{
                y: getRocketY(),
                scale: getRocketScale(),
                opacity: rocketVisible ? 1 : 0
              }}
              transition={{
                duration: rocketLaunched ? 1.2 : 0.1,
                ease: rocketLaunched ? [0.2, 0.8, 0.4, 1] : "easeOut"
              }}
              onAnimationComplete={handleRocketAnimationComplete}
            >
              <div ref={lottieRef} className="w-full h-full" />

              {loadingProgress > 20 && rocketVisible && !rocketLaunched && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-4 h-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full blur-sm"></div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="text-center mt-4 sm:mt-6"
              animate={rocketLaunched ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h1 className="text-xl sm:text-xl md:text-4xl font-bold text-slate-800 mb-2">
                Hello there 👋
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                {loadingProgress >= 100 
                  ? 'Ready to Launch!' 
                  : loadingProgress > 50 
                    ? 'Almost there...' 
                    : 'Getting the website ready..'
                }
              </p>
            </motion.div>

            <motion.div
              className="w-full px-2 sm:px-4 mt-6 sm:mt-8"
              animate={rocketLaunched ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{
                    duration: 0.1,
                    ease: "easeOut"
                  }}
                >
                  {loadingProgress < 100 && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {loadingProgress > 80 && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                      animate={{
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
              </div>
              <div className="flex justify-between mt-2 text-xs sm:text-sm text-slate-500">
                <span>
                  {loadingProgress >= 100 
                    ? 'Launch Ready!' 
                    : loadingProgress > 75 
                      ? 'Finalizing...' 
                      : loadingProgress > 25 
                        ? 'Loading...' 
                        : 'Initializing...'
                  }
                </span>
                <span>{Math.min(100, Math.round(loadingProgress))}%</span>
              </div>
            </motion.div>

            <AnimatePresence>
              {loadingProgress < 100 && (
                <motion.div
                  className="mt-6 sm:mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.8, 1, 0.8],
                    rotate: [0, 360]
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </motion.div>
              )}
            </AnimatePresence>

            {loadingProgress >= 100 && !rocketLaunched && (
              <motion.div
                className="mt-6 sm:mt-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  scale: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
                  System Ready - Launching...
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
