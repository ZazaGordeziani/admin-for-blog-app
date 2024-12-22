import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseServiceRole = import.meta.env.VITE_SUPABASE_SERVICE_ROLE;

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseServiceRole
);
// supabase.from("");
// npx supabase gen types typescript --project-id enlliustgmqovaynrnhr --schema public > src/supabase/supabase.types.ts
