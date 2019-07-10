import React, { useState, useContext} from 'react';
import ThemeContext from '../../context';

export const Counter = () => {
    let [increment, setIncrement] = useState(1);
    let [counter, incrementer] = useIncrementer(0,increment);
    let theme = useContext(ThemeContext);

    function handleIncrementChange(e) {
        setIncrement(parseInt(e.target.value));
    }

    return <section className={theme}>
        <p>{counter}</p>
        <button onClick={incrementer}>Increment</button>
        <input type="number" value={increment} onChange={handleIncrementChange}/>
    </section>
}




const useIncrementer = (defaultValue, increment=1) => {
    let [counter, setCounter] = useState(defaultValue);

    const incrementer = () => setCounter(counter+increment);

    return [counter, incrementer]
}