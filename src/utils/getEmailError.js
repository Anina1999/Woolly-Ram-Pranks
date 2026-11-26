const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SPACE_PATTERN = /\s/;

export default function getEmailError(email) {
    const trimmedEmail = email.trim();

    if (trimmedEmail === '') {
        return 'Enter your email address.';
    }

    if (SPACE_PATTERN.test(trimmedEmail)) {
        return "Email can't contain spaces.";
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
        return 'Enter a valid email address.';
    }

    return '';
}
