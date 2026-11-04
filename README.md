# SchemeSathi (స్కీమ్‌సాథి / स्कीमसाथी)

> **Government Schemes • Jobs • Your Rights**  
> *Discover. Apply. Grow.*  
> **Mobile-First Android APK + Responsive Web & Download Portal (Strictly ₹0 Budget)**

---

## 1. Overview
**SchemeSathi** is an independent citizen empowerment platform designed for all Indian citizens (students, farmers, women, job seekers, senior citizens, and small business owners). It brings verified government welfare schemes, scholarships, and job recruitment notifications into a clean social-card feed with highlighted facts, eligibility checklists, and direct official application links (`.gov.in`).

---

## 2. Key Features (Matching Reference Designs)

1. **Social Feed Post Cards (Screen 1):**
   - Verified publisher badges (e.g. Ministry of Home Affairs, Ministry of Agriculture).
   - High-contrast banner with verified highlight badges (Vacancies, Salary, Qualification, Location).
   - Social engagement row (Like, Comment, WhatsApp Share, Bookmark ribbon).
   - Actionable official card: *"View Official Notification & Apply"* directly to verified government domains.
   - **Zero music or song audio rows.**

2. **Dedicated Categories & Portals:**
   - **Government Jobs Hub (Screen 2):** Latest UPSC, SSC, Railways, Banking, Defence, and State PSC notifications with application deadlines.
   - **Schemes Catalog (Screen 3):** PM-KISAN, PM Ujjwala, Ayushman Bharat, PM Awas, Annadata Sukhibhava, and Kalaignar Magalir Urimai.
   - **Education & Scholarships (Screen 4):** Central Sector Scholarship (CSS), Pragati scholarship, SWAYAM/DIKSHA study resources, GATE/UPSC/SSC exam calendars.
   - **Farmers & Women Welfare (Screens 1 & 2 in Ref 2):** Subsidized crop loans (KCC), PM-KISAN DBT, Mahila Samman Savings, Beti Bachao Beti Padhao.

3. **Neutral Government & Political Administration Filter:**
   - Filter by State (Andhra Pradesh, Tamil Nadu, Telangana, UP, etc.) and governing tenure (TDP, YSRCP, JSP, DMK, AIADMK, TVK, BJP/NDA, Congress/UPA).
   - Factually grounded: separates official state departments from political party election manifestos with strict neutrality disclaimers.

4. **3-Step Indicative Eligibility Checker:**
   - Simple 60-second wizard evaluating state, age, occupation, gender, and income.
   - Explainable results (Meets / Unknown / Excluded) with official authority disclaimer.

5. **SchemeSathi AI Assistant (Grounded RAG Chatbot):**
   - Grounded strictly on verified government schemes database.
   - Multilingual support for English, Telugu, Hindi, Tamil, and Kannada.
   - Built-in prompt injection defense and direct official portal citations.

6. **Admin Dashboard & Automated Ingestion:**
   - Review queue for candidate notices detected by the scheduled ingestion crawler.
   - Scheme CRUD management and immutable audit logs.
   - Automated ingestion worker in `scripts/ingest_schemes.py`.

7. **Public Web Portal & APK Download Page (Ref 4):**
   - Responsive landing page featuring direct Android APK download (`SchemeSathi-v1.0.0.apk`), checksums, trust badges (*Safe • Secure • Official Source*), and sideloading installation guide.

---

## 3. Technology Stack (Strictly ₹0 Budget)

- **Frontend & Mobile UI:** React 18, TypeScript, Tailwind CSS, Lucide Icons.
- **Android Native Container:** Capacitor 6 (generates standard Android Studio project and release `.apk`).
- **Data & State Management:** Context API with local storage persistence and mock cloud sync.
- **AI & Ingestion Engine:** Python / Node script with SHA-256 content deduplication and confidence scoring.

---

## 4. Getting Started

### Prerequisites:
- Node.js (v18+) and npm
- Python 3.8+ (for ingestion worker)
- Android Studio / JDK (optional, for native APK generation)

### Installation:
```bash
npm install
```

### Run Local Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Production Assets:
```bash
npm run build
```

### Run Automated Government Ingestion Pipeline:
```bash
python scripts/ingest_schemes.py
```

### Sync to Android Project (Capacitor):
```bash
npx cap sync android
```
To open in Android Studio:
```bash
npx cap open android
```
Or build the APK via Gradle:
```bash
cd android && ./gradlew assembleDebug
```

---

## 5. Security & Privacy Mandate
- **Zero Aadhaar or ID Collection:** The app never collects, stores, or uploads Aadhaar numbers, PAN, bank passwords, or identity documents.
- **Guest Browsing First:** All public feeds, search, filters, and eligibility tools are accessible without registration.
- **Authority First:** SchemeSathi is an independent information platform; all critical details cite verified official `.gov.in` sources.
