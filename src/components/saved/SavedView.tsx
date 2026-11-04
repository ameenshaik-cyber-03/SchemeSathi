import React, { useState } from 'react';
import { Bookmark, Trash2, ExternalLink, ChevronRight, BookmarkCheck, Landmark, Briefcase, GraduationCap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SavedView: React.FC = () => {
  const { savedItemIds, toggleSaveItem, schemes, jobs, setSelectedScheme, t } = useApp();
  const [filterType, setFilterType] = useState<'All' | 'Schemes' | 'Jobs'>('All');

  const savedSchemes = schemes.filter((s) => savedItemIds.includes(s.id));
  const savedJobs = jobs.filter((j) => savedItemIds.includes(j.id));

  const totalSaved = savedSchemes.length + savedJobs.length;

  return (
    <div className="space-y-4 pb-20">
      {/* Header Banner (matches Screen 3 in Reference 2) */}
      <div className="text-center py-6 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="w-16 h-16 rounded-3xl bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 mx-auto flex items-center justify-center mb-3 shadow-inner border border-brand-200 dark:border-brand-800">
          <Bookmark className="w-8 h-8 fill-brand-700 dark:fill-brand-400" />
        </div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white">
          Your Saved Items
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mt-1 leading-relaxed">
          Save schemes, jobs and education opportunities to view them anytime offline or online.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {(['All', 'Schemes', 'Jobs'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1 rounded-full text-xs font-bold transition ${
                filterType === type
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {totalSaved === 0 ? (
        <div className="text-center py-12 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
          <BookmarkCheck className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">No saved items yet</h4>
          <p className="text-xs text-slate-400 mt-1">Tap the bookmark ribbon on any scheme or job post to save it here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Schemes Section */}
          {(filterType === 'All' || filterType === 'Schemes') && savedSchemes.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
                <Landmark className="w-3.5 h-3.5 text-brand-600" />
                <span>Saved Schemes ({savedSchemes.length})</span>
              </h3>
              {savedSchemes.map((s) => (
                <div
                  key={s.id}
                  className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3"
                >
                  <div
                    onClick={() => setSelectedScheme(s)}
                    className="flex-1 cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-brand-700 dark:text-brand-400">
                      {s.governmentLevel} Govt • {s.category}
                    </span>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white leading-tight mt-0.5">
                      {s.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{s.department}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => toggleSaveItem(s.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedScheme(s)}
                      className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Jobs Section */}
          {(filterType === 'All' || filterType === 'Jobs') && savedJobs.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
                <Briefcase className="w-3.5 h-3.5 text-brand-600" />
                <span>Saved Jobs ({savedJobs.length})</span>
              </h3>
              {savedJobs.map((j) => (
                <div
                  key={j.id}
                  className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400">
                      {j.recruitingAuthority}
                    </span>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white leading-tight mt-0.5">
                      {j.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      Last Date: <strong>{j.lastDate}</strong> • Vacancies: {j.vacancies}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => toggleSaveItem(j.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <a
                      href={j.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
