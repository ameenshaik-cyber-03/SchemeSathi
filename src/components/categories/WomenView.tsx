import React from 'react';
import { Heart, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WomenView: React.FC = () => {
  const { schemes, setSelectedScheme, setIsEligibilityOpen } = useApp();

  const womenSchemes = schemes.filter(
    (s) => s.category === 'Women' || s.targetAudience.some((t) => t.toLowerCase().includes('women'))
  );

  return (
    <div className="space-y-4 pb-20">
      {/* Hero Banner (matches Screen 2 in Reference 2) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pink-950 via-rose-900 to-purple-900 text-white p-5 shadow-sm border border-rose-800/50">
        <div className="absolute right-3 top-3 opacity-20">
          <Heart className="w-24 h-24 text-white" />
        </div>
        <div className="relative z-10 max-w-[280px]">
          <span className="text-[10px] font-bold text-pink-300 tracking-wider uppercase">
            Stronger • Safer • Self-Reliant
          </span>
          <h2 className="text-xl font-black tracking-tight leading-tight mt-0.5">
            Empowering<br />
            <span className="text-pink-300 font-bold">Women</span>
          </h2>
          <p className="text-xs text-rose-100/90 mt-1.5 leading-relaxed">
            Financial independence, free LPG connections, maternal welfare, and girl-child scholarships.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-rose-950 rounded-full font-bold text-xs shadow-sm">
            <span>Explore Schemes</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Scheme Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-600" />
            <span>Women Welfare Schemes</span>
          </h3>
          <span className="text-xs text-brand-700 dark:text-brand-400 font-semibold">View All →</span>
        </div>

        {womenSchemes.map((scheme) => (
          <div
            key={scheme.id}
            onClick={() => setSelectedScheme(scheme)}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300">
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

                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug group-hover:text-pink-600 transition">
                  {scheme.name}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {scheme.summary}
                </p>

                <div className="flex items-center gap-3 mt-2.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-pink-800 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-md border border-pink-100 dark:border-pink-900/40">
                    {scheme.benefitAmount || 'Financial Support'}
                  </span>
                  <span>•</span>
                  <span>Women & Families</span>
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eligibility Callout */}
      <div
        onClick={() => setIsEligibilityOpen(true)}
        className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-100 dark:from-pink-950/60 dark:to-rose-950/40 border border-pink-200 dark:border-rose-800 shadow-sm flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-pink-700" />
          <div>
            <h4 className="font-bold text-xs text-pink-900 dark:text-pink-200 leading-tight">
              Are you eligible for women empowerment grants?
            </h4>
            <p className="text-[11px] text-pink-700 dark:text-pink-300 mt-0.5">
              Launch Eligibility Checker →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
