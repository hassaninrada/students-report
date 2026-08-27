
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://zmuqmyvfgnncabmtegga.supabase.co'
const supabaseKey = 'sb_publishable_S5hNLJj9zcsQmznAQimzxQ_z3VjwZGz'

export const supabase = createClient(supabaseUrl, supabaseKey)
