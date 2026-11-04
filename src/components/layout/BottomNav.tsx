import React from 'react';
import { Home, Briefcase, Landmark, Bookmark, User, Bot } from 'lucide-react';
import { useApp, MainTab } from '../../context/AppContext';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, t, savedItemIds } = useApp();

  const navItems: { id: MainTab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: 'home', label: t.forYou, icon: Home },
    { id: 'jobs', label: t.jobs, icon: Briefcase },
    { id: 'schemes', label: t.schemes, icon: Landmark },
    { id: 'saved', label: t.saved, icon: Bookmark, badge: savedItemIds.length },
    { id: 'profile', label: t.profile, icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-md mx-auto px-3 py-1 flex items-center justify-around relative">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 min-w-[56px] rounded-xl transition-all relative ${
                isActive
                  ? 'text-brand-700 dark:text-brand-400 font-semibold'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0 w-6 h-0.5 bg-brand-700 dark:bg-brand-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
