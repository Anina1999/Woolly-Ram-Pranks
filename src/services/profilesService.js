import supabase from './supabase';

export async function getProfileByUsername(username) {
    const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('username', username)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function isUsernameTaken(username) {
    // In ilike _ means "any character", so it is escaped to match only a real _
    const pattern = username.replace(/_/g, '\\_');

    const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .ilike('username', pattern)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return data !== null;
}
