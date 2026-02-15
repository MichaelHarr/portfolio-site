import React from 'react';

interface Props {
  title: string;
  description: string;
  appLink?: string;
  sourceCodeLink?: string;
  techs?: string[];
}

export default function ProjectCard({ title, description, appLink = '#', sourceCodeLink = '#', techs = [] }: Props) {
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

      <div className="mt-4 flex gap-2">
        <a href={sourceCodeLink} className="inline-block rounded bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-500">Source Code</a>
        <a href={appLink} className="inline-block rounded border border-indigo-600 bg-transparent px-3 py-1 text-sm font-medium text-indigo-300 hover:bg-indigo-600 hover:text-white transition">View</a>
      </div>
    </article>
  );
}
