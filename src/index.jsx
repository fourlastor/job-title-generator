const d3 = require('d3');
require('./style.css');

import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App.jsx'
import {randomJobTitle} from './data.js'

function updateJobTitle() {
    const jobTitle = randomJobTitle();

    d3.select('#job-title')
        .transition()
        .style('opacity', 0)
        .transition()
        .style('opacity', 1)
        .text(jobTitle);
}

// const retryButton = document.getElementById('retry');
// retryButton.addEventListener('click', e =>   {
//     e.preventDefault();

//     retry();
// });
// retryButton.addEventListener('animationend', () => {
//     retryButton.classList.remove('spinning');
// });

// document.addEventListener('keyup', e => {
//     e.preventDefault();

//     const ESCAPE_KEY_CODE = 27;
//     if (e.keyCode !== ESCAPE_KEY_CODE) {
//         return;
//     }

//     retry();
// });

// function retry() {
//     retryButton.classList.add('spinning');

//     updateJobTitle();
// }

updateJobTitle();

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
