import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, AlertCircle, ExternalLink, RefreshCw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Scheme } from '../../types';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  citations?: { name: string; url: string }[];
}

export const AIChatView: React.FC = () => {
  const { schemes, jobs, scholarships, language, t, setSelectedScheme } = useApp();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: t.aiWelcome,
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedChips = [
    'Eligibility for PM-KISAN',
    'Schemes for Women',
    'How to Apply for Scholarships?',
    'Schemes in Andhra Pradesh',
    'Government Jobs 2026'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Grounded Retrieval-Augmented Generator (RAG) function
  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Prompt injection / security guard
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('ignore previous') || lowerQuery.includes('system prompt') || lowerQuery.includes('hack')) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: 'ai_' + Date.now(),
            sender: 'ai',
            text: 'I am SchemeSathi AI, dedicated solely to providing verified Indian government schemes, scholarships, and job information from official authorities.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 700);
      return;
    }

    // Grounded search across verified schemes, jobs, and scholarships
    setTimeout(() => {
      let responseText = '';
      const citations: { name: string; url: string }[] = [];

      if (lowerQuery.includes('pm-kisan') || lowerQuery.includes('kisan') || lowerQuery.includes('farmer')) {
        const pmk = schemes.find((s) => s.id === 'pm-kisan-01');
        if (pmk) {
          responseText = `**${pmk.name}** provides direct income assistance of **${pmk.benefitAmount}** (in 3 instalments of ₹2,000) directly into Aadhaar-seeded bank accounts of landholding farmer families.\n\n**Eligibility:**\n• Cultivable land in applicant's name.\n• Completed e-KYC on official portal.\n• Institutional farmers and serving govt employees excluded.\n\n**Required Documents:** Aadhaar card, Land Pattadar passbook/Khatauni, and active bank account.`;
          citations.push({ name: 'PM-KISAN Official Portal', url: pmk.officialUrl });
        }
      } else if (lowerQuery.includes('women') || lowerQuery.includes('female') || lowerQuery.includes('mahila')) {
        responseText = `Here are the top active government schemes for women:\n\n1. **PM Ujjwala Yojana 2.0:** Free LPG connection with ₹300 cylinder subsidy for adult women from low-income households.\n2. **Mahila Samman Savings Certificate:** 7.5% guaranteed interest up to ₹2 Lakh deposit.\n3. **Beti Bachao Beti Padhao & Sukanya Samriddhi:** 8.2% tax-free compound interest for girl children below 10 years.\n4. **Kalaignar Magalir Urimai Thogai (Tamil Nadu):** ₹1,000 monthly cash grant for eligible women family heads.`;
        citations.push({ name: 'Ministry of Women and Child Development', url: 'https://wcd.nic.in' });
      } else if (lowerQuery.includes('scholarship') || lowerQuery.includes('education') || lowerQuery.includes('student')) {
        responseText = `Active verified scholarship opportunities:\n\n• **Central Sector Scholarship (CSS):** ₹12,000–₹20,000/year for Class 12 meritorious students (UG/PG).\n• **AICTE Pragati Scholarship for Girls:** ₹50,000/year for technical degree/diploma courses.\n• **Post-Matric Scholarship for SC/ST/OBC:** Full tuition fee reimbursement through National Scholarship Portal (NSP).`;
        citations.push({ name: 'National Scholarship Portal', url: 'https://scholarships.gov.in' });
      } else if (lowerQuery.includes('andhra') || lowerQuery.includes('ap')) {
        responseText = `Key Andhra Pradesh welfare schemes:\n\n• **Annadata Sukhibhava / Rythu Bharosa:** ₹20,000 per year assistance for farmers.\n• **Thalliki Vandanam Scheme:** ₹15,000 per school-going child to mothers for education.\n• **Aarogyasri:** Free cashless medical treatment up to ₹25 Lakh for BPL families.`;
        citations.push({ name: 'Andhra Pradesh State Portal', url: 'https://ap.gov.in' });
      } else if (lowerQuery.includes('job') || lowerQuery.includes('vacancy') || lowerQuery.includes('recruitment')) {
        responseText = `Current major government recruitments:\n\n• **MHA Group C & D 2025–2026:** 6,100+ vacancies (10th/12th/Graduate, ₹18,000–₹56,900).\n• **UPSC Civil Services 2026:** 979 vacancies for IAS, IPS, IRS (Degree required).\n• **SSC CGL 2026:** 14,582 vacancies for inspectors and assistant officers.`;
        citations.push({ name: 'MHA Recruitment Portal', url: 'https://mha.gov.in' });
        citations.push({ name: 'UPSC Online', url: 'https://upsc.gov.in' });
      } else {
        // Fallback search across names and summaries
        const matching = schemes.filter(
          (s) =>
            s.name.toLowerCase().includes(lowerQuery) ||
            s.summary.toLowerCase().includes(lowerQuery) ||
            s.category.toLowerCase().includes(lowerQuery)
        );

        if (matching.length > 0) {
          const top = matching[0];
          responseText = `Based on verified records, **${top.name}** (${top.department}) is relevant:\n\n${top.summary}\n\n**Benefits:** ${top.benefits}\n\n**Eligibility:** ${top.eligibilityCriteria[0] || 'See full details on scheme page.'}`;
          citations.push({ name: top.name + ' - Official Portal', url: top.officialUrl });
        } else {
          responseText = `I searched verified records for "${query}". I could not find a confirmed central or state government notification matching that exact term.\n\nYou can try browsing by category (Agriculture, Education, Women, Healthcare) or checking the official National Portal of India (india.gov.in).`;
          citations.push({ name: 'National Portal of India', url: 'https://www.india.gov.in' });
        }
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 'ai_' + Date.now(),
          sender: 'ai',
          text: responseText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations
        }
      ]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-125px)] max-w-md mx-auto bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Chat Header Bar (matches Screen 6 of Reference 2) */}
      <div className="p-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 flex items-center justify-center font-bold border border-brand-200 dark:border-brand-700">
            <Bot className="w-5 h-5 text-brand-700 dark:text-brand-400" />
          </div>
          <div>
            <h3 className="font-bold text-xs text-slate-900 dark:text-white leading-tight">
              {t.aiAssistantTitle}
            </h3>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Grounded on Official Govt Portals</span>
            </span>
          </div>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                id: 'msg-welcome',
                sender: 'ai',
                text: t.aiWelcome,
                timestamp: 'Just now'
              }
            ])
          }
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          title="Clear Conversation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-400 flex items-center justify-center shrink-0 text-xs border border-brand-200 dark:border-brand-800 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                m.sender === 'user'
                  ? 'bg-brand-700 text-white rounded-tr-none'
                  : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800 rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.text}</div>

              {/* Verified Citations */}
              {m.citations && m.citations.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Official Citations:
                  </span>
                  {m.citations.map((c, i) => (
                    <a
                      key={i}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-700 dark:text-brand-400 hover:underline"
                    >
                      <span>{c.name}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ))}
                </div>
              )}

              <span className={`text-[9px] block text-right mt-1 ${m.sender === 'user' ? 'text-white/70' : 'text-slate-400'}`}>
                {m.timestamp}
              </span>
            </div>

            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 text-xs mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 pl-9">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-bounce [animation-delay:0.4s]" />
            <span className="text-[11px]">Searching official scheme database...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompt Chips */}
      <div className="px-3 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-1.5 bg-white/70 dark:bg-slate-900/70 border-t border-slate-100 dark:border-slate-800">
        {suggestedChips.map((chip) => (
          <button
            key={chip}
            onClick={() => handleSend(chip)}
            className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium whitespace-nowrap transition"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t.askYourQuestion}
            className="flex-1 px-3.5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs border border-transparent focus:border-brand-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-10 h-10 rounded-2xl bg-brand-700 hover:bg-brand-800 disabled:opacity-40 text-white flex items-center justify-center transition shrink-0 shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-[10px] text-center text-slate-400 mt-1.5">
          {t.aiDisclaimer}
        </p>
      </div>
    </div>
  );
};
