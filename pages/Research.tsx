import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FileText, Download } from 'lucide-react';

export const Research: React.FC = () => {
  const publications = [
    {
      id: '1',
      category: 'Policy Brief',
      title: 'Digital Exclusion in Rural Haryana: A 2024 Snapshot',
      date: 'March 2025',
      summary: 'An analysis of biometric authentication failures in PDS shops across 4 districts in Haryana, highlighting a 12% failure rate among elderly beneficiaries.'
    },
    {
      id: '2',
      category: 'EAMI Index',
      title: 'The E-Governance Algorithmic Maturity Index (EAMI) v1.0',
      date: 'January 2025',
      summary: 'A proposed framework for auditing state government websites for compliance with WCAG 2.1 and algorithmic transparency norms.'
    },
    {
      id: '3',
      category: 'Field Data',
      title: 'Trust Metrics: Comparative Survey Data (TN vs Haryana)',
      date: 'December 2024',
      summary: 'Raw dataset of the pilot survey covering 500 respondents. Variables include digital literacy, trust in local administration, and smartphone usage.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading 
        title="Research & Impact" 
        subtitle="Disseminating findings to policymakers, academia, and civil society."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Main Content List */}
        <div className="lg:col-span-2 space-y-8">
          {publications.map((pub) => (
            <div key={pub.id} className="bg-white p-8 border-l-4 border-bronze-500 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-navy-900 uppercase tracking-widest bg-cream-200 px-2 py-1 mb-3 inline-block">
                  {pub.category}
                </span>
                <span className="text-sm text-gray-500 font-serif italic">{pub.date}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">{pub.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pub.summary}
              </p>
              <button className="text-bronze-600 font-bold text-sm flex items-center gap-2 hover:text-navy-900 transition-colors">
                <FileText size={16} /> Read Full Paper
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-navy-900 text-white p-8 rounded-sm mb-8">
            <h3 className="font-serif text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get quarterly updates on the EAMI Index and policy recommendations.
            </p>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 bg-navy-800 border border-navy-700 text-white text-sm mb-3 focus:outline-none focus:border-bronze-500"
            />
            <button className="w-full bg-bronze-500 text-white font-bold py-2 text-sm hover:bg-bronze-600 transition">
              Subscribe
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-8">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm text-gray-600 group cursor-pointer">
                <span className="group-hover:text-bronze-600 transition">Annual Report 2024</span>
                <Download size={14} />
              </li>
              <li className="flex items-center justify-between text-sm text-gray-600 group cursor-pointer">
                <span className="group-hover:text-bronze-600 transition">Questionnaire Template (Eng/Hindi)</span>
                <Download size={14} />
              </li>
              <li className="flex items-center justify-between text-sm text-gray-600 group cursor-pointer">
                <span className="group-hover:text-bronze-600 transition">ICSSR Grant Proposal Extract</span>
                <Download size={14} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};