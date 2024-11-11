import React from 'react';
import { Timer } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative transform hover:scale-110 transition-transform duration-300">
        <Timer size={32} className="text-[rgb(44,212,189)]" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(44,212,189)] rounded-full animate-pulse" />
      </div>
      <div className="font-bold text-xl tracking-tight">
        <span className="text-[rgb(44,212,189)]">Zoli</span>
        <span className="text-[rgb(35,170,151)]">Track</span>
      </div>
    </div>
  );
}