import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, ClipboardCheck, Sparkles, HelpCircle, ChevronRight, RefreshCw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Scheme } from '../../types';
import { INDIAN_STATES_AND_UT } from '../../data/administrations';

export const EligibilityChecker: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { schemes, setSelectedScheme } = useApp();

  const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro');

  // Answers
  const [state, setState] = useState('Andhra Pradesh');
  const [ageGroup, setAgeGroup] = useState('18-25');
  const [occupation, setOccupation] = useState('Student');
  const [gender, setGender] = useState('Female');
  const [incomeRange, setIncomeRange] = useState('Below 2.5 Lakh');
  const [hasLand, setHasLand] = useState(false);

  // Evaluate matching schemes
  const getResults = (): { matched: Scheme[]; reasons: Record<string, string> } => {
    const reasons: Record<string, string> = {};

    const matched = schemes.filter((s) => {
      // Agriculture logic
      if (s.category === 'Agriculture' || s.targetAudience.includes('Farmers')) {
        if (occupation === 'Farmer' || hasLand) {
          reasons[s.id] = 'Matches: You indicated farmer or agricultural landholder status.';
          return true;
        }
        return false;
      }

      // Women logic
      if (s.category === 'Women' || s.slug.includes('mahila') || s.slug.includes('magalir') || s.slug.includes('ujjwala')) {
        if (gender === 'Female') {
          if (s.slug.includes('magalir') && state !== 'Tamil Nadu') {
            return false;
          }
          reasons[s.id] = `Matches: Applicable for female citizens with household income ${incomeRange}.`;
          return true;
        }
        return false;
      }

      // Education logic
      if (s.category === 'Education' || s.targetAudience.includes('Students')) {
        if (occupation === 'Student' || ageGroup === 'Below 18' || ageGroup === '18-25') {
          reasons[s.id] = 'Matches: Applicable for students and young scholars within income eligibility.';
          return true;
        }
        return false;
      }

      // Healthcare / Ayushman logic
      if (s.slug.includes('ayushman')) {
        if (ageGroup === '60+' || incomeRange === 'Below 1 Lakh' || incomeRange === 'Below 2.5 Lakh') {
          reasons[s.id] = 'Matches: Eligible under priority healthcare and senior citizen universal coverage.';
          return true;
        }
        return false;
      }

      // State specific logic
      if (s.state && s.state !== state && s.governmentLevel === 'State') {
        return false;
      }

      reasons[s.id] = 'General match based on citizen state domicile and welfare criteria.';
      return true;
    });

    return { matched, reasons };
  };

  const { matched, reasons } = getResults();

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full max-w-lg max-h-[92vh] sm:rounded-3xl rounded-t-3xl bg-white dark:bg-slate-900 overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-6 duration-200">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-brand-600" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Eligibility Checker
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {step === 'intro' && (
            <div className="text-center py-4 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 mx-auto flex items-center justify-center shadow-inner border border-brand-200 dark:border-brand-800">
                <ClipboardCheck className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Check Your Eligibility
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mt-1 leading-relaxed">
                  Find out which government welfare schemes and benefits you qualify for in 60 seconds.
                </p>
              </div>

              {/* 3 Steps matching Screen 4 of Reference 2 */}
              <div className="space-y-3 max-w-sm mx-auto text-left">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Answer a few simple questions
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Instant rule-based eligibility evaluation
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Explore matching schemes & checklists
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep('questions')}
                className="w-full py-3.5 px-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
              >
                <span>Start Checking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 'questions' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  1. Your State / Domicile
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  {INDIAN_STATES_AND_UT.map((s) => (
                    <option key={s.code} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  2. Age Group
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Below 18', '18-25', '26-40', '41-60', '60+'].map((ag) => (
                    <button
                      key={ag}
                      onClick={() => setAgeGroup(ag)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition ${
                        ageGroup === ag
                          ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {ag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  3. Primary Occupation
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['Farmer', 'Student', 'Job Seeker', 'Self-Employed / Artisan', 'Homemaker / Woman', 'Salaried'].map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setOccupation(occ)}
                      className={`p-2 rounded-xl text-xs font-semibold border text-left truncate transition ${
                        occupation === occ
                          ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  4. Gender
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Female', 'Male', 'Other'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition ${
                        gender === g
                          ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  5. Annual Household Income
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['Below 1 Lakh', 'Below 2.5 Lakh', '2.5L – 5 Lakh', 'Above 5 Lakh'].map((inc) => (
                    <button
                      key={inc}
                      onClick={() => setIncomeRange(inc)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition ${
                        incomeRange === inc
                          ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {inc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="landChk"
                  checked={hasLand}
                  onChange={(e) => setHasLand(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
                />
                <label htmlFor="landChk" className="text-xs text-slate-700 dark:text-slate-300">
                  Family holds cultivable agricultural land
                </label>
              </div>

              <button
                onClick={() => setStep('results')}
                className="w-full py-3.5 px-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition mt-4"
              >
                <span>View Eligible Schemes ({matched.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 'results' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-200">
                    {matched.length} Schemes Potentially Relevant
                  </h4>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                    Based on: {state} • {occupation} • {gender} • {incomeRange}
                  </p>
                </div>
                <button
                  onClick={() => setStep('questions')}
                  className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 shadow-sm text-xs font-semibold flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Matched Schemes Cards */}
              <div className="space-y-2.5">
                {matched.map((scheme) => (
                  <div
                    key={scheme.id}
                    onClick={() => {
                      onClose();
                      setSelectedScheme(scheme);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 shadow-sm transition cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-brand-700 dark:text-brand-400">
                        {scheme.governmentLevel} Govt • {scheme.category}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Eligible</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-xs text-slate-900 dark:text-white mt-0.5">
                      {scheme.name}
                    </h4>

                    {reasons[scheme.id] && (
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium mt-1 bg-emerald-50 dark:bg-emerald-950/40 p-1.5 rounded-lg">
                        {reasons[scheme.id]}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700 text-[11px]">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {scheme.benefitAmount || 'Direct Benefit'}
                      </span>
                      <span className="text-brand-700 dark:text-brand-400 font-bold flex items-center gap-0.5">
                        <span>Checklist & Apply</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legal Disclaimer */}
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-[10px] text-amber-900 dark:text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Disclaimer:</strong> This is an indicative automated assessment based on verified rules. The responsible government sanctioning authority makes the final selection.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
