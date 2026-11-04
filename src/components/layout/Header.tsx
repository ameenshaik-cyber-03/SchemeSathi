import React, { useState } from 'react';
import { Search, Bell, Shield, Smartphone, Globe, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  const { t, searchQuery, setSearchQuery, viewMode, setViewMode, user, setIsAdminOpen, setIsAuthModalOpen } = useApp();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-md mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand Details */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-brand-200 dark:border-brand-700/50 shadow-sm bg-white">
              <img src="/logo.png" alt="SchemeSathi Logo" className="w-full h-full object-contain" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                  {t.appName}
                </h1>
                {user.role === 'admin' && (
                  <button
                    onClick={() => setIsAdminOpen(true)}
                    className="px-1.5 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 rounded border border-amber-300 flex items-center gap-0.5"
                    title="Open Admin Dashboard"
                  >
                    <Shield className="w-2.5 h-2.5" /> Admin
                  </button>
                )}
              </div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Action Buttons: Mode switch, Search, Notification */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* View Mode Toggle: App vs Web portal */}
            <button
              onClick={() => setViewMode(viewMode === 'app' ? 'web' : 'app')}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={viewMode === 'app' ? 'Switch to Desktop Web & APK Portal' : 'Switch to Mobile App Feed'}
            >
              {viewMode === 'app' ? (
                <Globe className="w-5 h-5 text-brand-700 dark:text-brand-400" />
              ) : (
                <Smartphone className="w-5 h-5 text-brand-700 dark:text-brand-400" />
              )}
            </button>

            {/* Search Toggle */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className={`p-2 rounded-full transition ${
                showSearchInput || searchQuery
                  ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-3 z-50 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700 font-semibold text-slate-900 dark:text-white">
                    <span>Verified Government Updates</span>
                    <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="p-2 bg-brand-50 dark:bg-brand-950/40 rounded-lg border border-brand-100 dark:border-brand-900/40">
                      <p className="font-semibold text-brand-800 dark:text-brand-300">PM-KISAN 19th Instalment</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">₹2,000 credited to verified farmer bank accounts.</p>
                      <span className="text-[9px] text-slate-400">2 hours ago • Official DBT</span>
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">MHA Group C & D Recruitment</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">6,100+ vacancies officially notified on mha.gov.in.</p>
                      <span className="text-[9px] text-slate-400">5 hours ago • Central Govt</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Expandable Search Input */}
        {showSearchInput && (
          <div className="mt-2.5 pb-1 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                autoFocus
                className="w-full pl-9 pr-8 py-2 text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl border border-transparent focus:border-brand-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
