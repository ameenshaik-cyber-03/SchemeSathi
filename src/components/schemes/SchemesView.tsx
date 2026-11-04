import React, { useState } from 'react';
import { Landmark, Search, Filter, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Scheme } from '../../types';
import { INDIAN_STATES_AND_UT, POLITICAL_FILTER_DISCLAIMER } from '../../data/administrations';

export const SchemesView: React.FC = () => {
  const {
    schemes,
    setSelectedScheme,
    setIsEligibilityOpen,
    t,
    searchQuery,
    setSearchQuery,
    selectedState,
    setSelectedState,
    selectedParty,
    setSelectedParty
  } = useApp();

  const [activeChip, setActiveChip] = useState<'All' | 'Popular' | 'Central' | 'State' | 'Social Welfare' | 'Financial Aid'>('Popular');
  const [showAdminFilter, setShowAdminFilter] = useState(false);

  const chips: ('All' | 'Popular' | 'Central' | 'State' | 'Social Welfare' | 'Financial Aid')[] = [
    'Popular',
    'All',
    'Central',
    'State',
    'Social Welfare',
    'Financial Aid'
  ];

  // Current state object
  const currentStateObj = INDIAN_STATES_AND_UT.find(s => s.code === selectedState) || INDIAN_STATES_AND_UT[0];

  // Filtering
  const filteredSchemes = schemes.filter((s) => {
    // Search
    const matchesSearch =
      !searchQuery ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Chip
    let matchesChip = true;
    if (activeChip === 'Popular') matchesChip = !!s.isPopular;
    else if (activeChip === 'Central') matchesChip = s.governmentLevel === 'Central';
    else if (activeChip === 'State') matchesChip = s.governmentLevel === 'State';
    else if (activeChip === 'Social Welfare') matchesChip = s.category === 'Social Welfare' || s.category === 'Women';
    else if (activeChip === 'Financial Aid') matchesChip = s.category === 'Financial Aid' || s.category === 'Agriculture';

    // State
    const matchesState = selectedState === 'ALL' || !s.state || s.state === currentStateObj.name;

    // Party / Administration
    const matchesParty =
      selectedParty === 'ALL' ||
      !s.administration ||
      s.administration.toLowerCase().includes(selectedParty.toLowerCase());

    return matchesSearch && matchesChip && matchesState && matchesParty;
  });

  return (
    <div className="space-y-4 pb-20">
      {/* Hero Banner (matches Screen 3 of Reference 1) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-brand-800 to-emerald-800 text-white p-5 shadow-sm border border-brand-700/50">
        <div className="absolute right-3 top-3 opacity-20">
          <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-[280px]">
          <h2 className="text-xl font-black tracking-tight leading-tight">
            Government Schemes<br />
            <span className="text-emerald-300 font-bold">for a Better Tomorrow</span>
          </h2>
          <p className="text-xs text-emerald-100/90 mt-1.5 leading-relaxed">
            Explore welfare benefits, check eligibility instantly and apply safely through official portals.
          </p>
          <button
            onClick={() => setIsEligibilityOpen(true)}
            className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-brand-900 rounded-full font-bold text-xs shadow-sm hover:bg-emerald-50 transition"
          >
            <span>Explore Schemes</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Search & Administration Filter Row */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Schemes, Departments..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-brand-500 shadow-sm"
            />
          </div>
          <button
            onClick={() => setShowAdminFilter(!showAdminFilter)}
            className={`p-2 rounded-2xl border transition flex items-center gap-1 text-xs font-semibold ${
              showAdminFilter || selectedState !== 'ALL' || selectedParty !== 'ALL'
                ? 'bg-brand-700 text-white border-brand-700'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Expandable State & Political Administration Filter Panel */}
        {showAdminFilter && (
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 animate-in fade-in-50 duration-150">
            <div className="text-[11px] font-bold text-slate-800 dark:text-white flex items-center justify-between">
              <span>{t.filterByGovt}</span>
              {(selectedState !== 'ALL' || selectedParty !== 'ALL') && (
                <button
                  onClick={() => {
                    setSelectedState('ALL');
                    setSelectedParty('ALL');
                  }}
                  className="text-brand-700 dark:text-brand-400 font-semibold"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                  {t.selectState}
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedParty('ALL');
                  }}
                  className="w-full p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  {INDIAN_STATES_AND_UT.map((st) => (
                    <option key={st.code} value={st.code}>
                      {st.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                  {t.selectParty}
                </label>
                <select
                  value={selectedParty}
                  onChange={(e) => setSelectedParty(e.target.value)}
                  className="w-full p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  <option value="ALL">All Governing Tenures</option>
                  {currentStateObj.parties.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight italic pt-1 border-t border-slate-200 dark:border-slate-700">
              {POLITICAL_FILTER_DISCLAIMER}
            </p>
          </div>
        )}

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {chips.map((chip) => {
            const isSelected = activeChip === chip;
            return (
              <button
                key={chip}
                onClick={() => setActiveChip(chip)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  isSelected
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>

      {/* Popular Schemes List (matches Screen 3 in Reference 1) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-brand-600" />
            <span>{t.popularSchemes}</span>
          </h3>
          <span className="text-xs text-brand-700 dark:text-brand-400 font-semibold">
            {filteredSchemes.length} Available
          </span>
        </div>

        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            onClick={() => setSelectedScheme(scheme)}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {scheme.governmentLevel} Govt
                  </span>
                  {scheme.state && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                      {scheme.state}
                    </span>
                  )}
                  <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 ml-auto">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Active</span>
                  </span>
                </div>

                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug group-hover:text-brand-700 transition">
                  {scheme.name}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {scheme.summary}
                </p>

                <div className="flex items-center gap-3 mt-2.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-brand-800 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 px-2 py-0.5 rounded-md border border-brand-100 dark:border-brand-900/40">
                    {scheme.benefitAmount || 'Direct Benefit'}
                  </span>
                  <span>•</span>
                  <span>{scheme.category}</span>
                </div>
              </div>

              {/* View Details Action */}
              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-brand-700 dark:text-brand-400 group-hover:bg-brand-700 group-hover:text-white transition">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eligibility Checker Teaser Banner (matches bottom of Screen 3) */}
      <div
        onClick={() => setIsEligibilityOpen(true)}
        className="p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-emerald-100 dark:from-brand-950/60 dark:to-emerald-950/40 border border-brand-200 dark:border-brand-800 shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0 shadow-sm">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-brand-900 dark:text-brand-200 leading-tight">
              {t.notSureEligible}
            </h4>
            <p className="text-[11px] text-brand-700 dark:text-brand-300 font-medium mt-0.5">
              {t.tryEligibilityChecker} →
            </p>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-brand-700 shadow-sm">
          <span className="text-xs font-bold">✓</span>
        </div>
      </div>
    </div>
  );
};
