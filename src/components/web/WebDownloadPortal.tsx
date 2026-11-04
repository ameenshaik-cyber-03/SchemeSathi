import React, { useState } from 'react';
import { Smartphone, Download, ShieldCheck, CheckCircle2, Bot, Briefcase, Landmark, HelpCircle, ArrowRight, ExternalLink, Zap, Users, Heart, Award, FileText, Check, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WebDownloadPortal: React.FC = () => {
  const { setViewMode, setActiveTab, setActiveCategory, setIsEligibilityOpen } = useApp();
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [activeNav, setActiveNav] = useState<'Home' | 'About' | 'Features' | 'Why Us' | 'Contact'>('Home');

  const handleDownload = () => {
    setDownloadStarted(true);
    const link = document.createElement('a');
    link.href = '/downloads/SchemeSathi-v1.0.0.apk';
    link.download = 'SchemeSathi-v1.0.0.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const launchFeatureInApp = (tab: 'home' | 'jobs' | 'schemes' | 'aichat', category?: any) => {
    setViewMode('app');
    setActiveTab(tab);
    if (category) {
      setActiveCategory(category);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      {/* 1. TOP NAVBAR (Matches uploaded design) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#E8F5EE] flex items-center justify-center shadow-xs border border-emerald-200">
              <svg className="w-7 h-7 text-[#0B7B4B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-[#0B7B4B] tracking-tight leading-none">
                  SchemeSathi
                </h1>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight mt-0.5">
                Government Schemes • Jobs • Your Rights
              </p>
            </div>
          </div>

          {/* Navigation Pill Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-600">
            {(['Home', 'About', 'Features', 'Why Us', 'Contact'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-1.5 rounded-full transition ${
                  activeNav === item
                    ? 'bg-[#0B7B4B] text-white shadow-xs font-bold'
                    : 'hover:text-emerald-800 hover:bg-slate-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* National Emblem & Slogan */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block text-right">
              <span className="text-[11px] font-bold italic text-slate-700 block">
                Empowering Citizens...
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Building a Better India
              </span>
            </div>

            {/* Ashoka Lion Capital Emblem Silhouette */}
            <div className="w-9 h-11 opacity-80 shrink-0" title="State Emblem of India">
              <svg viewBox="0 0 100 120" className="w-full h-full fill-slate-800">
                <circle cx="50" cy="25" r="15"/>
                <path d="M35 45h30v25H35zM40 75h20v20H40zM25 100h50v8H25z"/>
                <circle cx="50" cy="85" r="5" fill="#fff"/>
              </svg>
            </div>

            {/* Live Interactive Mobile App Launcher */}
            <button
              onClick={() => setViewMode('app')}
              className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-[#0B7B4B] border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Launch App</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Matching exact uploaded reference layout) */}
      <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#EBF5EE] via-[#F4FAF6] to-[#FFFFFF] border-b border-emerald-100">
        {/* Soft background countryside monument silhouettes */}
        <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
            {/* Monument silhouettes: Parliament, Taj Mahal, Red Fort */}
            <path d="M200 450c50-80 150-80 200 0v150H200z" fill="#0B7B4B"/>
            <path d="M600 400c80-120 220-120 300 0v200H600z" fill="#0B7B4B"/>
            <path d="M1100 420c60-90 180-90 240 0v180h-240z" fill="#0B7B4B"/>
            {/* Soft rolling green hills */}
            <path d="M0 480 Q360 400 720 460 T1440 440 L1440 600 L0 600 Z" fill="#0B7B4B"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column (Span 7): App Icon Card, Big Heading, Download CTA, Citizens */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* App Icon Card */}
            <div className="inline-flex items-center gap-3.5 p-3 rounded-2xl bg-white shadow-md border border-emerald-100">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F5EE] flex items-center justify-center shrink-0 border border-emerald-200 shadow-inner">
                <svg className="w-9 h-9 text-[#0B7B4B]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0B7B4B] leading-none">SchemeSathi</h2>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Government Schemes • Jobs • Your Rights
                </p>
              </div>
            </div>

            {/* Giant Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Discover. Apply. <span className="text-[#0B7B4B]">Grow.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mt-3 leading-snug">
                Your one-stop app to explore government schemes, job updates and more — easily and securely!
              </p>
            </div>

            {/* Big Download APK Button with Speed Lines */}
            <div className="pt-1">
              <div className="relative inline-block">
                {/* Speed Lines */}
                <div className="absolute -top-3 -left-4 flex gap-1 pointer-events-none">
                  <span className="w-1 h-3 bg-[#0B7B4B] rounded-full rotate-45 transform origin-bottom" />
                  <span className="w-1 h-4 bg-[#0B7B4B] rounded-full rotate-45 transform origin-bottom" />
                  <span className="w-1 h-2 bg-[#0B7B4B] rounded-full rotate-45 transform origin-bottom" />
                </div>

                <button
                  onClick={handleDownload}
                  className="px-8 py-3.5 rounded-full bg-[#0B7B4B] hover:bg-[#075936] text-white font-extrabold text-base shadow-lg hover:shadow-xl flex items-center gap-4 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Smartphone className="w-6 h-6 shrink-0" />
                  <div className="text-left">
                    <div className="text-lg font-black leading-tight">Download APK</div>
                    <div className="text-[11px] font-medium text-emerald-100 opacity-90 leading-none">
                      (Latest Version)
                    </div>
                  </div>
                  <Download className="w-5 h-5 shrink-0 ml-1" />
                </button>
              </div>

              {/* Trust Badge Below Button */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-300 text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>Safe</span>
                <span>•</span>
                <span>Secure</span>
                <span>•</span>
                <span>Official Source</span>
              </div>

              {downloadStarted && (
                <div className="mt-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 max-w-sm">
                  ✓ Downloading <strong>SchemeSathi-v1.0.0.apk</strong>. Once finished, tap to install.
                </div>
              )}
            </div>

            {/* Indian Citizens Illustration Placeholder (Farmer, Woman, Students) */}
            <div className="pt-4 flex items-end gap-3 max-w-lg">
              <div className="flex-1 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-xs flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-base" title="Farmer">
                    👨‍🌾
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-base" title="Woman">
                    👩
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-base" title="School Student">
                    👧
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-base" title="College Youth">
                    👨‍🎓
                  </div>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900">For Every Citizen</p>
                  <p className="text-[11px] text-slate-500">Farmers, Women, Students & Job Seekers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 5): Realistic Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 sm:w-80 rounded-[44px] p-3 bg-slate-900 shadow-2xl ring-8 ring-slate-800/60 border border-slate-700 relative">
              {/* Speaker / Punchhole */}
              <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

              {/* Inside Screen Content matching Phone in Reference 4 */}
              <div className="rounded-[32px] overflow-hidden bg-white text-slate-900 p-3 space-y-2.5 shadow-inner text-left">
                {/* Header inside phone */}
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#E8F5EE] flex items-center justify-center text-[#0B7B4B]">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#0B7B4B] leading-none">SchemeSathi</p>
                      <p className="text-[8px] text-slate-400">Government Schemes • Jobs • Your Rights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="w-3.5 h-3.5">🔍</span>
                    <span className="w-3.5 h-3.5">🔔</span>
                  </div>
                </div>

                {/* Category Pills inside phone */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[9px] font-bold pb-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#E8F5EE] text-[#0B7B4B] border border-emerald-300">
                    For You
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Jobs</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Schemes</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Education</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Farmers</span>
                </div>

                {/* Hero Banner inside phone */}
                <div className="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-800 text-white space-y-1">
                  <p className="font-black text-xs leading-tight">Empowering Every Citizen</p>
                  <p className="text-[9px] text-emerald-200">Explore Schemes for a Better Tomorrow</p>
                  <button
                    onClick={() => launchFeatureInApp('schemes')}
                    className="mt-1 px-2.5 py-0.5 rounded-full bg-white text-emerald-950 font-bold text-[9px] shadow-xs"
                  >
                    Explore Schemes →
                  </button>
                </div>

                {/* Category Icon Grid inside phone */}
                <div className="grid grid-cols-4 gap-1 text-center text-[8px] font-semibold text-slate-700 pt-1">
                  <div onClick={() => launchFeatureInApp('home', 'Farmers')} className="p-1 rounded-xl bg-slate-50 cursor-pointer">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 mx-auto flex items-center justify-center text-xs mb-0.5">🚜</div>
                    <span>Farmers</span>
                  </div>
                  <div onClick={() => launchFeatureInApp('home', 'Women')} className="p-1 rounded-xl bg-slate-50 cursor-pointer">
                    <div className="w-6 h-6 rounded-lg bg-pink-100 mx-auto flex items-center justify-center text-xs mb-0.5">👩</div>
                    <span>Women</span>
                  </div>
                  <div onClick={() => launchFeatureInApp('home', 'Education')} className="p-1 rounded-xl bg-slate-50 cursor-pointer">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 mx-auto flex items-center justify-center text-xs mb-0.5">🎓</div>
                    <span>Education</span>
                  </div>
                  <div onClick={() => launchFeatureInApp('schemes')} className="p-1 rounded-xl bg-slate-50 cursor-pointer">
                    <div className="w-6 h-6 rounded-lg bg-purple-100 mx-auto flex items-center justify-center text-xs mb-0.5">•••</div>
                    <span>More</span>
                  </div>
                </div>

                {/* Popular Scheme Card inside phone */}
                <div className="p-2 rounded-xl border border-slate-100 bg-slate-50/80 space-y-0.5">
                  <div className="flex items-center justify-between text-[8px] font-bold text-slate-400">
                    <span>Popular Schemes</span>
                    <span className="text-[#0B7B4B]">View All →</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-xs shrink-0">
                      🌾
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[10px] text-slate-900 truncate">PM-KISAN Samman Nidhi</p>
                      <p className="text-[8px] text-slate-500">₹6,000/yr for small and marginal farmers</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Mini Bottom Nav */}
                <div className="pt-1 flex items-center justify-around border-t border-slate-100 text-[8px] text-slate-400 font-semibold">
                  <span className="text-[#0B7B4B] font-bold">Home</span>
                  <span>Schemes</span>
                  <span>AI Chat</span>
                  <span>Saved</span>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLOATING FEATURE PILL DOCK (Matches 4-card dock in uploaded image) */}
      <section id="features" className="relative -mt-8 max-w-5xl mx-auto px-4 z-20">
        <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-emerald-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Card 1: Explore Government Schemes */}
          <div
            onClick={() => launchFeatureInApp('schemes')}
            className="p-4 rounded-2xl hover:bg-emerald-50 transition cursor-pointer text-center space-y-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5EE] group-hover:bg-[#0B7B4B] text-[#0B7B4B] group-hover:text-white mx-auto flex items-center justify-center transition-all shadow-xs">
              <Landmark className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
              Explore Government Schemes
            </h4>
            <p className="text-[11px] text-slate-500">Find central & state welfare schemes</p>
          </div>

          {/* Card 2: Get Job Updates */}
          <div
            onClick={() => launchFeatureInApp('jobs')}
            className="p-4 rounded-2xl hover:bg-blue-50 transition cursor-pointer text-center space-y-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white mx-auto flex items-center justify-center transition-all shadow-xs">
              <Briefcase className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
              Get Job Updates
            </h4>
            <p className="text-[11px] text-slate-500">Latest UPSC, SSC, Defence & PSC jobs</p>
          </div>

          {/* Card 3: Check Eligibility */}
          <div
            onClick={() => {
              setViewMode('app');
              setIsEligibilityOpen(true);
            }}
            className="p-4 rounded-2xl hover:bg-purple-50 transition cursor-pointer text-center space-y-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white mx-auto flex items-center justify-center transition-all shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
              Check Eligibility
            </h4>
            <p className="text-[11px] text-slate-500">Instant 3-step transparent checking</p>
          </div>

          {/* Card 4: Ask AI Doubts */}
          <div
            onClick={() => launchFeatureInApp('aichat')}
            className="p-4 rounded-2xl hover:bg-amber-50 transition cursor-pointer text-center space-y-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-600 text-amber-600 group-hover:text-white mx-auto flex items-center justify-center transition-all shadow-xs">
              <Bot className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
              Ask AI Doubts
            </h4>
            <p className="text-[11px] text-slate-500">Grounded answers in your language</p>
          </div>
        </div>
      </section>

      {/* 4. STATS & SLOGAN BAR (Matches bottom bar in uploaded reference) */}
      <section id="whyus" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-100 shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Left Stats (Span 7) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-4 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6 text-left">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F5EE] text-[#0B7B4B] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none">10M+</p>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Citizens Helped</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F5EE] text-[#0B7B4B] flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none">1000+</p>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Schemes & Jobs</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F5EE] text-[#0B7B4B] flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-black text-slate-900 leading-none">Fast & Easy</p>
                <p className="text-[11px] text-slate-500 font-semibold mt-0.5">Access</p>
              </div>
            </div>
          </div>

          {/* Right Slogan with Tricolor Ribbon & India Gate Silhouette (Span 5) */}
          <div className="md:col-span-5 relative text-right flex flex-col justify-center items-end">
            <h3 className="text-2xl sm:text-3xl font-black italic text-slate-900 tracking-tight">
              Your Rights. Our Priority.
            </h3>
            {/* Indian Flag Tricolor Ribbon Swirl */}
            <div className="w-48 h-1.5 rounded-full bg-gradient-to-r from-orange-500 via-white to-green-600 shadow-xs mt-2 border border-slate-200" />
            <p className="text-[10px] text-slate-400 mt-2">
              Official Indian Citizen Welfare Discovery Engine
            </p>
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD SPECIFICATIONS & INSTALLATION GUIDE */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#0B7B4B]" />
              <span>Android APK Package Technical Details</span>
            </h4>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              Verified Release
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-[10px] font-semibold block">Package ID</span>
              <strong className="text-slate-900 font-mono text-[11px]">com.schemesathi.app</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-[10px] font-semibold block">Version</span>
              <strong className="text-slate-900">v1.0.0 (Build 1)</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-[10px] font-semibold block">Min Android OS</span>
              <strong className="text-slate-900">Android 7.0+ (API 24+)</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 text-[10px] font-semibold block">Integrity</span>
              <strong className="text-emerald-700">SHA-256 Signed</strong>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#E8F5EE] border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <p className="font-bold">Simple Sideloading Installation Steps:</p>
            <p>1. Tap the <strong>Download APK (Latest Version)</strong> button above to download `SchemeSathi-v1.0.0.apk`.</p>
            <p>2. Tap the downloaded file in your browser downloads or Files app.</p>
            <p>3. If prompted by Android, enable "Install unknown apps" or "Allow from this source".</p>
            <p>4. Open SchemeSathi and immediately explore government welfare schemes with zero sign-in barrier!</p>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-8 px-4 text-center text-xs text-slate-500 border-t border-slate-200 bg-white">
        <p className="font-bold text-slate-800">
          SchemeSathi — Independent Indian Citizen Information Platform
        </p>
        <p className="mt-1">
          Government Schemes • Jobs • Your Rights • Discover. Apply. Grow.
        </p>
        <p className="text-[10px] text-slate-400 mt-2">
          © 2026 SchemeSathi. Built for all Indian citizens under ₹0 zero-budget open-source architecture.
        </p>
      </footer>
    </div>
  );
};
