
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { getMaterialInfo } from '../services/geminiService';
import { ChatMessage } from '../types';
import { XIcon, SendIcon, BstIcon } from './Icons';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formatMarkdown = (text: string) => {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
};

export const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
        setMessages([
            { sender: 'ai', text: "Hello! I'm the SmartBuild Assistant. What construction material can I provide details on today?" }
        ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await getMaterialInfo(input, [...messages, userMessage]);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-end sm:items-center p-0 sm:p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-2xl h-[90%] sm:h-[70vh] flex flex-col">
        <header className="p-4 bg-slate-100 border-b border-slate-200 text-slate-800 rounded-t-2xl flex justify-between items-center flex-shrink-0">
            <div className="flex items-center space-x-3">
                <BstIcon className="h-8 w-8"/>
                <h2 className="text-lg font-bold">AI Material Assistant</h2>
            </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 transition-colors">
            <XIcon className="h-6 w-6" />
          </button>
        </header>

        <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && <BstIcon className="h-8 w-8 flex-shrink-0 mt-1" />}
              <div
                className={`max-w-md p-3 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-slate-200 text-slate-800 rounded-bl-none prose'
                }`}
                dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.text) }}
              />
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
                <BstIcon className="h-8 w-8 flex-shrink-0 mt-1"/>
                <div className="bg-slate-200 text-slate-800 rounded-2xl rounded-bl-none p-3 flex items-center space-x-2">
                    <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"></span>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-slate-200 bg-white flex-shrink-0">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about a material, e.g., 'What is Travertine?'"
              className="w-full px-4 py-3 bg-slate-100 border-slate-200 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-blue-600 text-white rounded-full disabled:bg-slate-400 hover:bg-blue-700 transition-colors"
            >
              <SendIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
