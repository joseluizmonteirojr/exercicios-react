import React, { Component } from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return ([
            <label key="1">{this.state.value}</label>,
            <br key="2" />,
            <input key="3" onChange={this.handleChange} value={this.state.value} />
        ])
    }
}