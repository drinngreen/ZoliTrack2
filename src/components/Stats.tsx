import React from 'react';
import { BarChart3 } from 'lucide-react';
import type { TimeStats } from '../types';

interface StatsProps {
  stats: TimeStats;
}

export function Stats({ stats }: StatsProps) {
  const formatHours = (seconds: number) => {
    const hours = Math.round(seconds / 3600 * 10) / 10;
    return `${hours}h`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
      <div className="bg-black border border-[rgb(44,212,189)]/20 rounded-lg p-4 sm:p-6 hover:border-[rgb(44,212,189)]/40 transition-all duration-300">
        <div className="flex items-center gap-2 text-[rgb(44,212,189)] mb-2">
          <BarChart3 size={20} />
          <h3 className="font-medium">Oggi</h3>
        </div>
        <p className="text-2xl font-bold text-[rgb(44,212,189)]">{formatHours(stats.today)}</p>
      </div>
      
      <div className="bg-black border border-[rgb(44,212,189)]/20 rounded-lg p-4 sm:p-6 hover:border-[rgb(44,212,189)]/40 transition-all duration-300">
        <div className="flex items-center gap-2 text-[rgb(44,212,189)] mb-2">
          <BarChart3 size={20} />
          <h3 className="font-medium">Questa Settimana</h3>
        </div>
        <p className="text-2xl font-bold text-[rgb(44,212,189)]">{formatHours(stats.week)}</p>
      </div>
      
      <div className="bg-black border border-[rgb(44,212,189)]/20 rounded-lg p-4 sm:p-6 hover:border-[rgb(44,212,189)]/40 transition-all duration-300">
        <div className="flex items-center gap-2 text-[rgb(44,212,189)] mb-2">
          <BarChart3 size={20} />
          <h3 className="font-medium">Questo Mese</h3>
        </div>
        <p className="text-2xl font-bold text-[rgb(44,212,189)]">{formatHours(stats.month)}</p>
      </div>
    </div>
  );
}