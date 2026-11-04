import { ScholarshipItem, LearningResource, ExamNotification } from '../types';

export const VERIFIED_SCHOLARSHIPS: ScholarshipItem[] = [
  {
    id: 'sch-css-01',
    title: 'Central Sector Scholarship (CSS)',
    authority: 'Department of Higher Education, Ministry of Education',
    level: 'For: UG & PG Students',
    amount: '₹12,000 to ₹20,000 / year',
    lastDate: '31 Dec 2026',
    eligibility: 'Meritorious students above 80th percentile in Class 12 board with family income <= ₹4.5 Lakh.',
    officialUrl: 'https://scholarships.gov.in',
    verifiedAt: '26 October 2026',
    status: 'Open'
  },
  {
    id: 'sch-pragati-02',
    title: 'AICTE Pragati Scholarship for Girls',
    authority: 'All India Council for Technical Education (AICTE)',
    level: 'Technical Degree / Diploma',
    amount: '₹50,000 / year (up to 4 years)',
    lastDate: '30 Nov 2026',
    eligibility: 'Girl students admitted to 1st year degree/diploma technical courses with family income <= ₹8 Lakh.',
    officialUrl: 'https://www.aicte-pragati-saksham-gov.in',
    verifiedAt: '24 October 2026',
    status: 'Open'
  },
  {
    id: 'sch-postmatric-03',
    title: 'Post Matric Scholarship for SC/ST/OBC',
    authority: 'Ministry of Social Justice & Empowerment',
    level: 'Class 11 to PhD',
    amount: 'Full Tuition Fee Reimbursement + Monthly Maintenance Allowance',
    lastDate: '15 Jan 2027',
    eligibility: 'SC/ST/OBC students pursuing post-matriculation courses with annual parental income <= ₹2.5 Lakh.',
    officialUrl: 'https://scholarships.gov.in',
    verifiedAt: '25 October 2026',
    status: 'Open'
  },
  {
    id: 'sch-yasasvi-04',
    title: 'PM YASASVI Scholarship Scheme',
    authority: 'Ministry of Social Justice & Empowerment / NTA',
    level: 'Class 9 & 11 Top School Students',
    amount: '₹75,000 to ₹1,25,000 / year',
    lastDate: '28 Dec 2026',
    eligibility: 'OBC/EBC/DNT candidates studying in designated Top Class Schools across India.',
    officialUrl: 'https://yet.nta.ac.in',
    verifiedAt: '22 October 2026',
    status: 'Open'
  }
];

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'res-study-01',
    title: 'Study Materials',
    category: 'Notes & PDFs',
    description: 'Free NCERT textbooks, reference modules and state syllabus PDF notes from DIKSHA portal.',
    link: 'https://diksha.gov.in',
    icon: 'book-open'
  },
  {
    id: 'res-video-02',
    title: 'Video Lectures',
    category: 'Video Lectures',
    description: 'Thousands of free IIT, IISc, and university credit courses on SWAYAM & Swayam Prabha channels.',
    link: 'https://swayam.gov.in',
    icon: 'video'
  },
  {
    id: 'res-quiz-03',
    title: 'Practice Quizzes',
    category: 'Practice Quizzes',
    description: 'National Test Abhyas free mock tests for JEE, NEET, and competitive tests created by NTA.',
    link: 'https://www.nta.ac.in/Abhyas',
    icon: 'check-square'
  },
  {
    id: 'res-career-04',
    title: 'Career Guidance',
    category: 'Career Guidance',
    description: 'National Career Service (NCS) official career counseling, skills matching, and job fairs.',
    link: 'https://www.ncs.gov.in',
    icon: 'trending-up'
  }
];

export const EXAM_NOTIFICATIONS: ExamNotification[] = [
  {
    id: 'exam-gate-01',
    title: 'GATE 2027',
    authority: 'Indian Institute of Technology (IIT)',
    examDate: 'Feb 2027',
    applicationPeriod: 'Aug – Oct 2026',
    officialUrl: 'https://gate.iitk.ac.in'
  },
  {
    id: 'exam-upsc-02',
    title: 'UPSC Civil Services',
    authority: 'Union Public Service Commission',
    examDate: '24 May 2026',
    applicationPeriod: 'Feb – Mar 2026',
    officialUrl: 'https://upsc.gov.in'
  },
  {
    id: 'exam-ssc-03',
    title: 'SSC Exams (CGL / CHSL)',
    authority: 'Staff Selection Commission',
    examDate: 'Sep – Oct 2026',
    applicationPeriod: 'Jun – Jul 2026',
    officialUrl: 'https://ssc.gov.in'
  },
  {
    id: 'exam-psc-04',
    title: 'State PSC Exams',
    authority: 'State Public Service Commissions',
    examDate: 'Multiple dates 2026',
    applicationPeriod: 'State specific notifications',
    officialUrl: 'https://mha.gov.in'
  }
];
