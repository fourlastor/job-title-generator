let fetch = require('imports?self=>{},es6p=es6-promise,Promise=>es6p.Promise!exports?self.fetch!whatwg-fetch');
let d3 = require('d3');
require('./style.css');

var skillLevels = [
    'Junior',
    'Señor',
    'Exhausted',
    'Uber-Experienced',
    'Top',
    'Superior',
    'Confident'
];

var selfCompliments = [
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

var topics = [
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
    var jobTitle = randomJobTitle();

    d3.select('#job-title')
        .transition()
        .style('opacity', 0)
        .transition()
        .style('opacity', 1)
        .text(jobTitle);
}

function randomJobTitle() {
    if (Math.random() > 0.5) {
        return randomWord(skillLevels) + " " + randomWord(selfCompliments) + " of " + randomWord(topics);
    } else {
        return randomWord(skillLevels) + " " + randomWord(topics) + " " + randomWord(selfCompliments);
    }
}

function randomWord(words) {
    var randomIndex = Math.floor(Math.random() * words.length); // from SO, so don't complain if it goes in SO :trollface:
    return words[randomIndex];
}

var retryButton = document.getElementById('retry');
retryButton.addEventListener('click', function (e) {
    e.preventDefault();

    retry();
});
retryButton.addEventListener('animationend', function () {
    retryButton.classList.remove('spinning');
});

document.addEventListener('keyup', function (e) {
    e.preventDefault();

    var ESCAPE_KEY_CODE = 27;
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


fetch('https://api.github.com/repos/fourlastor/job-title-generator/stats/contributors').then(function (res) {
    return res.json();
}).then(function (json) {
    updateContributorsCount(json.length - 1);
});

function updateContributorsCount(count) {
    document.getElementById('contributors-count').innerText = count;
}
