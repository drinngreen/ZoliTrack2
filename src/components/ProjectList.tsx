import React, { useState } from 'react';
import { FolderClock, Plus, X } from 'lucide-react';
import type { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
  selectedProject: string;
  onSelectProject: (id: string) => void;
  onAddProject: (name: string) => void;
  onDeleteProject: (id: string) => void;
}

export function ProjectList({ 
  projects, 
  selectedProject, 
  onSelectProject,
  onAddProject,
  onDeleteProject 
}: ProjectListProps) {
  const [newProjectName, setNewProjectName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      onAddProject(newProjectName.trim());
      setNewProjectName('');
    }
  };

  const handleProjectClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onSelectProject(id);
  };

  return (
    <div className="bg-black border border-[rgb(44,212,189)]/20 rounded-lg p-6 hover:border-[rgb(44,212,189)]/40 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[rgb(44,212,189)]">
        <FolderClock size={20} />
        Progetti
      </h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="Nuova categoria..."
            className="flex-1 p-2 bg-black border border-[rgb(44,212,189)]/20 rounded-md focus:border-[rgb(44,212,189)] focus:ring-1 focus:ring-[rgb(44,212,189)] text-[rgb(44,212,189)] placeholder-[rgb(44,212,189)]/40"
          />
          <button
            type="submit"
            disabled={!newProjectName.trim()}
            className="p-2 rounded-md bg-[rgb(44,212,189)] text-black hover:bg-[rgb(35,170,151)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus size={20} />
          </button>
        </div>
      </form>

      <div className="space-y-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-300 ${
              selectedProject === project.id
                ? 'bg-[rgb(44,212,189)]/10 border border-[rgb(44,212,189)]/20'
                : 'hover:bg-[rgb(44,212,189)]/5'
            }`}
            onClick={(e) => handleProjectClick(e, project.id)}
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <span className="font-medium text-[rgb(44,212,189)]">{project.name}</span>
            </div>
            {!project.isDefault && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteProject(project.id);
                }}
                className="opacity-0 group-hover:opacity-100 text-[rgb(44,212,189)] hover:text-[rgb(35,170,151)] transition-all duration-300"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}