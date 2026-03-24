import React from 'react';
import { TeamMember } from '../types';

interface ProfileCardProps {
  member: TeamMember;
  featured?: boolean;
  variant?: 'default' | 'featured' | 'compact-horizontal';
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ member, featured = false, variant = 'default' }) => {
  // Determine the effective mode. If featured legacy prop is true, it overrides to 'featured'
  const mode = featured ? 'featured' : variant;

  const isHorizontal = mode === 'featured' || mode === 'compact-horizontal';
  const isLarge = mode === 'featured';

  return (
    <div className={`flex flex-col ${isHorizontal ? 'md:flex-row bg-white border border-gray-200 shadow-sm' : 'bg-transparent'}`}>
      {/* Image Container */}
      <div className={`${isHorizontal ? (isLarge ? 'md:w-2/5' : 'md:w-1/3') : 'w-full mb-4'} relative overflow-hidden group`}>
        <img
          src={member.imageUrl || "https://picsum.photos/400/500"}
          alt={member.name}
          className={`w-full h-full object-cover ${isHorizontal ? (isLarge ? 'min-h-[350px]' : 'h-full min-h-[250px]') : 'aspect-[3/4] rounded-sm'}`}
          style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
        />
        {!isHorizontal && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        )}
      </div>

      {/* Content Container */}
      <div className={`${isHorizontal ? (isLarge ? 'md:w-3/5 p-10' : 'md:w-3/5 p-8') + ' flex flex-col justify-center' : ''}`}>
        <div className={`flex items-center gap-2 ${isLarge ? 'mb-2' : 'mb-1'}`}>
          <p className={`text-bronze-600 font-bold uppercase tracking-wider ${isLarge ? 'text-base' : 'text-sm'}`}>
            {member.role}
          </p>
          {member.isHead && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-navy-900 text-white uppercase tracking-wider">
              Head
            </span>
          )}
        </div>
        <h3 className={`font-serif font-bold text-navy-900 ${isLarge ? 'text-4xl mb-3' : 'text-xl mb-2'}`}>
          {member.name}
        </h3>
        {member.domain && (
          <p className={`text-bronze-500 font-semibold ${isLarge ? 'text-base mb-2' : 'text-xs mb-2'}`}>
            {member.domain}
          </p>
        )}
        <p className={`text-gray-500 font-medium border-l-2 border-gray-200 ${isLarge ? 'text-lg mb-4 pl-4' : 'text-sm mb-2 pl-3'}`}>
          {member.institution}
        </p>

        {member.bio && (
          <p className={`text-gray-600 font-sans leading-relaxed ${isLarge ? 'text-lg' : 'text-sm'}`}>
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};