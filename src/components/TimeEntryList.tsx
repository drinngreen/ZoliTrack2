import React from 'react';
import { Clock, Trash2 } from 'lucide-react';
import type { TimeEntry, Project } from '../types';

interface TimeEntryListProps {
  entries: TimeEntry[];
  projects: Project[];
  onDelete: (id: string) => void;
}

export function TimeEntryList({ entries, projects, onDelete }: TimeEntryListProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours === 0) {
      return `${remainingMinutes}m`;
    }
    return `${hours}h ${remainingMinutes}m`;
  };

  const getProjectColor = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project?.color || '#2CD4BD';
  };

  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project?.name || 'Unknown Project';
  };

  return (
    <div className="bg-black border border-[rgb(44,212,189)]/20 rounded-lg p-6 hover:border-[rgb(44,212,189)]/40 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[rgb(44,212,189)]">
        <Clock size={20} />
        Attività Recenti
      </h2>
      
      <div className="space-y-3">
        {entries.length > 0 ? (
          entries.map(entry => (
            <div
              key={entry.id}
              className="group flex items-center justify-between p-4 rounded-lg bg-black border border-[rgb(44,212,189)]/10 hover:border-[rgb(44,212,189)]/30 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getProjectColor(entry.projectId) }}
                  />
                  <span className="font-medium text-[rgb(44,212,189)]">
                    {getProjectName(entry.projectId)}
                  </span>
                </div>
                
                <p className="text-[rgb(44,212,189)]/60 text-sm">{entry.description}</p>
                
                <div className="flex items-center gap-2 mt-2 text-xs text-[rgb(44,212,189)]/40">
                  <span>{formatTime(entry.startTime)} - {formatTime(entry.endTime)}</span>
                  <span>•</span>
                  <span>{formatDuration(entry.duration)}</span>
                </div>
              </div>
              
              <button
                onClick={() => onDelete(entry.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-[rgb(44,212,189)]/60 hover:text-[rgb(44,212,189)] transition-all duration-300"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-[rgb(44,212,189)]/40">
            Non ci sono ancora attività registrate
          </div>
        )}
      </div>
    </div>
  );
}