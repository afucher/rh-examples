import React, { useState} from 'react';

export const Counter = () => {
    let [counter, incrementer] = useIncrementer(1,2);

    return <>
        <button onClick={incrementer}>Increment</button>
        <p>{counter}</p>
    </>
}




const useIncrementer = (defaultValue, increment=1) => {
    let [counter, setCounter] = useState(defaultValue);

    const incrementer = () => setCounter(counter+increment);

    return [counter, incrementer]
}