import React from 'react';
import { X, CheckCircle, ExternalLink, Bookmark, Share2, AlertCircle, FileText, Calendar, Building2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Scheme } from '../../types';
import { useApp } from '../../context/AppContext';

interface SchemeDetailModalProps {
  scheme: Scheme;
  onClose: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({ scheme, onClose }) => {
  const { isItemSaved, toggleSaveItem, t } = useApp();
  const isSaved = isItemSaved(scheme.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: scheme.name,
        text: `${scheme.name} - ${scheme.summary}\nApply on official portal: ${scheme.officialUrl}`,
        url: scheme.officialUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${scheme.name}: ${scheme.officialUrl}`);
      alert('Official scheme link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div
        className="w-full max-w-lg max-h-[92vh] sm:rounded-3xl rounded-t-3xl bg-white dark:bg-slate-900 overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-6 duration-200"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300">
              {scheme.governmentLevel} Govt
            </span>
            {scheme.state && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                {scheme.state}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              {scheme.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveItem(scheme.id)}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              title={isSaved ? 'Saved' : 'Save'}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-brand-700 text-brand-700 dark:fill-brand-400 dark:text-brand-400' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-5">
          {/* Title & Department */}
          <div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
              {scheme.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 shrink-0" />
              <span>{scheme.department}</span>
            </p>
            {scheme.administration && (
              <p className="text-[11px] text-brand-700 dark:text-brand-400 font-medium mt-1">
                Historical Administration: <strong>{scheme.administration}</strong>
              </p>
            )}
          </div>

          {/* Verification Badge */}
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/40 flex items-center gap-2.5 text-xs text-emerald-900 dark:text-emerald-200">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold">Official Information Verified</p>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                Checked against official government gazette • Last verified on {scheme.verifiedAt}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Overview & Objective
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              {scheme.summary}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Benefits & Assistance
            </h3>
            <div className="p-3.5 rounded-2xl bg-brand-50/70 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-900/40 text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2 font-bold text-brand-900 dark:text-brand-300 text-sm mb-1">
                <HeartHandshake className="w-4 h-4 text-brand-600" />
                <span>{scheme.benefitAmount || 'Direct Welfare Support'}</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{scheme.benefits}</p>
            </div>
          </div>

          {/* Eligibility Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Who is Eligible?
            </h3>
            <div className="space-y-2">
              {scheme.eligibilityCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Required Documents Checklist
            </h3>
            <div className="space-y-2">
              {scheme.requiredDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs"
                >
                  <FileText className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{doc.name}</span>
                      {doc.mandatory ? (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                          Mandatory
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-slate-100 text-slate-600">
                          Optional
                        </span>
                      )}
                    </div>
                    {doc.notes && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{doc.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Step-by-Step Application Process
            </h3>
            <div className="space-y-2.5 pl-1">
              {scheme.applicationProcedure.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-brand-700 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </div>
                  <p className="leading-snug pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong>Official Disclaimer:</strong> SchemeSathi is an independent citizen information platform. Applications must be completed on the official government portal. SchemeSathi does not process applications or guarantee selection.
            </p>
          </div>
        </div>

        {/* Modal Footer / Direct Apply Button */}
        <div className="sticky bottom-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 border-t border-slate-100 dark:border-slate-800">
          <a
            href={scheme.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
          >
            <span>Apply on Official Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-center text-[10px] text-slate-400 mt-1.5">
            Opens verified portal: {scheme.officialUrl}
          </p>
        </div>
      </div>
    </div>
  );
};
