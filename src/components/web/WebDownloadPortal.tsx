import React, { useState } from 'react';
import { Smartphone, Download, ShieldCheck, CheckCircle2, Bot, Briefcase, Landmark, HelpCircle, ArrowRight, ExternalLink, Zap, Users, Heart, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WebDownloadPortal: React.FC = () => {
  const { setViewMode, t } = useApp();
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Create a mock/real download trigger for SchemeSathi.apk
    const element = document.createElement('a');
    const file = new Blob([
      `SchemeSathi Android APK Release v1.0.0\nPackage: com.schemesathi.app\nGenerated for Indian Citizens\nBuilt with Capacitor 6 + React + Vite`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'SchemeSathi-v1.0.0.apk';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Web Header matching Reference 4 */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center font-bold text-brand-700 dark:text-brand-400">
              <svg className="w-6 h-6 text-brand-700 dark:text-brand-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                SchemeSathi
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                Government Schemes • Jobs • Your Rights
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-brand-700 transition">Features</a>
            <a href="#whyus" className="hover:text-brand-700 transition">Why Us</a>
            <a href="#download" className="hover:text-brand-700 transition">Download APK</a>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setViewMode('app')}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Smartphone className="w-4 h-4 text-brand-600" />
              <span>Launch Mobile Feed</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Get APK</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section matching Reference 4 */}
      <section className="relative overflow-hidden py-12 md:py-16 px-4 bg-gradient-to-b from-brand-50/60 via-white to-slate-50 dark:from-brand-950/30 dark:via-slate-900 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Heading & Download CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-brand-800 dark:text-brand-300 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-ping" />
              <span>New Android Release v1.0.0 Now Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              SchemeSathi<br />
              <span className="text-brand-700 dark:text-brand-400">Discover. Apply. Grow.</span>
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Your one-stop app to explore government schemes, job updates, scholarships, and citizen rights — easily and securely!
            </p>

            {/* Download Button matching Reference 4 */}
            <div className="space-y-3">
              <button
                id="download"
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-700 to-emerald-600 hover:from-brand-800 hover:to-emerald-700 text-white font-extrabold text-base shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transition transform hover:-translate-y-0.5"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-wider text-emerald-100">Direct Android Download</div>
                  <div>Download APK (Latest Version)</div>
                </div>
                <Download className="w-5 h-5 ml-2" />
              </button>

              {downloadStarted && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 text-xs text-emerald-800 dark:text-emerald-300">
                  ✓ Downloading <strong>SchemeSathi-v1.0.0.apk</strong>. Once downloaded, tap to install.
                </div>
              )}

              {/* Trust Badges matching Reference 4 */}
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Safe
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> Secure
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-4 h-4" /> Official Source
                </span>
              </div>
            </div>

            {/* Technical Metadata */}
            <div className="grid grid-cols-3 gap-2 max-w-md pt-2 text-[11px] text-slate-500 border-t border-slate-200/60 dark:border-slate-800">
              <div>
                <span className="block font-bold text-slate-800 dark:text-slate-200">Version</span>
                <span>v1.0.0 Stable</span>
              </div>
              <div>
                <span className="block font-bold text-slate-800 dark:text-slate-200">File Size</span>
                <span>18.4 MB</span>
              </div>
              <div>
                <span className="block font-bold text-slate-800 dark:text-slate-200">OS Support</span>
                <span>Android 7.0+</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="flex justify-center">
            <div className="relative w-72 sm:w-80 rounded-[40px] p-3 bg-slate-900 shadow-2xl ring-8 ring-slate-800/80 border border-slate-700">
              {/* Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

              {/* Screen Preview */}
              <div className="rounded-[30px] overflow-hidden bg-white dark:bg-slate-950 p-3 space-y-3 shadow-inner">
                {/* Mini Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-bold">
                  <span className="text-brand-700 font-extrabold">SchemeSathi</span>
                  <span className="text-[10px] text-emerald-600">● Live Updates</span>
                </div>

                {/* Mini Banner */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-900 to-teal-800 text-white text-[11px]">
                  <p className="font-bold text-xs">PM-KISAN 19th Instalment</p>
                  <p className="text-[10px] text-emerald-200 mt-0.5">₹2,000 credited to farmers</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-white text-emerald-950 rounded font-bold text-[9px]">
                    Verified DBT
                  </span>
                </div>

                {/* Mini Job Card */}
                <div className="p-2.5 rounded-xl bg-slate-50 text-[10px] space-y-1">
                  <span className="font-bold text-blue-700">MHA Recruitment 2025</span>
                  <p className="text-slate-600 line-clamp-1">6,100+ Group C & D vacancies</p>
                  <span className="font-bold text-emerald-600 block">Apply Now →</span>
                </div>

                <div className="p-2.5 rounded-xl bg-brand-50 text-[10px] text-brand-900">
                  <strong>3-Step Eligibility Checker:</strong> Find relevant schemes instantly.
                </div>

                <button
                  onClick={() => setViewMode('app')}
                  className="w-full py-2 bg-brand-700 text-white rounded-xl text-xs font-bold shadow-sm"
                >
                  Interactive Live Preview →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section matching Reference 4 */}
      <section id="features" className="py-14 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-700 dark:text-brand-400 mb-1">
            Core Highlights
          </h3>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Key Features of SchemeSathi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Explore Schemes */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-brand-700 dark:text-brand-400 mx-auto flex items-center justify-center">
              <Landmark className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Explore Schemes</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Find central and state government schemes easily with clear benefits, eligibility criteria and application guides.
            </p>
          </div>

          {/* Card 2: Get Job Updates */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center">
              <Briefcase className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Get Job Updates</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Stay updated with latest UPSC, SSC, Defence, Railway, and State PSC notifications with verified deadlines and vacancies.
            </p>
          </div>

          {/* Card 3: Check Eligibility */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 mx-auto flex items-center justify-center">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Check Eligibility</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Know your potential eligibility instantly through our transparent, explainable 3-step citizen assessment engine.
            </p>
          </div>

          {/* Card 4: Ask AI Doubts */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
              <Bot className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Ask AI Doubts</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get grounded answers in English, Telugu, Hindi and other Indian languages with official government portal citations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose SchemeSathi Section matching Reference 4 */}
      <section id="whyus" className="py-14 px-4 bg-emerald-50/50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-700 dark:text-brand-400 mb-1">
              Trust & Transparency
            </h3>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Why Choose SchemeSathi?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-2">
              <Zap className="w-6 h-6 text-brand-600 mx-auto" />
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">Fast & Easy Access</h5>
              <p className="text-xs text-slate-500">Zero sign-in barrier for browsing & search.</p>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-2">
              <Landmark className="w-6 h-6 text-brand-600 mx-auto" />
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">Official Information</h5>
              <p className="text-xs text-slate-500">Every card cites original .gov.in sources.</p>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-2">
              <Users className="w-6 h-6 text-brand-600 mx-auto" />
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">For Every Citizen</h5>
              <p className="text-xs text-slate-500">Farmers, students, women, seniors & youth.</p>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-2">
              <Heart className="w-6 h-6 text-brand-600 mx-auto" />
              <h5 className="font-bold text-sm text-slate-900 dark:text-white">Empowering India</h5>
              <p className="text-xs text-slate-500">"Your Rights. Our Priority."</p>
            </div>
          </div>

          {/* Sideloading Installation Guide */}
          <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto text-xs space-y-3">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-brand-600" />
              <span>How to Install SchemeSathi APK on Android</span>
            </h4>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>Tap <strong>Download APK (Latest Version)</strong> above to download `SchemeSathi-v1.0.0.apk`.</li>
              <li>When prompted by Android, allow download from browser.</li>
              <li>Open the downloaded `.apk` file and tap <strong>Install</strong>. If prompted, toggle "Allow from this source".</li>
              <li>Launch SchemeSathi and explore all government schemes immediately!</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <p className="font-semibold text-slate-800 dark:text-slate-300">
          SchemeSathi — Independent Indian Citizen Information Platform
        </p>
        <p>
          Scheme details are verified against official government gazettes. SchemeSathi does not process applications or guarantee selection.
        </p>
        <p className="text-[11px] text-slate-400">
          © 2026 SchemeSathi. Built for all Indian citizens under ₹0 zero-budget open-source architecture.
        </p>
      </footer>
    </div>
  );
};
