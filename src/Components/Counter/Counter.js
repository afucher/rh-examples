import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        };
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return <>
            <button onClick={this.handleClick}>Increment</button>
            <p>{this.state.counter}</p>
        </>
    }
}