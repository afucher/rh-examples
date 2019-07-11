import React from 'react';
import ThemeContext from '../../context';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            increment: 1
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleIncrementChange = this.handleIncrementChange.bind(this);
    }

    componentDidMount() {
        window.document.title = this.state.counter;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.counter === this.state.counter) return;
        window.document.title = this.state.counter;
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter + this.state.increment
        })
    }

    handleIncrementChange(e) {
        this.setState({
            increment: parseInt(e.target.value)
        })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => 
                    <section className={theme}>
                        <p>{this.state.counter}</p>
                        <button onClick={this.handleIncrement}>Increment</button>
                        <input type="number" 
                            value={this.state.increment}
                            onChange={this.handleIncrementChange}/>
                    </section>
                }
            </ThemeContext.Consumer>
        )
    }
}

export default Counter;