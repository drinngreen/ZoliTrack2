import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function CategoryButton({ icon: Icon, label, onClick, disabled }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#2CD4BD]/20 to-transparent border border-[#2CD4BD]/30 hover:border-[#2CD4BD]/50 transition-all transform hover:scale-105"
    >
      <Icon className="w-5 h-5 text-[#2CD4BD]" />
      <span>{label}</span>
    </button>
  );
}