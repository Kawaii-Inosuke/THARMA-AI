import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
          INVESTIGATOR's BLOG
        </h1>
        <p className="text-lg font-sans leading-relaxed text-gray-600 uppercase tracking-wide">
          RESEARCH AND IMPACT
        </p>
        <div className="h-1 w-20 bg-bronze-500 mt-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 mt-12">
          <div className="group">
            <Link to="/blog/governance-gambit" className="block">
              <h2 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-bronze-500 transition-colors mb-3 leading-tight">
                Governance's Great Gambit: AI's Silent Rewrite of the Social Contract
              </h2>
            </Link>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">
              Experts warn that AI in governance is a fundamental shift in power, trust, and accountability, and not just a tech upgrade. The human counter is disappearing.
            </p>
            <Link to="/blog/governance-gambit" className="inline-flex items-center text-bronze-600 font-bold hover:gap-2 transition-all">
              Read Blog <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="group">
            <Link to="/blog/responsible-ai-global-south" className="block">
              <h2 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-bronze-500 transition-colors mb-3 leading-tight">
                Responsible Al in Global South: Ethics and Inclusion
              </h2>
            </Link>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">
              Learn about challenges in building ethical Al in the Global South, focusing on fairness, inclusiveness, cultural relevance, and responsible data practices.
            </p>
            <Link to="/blog/responsible-ai-global-south" className="inline-flex items-center text-bronze-600 font-bold hover:gap-2 transition-all">
              Read Blog <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="group">
            <Link to="/blog/ethics-ai-india" className="block">
              <h2 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-bronze-500 transition-colors mb-3 leading-tight">
                Ethics of AI in Indian E-Governance: Trust & Fairness
              </h2>
            </Link>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">
              Explore AI ethics in India’s e-governance, focusing on trust, fairness, accountability, and the impact of algorithmic decision-making on citizens.
            </p>
            <Link to="/blog/ethics-ai-india" className="inline-flex items-center text-bronze-600 font-bold hover:gap-2 transition-all">
              Read Blog <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};