import React from 'react';
import { experiences } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Professional Experience</h1>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
