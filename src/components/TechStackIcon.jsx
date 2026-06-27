import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-sm hover:shadow-lg">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
        <img
          src={TechStackIcon}
          alt={`${Language} icon`}
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
      <span className="text-slate-700 font-semibold text-sm md:text-base tracking-wide group-hover:text-emerald-600 transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 