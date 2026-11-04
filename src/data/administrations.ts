export interface StateOption {
  code: string;
  name: string;
  parties: string[];
}

export const INDIAN_STATES_AND_UT: StateOption[] = [
  { code: 'ALL', name: 'All India / Central Govt', parties: ['NDA (BJP)', 'UPA / INDIA (INC)', 'CPI', 'CPI(M)'] },
  { code: 'AP', name: 'Andhra Pradesh', parties: ['TDP', 'YSRCP', 'JSP (Jana Sena)'] },
  { code: 'TN', name: 'Tamil Nadu', parties: ['DMK', 'AIADMK', 'TVK'] },
  { code: 'TG', name: 'Telangana', parties: ['Congress (INC)', 'BRS', 'BJP'] },
  { code: 'UP', name: 'Uttar Pradesh', parties: ['BJP', 'Samajwadi Party (SP)', 'BSP'] },
  { code: 'KA', name: 'Karnataka', parties: ['Congress (INC)', 'BJP', 'JD(S)'] },
  { code: 'MH', name: 'Maharashtra', parties: ['Mahayuti (BJP/Shiv Sena/NCP)', 'MVA (Congress/SS-UBT/NCP-SP)'] },
  { code: 'KL', name: 'Kerala', parties: ['LDF (CPI-M)', 'UDF (Congress)'] },
  { code: 'WB', name: 'West Bengal', parties: ['TMC (Trinamool Congress)', 'BJP', 'Left Front'] },
  { code: 'DL', name: 'Delhi', parties: ['AAP (Aam Aadmi Party)', 'BJP', 'Congress'] },
  { code: 'GJ', name: 'Gujarat', parties: ['BJP', 'Congress', 'AAP'] },
  { code: 'RJ', name: 'Rajasthan', parties: ['BJP', 'Congress'] },
  { code: 'MP', name: 'Madhya Pradesh', parties: ['BJP', 'Congress'] },
  { code: 'PB', name: 'Punjab', parties: ['AAP', 'Congress', 'SAD', 'BJP'] },
  { code: 'BR', name: 'Bihar', parties: ['JDU', 'RJD', 'BJP', 'Congress'] },
  { code: 'OD', name: 'Odisha', parties: ['BJP', 'BJD', 'Congress'] },
  { code: 'AS', name: 'Assam', parties: ['BJP', 'Congress', 'AGP', 'AIUDF'] }
];

export const POLITICAL_FILTER_DISCLAIMER =
  "Neutrality Disclaimer: Public welfare schemes are funded by citizen tax revenues and administered by official Government Departments, not political entities. Governing tenure tags are provided for factual historical reference and categorization.";
