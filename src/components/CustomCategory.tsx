import React from 'react';
import { Plus, Play } from 'lucide-react';

interface CustomCategoryProps {
  showInput: boolean;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onShowInput: () => void;
}

export function CustomCategory({ showInput, value, onChange, onSubmit, onShowInput }: CustomCategoryProps) {
  return showInput ? (
    <div className="flex items-center gap-2 p-4 rounded-lg bg-gradient-to-br from-[#2CD4BD]/20 to-transparent border border-[#2CD4BD]/30">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Category name"
        className="flex-1 bg-black/50 border border-[#2CD4BD]/30 rounded px-3 py-1"
        onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
      />
      <button
        onClick={onSubmit}
        className="text-[#2CD4BD] hover:text-[#2CD4BD]/80"
      >
        <Play className="w-5 h-5" />
      </button>
    </div>
  ) : (
    <button
      onClick={onShowInput}
      className="flex items-center justify-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#2CD4BD]/20 to-transparent border border-[#2CD4BD]/30 hover:border-[#2CD4BD]/50 transition-all transform hover:scale-105"
    >
      <Plus className="w-5 h-5 text-[#2CD4BD]" />
      <span>Custom</span>
    </button>
  );
}