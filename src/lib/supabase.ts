import { createClient } from '@supabase/supabase-js';

// Environment variables (from .env or hosting provider)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Detect if real Supabase credentials are configured
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co'
);

// Create Supabase client instance (or dummy safe client when unconfigured)
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Fetch schemes from Supabase if configured, or return null to trigger local fallback.
 */
export async function fetchLiveSchemes() {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('schemes')
      .select('*')
      .eq('status', 'Active');
    if (error) {
      console.warn('Supabase fetch error, using local fallback:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('Network error reaching Supabase, using local verified cache.');
    return null;
  }
}
