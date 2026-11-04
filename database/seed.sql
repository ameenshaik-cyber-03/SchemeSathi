-- ====================================================================
-- SchemeSathi Seed Data (Verified Government Records)
-- ====================================================================

-- 1. Insert Core Schemes
INSERT INTO public.schemes (slug, name, official_name, department, government_level, state, administration, category, summary, benefits, benefit_amount, status, official_url, source_url, verified_at, is_popular, tags)
VALUES
(
    'pm-kisan-samman-nidhi',
    'PM-KISAN Samman Nidhi',
    'Pradhan Mantri Kisan Samman Nidhi',
    'Ministry of Agriculture and Farmers Welfare',
    'Central',
    NULL,
    'National Democratic Alliance (NDA)',
    'Agriculture',
    'Direct income support of ₹6,000 per year in three equal instalments to all landholding farmer families across India.',
    '₹6,000 per year credited directly to Aadhaar-linked bank accounts via DBT.',
    '₹6,000 / year',
    'Active',
    'https://pmkisan.gov.in',
    'https://pmkisan.gov.in/Documents/PM-Kisan_Guidelines.pdf',
    '25 October 2026',
    true,
    ARRAY['#PMKisan', '#Farmers', '#CentralGovt', '#IncomeSupport']
),
(
    'pm-ujjwala-yojana',
    'PM Ujjwala Yojana (Ujjwala 2.0)',
    'Pradhan Mantri Ujjwala Yojana',
    'Ministry of Petroleum and Natural Gas',
    'Central',
    NULL,
    'National Democratic Alliance (NDA)',
    'Women',
    'Free LPG gas connections to adult women from BPL households, migrant workers, and priority deprivation categories with targeted gas subsidy.',
    'Deposit-free LPG connection including free cylinder, regulator, safety hose, and targeted per-cylinder subsidy.',
    'Free Connection + ₹300 Subsidy/Cylinder',
    'Active',
    'https://www.pmuy.gov.in',
    'https://www.pmuy.gov.in/guidelines.html',
    '20 October 2026',
    true,
    ARRAY['#PMUjjwala', '#WomenEmpowerment', '#CleanFuel', '#CentralGovt']
),
(
    'ayushman-bharat-pm-jay',
    'Ayushman Bharat (PM-JAY)',
    'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana',
    'National Health Authority, Ministry of Health and Family Welfare',
    'Central',
    NULL,
    'National Democratic Alliance (NDA)',
    'Healthcare',
    'Cashless health coverage up to ₹5 lakh per family per year for secondary and tertiary hospitalization across empaneled hospitals.',
    'Cashless treatment up to ₹5,00,000 per family annually.',
    'Up to ₹5 Lakh / Family / Year',
    'Active',
    'https://pmjay.gov.in',
    'https://nha.gov.in/PM-JAY',
    '28 October 2026',
    true,
    ARRAY['#AyushmanBharat', '#HealthInsurance', '#CashlessHospital', '#FreeTreatment']
),
(
    'annadata-sukhibhava-ap',
    'Annadata Sukhibhava / Rythu Bharosa',
    'Annadata Sukhibhava Agricultural Assistance Scheme',
    'Department of Agriculture, Government of Andhra Pradesh',
    'State',
    'Andhra Pradesh',
    'TDP - Jana Sena - BJP Alliance (NDA)',
    'Agriculture',
    'Comprehensive annual financial assistance of ₹20,000 per eligible farmer family in Andhra Pradesh for crop inputs and seeds.',
    '₹20,000 total per year (₹14,000 state component + ₹6,000 PM-KISAN) credited via DBT.',
    '₹20,000 / year',
    'Active',
    'https://annadathasukhibhava.ap.gov.in',
    'https://apagrisnet.gov.in',
    '24 October 2026',
    true,
    ARRAY['#AndhraPradesh', '#AnnadataSukhibhava', '#TDP', '#FarmerAssistance']
),
(
    'kalaignar-magalir-urimai-thogai',
    'Kalaignar Magalir Urimai Thogai',
    'Kalaignar Magalir Urimai Thogai Thittam',
    'Special Programme Implementation Department, Government of Tamil Nadu',
    'State',
    'Tamil Nadu',
    'Dravida Munnetra Kazhagam (DMK)',
    'Women',
    'Monthly basic income grant of ₹1,000 provided to eligible women heads of households in Tamil Nadu recognizing unpaid domestic labor.',
    '₹1,000 monthly cash assistance credited directly to bank account on the 15th of every month.',
    '₹1,000 / month',
    'Active',
    'https://kmut.tn.gov.in',
    'https://www.tn.gov.in/scheme/data_view/68903',
    '22 October 2026',
    true,
    ARRAY['#TamilNadu', '#DMK', '#MagalirUrimai', '#WomenSupport', '#MonthlyPension']
);

-- 2. Insert Core Job Notifications
INSERT INTO public.job_notifications (title, recruiting_authority, government_level, state, sector, vacancies, qualification, salary_range, age_limit, last_date, location, official_url, notification_url, status, verified_at, highlights)
VALUES
(
    'MHA Group C & D Recruitment 2025-2026',
    'Ministry of Home Affairs (MHA), Government of India',
    'Central',
    NULL,
    'Police',
    '6,100+',
    '10th / 12th / Graduate',
    '₹18,000 – ₹56,900',
    '18 to 27 Years',
    '30 Nov 2026',
    'All India',
    'https://mha.gov.in',
    'https://mha.gov.in/notifications/recruitment-group-cd',
    'Open',
    '25 October 2026',
    ARRAY['6,100+ Total Vacancies', 'Pay Level 1 to 4: ₹18,000–₹56,900', 'Computer-Based Exam']
),
(
    'UPSC Civil Services Examination 2026',
    'Union Public Service Commission (UPSC)',
    'Central',
    NULL,
    'UPSC',
    '979',
    'Bachelor’s Degree in any discipline',
    '₹56,100 – ₹2,50,000',
    '21 to 32 Years',
    '18 Nov 2026',
    'All India',
    'https://upsc.gov.in',
    'https://upsconline.nic.in',
    'Open',
    '28 October 2026',
    ARRAY['IAS, IPS, IFS, IRS Services', 'Preliminary & Mains Exam']
);

-- 3. Insert Core Scholarships
INSERT INTO public.education_updates (title, authority, item_type, level, benefit_or_amount, last_date, eligibility, official_url, verified_at)
VALUES
(
    'Central Sector Scholarship (CSS)',
    'Department of Higher Education, Ministry of Education',
    'Scholarship',
    'For: UG & PG Students',
    '₹12,000 to ₹20,000 / year',
    '31 Dec 2026',
    'Meritorious students above 80th percentile in Class 12 board with family income <= ₹4.5 Lakh.',
    'https://scholarships.gov.in',
    '26 October 2026'
),
(
    'AICTE Pragati Scholarship for Girls',
    'All India Council for Technical Education (AICTE)',
    'Scholarship',
    'Technical Degree / Diploma',
    '₹50,000 / year (up to 4 years)',
    '30 Nov 2026',
    'Girl students admitted to 1st year degree/diploma technical courses with family income <= ₹8 Lakh.',
    'https://www.aicte-pragati-saksham-gov.in',
    '24 October 2026'
);
