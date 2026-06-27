import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full h-full">
      {/* Glow gradient di belakang kartu saat hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition duration-500" />

      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-emerald-500/10 group-hover:border-emerald-300">
        {/* Aksen garis atas yang memanjang saat hover */}
        <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-500 z-10" />

        {/* Gambar proyek */}
        <div className="relative overflow-hidden">
          <img
            src={Img}
            alt={Title}
            className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Konten */}
        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
            {Title}
          </h3>

          <p className="mt-2 text-slate-600 text-sm leading-relaxed line-clamp-2">
            {Description}
          </p>

          <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
            {ProjectLink ? (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
                className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-slate-400 text-sm">Demo Not Available</span>
            )}

            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium shadow-sm hover:shadow-md hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Details</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
              </Link>
            ) : (
              <span className="text-slate-400 text-sm">Details Not Available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
