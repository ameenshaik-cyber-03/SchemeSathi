-- ====================================================================
-- SchemeSathi Database Schema (PostgreSQL / Supabase Compatible)
-- Product: SchemeSathi — Citizen Information & Welfare Discovery
-- Target: Strictly ₹0 Free Tier (Supabase / Self-Hosted PostgreSQL)
-- ====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USER PROFILES
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE, -- References auth.users(id) in Supabase
    email VARCHAR(255),
    display_name VARCHAR(150) DEFAULT 'Citizen',
    state VARCHAR(100),
    district VARCHAR(100),
    age INT CHECK (age >= 0 AND age <= 125),
    gender VARCHAR(50),
    occupation VARCHAR(100), 
    education VARCHAR(100),
    income_bracket VARCHAR(100),
    preferred_language VARCHAR(10) DEFAULT 'en',
    role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'reviewer', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SCHEMES CATALOG
CREATE TABLE IF NOT EXISTS public.schemes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    official_name TEXT NOT NULL,
    department VARCHAR(255) NOT NULL,
    government_level VARCHAR(50) NOT NULL CHECK (government_level IN ('Central', 'State')),
    state VARCHAR(100),
    administration VARCHAR(150), -- e.g. TDP, YSRCP, DMK, TVK, BJP/NDA, INC/UPA
    category VARCHAR(100) NOT NULL,
    summary TEXT NOT NULL,
    benefits TEXT NOT NULL,
    benefit_amount VARCHAR(150),
    status VARCHAR(50) DEFAULT 'Active' CHECK (status IN ('Active', 'Upcoming', 'Closing Soon', 'Closed', 'Verification Needed')),
    application_deadline VARCHAR(100),
    official_url TEXT NOT NULL,
    source_url TEXT NOT NULL,
    verified_at VARCHAR(100) NOT NULL,
    is_popular BOOLEAN DEFAULT FALSE,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SCHEME ELIGIBILITY CRITERIA
CREATE TABLE IF NOT EXISTS public.scheme_eligibility_rules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scheme_id UUID REFERENCES public.schemes(id) ON DELETE CASCADE,
    criterion_type VARCHAR(100) NOT NULL, -- 'age', 'income', 'occupation', 'landholding', 'gender'
    rule_condition TEXT NOT NULL,
    is_mandatory BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. REQUIRED DOCUMENTS
CREATE TABLE IF NOT EXISTS public.scheme_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scheme_id UUID REFERENCES public.schemes(id) ON DELETE CASCADE,
    document_name VARCHAR(255) NOT NULL,
    is_mandatory BOOLEAN DEFAULT TRUE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. GOVERNMENT JOB NOTIFICATIONS
CREATE TABLE IF NOT EXISTS public.job_notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    recruiting_authority VARCHAR(255) NOT NULL,
    government_level VARCHAR(50) NOT NULL CHECK (government_level IN ('Central', 'State')),
    state VARCHAR(100),
    sector VARCHAR(100) NOT NULL, -- UPSC, SSC, Railways, Banking, Police, Defence, State PSC
    vacancies VARCHAR(100) NOT NULL,
    qualification TEXT NOT NULL,
    salary_range VARCHAR(150) NOT NULL,
    age_limit VARCHAR(150) NOT NULL,
    application_fee VARCHAR(150),
    start_date VARCHAR(50),
    last_date VARCHAR(50) NOT NULL,
    location VARCHAR(150) NOT NULL,
    official_url TEXT NOT NULL,
    notification_url TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Open' CHECK (status IN ('Open', 'Closing Soon', 'Closed')),
    verified_at VARCHAR(100) NOT NULL,
    highlights TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. EDUCATION & SCHOLARSHIPS
CREATE TABLE IF NOT EXISTS public.education_updates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    authority VARCHAR(255) NOT NULL,
    item_type VARCHAR(50) DEFAULT 'Scholarship' CHECK (item_type IN ('Scholarship', 'Learning Resource', 'Exam')),
    level VARCHAR(100),
    benefit_or_amount TEXT,
    last_date VARCHAR(100),
    eligibility TEXT,
    official_url TEXT NOT NULL,
    verified_at VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. SAVED BOOKMARKS
CREATE TABLE IF NOT EXISTS public.saved_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    item_type VARCHAR(50) NOT NULL CHECK (item_type IN ('scheme', 'job', 'education')),
    item_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, item_type, item_id)
);

-- 8. AUTOMATED INGESTION REVIEW QUEUE
CREATE TABLE IF NOT EXISTS public.admin_review_queue (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_url TEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    extracted_data JSONB NOT NULL,
    confidence_score INT CHECK (confidence_score >= 0 AND confidence_score <= 100),
    date_detected VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Approved', 'Rejected')),
    diff_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. IMMUTABLE AUDIT LOGS
CREATE TABLE IF NOT EXISTS public.admin_audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor VARCHAR(150) NOT NULL,
    action VARCHAR(100) NOT NULL,
    target VARCHAR(255) NOT NULL,
    details TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- INDEXES FOR PERFORMANCE & FULL-TEXT SEARCH
-- ====================================================================
CREATE INDEX IF NOT EXISTS idx_schemes_govt_level ON public.schemes(government_level);
CREATE INDEX IF NOT EXISTS idx_schemes_state ON public.schemes(state);
CREATE INDEX IF NOT EXISTS idx_schemes_category ON public.schemes(category);
CREATE INDEX IF NOT EXISTS idx_schemes_status ON public.schemes(status);
CREATE INDEX IF NOT EXISTS idx_jobs_sector ON public.job_notifications(sector);
CREATE INDEX IF NOT EXISTS idx_saved_user ON public.saved_items(user_id);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE public.schemes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_review_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;

-- Public can read all published schemes, jobs, and education
CREATE POLICY "Public Read Schemes" ON public.schemes FOR SELECT USING (true);
CREATE POLICY "Public Read Jobs" ON public.job_notifications FOR SELECT USING (true);
CREATE POLICY "Public Read Education" ON public.education_updates FOR SELECT USING (true);

-- Users can only read and modify their own profile and saved items
CREATE POLICY "Users Read Own Profile" ON public.user_profiles
    FOR SELECT USING (auth.uid() = user_id OR role = 'admin');

CREATE POLICY "Users Update Own Profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users Manage Own Bookmarks" ON public.saved_items
    FOR ALL USING (user_id IN (SELECT id FROM public.user_profiles WHERE user_id = auth.uid()));

-- Only Admins can access review queue and audit logs
CREATE POLICY "Admin Review Queue Access" ON public.admin_review_queue
    FOR ALL USING (EXISTS (SELECT 1 FROM public.user_profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admin Audit Logs Access" ON public.admin_audit_logs
    FOR ALL USING (EXISTS (SELECT 1 FROM public.user_profiles WHERE user_id = auth.uid() AND role = 'admin'));
