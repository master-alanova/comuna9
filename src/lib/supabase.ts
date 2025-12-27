// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.COMUNA9_DB_SUPABASE_URL;
const supabaseKey = import.meta.env.COMUNA9_DB_ASTRO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);