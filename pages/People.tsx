import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProfileCard } from '../components/ProfileCard';
import { TeamMember } from '../types';

export const People: React.FC = () => {
  const leadership: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      role: 'PI',
      institution: 'SRM Institute of Science & Technology',
      bio: 'Professor of Computer Science specializing in Algorithmic Fairness and AI Ethics. Leading the technical audit component of the study.',
      imageUrl: 'https://picsum.photos/400/400?random=1'
    },
    {
      id: '2',
      name: 'Dr. Anita Sharma',
      role: 'Co-PI',
      institution: 'Panjab University, Chandigarh',
      bio: 'Sociologist with expertise in digital governance in North India. Leading the field surveys in Haryana and Chandigarh.',
      imageUrl: 'https://picsum.photos/400/400?random=2'
    }
  ];

  const researchers: TeamMember[] = [
    {
      id: '3',
      name: 'Vikram Singh',
      role: 'Researcher',
      institution: 'SRM Institute',
      imageUrl: 'https://picsum.photos/300/400?random=3'
    },
    {
      id: '4',
      name: 'Priya Venkatesh',
      role: 'Researcher',
      institution: 'SRM Institute',
      imageUrl: 'https://picsum.photos/300/400?random=4'
    },
    {
      id: '5',
      name: 'Rahul Mehta',
      role: 'Intern',
      institution: 'Panjab University',
      imageUrl: 'https://picsum.photos/300/400?random=5'
    },
    {
      id: '6',
      name: 'Sneha Gupta',
      role: 'Intern',
      institution: 'SRM Institute',
      imageUrl: 'https://picsum.photos/300/400?random=6'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading title="The Team" subtitle="Meet the interdisciplinary team behind the project." />
      
      {/* Leadership Section */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Principal Investigators
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {leadership.map(member => (
            <ProfileCard key={member.id} member={member} featured={true} />
          ))}
        </div>
      </div>

      {/* Researchers Grid */}
      <div>
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Research Associates & Interns
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {researchers.map(member => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};