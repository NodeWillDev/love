import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  'https://xhjkyyxsvwijtwjbtggn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhoamt5eXhzdndpanR3amJ0Z2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzE4MTgsImV4cCI6MjA3MTEwNzgxOH0.R8dda_KZU1-VVO4R7tG4UH4ICJdBjyvNbwvUKVKiUyo',
);
