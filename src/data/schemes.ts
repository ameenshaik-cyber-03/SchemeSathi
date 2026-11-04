import { Scheme } from '../types';

export const VERIFIED_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan-01',
    slug: 'pm-kisan-samman-nidhi',
    name: 'PM-KISAN Samman Nidhi',
    officialName: 'Pradhan Mantri Kisan Samman Nidhi',
    department: 'Ministry of Agriculture and Farmers Welfare',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Agriculture',
    summary: 'Direct income support of ₹6,000 per year in three equal instalments of ₹2,000 to all landholding farmer families across India.',
    benefits: '₹6,000 per year credited directly to Aadhaar-linked bank accounts via DBT.',
    benefitAmount: '₹6,000 / year',
    targetAudience: ['Small & Marginal Farmers', 'All Landholding Farmer Families'],
    eligibilityCriteria: [
      'Farmer family must hold cultivable land in their name according to state land records.',
      'Must have valid bank account linked with Aadhaar and completed e-KYC.',
      'Institutional landholders and institutional farming bodies are excluded.',
      'Families with members holding constitutional posts or serving/retired government employees (Class I/II) are excluded.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', mandatory: true, notes: 'Must be linked to mobile number for e-KYC' },
      { name: 'Land Ownership Records (Pattadar Passbook / ROR / Khatauni)', mandatory: true },
      { name: 'Bank Passbook / Account details', mandatory: true, notes: 'Aadhaar-seeded bank account' }
    ],
    applicationProcedure: [
      'Visit the official portal pmkisan.gov.in or nearest Common Service Center (CSC).',
      'Click on "New Farmer Registration" and enter Aadhaar number with state/district.',
      'Fill in land parcel details, survey numbers, and bank account details.',
      'Submit and complete OTP-based or biometric e-KYC.'
    ],
    status: 'Active',
    officialUrl: 'https://pmkisan.gov.in',
    sourceUrl: 'https://pmkisan.gov.in/Documents/PM-Kisan_Guidelines.pdf',
    verifiedAt: '25 October 2026',
    isPopular: true,
    tags: ['#PMKisan', '#Farmers', '#CentralGovt', '#IncomeSupport']
  },
  {
    id: 'pm-ujjwala-02',
    slug: 'pm-ujjwala-yojana',
    name: 'PM Ujjwala Yojana (Ujjwala 2.0)',
    officialName: 'Pradhan Mantri Ujjwala Yojana',
    department: 'Ministry of Petroleum and Natural Gas',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Women',
    summary: 'Free LPG gas connections to adult women from BPL households, migrant workers, and priority deprivation categories with targeted gas subsidy.',
    benefits: 'Deposit-free LPG connection including free cylinder, regulator, safety hose, and targeted per-cylinder subsidy.',
    benefitAmount: 'Free Connection + ₹300 Subsidy/Cylinder',
    targetAudience: ['Adult Women', 'BPL Households', 'Rural Families', 'Migrant Families'],
    eligibilityCriteria: [
      'Applicant must be an adult woman aged 18 years or above.',
      'No other LPG connection must exist in the same household.',
      'Belongs to SC/ST, PMAY (Gramin), Antyodaya Anna Yojana (AAY), Most Backward Classes, or verified low-income self-declaration.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of Applicant & adult family members', mandatory: true },
      { name: 'Ration Card / Family Composition Certificate', mandatory: true },
      { name: 'Bank Account IFSC & Account Number', mandatory: true },
      { name: 'Proof of Address (Utility bill/Voter ID/Domicile)', mandatory: true }
    ],
    applicationProcedure: [
      'Apply online at pmuy.gov.in or submit form at nearest LPG distributor (Indane, BharatGas, HP).',
      'Submit KYC form with family Aadhaar copies and ration card.',
      'Distributor inspects and issues deposit-free connection with first stove and cylinder.'
    ],
    status: 'Active',
    officialUrl: 'https://www.pmuy.gov.in',
    sourceUrl: 'https://www.pmuy.gov.in/guidelines.html',
    verifiedAt: '20 October 2026',
    isPopular: true,
    tags: ['#PMUjjwala', '#WomenEmpowerment', '#CleanFuel', '#CentralGovt']
  },
  {
    id: 'ayushman-bharat-03',
    slug: 'ayushman-bharat-pm-jay',
    name: 'Ayushman Bharat (PM-JAY)',
    officialName: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana',
    department: 'National Health Authority, Ministry of Health and Family Welfare',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Healthcare',
    summary: 'World’s largest health insurance scheme providing cashless health coverage up to ₹5 lakh per family per year for secondary and tertiary hospitalization.',
    benefits: 'Cashless treatment up to ₹5,00,000 per family annually across 27,000+ empaneled public and private hospitals.',
    benefitAmount: 'Up to ₹5 Lakh / Family / Year',
    targetAudience: ['Low-Income Families', 'SECC Deprivation Categories', 'Senior Citizens 70+'],
    eligibilityCriteria: [
      'Identified under Socio-Economic Caste Census (SECC 2011) rural deprivation criteria (D1 to D7) or urban occupational categories.',
      'Senior citizens aged 70 years and above are eligible for specialized Ayushman Vay Vandana card regardless of income.',
      'No restrictions on family size or age limit.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card / Ration Card', mandatory: true },
      { name: 'PM-JAY ID or Registered Mobile Number', mandatory: false }
    ],
    applicationProcedure: [
      'Check eligibility on beneficiary.nha.gov.in using mobile number or ration card.',
      'Visit nearest Empaneled Hospital or Ayushman Mitra kiosk with Aadhaar card.',
      'Complete biometric e-KYC and download Ayushman Golden Card.'
    ],
    status: 'Active',
    officialUrl: 'https://pmjay.gov.in',
    sourceUrl: 'https://nha.gov.in/PM-JAY',
    verifiedAt: '28 October 2026',
    isPopular: true,
    tags: ['#AyushmanBharat', '#HealthInsurance', '#CashlessHospital', '#FreeTreatment']
  },
  {
    id: 'pm-awas-04',
    slug: 'pradhan-mantri-awas-yojana',
    name: 'PM Awas Yojana (PMAY 2.0)',
    officialName: 'Pradhan Mantri Awas Yojana - Urban & Gramin',
    department: 'Ministry of Housing and Urban Affairs / Ministry of Rural Development',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Housing',
    summary: 'Financial assistance and interest subsidies for constructing or purchasing pucca houses with basic amenities for homeless and kutcha-house dwellers.',
    benefits: 'Direct financial assistance of ₹1.20 lakh (plains) to ₹1.30 lakh (hilly areas) for Gramin, plus interest subsidies up to ₹2.67 lakh for Urban EWS/LIG.',
    benefitAmount: 'Up to ₹2.67 Lakh Subsidy',
    targetAudience: ['Homeless Families', 'Kutcha House Residents', 'EWS / LIG Families'],
    eligibilityCriteria: [
      'Beneficiary family must not own a pucca house anywhere in India.',
      'Annual household income limit up to ₹3 lakh for EWS and ₹6 lakh for LIG.',
      'House ownership must include the female head of the family.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of all family members', mandatory: true },
      { name: 'Income Certificate from competent revenue authority', mandatory: true },
      { name: 'Land Title / Domicile Certificate', mandatory: true },
      { name: 'Bank Passbook copy', mandatory: true }
    ],
    applicationProcedure: [
      'Apply online through pmaymis.gov.in or through local Gram Panchayat / Municipal office.',
      'Upload geotagged land photo and family income documentation.',
      'Geo-tagging verification by district officials triggers instalment disbursement.'
    ],
    status: 'Active',
    officialUrl: 'https://pmaymis.gov.in',
    sourceUrl: 'https://pmayg.nic.in',
    verifiedAt: '15 October 2026',
    isPopular: false,
    tags: ['#PMAY', '#HousingForAll', '#PuccaHouse', '#UrbanHousing']
  },
  {
    id: 'ap-annadata-05',
    slug: 'annadata-sukhibhava-ap',
    name: 'Annadata Sukhibhava / Rythu Bharosa',
    officialName: 'Annadata Sukhibhava Agricultural Assistance Scheme',
    department: 'Department of Agriculture, Government of Andhra Pradesh',
    governmentLevel: 'State',
    state: 'Andhra Pradesh',
    administration: 'TDP - Jana Sena - BJP Alliance (NDA)',
    category: 'Agriculture',
    summary: 'Comprehensive annual financial assistance of ₹20,000 per eligible farmer family in Andhra Pradesh (including ₹6,000 from PM-KISAN) for seeds, fertilizers, and crop expenses.',
    benefits: '₹20,000 total per year (₹14,000 state component + ₹6,000 PM-KISAN) credited before kharif, rabi, and harvest.',
    benefitAmount: '₹20,000 / year',
    targetAudience: ['Andhra Pradesh Farmers', 'Tenant Farmers / ROFR Cultivators'],
    eligibilityCriteria: [
      'Must be a resident farmer of Andhra Pradesh with cultivable land.',
      'Tenant farmers belonging to SC, ST, BC, and Minority categories with registered CCRC cards are eligible.',
      'Subject to state exclusion norms for high-income taxpayers and constitutional post holders.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of farmer and spouse', mandatory: true },
      { name: 'Webland Record / Pattadar Passbook / CCRC Card', mandatory: true },
      { name: 'Aadhaar-seeded bank account details', mandatory: true }
    ],
    applicationProcedure: [
      'Check name in the Village / Ward Secretariat (Grama Sachivalayam) farmer registry.',
      'Social audit list published at Rythu Bharosa Kendras (RBKs).',
      'Verify details and biometric authentication at local RBK.'
    ],
    status: 'Active',
    officialUrl: 'https://annadathasukhibhava.ap.gov.in',
    sourceUrl: 'https://apagrisnet.gov.in',
    verifiedAt: '24 October 2026',
    isPopular: true,
    tags: ['#AndhraPradesh', '#AnnadataSukhibhava', '#TDP', '#FarmerAssistance']
  },
  {
    id: 'ap-thalliki-vandanam-06',
    slug: 'thalliki-vandanam-ap',
    name: 'Thalliki Vandanam Scheme',
    officialName: 'Thalliki Vandanam Financial Assistance for School Students',
    department: 'Department of School Education, Government of Andhra Pradesh',
    governmentLevel: 'State',
    state: 'Andhra Pradesh',
    administration: 'TDP - Jana Sena - BJP Alliance (NDA)',
    category: 'Education',
    summary: 'Annual financial support of ₹15,000 to mothers for every school-going child (from Class 1 to Intermediate/12th) to prevent school dropouts.',
    benefits: '₹15,000 per school-going child deposited directly into the mother’s bank account.',
    benefitAmount: '₹15,000 / child / year',
    targetAudience: ['School Students (Class 1–12)', 'Mothers of School Children in AP'],
    eligibilityCriteria: [
      'Child must be studying in recognized government, aided, or private schools/junior colleges in Andhra Pradesh.',
      'Student must maintain minimum 75% school attendance.',
      'Annual household income within white ration card limits.'
    ],
    requiredDocuments: [
      { name: 'Student Aadhaar & Mother Aadhaar', mandatory: true },
      { name: 'White Ration Card / Rice Card', mandatory: true },
      { name: 'School Admission & Attendance Certificate', mandatory: true },
      { name: 'Mother’s Bank Account details', mandatory: true }
    ],
    applicationProcedure: [
      'School headmaster updates student and mother details on Child Info / UDISE+ portal.',
      'Secretariat education assistants conduct social audit and physical verification.',
      'Fund released to mother’s active bank account via DBT.'
    ],
    status: 'Active',
    officialUrl: 'https://jaganannaammavodi.ap.gov.in',
    sourceUrl: 'https://cse.ap.gov.in',
    verifiedAt: '20 October 2026',
    isPopular: true,
    tags: ['#AndhraPradesh', '#Education', '#ThallikiVandanam', '#SchoolStudents']
  },
  {
    id: 'tn-magalir-urimai-07',
    slug: 'kalaignar-magalir-urimai-thogai',
    name: 'Kalaignar Magalir Urimai Thogai',
    officialName: 'Kalaignar Magalir Urimai Thogai Thittam',
    department: 'Special Programme Implementation Department, Government of Tamil Nadu',
    governmentLevel: 'State',
    state: 'Tamil Nadu',
    administration: 'Dravida Munnetra Kazhagam (DMK)',
    category: 'Women',
    summary: 'Monthly basic income grant of ₹1,000 provided to eligible women heads of households in Tamil Nadu recognizing their unpaid domestic labor.',
    benefits: '₹1,000 monthly cash assistance (₹12,000/year) credited on the 15th of every month.',
    benefitAmount: '₹1,000 / month',
    targetAudience: ['Women Heads of Family in Tamil Nadu'],
    eligibilityCriteria: [
      'Applicant must be a woman aged 21 years or older.',
      'Family annual income must be below ₹2.5 lakh.',
      'Family must possess less than 5 acres of wetland or 10 acres of dryland.',
      'Annual electricity consumption must be below 3,600 units.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of woman applicant', mandatory: true },
      { name: 'Smart Family Ration Card', mandatory: true },
      { name: 'Electricity Consumer Card number', mandatory: true },
      { name: 'Bank Passbook / Aadhaar linked account', mandatory: true }
    ],
    applicationProcedure: [
      'Apply during special camp organized at fair price shops (ration shops) in Tamil Nadu.',
      'Field verification carried out by revenue inspectors.',
      'SMS confirmation and ATM card distributed for withdrawal.'
    ],
    status: 'Active',
    officialUrl: 'https://kmut.tn.gov.in',
    sourceUrl: 'https://www.tn.gov.in/scheme/data_view/68903',
    verifiedAt: '22 October 2026',
    isPopular: true,
    tags: ['#TamilNadu', '#DMK', '#MagalirUrimai', '#WomenSupport', '#MonthlyPension']
  },
  {
    id: 'kcc-farmers-08',
    slug: 'kisan-credit-card-scheme',
    name: 'Kisan Credit Card (KCC)',
    officialName: 'Kisan Credit Card Scheme',
    department: 'Department of Financial Services / NABARD',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Agriculture',
    summary: 'Subsidized crop loans up to ₹3 lakh at an effective 4% annual interest rate with prompt repayment incentive for farmers, dairy, and fisheries.',
    benefits: 'Short-term credit up to ₹3 lakh at 7% normal rate; 3% interest subvention reduces cost to 4% for prompt repayment.',
    benefitAmount: 'Loans up to ₹3 Lakh at 4%',
    targetAudience: ['Individual Farmers', 'Tenant Cultivators', 'Dairy & Fishery Farmers'],
    eligibilityCriteria: [
      'All farmers cultivating crops, dairy, poultry, or inland/marine fisheries.',
      'Age criteria: 18 to 75 years (co-borrower needed if above 60).',
      'No collateral needed for loans up to ₹1.60 lakh.'
    ],
    requiredDocuments: [
      { name: 'Completed KCC Application Form', mandatory: true },
      { name: 'Aadhaar Card and PAN card', mandatory: true },
      { name: 'Land revenue records (Khatauni/Pattadar passbook)', mandatory: true }
    ],
    applicationProcedure: [
      'Apply at any commercial bank, cooperative bank, or RRB branch.',
      'Or submit one-page simplified KCC form through pmkisan.gov.in.',
      'Card issued within 14 business days.'
    ],
    status: 'Active',
    officialUrl: 'https://www.nabard.org/content1.aspx?id=599&catid=23',
    sourceUrl: 'https://financialservices.gov.in/kisan-credit-card',
    verifiedAt: '18 October 2026',
    isPopular: true,
    tags: ['#KCC', '#FarmerLoan', '#SubsidizedInterest', '#NABARD']
  },
  {
    id: 'mahila-samman-09',
    slug: 'mahila-samman-savings-certificate',
    name: 'Mahila Samman Savings Certificate',
    officialName: 'Mahila Samman Savings Certificate (MSSC)',
    department: 'Department of Economic Affairs, Ministry of Finance',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Women',
    summary: 'Government-backed 2-year small savings scheme for women offering high guaranteed interest of 7.5% per annum with partial withdrawal facility.',
    benefits: '7.5% fixed interest compounded quarterly. Up to 40% partial withdrawal allowed after 1 year.',
    benefitAmount: '7.5% Guaranteed Return (up to ₹2 Lakh deposit)',
    targetAudience: ['Women', 'Girls (through natural guardian)'],
    eligibilityCriteria: [
      'Account can be opened by a woman for herself, or by a guardian on behalf of a minor girl child.',
      'Minimum deposit is ₹1,000; maximum deposit is ₹2,00,000.',
      'Tenure is fixed at 2 years from date of opening.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of account holder / guardian', mandatory: true },
      { name: 'PAN Card', mandatory: true },
      { name: 'Passport size photographs', mandatory: true }
    ],
    applicationProcedure: [
      'Visit any India Post office or authorized public/private sector bank.',
      'Fill Form-1 (Application for opening of account under MSSC).',
      'Submit KYC documents and deposit amount via cash or cheque.'
    ],
    status: 'Active',
    officialUrl: 'https://www.indiapost.gov.in/Financial/Pages/Content/Mahila-Samman.aspx',
    sourceUrl: 'https://dea.gov.in/sites/default/files/MSSC_Notification.pdf',
    verifiedAt: '12 October 2026',
    isPopular: false,
    tags: ['#WomenSavings', '#Finance', '#HighInterest', '#PostOffice']
  },
  {
    id: 'beti-bachao-10',
    slug: 'beti-bachao-beti-padhao',
    name: 'Beti Bachao Beti Padhao & Sukanya',
    officialName: 'Beti Bachao Beti Padhao & Sukanya Samriddhi Yojana',
    department: 'Ministry of Women and Child Development',
    governmentLevel: 'Central',
    administration: 'National Democratic Alliance (NDA)',
    category: 'Women',
    summary: 'Flagship national initiative to protect, educate, and empower the girl child, complemented by the Sukanya Samriddhi Yojana 8.2% tax-free savings account.',
    benefits: '8.2% highest tax-free interest under Section 80C, complete exemption on maturity amount for girl’s higher education and marriage.',
    benefitAmount: '8.2% Tax-Free Compound Interest',
    targetAudience: ['Girl Children aged 0–10 years', 'Parents/Guardians'],
    eligibilityCriteria: [
      'Girl child must be an Indian citizen and below 10 years of age at the time of account opening.',
      'Only one account allowed per girl child, and maximum two accounts per family (with exception for twins/triplets).',
      'Minimum deposit ₹250 per financial year; maximum ₹1,50,000.'
    ],
    requiredDocuments: [
      { name: 'Birth Certificate of the girl child', mandatory: true },
      { name: 'Identity & Address Proof of Parent/Guardian (Aadhaar/PAN)', mandatory: true },
      { name: 'Medical certificate in case of twins/triplets', mandatory: false }
    ],
    applicationProcedure: [
      'Open account at any Post Office or authorized commercial bank branch.',
      'Deposit initial amount (min ₹250) along with birth certificate.',
      'Passbook provided to record deposits and interest accrual.'
    ],
    status: 'Active',
    officialUrl: 'https://wcd.nic.in/bbbp-schemes',
    sourceUrl: 'https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx',
    verifiedAt: '16 October 2026',
    isPopular: true,
    tags: ['#GirlChild', '#BetiBachao', '#SukanyaSamriddhi', '#TaxFreeSavings']
  }
];
