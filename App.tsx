
import React, { useState, useCallback, useMemo } from 'react';
import { CategoryTabs } from './components/CategoryTabs';
import { Header } from './components/Header';
import { MaterialList } from './components/MaterialList';
import { MaterialDetail } from './components/MaterialDetail';
import { HelpModal } from './components/HelpModal';
import { ChatWidget } from './components/ChatWidget';
import { ChatModal } from './components/ChatModal';
import { IntroScreen } from './components/IntroScreen';
import { Footer } from './components/Footer';
import { materialData } from './constants';
import { Category, Material } from './types';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<Category>(Category.Construction);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [isHelpModalOpen, setHelpModalOpen] = useState<boolean>(false);
  const [isChatModalOpen, setChatModalOpen] = useState<boolean>(false);

  const handleSelectMaterial = useCallback((material: Material) => {
    setSelectedMaterial(material);
  }, []);
  
  const handleBackToList = useCallback(() => {
    setSelectedMaterial(null);
  }, []);

  const handleGetStarted = useCallback(() => {
    setShowIntro(false);
  }, []);

  const currentMaterials = useMemo(() => materialData[activeCategory], [activeCategory]);
  
  if (showIntro) {
    return <IntroScreen onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col">
      <Header onHelpClick={() => setHelpModalOpen(true)} />
      <main className="flex-grow w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 min-h-[80vh]">
          {selectedMaterial ? (
            <MaterialDetail material={selectedMaterial} onBack={handleBackToList} />
          ) : (
            <>
              <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              <MaterialList 
                materials={currentMaterials} 
                onSelectMaterial={handleSelectMaterial} 
                onAskAI={() => setChatModalOpen(true)}
              />
            </>
          )}
        </div>
      </main>
      <Footer />
      <HelpModal isOpen={isHelpModalOpen} onClose={() => setHelpModalOpen(false)} />
      <ChatWidget onOpen={() => setChatModalOpen(true)} />
      <ChatModal isOpen={isChatModalOpen} onClose={() => setChatModalOpen(false)} />
    </div>
  );
};

export default App;
