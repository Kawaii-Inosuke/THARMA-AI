import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, User, Share2, ExternalLink } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/research" />;
  }

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      {/* Progress Bar (Subtle) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
        <div 
          className="h-full bg-bronze-500 transition-all duration-300"
          style={{ width: '0%' }} // Could implement scroll progress here
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Navigation */}
        <Link 
          to="/research" 
          className="inline-flex items-center text-bronze-600 hover:text-bronze-700 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans font-medium">Back to Research</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-navy-900 text-white text-xs font-sans uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm font-sans gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-bronze-100 rounded-full flex items-center justify-center text-bronze-600 font-bold border border-bronze-200">
                {post.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-navy-900 font-sans font-bold text-sm">{post.author}</span>
                <span className="text-gray-500 font-sans text-xs">Research Project</span>
              </div>
            </div>
            <button className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-navy-900 border border-transparent hover:border-gray-200">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-800 font-sans leading-relaxed">
          {post.content.map((paragraph, index) => {
            // Check if it's a sub-heading (short, no period at end, or contains colon)
            const isHeading = 
              (paragraph.length < 100 && (paragraph.includes(':') || !paragraph.endsWith('.'))) || 
              paragraph.startsWith('●') ||
              /^\d\./.test(paragraph);

            if (isHeading) {
              if (paragraph.startsWith('●')) {
                return (
                  <div key={index} className="flex gap-3 mb-6">
                    <span className="text-bronze-500 font-bold">•</span>
                    <p className="m-0 italic">{paragraph.substring(1).trim()}</p>
                  </div>
                );
              }
              if (/^\d\./.test(paragraph)) {
                 return (
                  <h3 key={index} className="text-xl font-serif font-bold text-navy-900 mt-8 mb-4 border-l-4 border-bronze-500 pl-4 bg-white/50 py-2">
                    {paragraph}
                  </h3>
                );
              }
              return (
                <h2 key={index} className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mt-12 mb-6">
                  {paragraph}
                </h2>
              );
            }

            // Quote detection
            if (paragraph.startsWith('"') || paragraph.includes('—')) {
              return (
                <blockquote key={index} className="my-10 border-l-8 border-bronze-500 pl-8 py-4 bg-white shadow-sm italic font-serif text-2xl text-navy-800 leading-relaxed">
                  {paragraph}
                </blockquote>
              );
            }

            return (
              <p key={index} className="mb-6 text-justify">
                {paragraph}
              </p>
            );
          })}
          
          <div className="mt-12 pt-6 border-t border-gray-200 flex justify-end">
            <p className="text-gray-500 font-sans italic text-sm">
              Written by: <span className="font-bold text-navy-900 not-italic">{post.author}</span>
            </p>
          </div>
        </article>

        {/* External Link Button */}
        {post.externalLink && (
          <div className="mt-12 text-center pb-8">
            <a 
              href={post.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-bronze-500 text-bronze-600 font-sans font-bold hover:bg-bronze-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
              Read this post on Blogger
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="bg-navy-900 p-8 text-white rounded-sm relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">About the Research</h3>
              <p className="text-gray-300 font-sans max-w-2xl leading-relaxed">
                This blog is part of the ICSSR-funded longitudinal study "Tharma AI," investigating the ethical dimensions of artificial intelligence in India's digital governance landscape.
              </p>
              <Link to="/project" className="inline-block mt-6 text-bronze-400 hover:text-bronze-300 font-sans font-bold flex items-center gap-2 transition-colors">
                Learn more about the project <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
            {/* Abstract Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-bronze-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          </div>
        </footer>
      </div>
    </div>
  );
};
