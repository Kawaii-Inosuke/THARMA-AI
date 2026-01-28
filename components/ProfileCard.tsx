import React from 'react';
import { TeamMember } from '../types';

interface ProfileCardProps {
  member: TeamMember;
  featured?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ member, featured = false }) => {
  return (
    <div className={`flex flex-col ${featured ? 'md:flex-row bg-white border border-gray-200 shadow-sm' : 'bg-transparent'}`}>
      {/* Image Container */}
      <div className={`${featured ? 'md:w-1/3' : 'w-full mb-4'} relative overflow-hidden group`}>
        <img 
          src={member.imageUrl || "https://picsum.photos/400/500"} 
          alt={member.name}
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${featured ? 'min-h-[300px]' : 'aspect-[3/4] rounded-sm'}`} 
        />
        {!featured && (
             <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        )}
      </div>

      {/* Content Container */}
      <div className={`${featured ? 'md:w-2/3 p-8 flex flex-col justify-center' : ''}`}>
        <p className="text-bronze-600 text-sm font-bold uppercase tracking-wider mb-1">
          {member.role}
        </p>
        <h3 className={`font-serif font-bold text-navy-900 mb-2 ${featured ? 'text-3xl' : 'text-xl'}`}>
          {member.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 font-medium border-l-2 border-gray-200 pl-3">
          {member.institution}
        </p>
        
        {member.bio && (
          <p className="text-gray-600 font-sans leading-relaxed text-sm">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};