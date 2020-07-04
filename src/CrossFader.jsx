import React, {Component} from 'react'
import * as d3 from 'd3'

export class CrossFader extends Component {
    render() {
        return (
            <span ref={span => this.span = span} {...this.props} />
        )
    }

    shouldComponentUpdate() {
        return false
    }

    componentWillReceiveProps(newProps) {
        if (!this.span) {
            return
        }

        d3.select(this.span)
            .transition()
            .style('opacity', 0)
            .transition()
            .style('opacity', 1)
            .text(newProps.children);
    }
}
