import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { JobCard } from '../components/JobCard';
import { JobOpportunity } from '../types';

export const Opportunities: React.FC = () => {
  const jobs: JobOpportunity[] = [
    {
      id: '1',
      title: 'Senior Research Fellow (Sociology)',
      type: 'Full-time',
      location: 'Chandigarh / Fieldwork in Haryana',
      deadline: '15th Oct 2025',
      description: 'We are seeking a PhD scholar with experience in qualitative field surveys. The candidate will lead the ethnographic study in rural districts of Haryana. Proficiency in Hindi is mandatory.'
    },
    {
      id: '2',
      title: 'Project Associate (Data Science)',
      type: 'Full-time',
      location: 'SRM Institute, Chennai',
      deadline: '20th Oct 2025',
      description: 'Responsible for scraping public governance data and running bias detection algorithms. Experience with Python, Pandas, and fairness toolkits (AIF360) is preferred.'
    },
    {
      id: '3',
      title: 'Field Investigator Intern',
      type: 'Internship',
      location: 'Remote / Hybrid (Tamil Nadu)',
      deadline: 'Rolling Basis',
      description: 'Assist in conducting surveys at Common Service Centres (CSCs). Ideal for undergraduate students in Social Work or Public Policy. Stipend available.'
    }
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading 
          title="Opportunities" 
          subtitle="Join our interdisciplinary team. We are looking for researchers passionate about AI ethics and public policy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* Filters Column (Visual only for now) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white p-6 rounded-sm shadow-sm sticky top-28">
              <h3 className="font-serif font-bold text-lg mb-4 text-navy-900">Filter</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-600 mb-2">Location</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-bronze-500 focus:ring-bronze-500" />
                    <span className="text-sm text-gray-600">Chennai (SRM)</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-bronze-500 focus:ring-bronze-500" />
                    <span className="text-sm text-gray-600">Chandigarh/Haryana</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-600 mb-2">Role Type</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-bronze-500 focus:ring-bronze-500" />
                    <span className="text-sm text-gray-600">Full-time</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-bronze-500 focus:ring-bronze-500" />
                    <span className="text-sm text-gray-600">Internship</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="lg:col-span-2 space-y-6">
             {jobs.map(job => (
               <JobCard key={job.id} job={job} />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};