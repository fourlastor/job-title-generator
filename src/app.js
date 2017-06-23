const fetch = require('exports-loader?self.fetch!whatwg-fetch');
const d3 = require('d3');
require('./style.css');

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

function updateJobTitle() {
    const jobTitle = randomJobTitle();

    d3.select('#job-title')
        .transition()
        .style('opacity', 0)
        .transition()
        .style('opacity', 1)
        .text(jobTitle);
}

function randomJobTitle() {
    if (Math.random() > 0.5) {
        return `${randomWord(skillLevels)} ${randomWord(selfCompliments)} of ${randomWord(topics)}`;
    } else {
        return `${randomWord(skillLevels)} ${randomWord(topics)} ${randomWord(selfCompliments)}`;
    }
}

function randomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length); // from SO, so don't complain if it goes in SO :trollface:
    return words[randomIndex];
}

const retryButton = document.getElementById('retry');
retryButton.addEventListener('click', e =>   {
    e.preventDefault();

    retry();
});
retryButton.addEventListener('animationend', () => {
    retryButton.classList.remove('spinning');
});

document.addEventListener('keyup', e => {
    e.preventDefault();

    const ESCAPE_KEY_CODE = 27;
    if (e.keyCode !== ESCAPE_KEY_CODE) {
        return;
    }

    retry();
});

function retry() {
    retryButton.classList.add('spinning');

    updateJobTitle();
}

updateJobTitle();


fetch('https://api.github.com/repos/fourlastor/job-title-generator/stats/contributors').then(res => {
    return res.json();
}).then(json => {
    updateContributorsCount(json.length - 1);
});

function updateContributorsCount(count) {
    document.getElementById('contributors-count').innerText = count;
}
