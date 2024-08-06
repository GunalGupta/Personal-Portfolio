import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    side: 'left' | 'right';
  }

const ExperienceCard: React.FC<ExperienceItem> = ({ title, company, period, description, skills, side }) => (
  <div className={`flex w-full mb-12 ${side === 'left' ? 'justify-end' : 'justify-start'} relative`}>
    <Card className={`w-5/6 max-w-xl ${side === 'left' ? 'mr-4' : 'ml-4'}`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{company} | {period}</p>
        <p className="mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ExperienceCard;