const DIFFICULTY_ORDER = ['easy', 'normal', 'challenging', 'hard', 'expert'];

export default function getNextDifficulty(difficulty, step) {
    const nextIndex = DIFFICULTY_ORDER.indexOf(difficulty) + step;

    if (nextIndex < 0 || nextIndex >= DIFFICULTY_ORDER.length) {
        return difficulty;
    }

    return DIFFICULTY_ORDER[nextIndex];
}
