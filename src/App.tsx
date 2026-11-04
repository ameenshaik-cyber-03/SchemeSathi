import React, { useEffect } from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { CategoryPills } from './components/layout/CategoryPills';
import { BottomNav } from './components/layout/BottomNav';
import { FeedPostCard } from './components/feed/FeedPostCard';
import { JobsView } from './components/jobs/JobsView';
import { SchemesView } from './components/schemes/SchemesView';
import { EducationView } from './components/education/EducationView';
import { FarmersView } from './components/categories/FarmersView';
import { WomenView } from './components/categories/WomenView';
import { SavedView } from './components/saved/SavedView';
import { ProfileView } from './components/profile/ProfileView';
import { AIChatView } from './components/chat/AIChatView';
import { SchemeDetailModal } from './components/schemes/SchemeDetailModal';
import { EligibilityChecker } from './components/eligibility/EligibilityChecker';
import { AuthModal } from './components/profile/AuthModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { WebDownloadPortal } from './components/web/WebDownloadPortal';
import { Bot, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const {
    viewMode,
    activeTab,
    setActiveTab,
    activeCategory,
    feedPosts,
    selectedScheme,
    setSelectedScheme,
    isEligibilityOpen,
    setIsEligibilityOpen,
    isAdminOpen,
    setIsAdminOpen,
    theme
  } = useApp();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // If user selected desktop website / download portal mode
  if (viewMode === 'web') {
    return <WebDownloadPortal />;
  }

  // Render Mobile-First Application Shell
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Mobile Frame Container (Centered for desktop preview or full on mobile) */}
      <div className="w-full max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-slate-900 shadow-xl relative border-x border-slate-100 dark:border-slate-800">
        {/* App Header */}
        <Header />

        {/* Top Category Tabs (shown on Home feed) */}
        {activeTab === 'home' && <CategoryPills />}

        {/* Main Content Area */}
        <main className="flex-1 p-3.5 overflow-y-auto">
          {/* TAB: HOME */}
          {activeTab === 'home' && (
            <>
              {activeCategory === 'For You' && (
                <div className="space-y-4 pb-20">
                  {feedPosts.map((post) => (
                    <FeedPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
              {activeCategory === 'Jobs' && <JobsView />}
              {activeCategory === 'Schemes' && <SchemesView />}
              {activeCategory === 'Education' && <EducationView />}
              {activeCategory === 'Farmers' && <FarmersView />}
              {activeCategory === 'Women' && <WomenView />}
              {(activeCategory === 'Healthcare' || activeCategory === 'Business') && <SchemesView />}
            </>
          )}

          {/* TAB: JOBS */}
          {activeTab === 'jobs' && <JobsView />}

          {/* TAB: SCHEMES */}
          {activeTab === 'schemes' && <SchemesView />}

          {/* TAB: SAVED */}
          {activeTab === 'saved' && <SavedView />}

          {/* TAB: PROFILE */}
          {activeTab === 'profile' && <ProfileView />}

          {/* TAB: AI CHAT */}
          {activeTab === 'aichat' && <AIChatView />}
        </main>

        {/* Floating AI Chat Assistant Launcher (when not in chat tab) */}
        {activeTab !== 'aichat' && (
          <button
            onClick={() => setActiveTab('aichat')}
            className="fixed bottom-16 right-4 sm:right-auto sm:left-1/2 sm:translate-x-36 z-30 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-brand-700 to-emerald-600 hover:from-brand-800 hover:to-emerald-700 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition transform hover:scale-105 active:scale-95 border-2 border-white dark:border-slate-800"
            title="Ask SchemeSathi AI"
          >
            <Bot className="w-4 h-4 text-emerald-200" />
            <span>AI Assistant</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
          </button>
        )}

        {/* Persistent Bottom 5-Navigation */}
        <BottomNav />

        {/* Global Modals */}
        {selectedScheme && (
          <SchemeDetailModal
            scheme={selectedScheme}
            onClose={() => setSelectedScheme(null)}
          />
        )}

        {isEligibilityOpen && (
          <EligibilityChecker onClose={() => setIsEligibilityOpen(false)} />
        )}

        <AuthModal />

        {isAdminOpen && (
          <AdminDashboard onClose={() => setIsAdminOpen(false)} />
        )}
      </div>
    </div>
  );
};
export default App;
