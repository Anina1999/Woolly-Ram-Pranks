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
    const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('username', username)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return data !== null;
}
