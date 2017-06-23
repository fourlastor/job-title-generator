import React, {Component} from 'react'
import fetch from 'exports-loader?self.fetch!whatwg-fetch'

export class Contributors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contributorsCount: 'some'
        }
    }

    render() {
        return (
            <a href="https://github.com/fourlastor/job-title-generator" className="contributors">
             Made with <span className="red">&hearts;</span>
             by fourlastor and
             <span id="contributors-count">{this.state.contributorsCount}</span>
             awesome people.
            </a>
        )
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/fourlastor/job-title-generator/stats/contributors').then(res => {
            return res.json();
        }).then(json => {
            this.setState({contributorsCount: json.length})
        });
    }
}
