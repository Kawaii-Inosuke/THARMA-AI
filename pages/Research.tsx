import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const Research: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
          INVESTIGATOR'S BLOG
        </h1>
        <p className="text-lg font-sans leading-relaxed text-gray-600 uppercase tracking-wide">
          RESEARCH AND IMPACT
        </p>
        <div className="h-1 w-20 bg-bronze-500 mt-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group">
              <Link to={`/blog/${post.id}`} className="block">
                <h2 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-bronze-500 transition-colors mb-3 leading-tight">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 font-sans leading-relaxed mb-4 line-clamp-3">
                {post.description}
              </p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center text-bronze-600 font-bold hover:gap-2 transition-all mt-auto">
                Read Blog <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};