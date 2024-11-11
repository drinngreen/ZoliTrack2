import React from 'react';
import { Square } from 'lucide-react';

interface StopButtonProps {
  onClick: () => void;
}

export function StopButton({ onClick }: StopButtonProps) {
  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2CD4BD] text-black font-semibold hover:bg-[#2CD4BD]/90 transition-colors"
      >
        <Square className="w-5 h-5" />
        Stop Timer
      </button>
    </div>
  );
}