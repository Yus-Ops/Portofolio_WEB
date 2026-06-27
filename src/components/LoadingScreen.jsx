import React from 'react';
import { Sparkles } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        
        {/* Main content */}
        <div className="relative flex flex-col items-center gap-6 p-8">
          {/* Spinner with gradient border */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-slate-700 border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin [animation-delay:-0.3s]"></div>
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin [animation-delay:-0.5s]"></div>
            
            {/* Sparkle icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
          </div>
          
          {/* Loading text with subtle glow */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded blur opacity-30"></div>
            <span className="relative text-slate-300 text-lg font-medium tracking-wider flex items-center gap-2">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Loading Innovation
              </span>
            </span>
          </div>
          
          {/* Progress indicator */}
          <div className="w-40 h-1.5 bg-slate-700 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Animation keyframes (in JSX for Next.js compatibility) */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; transform: translateX(0); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 100%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;