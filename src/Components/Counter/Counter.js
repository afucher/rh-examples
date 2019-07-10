import React from 'react';
import ThemeContext from '../../context';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            increment : 1
        };
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + this.state.increment
        });
    }

    handleIncrementChange = (e) => {
        this.setState({
            increment: parseInt(e.target.value)
        })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <section className={theme}>
                        <p>{this.state.counter}</p>
                        <button onClick={this.handleClick}>Increment</button>
                        <input type="number" value={this.state.increment} onChange={this.handleIncrementChange}/>
                    </section>
                )}
                
            </ThemeContext.Consumer>
        )
    }
}