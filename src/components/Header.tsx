import React from 'react';
import { Clock } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <Clock className="w-8 h-8 text-[#2CD4BD]" />
        <h1 className="text-2xl font-bold">Zoli Time Tracker</h1>
      </div>
    </div>
  );
}