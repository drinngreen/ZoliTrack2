import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { ProjectList } from './components/ProjectList';
import { Timer } from './components/Timer';
import { Stats } from './components/Stats';
import { TimeEntryList } from './components/TimeEntryList';
import type { TimeEntry, Project, TimeStats } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState('default');
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [projects, setProjects] = useState<Project[]>([
    { id: 'default', name: 'Generale', color: '#2CD4BD', isDefault: true },
    { id: 'meetings', name: 'Riunioni', color: '#F59E0B' },
    { id: 'break', name: 'Pausa Caffè', color: '#10B981' },
    { id: 'lunch', name: 'Pausa Pranzo', color: '#3B82F6' },
    { id: 'training', name: 'Formazione', color: '#8B5CF6' }
  ]);

  const [stats, setStats] = useState<TimeStats>({
    today: 0,
    week: 0,
    month: 0
  });

  const handleAddProject = (name: string) => {
    const newProject: Project = {
      id: Date.now().toString(),
      name,
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    };
    setProjects(prev => [...prev, newProject]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (selectedProject === id) {
      setSelectedProject('default');
    }
  };

  const handleStopTimer = (duration: number, description: string) => {
    const newEntry: TimeEntry = {
      id: Date.now().toString(),
      projectId: selectedProject,
      description,
      startTime: Date.now() - (duration * 1000),
      endTime: Date.now(),
      duration: duration * 1000
    };
    setTimeEntries(prev => [newEntry, ...prev]);
    updateStats(duration);
  };

  const updateStats = (duration: number) => {
    setStats(prev => ({
      today: prev.today + duration,
      week: prev.week + duration,
      month: prev.month + duration
    }));
  };

  const handleDeleteEntry = (id: string) => {
    setTimeEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const getSelectedProject = () => {
    return projects.find(p => p.id === selectedProject) || projects[0];
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <header className="mb-8">
          <Logo />
        </header>
        
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <ProjectList
              projects={projects}
              selectedProject={selectedProject}
              onSelectProject={setSelectedProject}
              onAddProject={handleAddProject}
              onDeleteProject={handleDeleteProject}
            />
          </div>
          
          <div className="lg:col-span-4">
            <Timer 
              onStop={handleStopTimer}
              selectedProject={getSelectedProject()}
            />
          </div>
        </div>
        
        <div className="mt-6 space-y-6">
          <Stats stats={stats} />
          <TimeEntryList
            entries={timeEntries}
            projects={projects}
            onDelete={handleDeleteEntry}
          />
        </div>
      </div>
    </div>
  );
}

export default App;