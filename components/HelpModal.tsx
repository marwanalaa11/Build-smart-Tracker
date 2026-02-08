
import React from 'react';
import { XIcon } from './Icons';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Help & FAQ</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="prose max-w-none">
            <h3 className="font-semibold text-lg text-gray-700">How do I use this on my iPhone like a free app?</h3>
            <p>This is a web application, not a native mobile app from the App Store. However, you can add it to your iPhone's home screen, and it will look and feel almost exactly like a regular app! Here's how:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the Safari browser on your iPhone.</li>
              <li>Navigate to the URL of this web application once it's hosted online.</li>
              <li>Tap the "Share" button (it's the icon with a square and an arrow pointing up).</li>
              <li>Scroll down in the share menu and tap on <strong>"Add to Home Screen"</strong>.</li>
              <li>You can rename the app if you like, then tap "Add".</li>
            </ol>
            <p>An icon for this app will now be on your home screen. Tapping it will launch the app in full-screen, without the browser's address bar, providing a native app-like experience for free!</p>

            <h3 className="font-semibold text-lg text-gray-700">How do I get a "true URL" for this app outside of Google AI Studio?</h3>
            <p>
              To get a permanent, public URL that you can share, you need to "host" the application files on a web server. There are amazing free services that make this very easy. Here is a simplified process:
            </p>
            <ol className="list-decimal list-inside space-y-2">
                <li><strong>Download the Code:</strong> Get all the code files for this application.</li>
                <li><strong>Use GitHub:</strong> Upload the code to a free repository on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>. This is like a cloud drive for your code.</li>
                <li><strong>Choose a Hosting Service:</strong> Sign up for a free account with a service like <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel</a> or <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Netlify</a>.</li>
                <li><strong>Connect and Deploy:</strong> Connect your Vercel or Netlify account to your GitHub repository. They will automatically detect and deploy your project.</li>
                <li><strong>Add Your API Key:</strong> In your Vercel/Netlify project settings, find the "Environment Variables" section. Add a variable named `API_KEY` and paste your Google Gemini API key as the value. This is a crucial step to make the AI features work.</li>
                <li><strong>Get Your URL:</strong> Once deployed, the service will provide you with a public URL (e.g., `your-project.vercel.app`). This is the "true URL" you can access from any device!</li>
            </ol>
             <p className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
                <strong>Note:</strong> For more detailed steps, please refer to the `README.md` file included with the project code.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};