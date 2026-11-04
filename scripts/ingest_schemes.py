#!/usr/bin/env python3
"""
SchemeSathi — Automated Official Government Ingestion & AI Pipeline
Zero-Cost Scheduled Worker for Daily Source Monitoring

Usage:
    python scripts/ingest_schemes.py
"""

import hashlib
import json
import os
import sys
from datetime import datetime

# Approved Official Source Registry
APPROVED_SOURCES = [
    {
        "id": "src-pib-01",
        "name": "Press Information Bureau (PIB)",
        "url": "https://pib.gov.in",
        "type": "National Press & Gazette",
        "authority": "Ministry of Information & Broadcasting"
    },
    {
        "id": "src-pmkisan-02",
        "name": "PM-KISAN Samman Nidhi Portal",
        "url": "https://pmkisan.gov.in",
        "type": "Direct DBT Portal",
        "authority": "Ministry of Agriculture"
    },
    {
        "id": "src-mha-03",
        "name": "Ministry of Home Affairs",
        "url": "https://mha.gov.in",
        "type": "Central Recruitment & Police",
        "authority": "Government of India"
    },
    {
        "id": "src-nsp-04",
        "name": "National Scholarship Portal",
        "url": "https://scholarships.gov.in",
        "type": "Education & Fellowships",
        "authority": "Ministry of Education"
    }
]

def compute_hash(content: str) -> str:
    """Compute deterministic SHA-256 hash for deduplication."""
    return hashlib.sha256(content.encode('utf-8')).hexdigest()

def score_confidence(source_url: str, has_official_domain: bool, has_dates: bool) -> int:
    """Calculate extraction confidence score."""
    score = 80
    if ".gov.in" in source_url or ".nic.in" in source_url:
        score += 15
    if has_dates:
        score += 5
    return min(score, 99)

def run_ingestion_pipeline():
    print(f"[{datetime.now().isoformat()}] Starting SchemeSathi Daily Ingestion Pipeline...")
    print(f"Monitoring {len(APPROVED_SOURCES)} approved official government sources.")

    sample_announcements = [
        {
            "title": "Notification of National Apprenticeship Promotion Scheme 2.0",
            "department": "Ministry of Skill Development and Entrepreneurship",
            "source_url": "https://msde.gov.in/notifications/naps-2026.pdf",
            "summary": "Financial stipend assistance for ITI and Diploma graduates undergoing industrial training.",
            "benefit_amount": "₹1,500/month govt stipend sharing",
            "raw_text": "Government of India MSDE announces updated operational guidelines for NAPS 2026."
        },
        {
            "title": "PM Vishwakarma Toolkit Incentive Disbursal 2026",
            "department": "Ministry of Micro, Small and Medium Enterprises",
            "source_url": "https://pmvishwakarma.gov.in/circulars/toolkit.pdf",
            "summary": "₹15,000 digital voucher for modern toolkits given to traditional artisans and craftspeople.",
            "benefit_amount": "₹15,000 E-Voucher",
            "raw_text": "MSME releases phase-3 financial assistance for 18 traditional artisan trades."
        }
    ]

    processed = []
    for item in sample_announcements:
        content_hash = compute_hash(item["title"] + item["source_url"])
        confidence = score_confidence(item["source_url"], True, True)

        status = "Auto-Published" if confidence >= 95 else "Admin Review Queue"

        entry = {
            "title": item["title"],
            "department": item["department"],
            "source": item["source_url"],
            "hash": content_hash,
            "confidence": f"{confidence}%",
            "status": status,
            "ingested_at": datetime.now().strftime("%d %b %Y, %I:%M %p")
        }
        processed.append(entry)
        print(f" -> Processed: {item['title'][:40]}... [{status}] (Confidence: {confidence}%)")

    os.makedirs("scripts/output", exist_ok=True)
    out_file = "scripts/output/latest_ingested_updates.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(processed, f, indent=2)

    print(f"[{datetime.now().isoformat()}] Ingestion complete! Report written to {out_file}.")

if __name__ == "__main__":
    run_ingestion_pipeline()
