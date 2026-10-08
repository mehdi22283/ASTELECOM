// 1) Supabase → Project Settings → API: URL və anon key-i bura yazın
const SUPABASE_URL = "https://xbharaexhgxaxkdtzvaj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiaGFyYWV4aGd4YXhrZHR6dmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0ODM1MjksImV4cCI6MjEwNzA1OTUyOX0.HJwVMTByelMZHN0t4CqaokLPvYbswLDomYkeJ6yb01U";
const WHATSAPP = "994557896746"; // sizin WhatsApp nömrəniz (+ olmadan)
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt = p => { const d = String(p).replace(/\D/g, ""); return d.length == 10 ? `${d.slice(0,3)} ${d.slice(3,6)} ${d.slice(6,8)} ${d.slice(8)}` : d; };
