
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Supabase Project URL and Anon Key
const supabaseUrl = 'https://fsmxmfkydxbqnofsojsq.supabase.co'
const supabaseKey = 'sb_publishable__Z2iWVPqz6Xw947CH_YLUg_YhoLeseh'

export const supabase = createClient(supabaseUrl, supabaseKey)
