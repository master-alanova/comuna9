import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ngwphrllgeysgnzjbqzr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nd3BocmxsZ2V5c2duempicXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3ODM3NjIsImV4cCI6MjA4MjM1OTc2Mn0.6JCGOX2I85qLSf5Yr9sF0GvFBD0gci79sZEVyvRlMYY";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
