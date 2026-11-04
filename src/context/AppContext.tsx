import React, { createContext, useContext, useState, useEffect } from 'react';
import { Scheme, JobNotification, ScholarshipItem, FeedPost, UserProfile, ReviewQueueItem, AuditLog } from '../types';
import { VERIFIED_SCHEMES } from '../data/schemes';
import { VERIFIED_JOBS } from '../data/jobs';
import { VERIFIED_SCHOLARSHIPS } from '../data/education';
import { VERIFIED_FEED_POSTS } from '../data/feedPosts';
import { SupportedLanguage, TRANSLATIONS, TranslationDict } from '../data/translations';

export type MainTab = 'home' | 'jobs' | 'schemes' | 'saved' | 'profile' | 'aichat';
export type CategoryTab = 'For You' | 'Jobs' | 'Schemes' | 'Education' | 'Farmers' | 'Women' | 'Healthcare' | 'Business';

interface AppContextType {
  // Navigation
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  activeCategory: CategoryTab;
  setActiveCategory: (cat: CategoryTab) => void;
  viewMode: 'app' | 'web';
  setViewMode: (mode: 'app' | 'web') => void;

  // Search & Filter
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedParty: string;
  setSelectedParty: (party: string) => void;
  selectedGovtLevel: 'All' | 'Central' | 'State';
  setSelectedGovtLevel: (level: 'All' | 'Central' | 'State') => void;

  // Data
  schemes: Scheme[];
  jobs: JobNotification[];
  scholarships: ScholarshipItem[];
  feedPosts: FeedPost[];

  // Bookmarks / Saved
  savedItemIds: string[];
  toggleSaveItem: (id: string) => void;
  isItemSaved: (id: string) => boolean;

  // Likes
  likedPostIds: string[];
  toggleLikePost: (id: string) => void;

  // Modals
  selectedScheme: Scheme | null;
  setSelectedScheme: (scheme: Scheme | null) => void;
  selectedJob: JobNotification | null;
  setSelectedJob: (job: JobNotification | null) => void;
  isEligibilityOpen: boolean;
  setIsEligibilityOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;

  // User & Auth
  user: UserProfile;
  loginAsUser: (email: string, name?: string) => void;
  loginAsAdmin: () => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;

