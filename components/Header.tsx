
import React from 'react';
import { BstIcon, HelpIcon } from './Icons';

interface HeaderProps {
    onHelpClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHelpClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <BstIcon className="h-9 w-9" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
            Build Smart Tracker
          </h1>
        </div>
        <button
          onClick={onHelpClick}
          className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors duration-200"
        >
          <HelpIcon className="h-5 w-5" />
          <span className="hidden md:inline text-sm font-semibold">Help & FAQ</span>
        </button>
      </div>
    </header>
  );
};
