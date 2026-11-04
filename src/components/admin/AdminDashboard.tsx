import React, { useState } from 'react';
import { X, Shield, Plus, Check, Trash2, Edit3, ExternalLink, Activity, FileText, Database, AlertCircle, RefreshCw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Scheme } from '../../types';

export const AdminDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { schemes, jobs, reviewQueue, approveQueueItem, rejectQueueItem, addNewScheme, auditLogs } = useApp();

  const [activeTab, setActiveTab] = useState<'kpi' | 'queue' | 'schemes' | 'sources' | 'logs'>('queue');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Scheme Form State
  const [newSchemeName, setNewSchemeName] = useState('');
  const [newDept, setNewDept] = useState('');
  const [newCategory, setNewCategory] = useState<'Agriculture' | 'Education' | 'Women' | 'Healthcare' | 'Housing'>('Agriculture');
  const [newGovtLevel, setNewGovtLevel] = useState<'Central' | 'State'>('Central');
  const [newState, setNewState] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newBenefits, setNewBenefits] = useState('');
  const [newOfficialUrl, setNewOfficialUrl] = useState('');

  const handleCreateScheme = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSchemeName || !newOfficialUrl) return;

    const created: Scheme = {
      id: 'scheme_' + Date.now(),
      slug: newSchemeName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: newSchemeName,
      officialName: newSchemeName,
      department: newDept || 'Government Department',
      governmentLevel: newGovtLevel,
      state: newGovtLevel === 'State' ? newState || 'Andhra Pradesh' : undefined,
      category: newCategory,
      summary: newSummary || 'Government welfare initiative providing benefits to eligible citizens.',
      benefits: newBenefits || 'Direct financial assistance or subsidy support.',
      targetAudience: ['All Eligible Citizens'],
      eligibilityCriteria: ['Must be an Indian citizen meeting category income norms.'],
      requiredDocuments: [{ name: 'Aadhaar Card', mandatory: true }],
      applicationProcedure: ['Apply online on the official department portal.'],
      status: 'Active',
      officialUrl: newOfficialUrl,
      sourceUrl: newOfficialUrl,
      verifiedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      tags: ['#GovernmentScheme', `#${newCategory}`]
    };

    addNewScheme(created);
    setShowAddModal(false);
    // Reset
    setNewSchemeName('');
    setNewDept('');
    setNewOfficialUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
      <div className="w-full max-w-2xl max-h-[92vh] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-amber-950 dark:text-amber-200">
                SchemeSathi Editorial & Ingestion Control
              </h3>
              <p className="text-[10px] text-amber-700 dark:text-amber-400">
                Authorized Editorial Administrator Console
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-amber-200/50 text-amber-800 dark:text-amber-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-semibold overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('queue')}
            className={`px-4 py-2.5 whitespace-nowrap transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'queue'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 font-bold bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <span>AI Review Queue</span>
            {reviewQueue.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center">
                {reviewQueue.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('schemes')}
            className={`px-4 py-2.5 whitespace-nowrap transition border-b-2 ${
              activeTab === 'schemes'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 font-bold bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Manage Schemes ({schemes.length})
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`px-4 py-2.5 whitespace-nowrap transition border-b-2 ${
              activeTab === 'sources'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 font-bold bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Source Registry
          </button>

          <button
            onClick={() => setActiveTab('logs')}
            className={`px-4 py-2.5 whitespace-nowrap transition border-b-2 ${
              activeTab === 'logs'
                ? 'border-brand-600 text-brand-700 dark:text-brand-400 font-bold bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Audit Logs
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI Review Queue */}
          {activeTab === 'queue' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                    Automated Ingestion Queue
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Candidate notices detected by scheduled crawler pending validation.
                  </p>
                </div>
                <span className="text-xs font-semibold text-brand-700">
                  {reviewQueue.length} Items Pending Review
                </span>
              </div>

              {reviewQueue.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <Check className="w-8 h-8 text-emerald-500 mx-auto mb-1" />
                  <p className="font-bold text-xs text-slate-700 dark:text-slate-300">Queue is clear</p>
                  <p className="text-[11px] text-slate-400">All candidate notifications have been verified and processed.</p>
                </div>
              ) : (
                reviewQueue.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        Confidence: {item.confidenceScore}%
                      </span>
                      <span className="text-[10px] text-slate-400">Detected: {item.dateDetected}</span>
                    </div>

                    <h5 className="font-bold text-xs text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h5>

                    <p className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <strong>Detected Difference:</strong> {item.diffNotes}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <span>Inspect Official Source</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => rejectQueueItem(item.id)}
                          className="px-3 py-1 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => approveQueueItem(item.id)}
                          className="px-3 py-1 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold transition flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve & Publish</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Manage Schemes */}
          {activeTab === 'schemes' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                  Published Schemes Registry ({schemes.length})
                </h4>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-3 py-1.5 rounded-xl bg-brand-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Scheme</span>
                </button>
              </div>

              <div className="space-y-2">
                {schemes.map((s) => (
                  <div
                    key={s.id}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-brand-700 dark:text-brand-400">
                        {s.governmentLevel} Govt • {s.category}
                      </span>
                      <h5 className="font-bold text-slate-900 dark:text-white">{s.name}</h5>
                      <span className="text-[10px] text-slate-400">{s.department}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source Registry */}
          {activeTab === 'sources' && (
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Approved Government Information Sources
              </h4>
              <div className="space-y-2">
                {[
                  { name: 'Press Information Bureau (PIB)', url: 'pib.gov.in', status: 'Healthy', type: 'Daily RSS' },
                  { name: 'PM-KISAN Portal', url: 'pmkisan.gov.in', status: 'Healthy', type: 'Direct Gazette' },
                  { name: 'Ministry of Home Affairs', url: 'mha.gov.in', status: 'Healthy', type: 'Recruitment API' },
                  { name: 'National Scholarship Portal', url: 'scholarships.gov.in', status: 'Healthy', type: 'NSP Sitemaps' },
                  { name: 'Andhra Pradesh State Portal', url: 'ap.gov.in', status: 'Healthy', type: 'State Gazette' },
                  { name: 'Tamil Nadu Government Portal', url: 'tn.gov.in', status: 'Healthy', type: 'State Circulars' }
                ].map((src, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{src.name}</p>
                      <p className="text-[11px] text-slate-500">{src.url} • {src.type}</p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{src.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audit Logs */}
          {activeTab === 'logs' && (
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Administrative Audit Trail (Immutable)
              </h4>
              <div className="space-y-2">
                {auditLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 font-mono text-[11px] space-y-1"
                  >
                    <div className="flex items-center justify-between text-slate-400">
                      <span>{log.timestamp}</span>
                      <span className="font-bold text-brand-700 dark:text-brand-400">{log.action}</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Actor: {log.actor} → Target: {log.target}
                    </p>
                    <p className="text-slate-500">{log.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Add Scheme Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Add Verified Scheme</h4>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateScheme} className="space-y-2.5 text-xs">
                <div>
                  <label className="font-semibold block mb-0.5">Scheme Name</label>
                  <input
                    type="text"
                    required
                    value={newSchemeName}
                    onChange={(e) => setNewSchemeName(e.target.value)}
                    placeholder="e.g. PM Solar Muft Bijli Yojana"
                    className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold block mb-0.5">Govt Level</label>
                    <select
                      value={newGovtLevel}
                      onChange={(e) => setNewGovtLevel(e.target.value as any)}
                      className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      <option value="Central">Central Govt</option>
                      <option value="State">State Govt</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold block mb-0.5">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      <option value="Agriculture">Agriculture</option>
                      <option value="Education">Education</option>
                      <option value="Women">Women</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Housing">Housing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-0.5">Executing Department</label>
                  <input
                    type="text"
                    value={newDept}
                    onChange={(e) => setNewDept(e.target.value)}
                    placeholder="e.g. Ministry of New and Renewable Energy"
                    className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-0.5">Official Destination URL (.gov.in)</label>
                  <input
                    type="url"
                    required
                    value={newOfficialUrl}
                    onChange={(e) => setNewOfficialUrl(e.target.value)}
                    placeholder="https://pmsuryaghar.gov.in"
                    className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-brand-700 text-white font-bold"
                  >
                    Save & Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
