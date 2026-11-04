import React from 'react';
import { useApp, CategoryTab } from '../../context/AppContext';

const CATEGORIES: CategoryTab[] = [
  'For You',
  'Jobs',
  'Schemes',
  'Education',
  'Farmers',
  'Women',
  'Healthcare',
  'Business'
];

export const CategoryPills: React.FC = () => {
  const { activeCategory, setActiveCategory, t } = useApp();

  const getLabel = (cat: CategoryTab): string => {
    switch (cat) {
      case 'For You': return t.forYou;
      case 'Jobs': return t.jobs;
      case 'Schemes': return t.schemes;
      case 'Education': return t.education;
      case 'Farmers': return t.farmers;
      case 'Women': return t.women;
      default: return cat;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-md mx-auto px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                isActive
                  ? 'bg-brand-100 text-brand-800 border border-brand-500 shadow-sm dark:bg-brand-900/60 dark:text-brand-200 dark:border-brand-500'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
            >
              {getLabel(cat)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
