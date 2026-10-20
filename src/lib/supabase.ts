import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn('Motion House Supabase environment variables are not configured.');
}

export const supabase = createClient(
  supabaseUrl || 'https://hnexfqktfqjbbitgfoze.supabase.co',
  supabasePublishableKey || 'sb_publishable_ImEK8K2lNZAuF3BQUpa1_A_NPxrS9Pv'
);
