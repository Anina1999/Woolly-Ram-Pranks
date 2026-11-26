import getEmailError from './getEmailError';

const SPACE_PATTERN = /\s/;
const MIN_PASSWORD_LENGTH = 8;

export default function validateLogin({ email, password }) {
    const errors = { email: getEmailError(email), password: '' };

    if (SPACE_PATTERN.test(password)) {
        errors.password = "Password can't contain spaces.";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
        errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    return errors;
}
