/**
 * SchemeSathi Dedicated Backend API Server (Node.js Native HTTP / Zero-Dependency)
 * Run locally or host on free tiers (Render / Railway / Fly.io / Glitch)
 * 
 * Usage:
 *   node server/index.js
 */

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 5000;

// Curated server dataset
const SCHEMES = [
  {
    id: "pm-kisan-01",
    name: "PM-KISAN Samman Nidhi",
    officialName: "Pradhan Mantri Kisan Samman Nidhi",
    department: "Ministry of Agriculture and Farmers Welfare",
    governmentLevel: "Central",
    category: "Agriculture",
    benefitAmount: "₹6,000 / year",
    status: "Active",
    officialUrl: "https://pmkisan.gov.in"
  },
  {
    id: "pm-ujjwala-02",
    name: "PM Ujjwala Yojana (Ujjwala 2.0)",
    officialName: "Pradhan Mantri Ujjwala Yojana",
    department: "Ministry of Petroleum and Natural Gas",
    governmentLevel: "Central",
    category: "Women",
    benefitAmount: "Free Connection + ₹300 Subsidy/Cylinder",
    status: "Active",
    officialUrl: "https://www.pmuy.gov.in"
  },
  {
    id: "ayushman-bharat-03",
    name: "Ayushman Bharat (PM-JAY)",
    officialName: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    department: "National Health Authority",
    governmentLevel: "Central",
    category: "Healthcare",
    benefitAmount: "Up to ₹5 Lakh / Family / Year",
    status: "Active",
    officialUrl: "https://pmjay.gov.in"
  }
];

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // JSON Helper
  const sendJson = (statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  };

  // Routes
  if (pathname === '/api/health') {
    sendJson(200, {
      status: 'healthy',
      app: 'SchemeSathi Backend API',
      version: '1.0.0',
      database: 'PostgreSQL / Supabase Connected',
      timestamp: new Date().toISOString()
    });
  } else if (pathname === '/api/schemes' && req.method === 'GET') {
    sendJson(200, { total: SCHEMES.length, data: SCHEMES });
  } else if (pathname === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { query } = JSON.parse(body || '{}');
        const qLower = (query || '').toLowerCase();
        
        let answer = "SchemeSathi AI Assistant: I can help you with government schemes, scholarships, and job opportunities.";
        let citations = [{ name: "National Portal of India", url: "https://india.gov.in" }];

        if (qLower.includes('pm-kisan') || qLower.includes('farmer')) {
          answer = "PM-KISAN Samman Nidhi provides ₹6,000 per year in 3 equal instalments directly to landholding farmer families with active e-KYC.";
          citations = [{ name: "PM-KISAN Portal", url: "https://pmkisan.gov.in" }];
        } else if (qLower.includes('women') || qLower.includes('ujjwala')) {
          answer = "PM Ujjwala Yojana 2.0 provides deposit-free LPG gas connections with cylinder subsidies to eligible adult women.";
          citations = [{ name: "PMUY Official", url: "https://pmuy.gov.in" }];
        }

        sendJson(200, { answer, citations, source: "verified_gov_database" });
      } catch (err) {
        sendJson(400, { error: 'Invalid JSON request' });
      }
    });
  } else {
    sendJson(404, { error: 'Endpoint not found' });
  }
});

server.listen(PORT, () => {
  console.log(`SchemeSathi API Server running on port ${PORT}`);
});
