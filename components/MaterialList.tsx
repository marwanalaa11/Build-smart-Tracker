
import React, { useState, useMemo } from 'react';
import { Material } from '../types';
import { ChevronRightIcon, ConstructionIcon, FinishingIcon, PlumbingIcon, SearchIcon, LightBulbIcon } from './Icons';

interface MaterialListProps {
  materials: Material[];
  onSelectMaterial: (material: Material) => void;
  onAskAI: () => void;
}

const getCategoryIcon = (materialId: string) => {
    if (['steel', 'cement', 'concrete', 'block', 'waterproofing'].some(m => materialId.includes(m))) {
        return <ConstructionIcon className="h-8 w-8 text-blue-500" />;
    }
    if (['paint', 'tiles', 'gypsum', 'wood', 'aluminum', 'glass', 'cladding'].some(m => materialId.includes(m))) {
        return <FinishingIcon className="h-8 w-8 text-green-500" />;
    }
    if (['pvc', 'copper', 'faucet', 'ppr', 'pump', 'tank', 'sanitary'].some(m => materialId.includes(m))) {
        return <PlumbingIcon className="h-8 w-8 text-orange-500" />;
    }
    return <ConstructionIcon className="h-8 w-8 text-gray-500" />;
}

export const MaterialList: React.FC<MaterialListProps> = ({ materials, onSelectMaterial, onAskAI }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const findBestPrice = (suppliers: Material['suppliers']) => {
        if (!suppliers || suppliers.length === 0) return 0;
        return Math.min(...suppliers.map(s => s.price));
    };

    const filteredMaterials = useMemo(() => {
        return materials.filter(material =>
            material.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [materials, searchTerm]);

  return (
    <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">Select a Material</h2>
        
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                placeholder="Search for a material..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
            />
        </div>
        
        <div 
            onClick={onAskAI}
            className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex items-center justify-center space-x-3 cursor-pointer hover:bg-blue-100 transition-colors"
        >
            <LightBulbIcon className="h-6 w-6 text-blue-500"/>
            <p className="text-sm font-medium text-blue-700">
                Can't find a material? <span className="font-bold underline">Ask our AI Assistant!</span>
            </p>
        </div>


      {filteredMaterials.length > 0 ? (
        <div className="space-y-4">
            {filteredMaterials.map((material) => (
                <div
                key={material.id}
                onClick={() => onSelectMaterial(material)}
                className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                    <div className="flex-shrink-0 bg-gray-100 rounded-lg p-3 mr-4">
                        {getCategoryIcon(material.id)}
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900">{material.name}</h3>
                        <p className="text-sm text-gray-500">
                            Best Price from: <span className="font-semibold text-green-600">AED {findBestPrice(material.suppliers).toFixed(2)}</span> / {material.unit}
                        </p>
                    </div>
                    <div className="flex items-center ml-4">
                        <span className="hidden md:inline text-sm font-semibold text-blue-600 mr-2 group-hover:opacity-100 opacity-0 transition-opacity">View Details</span>
                        <ChevronRightIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-12">
            <p className="text-gray-500 font-medium">No materials found for "{searchTerm}".</p>
            <p className="text-sm text-gray-400">Try checking your spelling or searching for another item.</p>
        </div>
      )}
    </div>
  );
};
