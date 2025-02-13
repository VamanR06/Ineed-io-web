import type { User as SupabaseUser } from '@supabase/supabase-js';

export interface UserMetadata {
  first_name: string;
  last_name: string;
  timestamp: string;
}

export interface User extends SupabaseUser {
  user_metadata: UserMetadata;
}
