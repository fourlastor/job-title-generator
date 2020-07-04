const skillLevels = [
    'Junior',
    'Señor',
    'Exhausted',
    'Uber-Experienced',
    'Top',
    'Superior',
    'Confident'
];

const selfCompliments = [
    'Expert',
    'Grand Master',
    'Master',
    'Senior',
    'Ninja',
    'Masher',
    'Guardian',
    'Craftsman',
    'Brewer',
    'Lead',
    'Principal',
    'BDFL',
    'Magician',
    'Engineer',
    'Coder',
    'Craftswoman',
    'Sculptor',
    'Tech Manager',
    'Jedi',
    'Guru',
    'Hacker',
    'Craftsperson',
    'Champion',
    'Evangelist',
    'Advocate',
    'Pusher',
    'Sherpa',
    'Leader',
    'Captain',
    'Artist',
    'Director',
    'Artisan',
    'Keeper',
    'Evangelist',
    'Virtuoso',
    'Mentor'
];

const topics = [
    'PHP',
    'Whisky', // hi mark
    'Java',
    'Android',
    'Keyboard',
    'Computers',
    'iOS',
    'Ruby on Rails',
    'SCRUM',
    'documenthypeWordHere',
    'Node.js',
    'Swift',
    'Pixel',
    'Full stack',
    'Scalable partnerships',
    'Developer Relations',
    'Haskell',
    'Erlang',
    'Cloud',
    'Satisfaction Design',
    'NoSQL',
    'Kanban',
    'Kotlin',
    'Creative Code',
    'Machine Learning',
    'Data Visualisation',
    'Big Data',
    'Reactive Programming',
    'Scala',
    'Agile'
];

export const randomJobTitle = () => {
    if (Math.random() > 0.5) {
        return `${randomWord(skillLevels)} ${randomWord(selfCompliments)} of ${randomWord(topics)}`;
    } else {
        return `${randomWord(skillLevels)} ${randomWord(topics)} ${randomWord(selfCompliments)}`;
    }
}

const randomWord = (words) => {
    const randomIndex = Math.floor(Math.random() * words.length); // from SO, so don't complain if it goes in SO :trollface:
    return words[randomIndex];
}
