import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://elqewvautxexhbjctaor.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVscWV3dmF1dHhleGhiamN0YW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTgyNjAsImV4cCI6MjA3NzkzNDI2MH0.eK-sKjuUAKPu-fOIuzrZVVnvrnlxx96X5w11_KViyNE"
export const supabase = createClient(supabaseUrl,supabaseKey)