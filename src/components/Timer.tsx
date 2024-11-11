import React, { useState, useEffect } from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';
import type { Project } from '../types';

interface TimerProps {
  onStop: (duration: number, description: string) => void;
  selectedProject: Project;
}

export function Timer({ onStop, selectedProject }: TimerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
      setDescription(`${selectedProject.name}: `);
    }
  }, [selectedProject, isRunning]);

  const handleStop = () => {
    if (!description.trim()) return;
    setIsRunning(false);
    onStop(time, description);
    setTime(0);
    setDescription(`${selectedProject.name}: `);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-black border border-[rgb(44,212,189)]/20 rounded-lg p-4 sm:p-6 hover:border-[rgb(44,212,189)]/40 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Su cosa stai lavorando?"
          className="w-full sm:flex-1 p-2 bg-black border border-[rgb(44,212,189)]/20 rounded-md focus:border-[rgb(44,212,189)] focus:ring-1 focus:ring-[rgb(44,212,189)] text-[rgb(44,212,189)] placeholder-[rgb(44,212,189)]/40"
        />
        <div className="text-2xl font-mono text-[rgb(44,212,189)]">{formatTime(time)}</div>
      </div>
      
      <div className="flex justify-end gap-2">
        <button
          onClick={() => description.trim() && setIsRunning(!isRunning)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isRunning 
              ? 'bg-black border border-[rgb(44,212,189)] text-[rgb(44,212,189)]' 
              : 'bg-[rgb(44,212,189)] text-black hover:bg-[rgb(35,170,151)]'
          }`}
          disabled={!description.trim()}
        >
          {isRunning ? <Pause size={24} /> : <Play size={24} />}
        </button>
        {isRunning && (
          <button
            onClick={handleStop}
            className="p-2 rounded-full bg-black border border-[rgb(44,212,189)] text-[rgb(44,212,189)] hover:bg-[rgb(44,212,189)]/10 transition-all duration-300"
          >
            <StopCircle size={24} />
          </button>
        )}
      </div>
    </div>
  );
}