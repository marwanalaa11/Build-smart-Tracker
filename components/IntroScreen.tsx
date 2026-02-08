
import React from 'react';
import { BstIcon } from './Icons';

interface IntroScreenProps {
  onGetStarted: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex flex-col justify-center items-center p-4 text-center">
      <style>
        {`
          .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
            opacity: 0;
          }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
          .delay-4 { animation-delay: 0.8s; }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div className="max-w-2xl flex-grow flex flex-col justify-center">
        <BstIcon className="h-24 w-24 mx-auto fade-in-up" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mt-6 fade-in-up delay-1 tracking-tight">
          Build Smart Tracker
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-blue-600 mt-2 fade-in-up delay-2">
          Your AI Co-Pilot for Construction Material Sourcing.
        </h2>
         <p className="text-xs font-semibold text-slate-500 mt-2 fade-in-up delay-2">Powered by Gemini</p>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto fade-in-up delay-3">
          Effortlessly track real-time prices, compare suppliers across the UAE, analyze market trends, and get instant insights on any material with our intelligent AI assistant.
        </p>
        <button
          onClick={onGetStarted}
          className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105 fade-in-up delay-4"
        >
          Get Started
        </button>
      </div>
       <footer className="w-full py-4 text-center text-sm text-slate-500 fade-in-up delay-4">
        A Mazeej Designs Initiative
      </footer>
    </div>
  );
};
