import React, { useState } from 'react';
import { User, Globe, Bell, Shield, HelpCircle, Info, LogOut, Moon, Sun, ChevronRight, Lock, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SupportedLanguage } from '../../data/translations';
import { INDIAN_STATES_AND_UT } from '../../data/administrations';

export const ProfileView: React.FC = () => {
  const { user, logout, setIsAuthModalOpen, language, setLanguage, theme, toggleTheme, setIsAdminOpen, t } = useApp();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  const languages: { code: SupportedLanguage; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' }
  ];

  return (
    <div className="space-y-4 pb-20">
      {/* Profile Header (matches Screen 5 in Reference 2) */}
      <div className="text-center py-6 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mx-auto flex items-center justify-center mb-2 relative">
          <User className="w-10 h-10" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {user.isGuest ? 'Profile' : user.displayName || 'Profile'}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {user.isGuest ? 'Browsing as Guest Citizen' : user.email}
        </p>
        {user.role === 'admin' && (
          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            Editorial Administrator
          </span>
        )}
      </div>

      {/* Menu Items (matches Screen 5 in Reference 2) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
        {/* Personal Details */}
        <button
          onClick={() => setShowPersonalDetails(!showPersonalDetails)}
          className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <span className="font-semibold text-xs text-slate-900 dark:text-white">
              Personal Details
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        {showPersonalDetails && (
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 text-xs space-y-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span className="font-semibold">State / UT:</span>
              <span>{user.state || 'All India (Not configured)'}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span className="font-semibold">Preferred Language:</span>
              <span className="capitalize">{language}</span>
            </div>
            <p className="text-[10px] text-slate-400 italic pt-1">
              Data minimization policy: Profile details are stored locally on your device and are strictly optional.
            </p>
          </div>
        )}

        {/* Language Preference */}
        <button
          onClick={() => setShowLanguageModal(true)}
          className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <span className="font-semibold text-xs text-slate-900 dark:text-white">
              Language Preference
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span>{languages.find((l) => l.code === language)?.native || 'English'}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </button>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </div>
            <span className="font-semibold text-xs text-slate-900 dark:text-white">
              Appearance
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium capitalize">{theme} Mode</span>
        </button>

        {/* Privacy & Security */}
        <button
          onClick={() => setShowPrivacyModal(true)}
          className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-semibold text-xs text-slate-900 dark:text-white">
              Privacy & Security
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        {/* Admin Dashboard Entry (if admin) */}
        {user.role === 'admin' && (
          <button
            onClick={() => setIsAdminOpen(true)}
            className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition text-left bg-amber-50/50 dark:bg-amber-950/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs text-amber-900 dark:text-amber-300">
                Editorial Admin Dashboard
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-600" />
          </button>
        )}

        {/* About */}
        <div className="p-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
              <Info className="w-4 h-4" />
            </div>
            <span>App Version</span>
          </div>
          <span className="font-bold">v1.0.0 (MVP Release)</span>
        </div>
      </div>

      {/* Log In / Log Out Action */}
      <div className="pt-2">
        {user.isGuest ? (
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="w-full py-3.5 px-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" />
            <span>Sign In / Create Account</span>
          </button>
        ) : (
          <button
            onClick={logout}
            className="w-full py-3.5 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-red-50 text-slate-700 dark:text-slate-300 hover:text-red-600 font-bold text-xs transition flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        )}
      </div>

      {/* Language Selector Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-xs bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Select Language</h4>
              <button onClick={() => setShowLanguageModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 space-y-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLanguage(l.code);
                    setShowLanguageModal(false);
                  }}
                  className={`w-full p-3 rounded-2xl text-xs font-semibold flex items-center justify-between transition ${
                    language === l.code
                      ? 'bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300 border border-brand-300 dark:border-brand-800'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div>
                    <p className="font-bold">{l.native}</p>
                    <p className="text-[10px] text-slate-500">{l.label}</p>
                  </div>
                  {language === l.code && <Check className="w-4 h-4 text-brand-700 dark:text-brand-400" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Privacy & Citizen Security</h4>
              </div>
              <button onClick={() => setShowPrivacyModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                <strong>1. No Aadhaar or Identity Document Uploads:</strong> SchemeSathi never asks for, uploads, or stores your Aadhaar number, PAN card, or bank passwords.
              </p>
              <p>
                <strong>2. Guest Browsing First:</strong> You can search schemes, check eligibility, and ask the AI assistant without creating an account.
              </p>
              <p>
                <strong>3. Official Authority:</strong> All scheme details cite original government gazettes or `.gov.in` portals.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 mt-4 bg-brand-700 text-white rounded-xl text-xs font-bold"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function X(props: { className?: string }) {
  return (
    <svg className={props.className || 'w-4 h-4'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
