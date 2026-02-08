
import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
  const categories = Object.values(Category);

  return (
    <div className="sticky top-[68px] z-10 bg-white/95 backdrop-blur-sm -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 pt-6 pb-4 border-b border-slate-200 mb-8">
      <div className="bg-slate-100 p-1.5 rounded-full flex space-x-1" aria-label="Tabs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex-1 text-center py-2.5 px-2 sm:px-4 rounded-full font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-blue-500 ${
              activeCategory === category
                ? 'bg-white text-blue-600 shadow'
                : 'bg-transparent text-slate-600 hover:bg-white/60 hover:text-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
