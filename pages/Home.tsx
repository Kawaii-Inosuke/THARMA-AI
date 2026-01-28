import React from 'react';
import { ArrowRight, MapPin, Train, Scale, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] bg-navy-900 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg.jpg"
            alt="Citizens Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-900/40"></div>
        </div>

        <div className="relative z-10 w-fit mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
          <div className="inline-block px-4 py-1.5 border border-[#D4B483] text-[#D4B483] text-sm font-inter font-normal uppercase tracking-[0.2em] mb-6">
            ICSSR LONGITUDINAL STUDY
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
            THARMA AI
          </h1>

          <div className="text-2xl text-white font-sans font-semibold mb-12 max-w-5xl">
            <p className="leading-snug">Trustworthy, Accountable, Responsible Machine AI</p>
            <p className="leading-snug">Meaning: Ethical machine intelligence.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <Link
              to="/project"
              className="px-10 py-4 text-lg bg-[#C19A6B] hover:bg-[#A48155] text-white font-semibold transition-colors text-center"
            >
              Explore the Project
            </Link>
            <Link
              to="/research"
              className="px-10 py-4 text-lg bg-transparent border border-white text-white hover:bg-white/10 font-semibold transition-all text-center"
            >
              Read Policy Briefs
            </Link>
          </div>
        </div>
      </section>

      {/* Bridging Policy & Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
              Bridging Policy & Technology
            </h2>
            <p className="text-gray-600 max-w-5xl mx-auto mb-6 font-sans text-xl">
              Examining how AI ethics evolve in real-world governance across India's diverse regional contexts
            </p>
            <div className="w-24 h-1.5 bg-[#C19A6B] mx-auto"></div>
          </div>

          <div className="prose prose-xl mx-auto text-gray-700 font-serif leading-loose mb-16 max-w-7xl text-justify">
            <p>
              <span className="float-left text-7xl font-bold text-[#C19A6B] mr-3 mt-[-8px] leading-none font-serif">I</span>
              ndia accelerates its digital transformation through the Digital India initiative. AI is increasingly deployed in public services from biometric welfare systems and healthcare triage to predictive policing and smart city surveillance. While promising efficiency and scale, these technologies raise critical questions about fairness, transparency, accountability, and public trust. This study bridges the gap between technical innovation and social impact by examining how AI ethics evolve in real-world governance contexts across diverse Indian regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-navy-900 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 text-center">Digital Governance and <span className="whitespace-nowrap">E-Governance</span></h3>
              <p className="text-lg text-gray-600 leading-relaxed font-sans text-justify">
                Analyzing AI deployment in welfare distribution, digital health services, and administrative automation across urban, semi-urban, Delhi, Haryana-Chandigarh and Delhi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-navy-900 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 text-center">Ethical Standards and Algorithmic Governance</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-sans text-justify">
                Evaluating algorithmic fairness, transparency, and accountability mechanisms through technical audits using SHAP, LIME, and Fairlearn, combined with citizen perception surveys and institutional assessments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-navy-900 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 text-center">Regional Dynamics and Comparative Analysis</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-sans text-justify">
                Comparing North-South India's administrative frameworks, digital literacy levels, linguistic diversity, and governance cultures to shape AI ethics in practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Regions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Study Regions
            </h2>
            <div className="w-24 h-1.5 bg-[#C19A6B] mb-4"></div>
            <p className="text-gray-500 font-sans text-lg">Field Study Locations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="relative">
              <img
                src="/IndiaMap.svg"
                alt="India Map showing study regions"
                className="w-full max-w-md mx-auto lg:mx-0 opacity-80"
              />
            </div>

            {/* Study Region Cards */}
            <div className="space-y-6">
              {/* Delhi Card */}
              <div className="bg-white p-6 shadow-sm border-l-4 border-[#C19A6B] hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">Delhi</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans text-justify">
                  Advanced digital infrastructure with AI deployment in smart city initiatives, e-governance portals, and predictive policing systems.
                </p>
                <Link to="/research" className="inline-flex items-center gap-2 text-bronze-600 text-lg font-medium hover:text-bronze-700 transition-colors">
                  Read Full Paper
                </Link>
              </div>

              {/* Tamil Nadu Card */}
              <div className="bg-white p-6 shadow-sm border-l-4 border-[#C19A6B] hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">Tamil Nadu</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans text-justify">
                  Leading e-governance through TNeGA with AI in biometric welfare, healthcare, and policing across Saidapet, Chennai.
                </p>
                <Link to="/research" className="inline-flex items-center gap-2 text-bronze-600 text-lg font-medium hover:text-bronze-700 transition-colors">
                  Read Full Paper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};