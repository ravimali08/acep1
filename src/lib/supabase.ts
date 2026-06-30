import { createClient } from '@supabase/supabase-js';

// Get these values from Vite environment variables if available, otherwise use fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zqwkqpubuwlqisislhom.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxd2txcHVidXdscWlzaXNsaG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3ODM0ODYsImV4cCI6MjA5ODM1OTQ4Nn0.B-1CCT0zMU0DkDkv3RAshDDJlER-dpkBRhYj4INHcPI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
