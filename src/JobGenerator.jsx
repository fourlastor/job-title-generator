import React, {Component} from 'react'
import {CrossFader} from './CrossFader.jsx'
import { randomJobTitle } from './data.js'
require('./job-transition.css')

export class JobGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitle: randomJobTitle()
        }
    }
    
    render() {
        return (
            <div onKeyUp={this.updateJobTitleKey}>
                <CrossFader className="job-title">{this.state.jobTitle}</CrossFader>
                

                <div className="retry-container">
                    <svg onClick={this.updateJobTitle} className="retry" fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <p className="retry-hint">or press esc to retry</p>
                </div>
            </div>
        )
    }

    updateJobTitle = () => {
        this.setState({
            jobTitle: randomJobTitle()
        })
    }

    updateJobTitleKey = (e) => {
        console.log(e)
        // this.updateJobTitle()
    }
}