  // Localization & Theme
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDict;
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  // Admin Queue & Actions
  reviewQueue: ReviewQueueItem[];
  approveQueueItem: (id: string) => void;
  rejectQueueItem: (id: string) => void;
  addNewScheme: (scheme: Scheme) => void;
  auditLogs: AuditLog[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<MainTab>('home');
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('For You');
  const [viewMode, setViewMode] = useState<'app' | 'web'>('app');

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');
  const [selectedParty, setSelectedParty] = useState('ALL');
  const [selectedGovtLevel, setSelectedGovtLevel] = useState<'All' | 'Central' | 'State'>('All');

  // Datasets
  const [schemes, setSchemes] = useState<Scheme[]>(VERIFIED_SCHEMES);
  const [jobs, setJobs] = useState<JobNotification[]>(VERIFIED_JOBS);
  const [scholarships] = useState<ScholarshipItem[]>(VERIFIED_SCHOLARSHIPS);
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>(VERIFIED_FEED_POSTS);

  // Bookmarks
  const [savedItemIds, setSavedItemIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('schemesathi_saved');
      return saved ? JSON.parse(saved) : ['pm-kisan-01', 'job-mha-01'];
    } catch {
      return ['pm-kisan-01', 'job-mha-01'];
    }
  });

  // Likes
  const [likedPostIds, setLikedPostIds] = useState<string[]>([]);

  // Modals
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobNotification | null>(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // User Profile
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const savedUser = localStorage.getItem('schemesathi_user');
      return savedUser ? JSON.parse(savedUser) : {
        id: 'guest_user_1',
        displayName: 'Citizen Profile',
        isGuest: true,
        role: 'user',
        preferredLanguage: 'en'
      };
    } catch {
      return {
        id: 'guest_user_1',
        displayName: 'Citizen Profile',
        isGuest: true,
        role: 'user',
        preferredLanguage: 'en'
      };
    }
  });

  // Language & Theme
  const [language, setLanguageState] = useState<SupportedLanguage>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Admin Review Queue & Audit Logs
  const [reviewQueue, setReviewQueue] = useState<ReviewQueueItem[]>([
    {
      id: 'rev-01',
      sourceUrl: 'https://pib.gov.in/PressReleasePage.aspx?PRID=204910',
      title: 'Draft: Extension of PM-Kisan e-KYC Verification Deadline',
      department: 'Ministry of Agriculture',
      confidenceScore: 94,
      dateDetected: '04 Nov 2026',
      status: 'Pending',
      diffNotes: 'New deadline extended to 31 Dec 2026 for North-Eastern states.',
      extractedData: {
        name: 'PM-KISAN e-KYC Extension 2026',
        applicationDeadline: '31 Dec 2026'
      }
    },
    {
      id: 'rev-02',
      sourceUrl: 'https://appsc.gov.in/notifications/group1-update.pdf',
      title: 'APPSC Group-1 Preliminary Exam Date Revision',
      department: 'Andhra Pradesh Public Service Commission',
      confidenceScore: 98,
      dateDetected: '03 Nov 2026',
      status: 'Pending',
      diffNotes: 'Preliminary exam date rescheduled to 15 Dec 2026 due to cyclone relief.',
      extractedData: {
        title: 'APPSC Group-1 Exam Rescheduled',
        lastDate: '15 Dec 2026'
      }
    }
  ]);

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    {
      id: 'log-01',
      timestamp: '04 Nov 2026, 09:30 AM',
      actor: 'System Ingestion Worker',
      action: 'FETCH_RSS',
      target: 'pib.gov.in/rss',
      details: 'Discovered 4 new press circulars, 2 flagged for review.'
    },
    {
      id: 'log-02',
      timestamp: '03 Nov 2026, 04:15 PM',
      actor: 'Admin',
      action: 'PUBLISH_SCHEME',
      target: 'MHA Group C & D Recruitment 2025',
      details: 'Approved verified official notification link from mha.gov.in.'
    }
  ]);

  useEffect(() => {
    localStorage.setItem('schemesathi_saved', JSON.stringify(savedItemIds));
  }, [savedItemIds]);

  useEffect(() => {
    localStorage.setItem('schemesathi_user', JSON.stringify(user));
  }, [user]);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    setUser(prev => ({ ...prev, preferredLanguage: lang }));
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const toggleSaveItem = (id: string) => {
    setSavedItemIds(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const isItemSaved = (id: string) => savedItemIds.includes(id);

  const toggleLikePost = (id: string) => {
    setLikedPostIds(prev => {
      const isLiked = prev.includes(id);
      setFeedPosts(posts =>
        posts.map(post => {
          if (post.id === id) {
            return {
              ...post,
              likesCount: isLiked ? post.likesCount - 1 : post.likesCount + 1,
              isLiked: !isLiked
            };
          }
          return post;
        })
      );
      return isLiked ? prev.filter(pId => pId !== id) : [...prev, id];
    });
  };

  const loginAsUser = (email: string, name?: string) => {
    setUser({
      id: 'user_' + Date.now(),
      email,
      displayName: name || email.split('@')[0],
      isGuest: false,
      role: 'user',
      preferredLanguage: language
    });
    setIsAuthModalOpen(false);
  };

  const loginAsAdmin = () => {
    setUser({
      id: 'admin_master_1',
      email: 'admin@schemesathi.in',
      displayName: 'Editorial Administrator',
      isGuest: false,
      role: 'admin',
      preferredLanguage: language
    });
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser({
      id: 'guest_' + Date.now(),
      displayName: 'Citizen Profile',
      isGuest: true,
      role: 'user',
      preferredLanguage: language
    });
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  const approveQueueItem = (id: string) => {
    const item = reviewQueue.find(q => q.id === id);
    if (!item) return;

    setReviewQueue(prev => prev.filter(q => q.id !== id));
    setAuditLogs(prev => [
      {
        id: 'log_' + Date.now(),
        timestamp: new Date().toLocaleString(),
        actor: user.displayName || 'Admin',
        action: 'APPROVE_QUEUE_ITEM',
        target: item.title,
        details: 'Approved candidate announcement from ' + item.sourceUrl
      },
      ...prev
    ]);
  };

  const rejectQueueItem = (id: string) => {
    const item = reviewQueue.find(q => q.id === id);
    if (!item) return;

    setReviewQueue(prev => prev.filter(q => q.id !== id));
    setAuditLogs(prev => [
      {
        id: 'log_' + Date.now(),
        timestamp: new Date().toLocaleString(),
        actor: user.displayName || 'Admin',
        action: 'REJECT_QUEUE_ITEM',
        target: item.title,
        details: 'Rejected candidate item: Insufficient official gazette provenance.'
      },
      ...prev
    ]);
  };

  const addNewScheme = (newScheme: Scheme) => {
    setSchemes(prev => [newScheme, ...prev]);
    setAuditLogs(prev => [
      {
        id: 'log_' + Date.now(),
        timestamp: new Date().toLocaleString(),
        actor: user.displayName || 'Admin',
        action: 'CREATE_SCHEME',
        target: newScheme.name,
        details: 'Directly added verified scheme.'
      },
      ...prev
    ]);
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeCategory,
        setActiveCategory,
        viewMode,
        setViewMode,
        searchQuery,
        setSearchQuery,
        selectedState,
        setSelectedState,
        selectedParty,
        setSelectedParty,
        selectedGovtLevel,
        setSelectedGovtLevel,
        schemes,
        jobs,
        scholarships,
        feedPosts,
        savedItemIds,
        toggleSaveItem,
        isItemSaved,
        likedPostIds,
        toggleLikePost,
        selectedScheme,
        setSelectedScheme,
        selectedJob,
        setSelectedJob,
        isEligibilityOpen,
        setIsEligibilityOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isAdminOpen,
        setIsAdminOpen,
        user,
        loginAsUser,
        loginAsAdmin,
        logout,
        updateProfile,
        language,
        setLanguage,
        t,
        theme,
        toggleTheme,
        reviewQueue,
        approveQueueItem,
        rejectQueueItem,
        addNewScheme,
        auditLogs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
