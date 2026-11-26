import getEmailError from './getEmailError';

export const MAX_USERNAME_LENGTH = 16;

const MIN_USERNAME_LENGTH = 3;
const USERNAME_PATTERN = /^[A-Za-z0-9_]+$/;
const SPACE_PATTERN = /\s/;
const MIN_PASSWORD_LENGTH = 8;

export default function validateRegister({ username, email, password, confirmPassword }) {
    const errors = { username: '', email: getEmailError(email), password: '', confirmPassword: '' };
    const trimmedUsername = username.trim();

    if (trimmedUsername === '') {
        errors.username = 'Enter a player name.';
    } else if (SPACE_PATTERN.test(trimmedUsername)) {
        errors.username = "Player name can't contain spaces.";
    } else if (!USERNAME_PATTERN.test(trimmedUsername)) {
        errors.username = 'Use only letters, numbers or _.';
    } else if (trimmedUsername.length < MIN_USERNAME_LENGTH || trimmedUsername.length > MAX_USERNAME_LENGTH) {
        errors.username = `Use ${MIN_USERNAME_LENGTH}–${MAX_USERNAME_LENGTH} characters.`;
    }

    if (SPACE_PATTERN.test(password)) {
        errors.password = "Password can't contain spaces.";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
        errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords don't match.";
    }

    return errors;
}
