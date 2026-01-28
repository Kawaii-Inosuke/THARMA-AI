import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { JobOpportunity } from '../types';

interface JobCardProps {
  job: JobOpportunity;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-bronze-500"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block px-2 py-1 bg-cream-200 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2 rounded-sm">
            {job.type}
          </span>
          <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-bronze-600 transition-colors">
            {job.title}
          </h3>
        </div>
      </div>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 font-medium">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-bronze-500" />
          {job.location}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={16} className="text-bronze-500" />
          Apply by {job.deadline}
        </div>
      </div>

      <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-navy-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-bronze-600 transition-colors duration-300 rounded-sm">
        View Details & Apply <ArrowRight size={16} />
      </button>
    </div>
  );
};