import React from 'react';

interface Props {
  title: string;
  description: string;
  link?: string;
  techs?: string[];
}

export default function ProjectCard({ title, description, link = '#', techs = [] }: Props) {
  return (
    <article className="rounded-lg border border-gray-800 bg-gray-850 p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>

      {techs.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {techs.map(t => (
            <span key={t} className="rounded px-2 py-1 text-xs bg-gray-800 text-gray-300">{t}</span>
          ))}
        </div>
      )}

      <div className="mt-4">
        <a href={link} className="inline-block rounded bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-500">View</a>
      </div>
    </article>
  );
}
