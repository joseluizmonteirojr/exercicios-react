import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }

    sum(delta) {
        this.setState({ value: this.state.value + delta });
    }

    render() {
        return ([
            <h1 key="1">{this.props.label}</h1>,
            <h2 key="2">{this.state.value}</h2>,
            <button key="3" onClick={() => this.sum(1)}>Plus</button>,
            <button key="4" onClick={() => this.sum(-1)}>Less</button>
        ]);
    }
}