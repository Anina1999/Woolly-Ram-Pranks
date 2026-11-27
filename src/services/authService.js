import supabase from './supabase';

export async function getSessionUser() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        throw error;
    }

    return data.session ? data.session.user : null;
}

export function onAuthChange(callback) {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
        callback(session ? session.user : null);
    });

    return data.subscription;
}

export function startAutoRefresh() {
    supabase.auth.startAutoRefresh();
}

export function stopAutoRefresh() {
    supabase.auth.stopAutoRefresh();
}

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        throw error;
    }

    return data;
}

export async function signUp({ username, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username },
        },
    });

    if (error) {
        throw error;
    }

    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error;
    }
}
