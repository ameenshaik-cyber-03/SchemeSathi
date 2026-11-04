import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, Users, ExternalLink, Shield, Train, Landmark, GraduationCap, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { JobNotification } from '../../types';

export const JobsView: React.FC = () => {
  const { jobs, setSelectedJob, t, searchQuery, selectedState } = useApp();
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectorFilters = [
    { id: 'All', label: 'All Jobs', icon: Briefcase },
    { id: 'UPSC', label: 'UPSC & Civil', icon: Building2 },
    { id: 'SSC', label: 'SSC Exams', icon: Shield },
    { id: 'Railways', label: 'Railway Jobs', icon: Train },
    { id: 'Banking', label: 'Banking', icon: Landmark },
    { id: 'Police', label: 'Police & Defence', icon: Shield },
    { id: 'State PSC', label: 'State PSC', icon: GraduationCap }
  ];

  // Filtering
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.recruitingAuthority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.qualification.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSector = selectedSector === 'All' || job.sector === selectedSector;
    const matchesState = selectedState === 'ALL' || !job.state || job.state === selectedState;

    return matchesSearch && matchesSector && matchesState;
  });

  return (
    <div className="space-y-4 pb-20">
      {/* Hero Banner (matches Screen 2 in Reference 1) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-brand-800 text-white p-5 shadow-sm border border-emerald-800/50">
        <div className="absolute right-3 top-3 opacity-20">
          <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-[280px]">
          <h2 className="text-xl font-black tracking-tight leading-tight">
            Government Jobs<br />
            <span className="text-emerald-300 font-bold">Your Career, Our Support!</span>
          </h2>
          <p className="text-xs text-emerald-100/90 mt-1.5 leading-relaxed">
            Find latest central & state government job opportunities with verified notifications.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-brand-900 rounded-full font-bold text-xs shadow-sm hover:bg-emerald-50 transition">
            <span>Explore Jobs</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Sector Filter Chips */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Job Categories
          </h3>
          <span className="text-[11px] text-brand-700 dark:text-brand-400 font-semibold">
            {filteredJobs.length} Active Notifications
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {sectorFilters.map((s) => {
            const isSelected = selectedSector === s.id;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Latest Job Notifications List (Screens 2 in Reference 1) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-brand-600" />
            <span>{t.latestJobs}</span>
          </h3>
          <span className="text-xs text-brand-700 dark:text-brand-400 font-semibold">View All →</span>
        </div>

        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      job.governmentLevel === 'Central'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                    }`}
                  >
                    {job.governmentLevel === 'Central' ? 'Central Govt' : `${job.state || 'State'} Govt`}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                    {job.recruitingAuthority}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                  {job.title}
                </h4>

                <div className="grid grid-cols-2 gap-y-1 gap-x-2 mt-2.5 text-[11px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Last: <strong className="text-slate-800 dark:text-slate-200">{job.lastDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Vacancies: <strong className="text-slate-800 dark:text-slate-200">{job.vacancies}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Location: <strong className="text-slate-800 dark:text-slate-200">{job.location}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Apply Button */}
              <div className="shrink-0 flex flex-col items-end gap-2">
                <a
                  href={job.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-brand-700 hover:bg-brand-800 text-white rounded-xl text-xs font-bold shadow-sm transition inline-flex items-center gap-1"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[10px] text-slate-400">Verified official</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
