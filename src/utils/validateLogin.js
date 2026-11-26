const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SPACE_PATTERN = /\s/;
const MIN_PASSWORD_LENGTH = 8;

export default function validateLogin({ email, password }) {
    const errors = { email: '', password: '' };
    const trimmedEmail = email.trim();

    if (trimmedEmail === '') {
        errors.email = 'Enter your email address.';
    } else if (SPACE_PATTERN.test(trimmedEmail)) {
        errors.email = "Email can't contain spaces.";
    } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
        errors.email = 'Enter a valid email address.';
    }

    if (SPACE_PATTERN.test(password)) {
        errors.password = "Password can't contain spaces.";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
        errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    return errors;
}
