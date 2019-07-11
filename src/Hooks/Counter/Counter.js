import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '../../context';

export const Counter = () => {
    let [increment, setIncrement] = useState(1);
    let [counter, incrementer] = useIncrementer(0,increment);
    let theme = useContext(ThemeContext);
    
    useEffect(() => {
        window.document.title = counter;
    },[counter])
    

    const handleIncrementChange = (e) => {
        setIncrement(parseInt(e.target.value));
    }

    return (
        <section className={theme}>
            <p>{counter}</p>
            <button onClick={incrementer}>Increment</button>
            <input type="number"
                value={increment}
                onChange={handleIncrementChange}/>
        </section>
    )
}

export default Counter;

//---------------

const useIncrementer = (initialValue, increment) => {
    let [value, setValue] = useState(initialValue);

    const incrementer = () => {
        setValue(value + increment);
    }

    return [value, incrementer];
}