const DIFFICULTIES = {
    easy: { name: 'Easy', dot: '#3C8C35', text: '#24601F' },
    normal: { name: 'Normal', dot: '#3B7DDD', text: '#1F4F99' },
    challenging: { name: 'Challenging', dot: '#E0A21F', text: '#7A5300' },
    hard: { name: 'Hard', dot: '#E0702A', text: '#9A3F0B' },
    expert: { name: 'Expert', dot: '#C8352B', text: '#9E2219' },
};

export default function getDifficulty(difficulty) {
    return DIFFICULTIES[difficulty];
}
