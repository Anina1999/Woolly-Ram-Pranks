import { createClient } from '@supabase/supabase-js';

import largeSecureStore from './largeSecureStore';

const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL,
    process.env.EXPO_PUBLIC_SUPABASE_KEY,
    {
        auth: {
            storage: largeSecureStore,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    },
);

export default supabase;
