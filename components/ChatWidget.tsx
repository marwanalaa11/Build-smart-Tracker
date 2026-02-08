
import React from 'react';
import { ChatIcon } from './Icons';

interface ChatWidgetProps {
  onOpen: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-40"
      aria-label="Open AI Assistant"
    >
      <ChatIcon className="h-8 w-8" />
    </button>
  );
};
