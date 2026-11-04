import React from 'react';
import { GraduationCap, BookOpen, Video, CheckSquare, TrendingUp, ExternalLink, Calendar, Users, Award, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VERIFIED_SCHOLARSHIPS, LEARNING_RESOURCES, EXAM_NOTIFICATIONS } from '../../data/education';

export const EducationView: React.FC = () => {
  const { setIsEligibilityOpen, t } = useApp();

  const getResourceIcon = (iconName: string) => {
    switch (iconName) {
      case 'book-open': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'video': return <Video className="w-5 h-5 text-emerald-600" />;
      case 'check-square': return <CheckSquare className="w-5 h-5 text-purple-600" />;
      default: return <TrendingUp className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Hero Banner (matches Screen 1 in Reference 3) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white p-5 shadow-sm border border-emerald-800/50">
        <div className="absolute right-3 top-3 opacity-20">
          <GraduationCap className="w-24 h-24 text-white" />
        </div>
        <div className="relative z-10 max-w-[280px]">
          <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase">
            Learn • Grow • Achieve
          </span>
          <h2 className="text-xl font-black tracking-tight leading-tight mt-0.5">
            Education for a<br />
            <span className="text-emerald-300 font-bold">Brighter Future</span>
          </h2>
          <p className="text-xs text-emerald-100/90 mt-1.5 leading-relaxed">
            Explore scholarships, free government learning resources, textbooks and exam alerts!
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-emerald-950 rounded-full font-bold text-xs shadow-sm">
            <span>Explore Education</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Scholarships Section (matches Reference 3) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand-600" />
            <span>{t.scholarships}</span>
          </h3>
          <span className="text-xs text-brand-700 dark:text-brand-400 font-semibold">View All →</span>
        </div>

        {VERIFIED_SCHOLARSHIPS.map((sch) => (
          <div
            key={sch.id}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    {sch.level}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                    {sch.authority}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                  {sch.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {sch.eligibility}
                </p>

                <div className="flex items-center gap-3 mt-2.5 text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-brand-800 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 px-2 py-0.5 rounded-md border border-brand-100 dark:border-brand-900/40">
                    {sch.amount}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>Last: <strong>{sch.lastDate}</strong></span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-end gap-1.5">
                <a
                  href={sch.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-brand-700 hover:bg-brand-800 text-white rounded-xl text-xs font-bold shadow-sm transition inline-flex items-center gap-1"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[10px] text-slate-400">National Portal</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Resources 2x2 Grid (matches Reference 3) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-brand-600" />
            <span>{t.learningResources}</span>
          </h3>
          <span className="text-xs text-brand-700 dark:text-brand-400 font-semibold">View More →</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {LEARNING_RESOURCES.map((res) => (
            <a
              key={res.id}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition block group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                {getResourceIcon(res.icon)}
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white leading-tight">
                {res.title}
              </h4>
              <p className="text-[11px] text-brand-700 dark:text-brand-400 font-medium mt-0.5">
                {res.category}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {res.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Exams Section (matches Reference 3) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand-600" />
            <span>{t.exams}</span>
          </h3>
          <span className="text-xs text-brand-700 dark:text-brand-400 font-semibold">View All →</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {EXAM_NOTIFICATIONS.map((ex) => (
            <a
              key={ex.id}
              href={ex.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 block hover:bg-white dark:hover:bg-slate-800 transition"
            >
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {ex.examDate}
              </span>
              <h5 className="font-bold text-xs text-slate-900 dark:text-white mt-1 leading-snug">
                {ex.title}
              </h5>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                {ex.authority}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Eligibility Checker Banner at Bottom (matches Reference 3) */}
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
              Not sure which scholarship is right for you?
            </h4>
            <p className="text-[11px] text-brand-700 dark:text-brand-300 font-medium mt-0.5">
              Try our Eligibility Checker →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
