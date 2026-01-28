import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Research } from './pages/Research';
import { People } from './pages/People';
import { Opportunities } from './pages/Opportunities';

// Placeholder components for routes not fully detailed in the task but required for navigation validity
const News = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h2 className="text-3xl font-serif text-navy-900 mb-4">News & Events</h2>
    <p className="text-gray-600">Archive coming soon.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/research" element={<Research />} />
          <Route path="/people" element={<People />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/news" element={<News />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;