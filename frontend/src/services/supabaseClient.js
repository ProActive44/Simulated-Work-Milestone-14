
import { createClient } from '@supabase/supabase-js'

let URL = process.env.REACT_APP_SUPABASE_URL
let ANON = process.env.REACT_APP_SUPABASE_ANON

// Create a single supabase client for interacting with your database
export const supabase = createClient(URL, ANON)