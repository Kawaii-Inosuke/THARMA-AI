import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Target, Search, BarChart3, Scale } from 'lucide-react';

export const Project: React.FC = () => {
  return (
    <div className="bg-cream-100 pb-24">
      <div className="bg-navy-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Project</h1>
          <p className="text-xl text-cream-200 font-light max-w-2xl mx-auto">
            An interdisciplinary inquiry into the mechanisms of digital governance.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
          <SectionHeading title="Research Scope" subtitle="Investigating the ethics of algorithms in public service delivery." />
          
          <div className="prose prose-lg text-gray-700 font-sans mb-12">
            <p>
              The rapid digitization of public services in India—ranging from identity verification (Aadhaar) to welfare distribution (PDS)—has created a massive "E-Governance" ecosystem. However, the efficiency of these systems often masks underlying issues of algorithmic bias, digital exclusion, and lack of accountability.
            </p>
            <p>
              Funded by the <strong>ICSSR (Grant #ICSSR-LSS-2025-1938)</strong>, this 5-year longitudinal study aims to audit these systems. We compare the mature digital infrastructure of <strong>Tamil Nadu</strong> with the rapidly evolving frameworks in <strong>Haryana and Chandigarh</strong> to understand how regional policy variances impact citizen trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <div className="bg-bronze-100 p-2 rounded-sm text-bronze-600"><Target /></div>
                Methodology
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-4">
                  <span className="font-bold text-navy-900 min-w-[100px]">Survey Data:</span>
                  <span>Large-scale quantitative surveys (N=5000) across rural and urban districts to measure "Trust in Tech".</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-navy-900 min-w-[100px]">AI Audits:</span>
                  <span>Technical "Black Box" testing of publicly accessible government portals for accessibility and bias.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-navy-900 min-w-[100px]">Ethnography:</span>
                  <span>Deep-dive interviews with bureaucrats and beneficiaries at Common Service Centres (CSCs).</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream-200 p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">Key Themes</h3>
              <div className="space-y-6">
                <div>
                   <h4 className="font-bold text-navy-800 flex items-center gap-2"><Scale size={18}/> Fairness</h4>
                   <p className="text-sm text-gray-600 mt-1">Does the algorithm deny benefits to eligible citizens due to data errors?</p>
                </div>
                <div>
                   <h4 className="font-bold text-navy-800 flex items-center gap-2"><Search size={18}/> Transparency</h4>
                   <p className="text-sm text-gray-600 mt-1">Is the logic of the decision-making process explainable to the layperson?</p>
                </div>
                <div>
                   <h4 className="font-bold text-navy-800 flex items-center gap-2"><BarChart3 size={18}/> Accountability</h4>
                   <p className="text-sm text-gray-600 mt-1">Who is responsible when the "system" makes a mistake?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};