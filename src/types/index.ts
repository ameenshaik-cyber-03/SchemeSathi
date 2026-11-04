export type GovernmentLevel = 'Central' | 'State' | 'All';

export type SchemeCategory =
  | 'All'
  | 'Agriculture'
  | 'Education'
  | 'Women'
  | 'Healthcare'
  | 'Housing'
  | 'Employment'
  | 'Social Welfare'
  | 'Financial Aid'
  | 'Business'
  | 'Senior Citizens';

export type SchemeStatus = 'Active' | 'Upcoming' | 'Closing Soon' | 'Closed' | 'Verification Needed';

export interface Scheme {
  id: string;
  slug: string;
  name: string;
  officialName: string;
  department: string;
  governmentLevel: 'Central' | 'State';
  state?: string;
  administration?: string; // e.g. TDP, YSRCP, DMK, TVK, BJP/NDA, INC/UPA
  category: SchemeCategory;
  summary: string;
  benefits: string;
  benefitAmount?: string;
  targetAudience: string[];
  eligibilityCriteria: string[];
  requiredDocuments: { name: string; mandatory: boolean; notes?: string }[];
  applicationProcedure: string[];
  status: SchemeStatus;
  applicationDeadline?: string;
  officialUrl: string;
  sourceUrl: string;
  verifiedAt: string;
  bannerImage?: string;
  isPopular?: boolean;
  tags: string[];
}

export interface JobNotification {
  id: string;
  title: string;
  recruitingAuthority: string;
  governmentLevel: 'Central' | 'State';
  state?: string;
  sector: 'UPSC' | 'SSC' | 'Defence' | 'Railways' | 'Banking' | 'Police' | 'Teaching' | 'State PSC' | 'General';
  vacancies: string;
  qualification: string;
  salaryRange: string;
  ageLimit: string;
  applicationFee?: string;
  startDate: string;
  lastDate: string;
  location: string;
  officialUrl: string;
  notificationUrl: string;
  verifiedAt: string;
  status: 'Open' | 'Closing Soon' | 'Closed';
  highlights: string[];
  badgeColor?: string;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  authority: string;
  level: string;
  amount: string;
  lastDate: string;
  eligibility: string;
  officialUrl: string;
  verifiedAt: string;
  status: 'Open' | 'Closed';
}

export interface LearningResource {
  id: string;
  title: string;
  category: 'Notes & PDFs' | 'Video Lectures' | 'Practice Quizzes' | 'Career Guidance';
  description: string;
  link: string;
  icon: string;
}

export interface ExamNotification {
  id: string;
  title: string;
  authority: string;
  examDate: string;
  applicationPeriod: string;
  officialUrl: string;
}

export interface FeedPost {
  id: string;
  type: 'recruitment' | 'scheme' | 'scholarship';
  title: string;
  publisher: string;
  publisherLogo?: string;
  verifiedBadge: boolean;
  publishedTime: string;
  headline: string;
  highlights: {
    vacancies?: string;
    qualification?: string;
    salaryOrBenefit?: string;
    location?: string;
  };
  caption: string;
  tags: string[];
  officialUrl: string;
  officialDomain: string;
  lastVerified: string;
  likesCount: number;
  commentsCount: number;
  isLiked?: boolean;
  isSaved?: boolean;
}

export interface UserProfile {
  id: string;
  email?: string;
  displayName?: string;
  state?: string;
  district?: string;
  age?: number;
  gender?: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  education?: string;
  occupation?: string;
  incomeBracket?: string;
  preferredLanguage: 'en' | 'te' | 'hi' | 'ta' | 'kn';
  isGuest: boolean;
  role: 'user' | 'reviewer' | 'admin';
}

export interface ReviewQueueItem {
  id: string;
  sourceUrl: string;
  title: string;
  department: string;
  extractedData: Partial<Scheme> | Partial<JobNotification>;
  confidenceScore: number;
  dateDetected: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  diffNotes: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string;
  details: string;
}
